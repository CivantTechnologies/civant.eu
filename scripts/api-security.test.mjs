import assert from "node:assert/strict";
import crypto from "node:crypto";
import { readFile } from "node:fs/promises";
import { createRequire } from "node:module";
import path from "node:path";
import { pathToFileURL } from "node:url";
import test, { afterEach, beforeEach, mock } from "node:test";
import ts from "typescript";

// Execute the actual route and helper code without a running Next server. Only
// TypeScript syntax/import paths are transformed; every outbound call is mocked.
const require = createRequire(import.meta.url);
const compiled = new Map();
async function moduleUrl(relativePath) {
  const filename = path.resolve(relativePath);
  if (compiled.has(filename)) return compiled.get(filename);
  let source = ts.transpileModule(await readFile(filename, "utf8"), {
    compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.ESNext },
  }).outputText;
  for (const match of [...source.matchAll(/from ["']([^"']+)["']/g)]) {
    const specifier = match[1];
    const replacement = specifier.startsWith(".")
      ? await moduleUrl(path.resolve(path.dirname(filename), `${specifier}.ts`))
      : specifier === "next/server" ? pathToFileURL(require.resolve("next/server.js")).href : null;
    if (replacement) source = source.replace(match[0], `from ${JSON.stringify(replacement)}`);
  }
  const url = `data:text/javascript;base64,${Buffer.from(source).toString("base64")}`;
  compiled.set(filename, url);
  return url;
}
const security = await import(await moduleUrl("lib/apiSecurity.ts"));
const validation = await import(await moduleUrl("lib/formValidation.ts"));
const reports = await import(await moduleUrl("lib/reportDownloads.ts"));
const contact = await import(await moduleUrl("app/api/contact/route.ts"));
const access = await import(await moduleUrl("app/api/reports/access/route.ts"));
const download = await import(await moduleUrl("app/api/reports/download/route.ts"));
const { NextRequest } = await import(pathToFileURL(require.resolve("next/server.js")).href);

const secret = "unit-test-only-report-key-with-at-least-32-bytes";
const redisUrl = "https://unit-test-redis.invalid";
const slug = reports.REPORTS[0].slug;
const validContact = { name: "Test Person", email: "person@example.org", reason: "Custom Plan", message: "A test enquiry.", marketingOptIn: false };
const validReport = { reportSlug: slug, name: "Test Person", email: "person@example.org", company: "Example", role: "Director", companyWebsite: "https://example.org", marketingOptIn: false, consentRequired: true, honeypot: "" };
const envKeys = ["NODE_ENV", "VERCEL", "VERCEL_ENV", "REPORT_DOWNLOAD_SECRET", "RESEND_API_KEY", "NEXT_PUBLIC_SITE_URL", "RATE_LIMIT_REDIS_REST_URL", "RATE_LIMIT_REDIS_REST_TOKEN", "KV_REST_API_URL", "KV_REST_API_TOKEN", "RATE_LIMIT_LOCAL_MEMORY"];
let savedEnv;
let testNumber = 0;
beforeEach(() => {
  savedEnv = Object.fromEntries(envKeys.map((key) => [key, process.env[key]]));
  for (const key of envKeys) delete process.env[key];
  process.env.NODE_ENV = "production";
  process.env.REPORT_DOWNLOAD_SECRET = secret;
  const time = 1900000000000 + (++testNumber * 1000000);
  mock.method(Date, "now", () => time);
  mock.method(globalThis, "fetch", async () => { throw new Error("Unexpected outbound request in security regression."); });
  mock.method(console, "error", () => {});
});
afterEach(() => {
  mock.restoreAll();
  for (const key of envKeys) {
    if (savedEnv[key] === undefined) delete process.env[key];
    else process.env[key] = savedEnv[key];
  }
});

function request(body, headers = {}, url = "https://civant.eu/api/contact") {
  return new NextRequest(url, { method: "POST", headers: { "content-type": "application/json", origin: "https://civant.eu", ...headers }, body: JSON.stringify(body) });
}
function streamRequest(chunks, headers = {}) {
  return new Request("https://civant.eu/api/contact", { method: "POST", headers: { "content-type": "application/json", ...headers }, duplex: "half", body: new ReadableStream({ start(controller) { for (const chunk of chunks) controller.enqueue(typeof chunk === "string" ? new TextEncoder().encode(chunk) : chunk); controller.close(); } }) });
}
function enableRedis() {
  process.env.RATE_LIMIT_REDIS_REST_URL = redisUrl;
  process.env.RATE_LIMIT_REDIS_REST_TOKEN = "unit-test-only-redis-token";
}
function enableLocalLimiter() {
  process.env.NODE_ENV = "test";
  process.env.RATE_LIMIT_LOCAL_MEMORY = "1";
}
function signPayload(payload) {
  const encoded = Buffer.from(typeof payload === "string" ? payload : JSON.stringify(payload)).toString("base64url");
  return `${encoded}.${crypto.createHmac("sha256", secret).update(encoded).digest("base64url")}`;
}
async function expectStatus(fn, status) {
  await assert.rejects(fn, (error) => error instanceof security.ApiRequestError && error.status === status);
}

test("report tokens round-trip, expire, reject tampering and never throw for malformed signatures", () => {
  const token = reports.createReportDownloadToken(slug, "Person@Example.org");
  assert.equal(reports.verifyReportDownloadToken(token)?.email, "person@example.org");
  const [payload, signature] = token.split(".");
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
  const noncanonicalSignature = signature.slice(0, -1) + alphabet[alphabet.indexOf(signature.at(-1)) + 1];
  assert.equal(reports.verifyReportDownloadToken(`${payload}.${noncanonicalSignature}`), null);
  for (const value of [null, {}, "", "x.y", `${payload}.a`, `${payload}.${"a".repeat(44)}`, `${payload}.${signature}.extra`, `${payload}=.${signature}`, `${payload}.${signature}=`, `${payload}.${signature.slice(0, -1)}!`, "a".repeat(2049)]) {
    assert.equal(reports.verifyReportDownloadToken(value), null);
  }
  const tampered = `${payload}.${signature[0] === "a" ? "b" : "a"}${signature.slice(1)}`;
  assert.equal(reports.verifyReportDownloadToken(tampered), null);
  for (const invalidPayload of [
    { reportSlug: slug, email: "person@example.org", exp: Date.now() },
    { reportSlug: slug, email: "person@example.org", exp: Date.now() - 1 },
    { reportSlug: slug, email: "person@example.org", exp: Date.now() + 72 * 3600000 + 1 },
    { reportSlug: slug, email: "person@example.org", exp: Date.now() + 0.5 },
    { reportSlug: slug, email: "person@example.org", exp: "9999999999999" },
    { reportSlug: slug, email: 123, exp: Date.now() + 1000 },
    { reportSlug: "../private", email: "person@example.org", exp: Date.now() + 1000 },
    { reportSlug: slug, email: "person@example.org", exp: Date.now() + 1000, admin: true },
    [], null, "not-json",
  ]) assert.equal(reports.verifyReportDownloadToken(signPayload(invalidPayload)), null);
});

test("signing fails closed without a strong dedicated secret even when a mail key exists", () => {
  const token = reports.createReportDownloadToken(slug, "person@example.org");
  process.env.RESEND_API_KEY = secret;
  for (const badSecret of [undefined, "", " ".repeat(40), "short"]) {
    if (badSecret === undefined) delete process.env.REPORT_DOWNLOAD_SECRET;
    else process.env.REPORT_DOWNLOAD_SECRET = badSecret;
    assert.throws(() => reports.createReportDownloadToken(slug, "person@example.org"), (error) => error.status === 503);
    assert.throws(() => reports.verifyReportDownloadToken(token), (error) => error.status === 503);
  }
});

test("report validation handles arbitrary JSON types and rejects malformed bounded fields", () => {
  assert.equal(reports.validateReportLead(validReport).ok, true);
  for (const value of [null, [], false, 123, "string", {}, { ...validReport, extra: 1 }]) assert.equal(reports.validateReportLead(value).ok, false);
  for (const [key, value] of [
    ["name", 42], ["name", "x".repeat(121)], ["company", null], ["company", "x".repeat(201)],
    ["role", {}], ["role", "x\r\nInjected"], ["reportSlug", "unknown"], ["email", "person\r\n@example.org"],
    ["email", "person@x..org"], ["email", "person@gmail.com"], ["email", "person@mailinator.com"],
    ["consentRequired", "true"], ["consentRequired", false], ["marketingOptIn", "false"],
    ["honeypot", 1], ["honeypot", "bot"], ["companyWebsite", "javascript:alert(1)"],
    ["companyWebsite", "https://user:pass@example.org"], ["companyWebsite", 1], ["companyWebsite", "x".repeat(2049)],
  ]) assert.equal(reports.validateReportLead({ ...validReport, [key]: value }).ok, false, key);
});

test("contact validation rejects wrong types, unknown fields, header injection and oversized fields", () => {
  assert.equal(validation.validateContactPayload(validContact).ok, true);
  for (const value of [null, [], {}, { ...validContact, extra: true }]) assert.equal(validation.validateContactPayload(value).ok, false);
  for (const [key, value] of [["name", 12], ["name", "x".repeat(121)], ["name", "hello\nBcc:bad@example.org"], ["reason", "unknown"], ["message", {}], ["message", "x".repeat(5001)], ["marketingOptIn", "true"], ["email", "person@example.org\nBcc:x@y.org"], ["email", "..bad@example.org"], ["email", "x@-example.org"]]) {
    assert.equal(validation.validateContactPayload({ ...validContact, [key]: value }).ok, false, key);
  }
  assert.equal(validation.validateContactPayload({ ...validContact, message: "Hello\nSecond line\ttext" }).ok, true);
});

test("JSON reader enforces actual bytes with absent or forged Content-Length", async () => {
  assert.deepEqual(await security.readBoundedJson(streamRequest(['{"ok":', 'true}'])), { ok: true });
  for (const headers of [{}, { "content-length": "1" }]) {
    await expectStatus(() => security.readBoundedJson(streamRequest(["x".repeat(10000), "x".repeat(7000)], headers)), 413);
  }
  await expectStatus(() => security.readBoundedJson(streamRequest(["é".repeat(8193)])), 413);
  await expectStatus(() => security.readBoundedJson(streamRequest(["{}"], { "content-length": "20000" })), 413);
  await expectStatus(() => security.readBoundedJson(streamRequest(["{}"], { "content-length": "invalid" })), 400);
  await expectStatus(() => security.readBoundedJson(streamRequest(["not-json"])), 400);
  await expectStatus(() => security.readBoundedJson(streamRequest([new Uint8Array([0xff])])), 400);
  await expectStatus(() => security.readBoundedJson(streamRequest(["{}"], { "content-type": "text/plain" })), 415);
  await expectStatus(() => security.readBoundedJson(streamRequest(["{}"], { "content-encoding": "gzip" })), 415);
});

test("JSON reader times out and cancels an unfinished request body", async () => {
  let cancelled = false;
  const slow = new Request("https://civant.eu", { method: "POST", headers: { "content-type": "application/json" }, duplex: "half", body: new ReadableStream({ cancel() { cancelled = true; } }) });
  await expectStatus(() => security.readBoundedJson(slow), 408);
  assert.equal(cancelled, true);
});

test("origin checks reject cross-site submissions and link generation ignores request host", async () => {
  await expectStatus(async () => security.assertFormOrigin(request(validContact, { origin: "https://attacker.invalid" })), 403);
  await expectStatus(async () => security.assertFormOrigin(request(validContact, { "sec-fetch-site": "cross-site" })), 403);
  assert.equal(security.getSiteOrigin(), "https://civant.eu");
  for (const invalid of ["javascript:alert(1)", "https://user:pass@civant.eu", "https://civant.eu/path", "https://civant.eu/?unsafe=x", "http://civant.eu"]) {
    process.env.NEXT_PUBLIC_SITE_URL = invalid;
    assert.throws(() => security.getSiteOrigin(), (error) => error.status === 503);
  }
});

test("production limiter fails closed when missing, unavailable or malformed", async () => {
  process.env.RATE_LIMIT_LOCAL_MEMORY = "1";
  await expectStatus(() => security.enforceFormRateLimit(request(validContact), validContact.email), 503);
  enableRedis();
  for (const reply of [null, {}, { result: [1] }, { result: [true, 0] }, { result: [0, 0] }, { result: [1, 10] }, { result: [0, -1] }, { result: [0, 600001] }, { error: "test error", result: [1, 0] }]) {
    globalThis.fetch = async () => Response.json(reply);
    await expectStatus(() => security.enforceFormRateLimit(request(validContact), validContact.email), 503);
  }
  globalThis.fetch = async () => new Response(null, { status: 503 });
  await expectStatus(() => security.enforceFormRateLimit(request(validContact), validContact.email), 503);
  globalThis.fetch = async () => { throw new Error("offline"); };
  await expectStatus(() => security.enforceFormRateLimit(request(validContact), validContact.email), 503);
  process.env.RATE_LIMIT_REDIS_REST_URL = "http://insecure.invalid";
  await expectStatus(() => security.enforceFormRateLimit(request(validContact), validContact.email), 503);
});

test("shared limiter sends one atomic command with TTLs, caps and pseudonymous keys", async () => {
  enableRedis();
  let command;
  globalThis.fetch = async (url, options) => {
    assert.equal(url, redisUrl);
    assert.equal(options.redirect, "error");
    assert.ok(options.signal instanceof AbortSignal);
    command = JSON.parse(options.body);
    return Response.json({ result: [1, 0] });
  };
  await security.enforceFormRateLimit(request(validContact), validContact.email);
  assert.equal(command[0], "EVAL");
  assert.match(command[1], /PEXPIRE/);
  assert.match(command[1], /if retry > 0 then return/);
  assert.equal(command[2], 3);
  assert.deepEqual(command.slice(-4), [600000, 100, 5, 3]);
  assert.equal(command.join(" ").includes(validContact.email), false);
  globalThis.fetch = async () => Response.json({ result: [0, 1201] });
  await assert.rejects(() => security.enforceFormRateLimit(request(validContact), validContact.email), (error) => error.status === 429 && error.retryAfter === 2);
});

test("integration-managed Redis credentials are used together, even when local memory is requested", async () => {
  process.env.KV_REST_API_URL = "https://integration-redis.invalid";
  process.env.KV_REST_API_TOKEN = "unit-test-integration-token";
  process.env.RATE_LIMIT_LOCAL_MEMORY = "1";
  let calls = 0;
  globalThis.fetch = async (url, options) => {
    calls += 1;
    assert.equal(url, process.env.KV_REST_API_URL);
    assert.equal(options.headers.Authorization, `Bearer ${process.env.KV_REST_API_TOKEN}`);
    assert.equal(JSON.parse(options.body)[0], "EVAL");
    return Response.json({ result: [1, 0] });
  };
  for (const environment of ["production", "test"]) {
    process.env.NODE_ENV = environment;
    await security.enforceFormRateLimit(request(validContact), validContact.email);
  }
  assert.equal(calls, 2);
});

test("a complete custom Redis pair takes precedence over the integration pair", async () => {
  enableRedis();
  process.env.KV_REST_API_URL = "https://integration-redis.invalid";
  process.env.KV_REST_API_TOKEN = "unit-test-integration-token";
  let calls = 0;
  globalThis.fetch = async (url, options) => {
    calls += 1;
    assert.equal(url, redisUrl);
    assert.equal(options.headers.Authorization, "Bearer unit-test-only-redis-token");
    return Response.json({ result: [1, 0] });
  };
  await security.enforceFormRateLimit(request(validContact), validContact.email);
  assert.equal(calls, 1);
});

test("partial or empty custom credentials cannot fall back to managed credentials or local memory", async () => {
  process.env.KV_REST_API_URL = "https://integration-redis.invalid";
  process.env.KV_REST_API_TOKEN = "unit-test-integration-token";
  process.env.RATE_LIMIT_LOCAL_MEMORY = "1";
  const cases = [[redisUrl, undefined], [undefined, "custom-token"], ["", "custom-token"], [redisUrl, ""], ["", ""], ["", undefined], [undefined, ""]];
  for (const environment of ["production", "test"]) {
    process.env.NODE_ENV = environment;
    for (const [url, token] of cases) {
      if (url === undefined) delete process.env.RATE_LIMIT_REDIS_REST_URL;
      else process.env.RATE_LIMIT_REDIS_REST_URL = url;
      if (token === undefined) delete process.env.RATE_LIMIT_REDIS_REST_TOKEN;
      else process.env.RATE_LIMIT_REDIS_REST_TOKEN = token;
      await expectStatus(() => security.enforceFormRateLimit(request(validContact), validContact.email), 503);
    }
  }
  assert.equal(globalThis.fetch.mock.calls.length, 0);
});

test("partial or empty integration credentials fail closed and prevent local-memory fallback", async () => {
  process.env.RATE_LIMIT_LOCAL_MEMORY = "1";
  const cases = [[redisUrl, undefined], [undefined, "managed-token"], ["", "managed-token"], [redisUrl, ""], ["", ""], ["", undefined], [undefined, ""]];
  for (const environment of ["production", "test"]) {
    process.env.NODE_ENV = environment;
    for (const [url, token] of cases) {
      if (url === undefined) delete process.env.KV_REST_API_URL;
      else process.env.KV_REST_API_URL = url;
      if (token === undefined) delete process.env.KV_REST_API_TOKEN;
      else process.env.KV_REST_API_TOKEN = token;
      await expectStatus(() => security.enforceFormRateLimit(request(validContact), validContact.email), 503);
    }
  }
  assert.equal(globalThis.fetch.mock.calls.length, 0);
});

test("spoofed forwarding headers cannot rotate the client key outside Vercel", async () => {
  enableRedis();
  const keys = [];
  globalThis.fetch = async (_url, options) => { keys.push(JSON.parse(options.body)[4]); return Response.json({ result: [1, 0] }); };
  for (const ip of ["198.51.100.1", "198.51.100.2"]) await security.enforceFormRateLimit(request(validContact, { "x-forwarded-for": ip, "x-real-ip": ip, "x-vercel-forwarded-for": ip }), validContact.email);
  assert.equal(keys[0], keys[1]);
  process.env.VERCEL = "1";
  for (const ip of ["2001:db8::1", "2001:0db8:0:0::2", "2001:db8:1::1", "198.51.100.1,198.51.100.2"]) await security.enforceFormRateLimit(request(validContact, { "x-vercel-forwarded-for": ip }), validContact.email);
  assert.equal(keys[2], keys[3]);
  assert.notEqual(keys[3], keys[4]);
  assert.equal(keys[0], keys[5]);
});

test("local-only limiter rejects concurrent recipient floods, expires keys and cannot enable on Vercel", async () => {
  enableLocalLimiter();
  const outcomes = await Promise.allSettled(Array.from({ length: 20 }, () => security.enforceFormRateLimit(request(validContact), validContact.email)));
  assert.equal(outcomes.filter((outcome) => outcome.status === "fulfilled").length, 3);
  assert.equal(outcomes.filter((outcome) => outcome.status === "rejected" && outcome.reason.status === 429).length, 17);
  const later = Date.now() + 600001;
  mock.method(Date, "now", () => later);
  await security.enforceFormRateLimit(request(validContact), validContact.email);
  process.env.VERCEL = "1";
  await expectStatus(() => security.enforceFormRateLimit(request(validContact), "other@example.org"), 503);
});

test("routes reject malformed payloads before external requests", async () => {
  for (const handler of [contact.POST, access.POST]) {
    for (const body of [null, [], {}, { name: 1 }, { email: "x@example.org" }]) assert.equal((await handler(request(body))).status, 400);
    assert.equal((await handler(request(validContact, { origin: "https://attacker.invalid" }))).status, 403);
    assert.equal((await handler(request(validContact, { "content-length": "20000" }))).status, 413);
  }
  assert.equal(globalThis.fetch.mock.calls.length, 0);
});

test("both routes reject missing production mail config instead of reporting success", async () => {
  for (const [handler, body] of [[contact.POST, validContact], [access.POST, validReport]]) {
    const result = await handler(request(body));
    assert.equal(result.status, 503);
    assert.equal((await result.json()).success, undefined);
  }
  assert.equal(globalThis.fetch.mock.calls.length, 0);
});

test("report access rejects missing signing configuration before sending email", async () => {
  process.env.RESEND_API_KEY = "unit-test-mail-key";
  delete process.env.REPORT_DOWNLOAD_SECRET;
  enableRedis();
  const response = await access.POST(request(validReport));
  assert.equal(response.status, 503);
  assert.equal((await response.json()).downloadUrl, undefined);
  assert.equal(globalThis.fetch.mock.calls.length, 0);
});

test("both routes stop before email when shared limits reject or fail", async () => {
  process.env.RESEND_API_KEY = "unit-test-mail-key";
  enableRedis();
  for (const [handler, body] of [[contact.POST, validContact], [access.POST, validReport]]) {
    for (const [reply, status] of [[{ result: [0, 2000] }, 429], [{ error: "offline" }, 503]]) {
      globalThis.fetch = async (url) => { assert.equal(url, redisUrl); return Response.json(reply); };
      const result = await handler(request(body));
      assert.equal(result.status, status);
      if (status === 429) assert.equal(result.headers.get("retry-after"), "2");
    }
  }
});

test("valid contact sends escaped data after admission and reports provider rejection", async () => {
  process.env.RESEND_API_KEY = "unit-test-mail-key";
  enableRedis();
  let mail;
  globalThis.fetch = async (url, options) => {
    if (url === redisUrl) return Response.json({ result: [1, 0] });
    assert.equal(url, "https://api.resend.com/emails");
    assert.equal(options.redirect, "error");
    mail = JSON.parse(options.body);
    return Response.json({ id: "test-only" });
  };
  assert.equal((await contact.POST(request({ ...validContact, message: "<script>alert(1)</script>" }))).status, 200);
  assert.equal(mail.reply_to, validContact.email);
  assert.match(mail.html, /&lt;script&gt;/);
  assert.doesNotMatch(mail.html, /<script>/);
  globalThis.fetch = async (url) => url === redisUrl ? Response.json({ result: [1, 0] }) : new Response(null, { status: 422 });
  assert.equal((await contact.POST(request(validContact))).status, 500);
  globalThis.fetch = async (url) => {
    if (url === redisUrl) return Response.json({ result: [1, 0] });
    throw new DOMException("Test timeout", "TimeoutError");
  };
  assert.equal((await contact.POST(request(validContact))).status, 500);
});

test("valid report uses canonical links, sends two emails and rejects partial delivery failure", async () => {
  process.env.RESEND_API_KEY = "unit-test-mail-key";
  enableRedis();
  const mails = [];
  globalThis.fetch = async (url, options) => {
    if (url === redisUrl) return Response.json({ result: [1, 0] });
    assert.equal(url, "https://api.resend.com/emails");
    mails.push(JSON.parse(options.body));
    return Response.json({ id: "test-only" });
  };
  const result = await access.POST(request(validReport, {}, "https://untrusted-host.invalid/api/reports/access"));
  assert.equal(result.status, 200);
  const body = await result.json();
  assert.equal(body.deliveredByEmail, true);
  assert.equal(new URL(body.downloadUrl).origin, "https://civant.eu");
  assert.equal(mails.length, 2);
  assert.ok(reports.verifyReportDownloadToken(new URL(body.downloadUrl).searchParams.get("token")));
  let mailCount = 0;
  globalThis.fetch = async (url) => url === redisUrl ? Response.json({ result: [1, 0] }) : new Response(null, { status: ++mailCount === 1 ? 200 : 500 });
  assert.equal((await access.POST(request(validReport))).status, 500);
});

test("download route returns controlled token failures and private attachment headers", async () => {
  const get = (query) => download.GET(new NextRequest(`https://civant.eu/api/reports/download${query}`));
  assert.equal((await get("")).status, 400);
  assert.equal((await get("?token=x.y")).status, 403);
  assert.equal((await get("?token=x&token=y")).status, 400);
  const token = reports.createReportDownloadToken(slug, validContact.email);
  const success = await get(`?token=${token}`);
  assert.equal(success.status, 200);
  assert.match(success.headers.get("cache-control"), /no-store/);
  assert.match(success.headers.get("content-disposition"), /attachment/);
  assert.match(success.headers.get("content-security-policy"), /default-src 'none'/);
  assert.equal(success.headers.get("referrer-policy"), "no-referrer");
  delete process.env.REPORT_DOWNLOAD_SECRET;
  assert.equal((await get(`?token=${token}`)).status, 503);
});
