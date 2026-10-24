import assert from "node:assert/strict";
import { execFile } from "node:child_process";
import { createHash, randomUUID } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { promisify } from "node:util";
import { setTimeout as delay } from "node:timers/promises";

// Explicit opt-in integration command, intentionally outside the *.test.mjs glob.
// Uses only a new isolated container and synthetic keys. Never reads app secrets.
const execute = promisify(execFile);
const projectRoot = path.resolve(import.meta.dirname, "..");
const outputPath = path.join(projectRoot, "output/security-fixes-20261024/redis-validation.json");
const source = await readFile(path.join(projectRoot, "lib/apiSecurity.ts"), "utf8");
const scriptMatch = source.match(/const RATE_LIMIT_SCRIPT = `([\s\S]*?)`;/);
assert.ok(scriptMatch, "Could not extract the production Lua script.");
const lua = scriptMatch[1];
assert.ok(!lua.includes("${"), "The script now requires template interpolation; update this check explicitly.");
const runId = randomUUID();
const containerName = `civant-security-redis-${runId}`;
const image = "redis:8-alpine";
const results = [];
const report = {
  capturedUtc: new Date().toISOString(),
  nodeVersion: process.version,
  image,
  sourceFile: "lib/apiSecurity.ts",
  scriptSha256: createHash("sha256").update(lua).digest("hex"),
  isolation: { network: "none", publishedPorts: [], persistentVolumes: [], syntheticDataOnly: true },
  tests: results,
  remainingReleaseVerification: [
    "Configured Redis provider TLS endpoint, token scope and EVAL/GET/INCR/PEXPIRE/PTTL permissions",
    "Real Vercel ingress header behavior and configured shared limiter integration",
    "Vercel Node runtime patch confirmation before release",
  ],
};
let containerId;

async function docker(args, timeout = 30000) {
  const result = await execute("docker", args, { timeout, maxBuffer: 1024 * 1024 });
  return result.stdout.trim();
}
async function redis(...args) {
  return docker(["exec", containerId, "redis-cli", "--raw", ...args.map(String)]);
}
function keysFor(scenario, client = "client", recipient = "recipient") {
  const prefix = `civant:forms:{production}:test:${runId}:${scenario}`;
  return [`${prefix}:global`, `${prefix}:ip:${client}`, `${prefix}:email:${recipient}`];
}
async function evaluate(keys, windowMs = 600000) {
  const response = (await redis("EVAL", lua, keys.length, ...keys, windowMs, 100, 5, 3)).split("\n").map(Number);
  assert.equal(response.length, 2);
  assert.ok(response[0] === 0 || response[0] === 1);
  assert.ok(Number.isSafeInteger(response[1]) && response[1] >= 0 && response[1] <= windowMs);
  return response;
}
async function concurrently(total, operation, parallelism = 12) {
  const output = Array(total);
  let next = 0;
  await Promise.all(Array.from({ length: Math.min(total, parallelism) }, async () => {
    while (next < total) {
      const index = next++;
      output[index] = await operation(index);
    }
  }));
  return output;
}
async function check(name, operation) {
  const start = performance.now();
  const details = await operation();
  results.push({ name, status: "pass", durationMs: Math.round(performance.now() - start), ...details });
  console.log(`PASS ${name}`);
}

try {
  await docker(["pull", image], 120000);
  const imageDetails = JSON.parse(await docker(["image", "inspect", image]))[0];
  report.imageId = imageDetails.Id;
  report.imageDigests = imageDetails.RepoDigests;
  // Pin this run to the just-inspected image ID, with no host network or storage.
  containerId = await docker([
    "run", "--detach", "--rm", "--name", containerName,
    "--network", "none", "--read-only", "--tmpfs", "/data:rw,noexec,nosuid,size=16m,mode=1777",
    "--user", "redis", "--cap-drop", "ALL", "--security-opt", "no-new-privileges:true",
    imageDetails.Id, "redis-server", "--bind", "127.0.0.1", "--protected-mode", "yes",
    "--save", "", "--appendonly", "no", "--maxmemory", "16mb", "--maxmemory-policy", "noeviction",
  ]);
  assert.match(containerId, /^[a-f0-9]{64}$/);
  let ready = false;
  for (let attempt = 0; attempt < 30; attempt++) {
    try { if (await redis("PING") === "PONG") { ready = true; break; } } catch { /* Only this newly created container can still be starting. */ }
    await delay(100);
  }
  assert.ok(ready, "Temporary Redis did not become ready.");
  const details = JSON.parse(await docker(["inspect", containerId]))[0];
  assert.equal(details.HostConfig.NetworkMode, "none");
  assert.ok(!details.HostConfig.PortBindings || Object.keys(details.HostConfig.PortBindings).length === 0);
  assert.ok(details.Mounts.every((mount) => mount.Type === "tmpfs"));
  report.redisVersion = (await redis("INFO", "server")).match(/^redis_version:(.+)$/m)?.[1]?.trim();

  await check("The production key template uses a consistent Redis Cluster hash tag", async () => {
    assert.ok(source.includes("const prefix = `civant:forms:{${scope}}`;"));
    const keys = keysFor("hash-tag");
    const tags = keys.map((key) => key.match(/\{([^}]+)\}/)?.[1]);
    assert.deepEqual(tags, ["production", "production", "production"]);
    return { tag: "production", keyCount: keys.length };
  });

  await check("Concurrent recipient requests admit exactly three and preserve atomic counters", async () => {
    const keys = keysFor("recipient");
    const responses = await concurrently(30, () => evaluate(keys));
    assert.equal(responses.filter(([allowed]) => allowed === 1).length, 3);
    assert.equal(responses.filter(([allowed, retry]) => allowed === 0 && retry > 0).length, 27);
    assert.deepEqual((await redis("MGET", ...keys)).split("\n"), ["3", "3", "3"]);
    return { attempts: 30, allowed: 3, denied: 27 };
  });

  await check("Concurrent client requests admit exactly five despite recipient rotation", async () => {
    const responses = await concurrently(30, (index) => evaluate(keysFor("client", "shared-client", `recipient-${index}`)));
    assert.equal(responses.filter(([allowed]) => allowed === 1).length, 5);
    const [globalKey, clientKey] = keysFor("client", "shared-client");
    assert.deepEqual((await redis("MGET", globalKey, clientKey)).split("\n"), ["5", "5"]);
    return { attempts: 30, allowed: 5, denied: 25 };
  });

  await check("Concurrent globally distributed requests stop at the shared budget of 100", async () => {
    const responses = await concurrently(130, (index) => evaluate(keysFor("global", `client-${index}`, `recipient-${index}`)));
    assert.equal(responses.filter(([allowed]) => allowed === 1).length, 100);
    assert.equal(await redis("GET", keysFor("global")[0]), "100");
    const storedKeys = (await redis("KEYS", `civant:forms:{production}:test:${runId}:global:*`)).split("\n");
    assert.equal(storedKeys.length, 201);
    return { attempts: 130, allowed: 100, denied: 30, storedKeys: storedKeys.length };
  });

  await check("Blocked attempts create no new keys and do not increment existing counters", async () => {
    const globalBlocked = keysFor("global", "never-admitted-client", "never-admitted-recipient");
    assert.equal((await evaluate(globalBlocked))[0], 0);
    assert.equal(await redis("EXISTS", globalBlocked[1], globalBlocked[2]), "0");
    const clientBlocked = keysFor("client", "shared-client", "never-admitted-recipient");
    assert.equal((await evaluate(clientBlocked))[0], 0);
    assert.equal(await redis("EXISTS", clientBlocked[2]), "0");
    const recipientBlocked = keysFor("recipient", "never-admitted-client", "recipient");
    assert.equal((await evaluate(recipientBlocked))[0], 0);
    assert.equal(await redis("EXISTS", recipientBlocked[1]), "0");
    assert.equal(await redis("GET", keysFor("global")[0]), "100");
    return { globalClientRecipientDenialVerified: true };
  });

  await check("Every admitted counter has the production TTL and expires before reuse", async () => {
    const keys = keysFor("ttl-production");
    assert.deepEqual(await evaluate(keys), [1, 0]);
    const ttls = await Promise.all(keys.map(async (key) => Number(await redis("PTTL", key))));
    assert.ok(ttls.every((ttl) => ttl > 0 && ttl <= 600000));
    const expiringKeys = keysFor("ttl-expiry");
    assert.deepEqual(await evaluate(expiringKeys, 1000), [1, 0]);
    await delay(1200);
    assert.equal(await redis("EXISTS", ...expiringKeys), "0");
    assert.deepEqual(await evaluate(expiringKeys, 1000), [1, 0]);
    assert.deepEqual((await redis("MGET", ...expiringKeys)).split("\n"), ["1", "1", "1"]);
    return { productionTtlMs: 600000, observedTtlsMs: ttls, acceleratedExpiryMs: 1000 };
  });

  report.status = "pass";
} catch (error) {
  report.status = "fail";
  report.failure = error instanceof Error ? error.message : String(error);
  process.exitCode = 1;
  console.error(`Redis limiter integration failed: ${report.failure}`);
} finally {
  if (containerId) {
    try {
      await docker(["rm", "--force", containerId]);
      const remaining = await docker(["ps", "--all", "--quiet", "--filter", `id=${containerId}`]);
      assert.equal(remaining, "");
      report.containerRemoved = true;
    } catch (error) {
      report.containerRemoved = false;
      report.cleanupFailure = error instanceof Error ? error.message : String(error);
      report.status = "fail";
      process.exitCode = 1;
    }
  }
  await mkdir(path.dirname(outputPath), { recursive: true });
  await writeFile(outputPath, `${JSON.stringify(report, null, 2)}\n`);
  console.log(`Saved ${outputPath}`);
}
