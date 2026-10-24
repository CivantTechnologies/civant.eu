import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

function readHeaders(environment) {
  // Load independently so a development import cannot leak eval permissions
  // into the production configuration through the ESM module cache.
  const result = spawnSync(
    process.execPath,
    [
      "--input-type=module",
      "--eval",
      "const { default: config } = await import('./next.config.mjs'); console.log(JSON.stringify(await config.headers()));",
    ],
    { cwd: root, env: { ...process.env, NODE_ENV: environment }, encoding: "utf8" },
  );
  assert.equal(result.status, 0, result.stderr);
  const rules = JSON.parse(result.stdout);
  const globalRule = rules.find(({ source }) => source === "/(.*)");
  assert.ok(globalRule, "All website responses must receive the security policy");
  return new Map(globalRule.headers.map(({ key, value }) => [key.toLowerCase(), value]));
}

function readPolicy(headers) {
  const value = headers.get("content-security-policy");
  assert.ok(value, "CSP must be enforced, not only report-only");
  const entries = value.split(";").map((directive) => directive.trim().split(/\s+/));
  const policy = new Map(entries.map(([directive, ...sources]) => [directive, sources]));
  assert.equal(policy.size, entries.length, "Duplicate directives can mask intended restrictions");
  return policy;
}

test("production CSP prevents remote script loading, eval, framing and form exfiltration", () => {
  const headers = readHeaders("production");
  const policy = readPolicy(headers);
  assert.deepEqual(policy.get("default-src"), ["'self'"]);
  assert.deepEqual(policy.get("script-src"), ["'self'", "'unsafe-inline'"]);
  assert.deepEqual(policy.get("script-src-attr"), ["'none'"]);
  for (const directive of ["object-src", "base-uri", "frame-ancestors", "frame-src", "worker-src"]) {
    assert.deepEqual(policy.get(directive), ["'none'"], `${directive} must deny unused capabilities`);
  }
  assert.deepEqual(policy.get("form-action"), ["'self'"]);
  assert.ok(policy.has("upgrade-insecure-requests"));
  assert.equal(headers.get("x-frame-options"), "DENY");
  assert.equal(headers.get("x-content-type-options"), "nosniff");
  for (const sources of policy.values()) {
    assert.ok(!sources.some((source) => source.includes("*") || /^(?:https?|wss?):$/.test(source)), "Production policy must not grant wildcard origins or entire network schemes");
  }
});

test("static hydration, local fonts/images and the pricing API remain permitted", async () => {
  const policy = readPolicy(readHeaders("production"));
  assert.ok(policy.get("script-src").includes("'unsafe-inline'"), "Static Next hydration still requires inline scripts; review rendering before removing this permission");
  assert.deepEqual(policy.get("style-src"), ["'self'", "'unsafe-inline'"]);
  assert.deepEqual(policy.get("img-src"), ["'self'", "data:"]);
  assert.deepEqual(policy.get("font-src"), ["'self'"]);
  const pricingSource = await readFile(new URL("app/pricing/PricingPageClient.tsx", root), "utf8");
  const checkoutUrl = pricingSource.match(/const CHECKOUT_ENDPOINT\s*=\s*["']([^"']+)["']/)?.[1];
  assert.ok(checkoutUrl, "Review the CSP when pricing changes its checkout integration");
  assert.deepEqual(policy.get("connect-src"), ["'self'", checkoutUrl]);
});

test("development allows local hot reload without weakening production", () => {
  const devPolicy = readPolicy(readHeaders("development"));
  assert.ok(devPolicy.get("script-src").includes("'unsafe-eval'"));
  assert.ok(devPolicy.get("connect-src").includes("ws://localhost:*"));
  assert.ok(devPolicy.get("connect-src").includes("ws://127.0.0.1:*"));
  assert.ok(!devPolicy.has("upgrade-insecure-requests"), "Local HTTP development must remain usable");
  for (const environment of ["production", "test"]) {
    const policy = readPolicy(readHeaders(environment));
    assert.ok(!policy.get("script-src").includes("'unsafe-eval'"));
    assert.ok(!policy.get("connect-src").some((source) => /^wss?:/.test(source)));
  }
});
