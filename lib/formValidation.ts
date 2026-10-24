export type ValidationResult<T> =
  | { ok: true; data: T }
  | { ok: false; message: string };

export function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

export function hasOnlyKeys(value: Record<string, unknown>, keys: string[]) {
  return Object.keys(value).every((key) => keys.includes(key));
}

export function isBoundedText(value: unknown, maxLength: number, multiline = false): value is string {
  if (typeof value !== "string" || value.length > maxLength || !value.trim()) return false;
  // Newlines belong only in the message body, never email headers or subjects.
  return ![...value].some((character) => {
    const code = character.charCodeAt(0);
    return code === 127 || (code < 32 && !(multiline && [9, 10, 13].includes(code)));
  });
}

export function isValidEmail(value: unknown): value is string {
  if (!isBoundedText(value, 254)) return false;
  const email = value.trim();
  const [local, domain, extra] = email.split("@");
  if (!local || !domain || extra !== undefined || local.length > 64) return false;
  if (!/^[A-Za-z0-9!#$%&'*+/=?^_`{|}~.-]+$/.test(local) || local.startsWith(".") || local.endsWith(".") || local.includes("..")) return false;
  const labels = domain.split(".");
  return labels.length > 1 && labels.every((label) =>
    /^[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?$/.test(label),
  ) && /^[A-Za-z]{2,63}$/.test(labels.at(-1) || "");
}

export type ContactPayload = {
  name: string;
  email: string;
  reason: string;
  message: string;
  marketingOptIn: boolean;
};

const CONTACT_REASONS = new Set([
  "Platform & Market Fit", "Custom Plan", "Grants & Funding", "Investment & Finance",
  "Partnerships", "Research & Collaboration", "Custom sector report request", "Forecast reports",
]);

export function validateContactPayload(value: unknown): ValidationResult<ContactPayload> {
  if (!isRecord(value) || !hasOnlyKeys(value, ["name", "email", "reason", "message", "marketingOptIn"]) ||
    !isBoundedText(value.name, 120) || !isValidEmail(value.email) ||
    !isBoundedText(value.reason, 80) || !CONTACT_REASONS.has(value.reason) ||
    !isBoundedText(value.message, 5000, true) || typeof value.marketingOptIn !== "boolean") {
    return { ok: false, message: "Please provide a valid name, email, topic and message (up to 5,000 characters)." };
  }
  return { ok: true, data: {
    name: value.name.trim(), email: value.email.trim().toLowerCase(), reason: value.reason,
    message: value.message.trim(), marketingOptIn: value.marketingOptIn,
  } };
}
