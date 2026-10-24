import crypto from "node:crypto";
import { isIP } from "node:net";
import { isRecord } from "./formValidation";

export class ApiRequestError extends Error {
  constructor(public status: number, message: string, public retryAfter?: number) {
    super(message);
  }
}

export const MAX_FORM_BODY_BYTES = 16 * 1024;
const BODY_TIMEOUT_MS = 5000;
const RATE_WINDOW_MS = 10 * 60 * 1000;
const LOCAL_MAX_KEYS = 1000;
const localLimits = new Map<string, { count: number; expiresAt: number }>();

export function isLocalDevelopment() {
  return (process.env.NODE_ENV === "development" || process.env.NODE_ENV === "test") &&
    !process.env.VERCEL && !process.env.VERCEL_ENV;
}

export function getSiteOrigin() {
  try {
    const url = new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://civant.eu");
    const localHttp = isLocalDevelopment() && url.protocol === "http:" &&
      ["localhost", "127.0.0.1", "[::1]"].includes(url.hostname);
    if ((url.protocol !== "https:" && !localHttp) || url.username || url.password ||
      url.search || url.hash || url.pathname !== "/") throw new Error();
    return url.origin;
  } catch {
    throw new ApiRequestError(503, "This service is temporarily unavailable.");
  }
}

export function assertFormOrigin(request: Request) {
  const allowedOrigins = new Set([getSiteOrigin(), "https://civant.eu", "https://www.civant.eu"]);
  if (isLocalDevelopment()) allowedOrigins.add(new URL(request.url).origin);
  const origin = request.headers.get("origin");
  if ((origin && !allowedOrigins.has(origin)) || request.headers.get("sec-fetch-site") === "cross-site") {
    throw new ApiRequestError(403, "This submission is not permitted.");
  }
}

export async function readBoundedJson(request: Request): Promise<unknown> {
  const contentType = request.headers.get("content-type")?.split(";", 1)[0]?.trim().toLowerCase();
  if (contentType !== "application/json" ||
    ![null, "identity"].includes(request.headers.get("content-encoding"))) {
    throw new ApiRequestError(415, "Please submit an uncompressed JSON request.");
  }
  const declaredLength = request.headers.get("content-length");
  if (declaredLength !== null && !/^\d+$/.test(declaredLength)) {
    throw new ApiRequestError(400, "Invalid request length.");
  }
  if (declaredLength !== null && Number(declaredLength) > MAX_FORM_BODY_BYTES) {
    throw new ApiRequestError(413, "This submission is too large.");
  }
  if (!request.body) throw new ApiRequestError(400, "A JSON request body is required.");
  const reader = request.body.getReader();
  const chunks: Uint8Array[] = [];
  let total = 0;
  let timer: ReturnType<typeof setTimeout> | undefined;
  const deadline = new Promise<never>((_, reject) => {
    timer = setTimeout(() => reject(new ApiRequestError(408, "The submission timed out.")), BODY_TIMEOUT_MS);
  });
  try {
    while (true) {
      const { done, value } = await Promise.race([reader.read(), deadline]);
      if (done) break;
      total += value.byteLength;
      if (total > MAX_FORM_BODY_BYTES) throw new ApiRequestError(413, "This submission is too large.");
      chunks.push(value);
    }
    // The streamed byte count, not Content-Length, is the security boundary.
    const bytes = Buffer.concat(chunks, total);
    return JSON.parse(new TextDecoder("utf-8", { fatal: true }).decode(bytes));
  } catch (error) {
    void reader.cancel().catch(() => {});
    if (error instanceof ApiRequestError) throw error;
    throw new ApiRequestError(400, "Please provide valid JSON.");
  } finally {
    clearTimeout(timer);
    reader.releaseLock();
  }
}

export function requireMailApiKey() {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) throw new ApiRequestError(503, "Email delivery is temporarily unavailable. Please try again later.");
  return apiKey;
}

// All counters are checked and incremented in one atomic operation. Denied requests
// create no new keys, and every admitted key expires, bounding stored client data.
const RATE_LIMIT_SCRIPT = `
local retry = 0
for i, key in ipairs(KEYS) do
  local count = tonumber(redis.call('GET', key) or '0')
  if count >= tonumber(ARGV[i + 1]) then
    retry = math.max(retry, redis.call('PTTL', key))
    if retry < 1 then retry = tonumber(ARGV[1]) end
  end
end
if retry > 0 then return {0, retry} end
for _, key in ipairs(KEYS) do
  local count = redis.call('INCR', key)
  if count == 1 then redis.call('PEXPIRE', key, ARGV[1]) end
end
return {1, 0}
`;

function trustedClientAddress(request: Request) {
  // Vercel sets this header at its ingress. Arbitrary XFF/real-IP headers on a
  // self-hosted server are never trusted; those clients share one safe bucket.
  const address = process.env.VERCEL === "1" ? request.headers.get("x-vercel-forwarded-for")?.trim() : null;
  if (!address || !isIP(address)) return "unknown-client";
  if (isIP(address) === 6) {
    // Canonicalize equivalent IPv6 spellings and group by /64 against address rotation.
    const canonical = new URL(`http://[${address}]/`).hostname.slice(1, -1);
    const [head, tail = ""] = canonical.split("::");
    const left = head ? head.split(":") : [];
    const right = tail ? tail.split(":") : [];
    const expanded = canonical.includes("::") ? [...left, ...Array(8 - left.length - right.length).fill("0"), ...right] : left;
    return `${expanded.slice(0, 4).map((part) => part.padStart(4, "0")).join(":")}::/64`;
  }
  return address;
}

function localRateLimit(keys: string[], limits: number[]) {
  const now = Date.now();
  for (const [key, entry] of localLimits) if (entry.expiresAt <= now) localLimits.delete(key);
  let retry = 0;
  for (const [index, key] of keys.entries()) {
    const entry = localLimits.get(key);
    if (entry && entry.count >= limits[index]) retry = Math.max(retry, entry.expiresAt - now);
  }
  if (retry > 0) throw new ApiRequestError(429, "Too many requests. Please try again shortly.", Math.ceil(retry / 1000));
  if (localLimits.size + keys.filter((key) => !localLimits.has(key)).length > LOCAL_MAX_KEYS) {
    throw new ApiRequestError(503, "This service is temporarily unavailable.");
  }
  for (const key of keys) {
    const entry = localLimits.get(key) || { count: 0, expiresAt: now + RATE_WINDOW_MS };
    entry.count += 1;
    localLimits.set(key, entry);
  }
}

export async function enforceFormRateLimit(request: Request, email: string) {
  const hasCustomPair = process.env.RATE_LIMIT_REDIS_REST_URL !== undefined ||
    process.env.RATE_LIMIT_REDIS_REST_TOKEN !== undefined;
  const hasManagedPair = process.env.KV_REST_API_URL !== undefined ||
    process.env.KV_REST_API_TOKEN !== undefined;
  // Keep each provider's URL and token together. An incomplete explicit override
  // must fail closed instead of silently switching to integration credentials.
  const urlValue = hasCustomPair ? process.env.RATE_LIMIT_REDIS_REST_URL : process.env.KV_REST_API_URL;
  const token = hasCustomPair ? process.env.RATE_LIMIT_REDIS_REST_TOKEN : process.env.KV_REST_API_TOKEN;
  const useLocal = isLocalDevelopment() && process.env.RATE_LIMIT_LOCAL_MEMORY === "1" &&
    !hasCustomPair && !hasManagedPair;
  if (!useLocal && (!urlValue || !token)) throw new ApiRequestError(503, "This service is temporarily unavailable.");

  const hash = (value: string) => crypto.createHmac("sha256", token || "local-only").update(value).digest("hex");
  const scope = process.env.VERCEL_ENV === "preview" ? "preview" : "production";
  const prefix = `civant:forms:{${scope}}`;
  const keys = [`${prefix}:global`, `${prefix}:ip:${hash(trustedClientAddress(request))}`, `${prefix}:email:${hash(email)}`];
  // Combined contact/report budget: 100 total, 5/client and 3/recipient per 10 minutes.
  const limits = [100, 5, 3];
  if (useLocal) return localRateLimit(keys, limits);

  try {
    const endpoint = new URL(urlValue!);
    if (endpoint.protocol !== "https:" || endpoint.username || endpoint.password || endpoint.search || endpoint.hash || endpoint.pathname !== "/") throw new Error();
    const response = await fetch(endpoint.origin, {
      method: "POST", redirect: "error", cache: "no-store", signal: AbortSignal.timeout(3000),
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      body: JSON.stringify(["EVAL", RATE_LIMIT_SCRIPT, keys.length, ...keys, RATE_WINDOW_MS, ...limits]),
    });
    if (!response.ok) throw new Error();
    const result: unknown = await response.json();
    if (!isRecord(result) || "error" in result || !Array.isArray(result.result) || result.result.length !== 2) throw new Error();
    const [allowed, retryMs] = result.result;
    if ((allowed !== 0 && allowed !== 1) || !Number.isSafeInteger(retryMs) || retryMs < 0 || retryMs > RATE_WINDOW_MS || (allowed === 0 && retryMs === 0) || (allowed === 1 && retryMs !== 0)) throw new Error();
    if (allowed === 0) throw new ApiRequestError(429, "Too many requests. Please try again shortly.", Math.ceil(retryMs / 1000));
  } catch (error) {
    if (error instanceof ApiRequestError) throw error;
    // No process-local production fallback: instance scaling must not bypass limits.
    throw new ApiRequestError(503, "This service is temporarily unavailable.");
  }
}
