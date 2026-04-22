const origin = "https://civant.eu";
const expectedSecurityHeaders = {
  "x-content-type-options": "nosniff",
  "x-frame-options": "DENY",
  "referrer-policy": "strict-origin-when-cross-origin",
  "permissions-policy": ["camera=()", "microphone=()", "geolocation=()"],
};

const failures = [];

function fail(message) {
  failures.push(message);
}

function normalizeHeaderValue(headers, header) {
  return headers.get(header) ?? "";
}

async function request(url, { method = "GET", headers = {} } = {}) {
  const response = await fetch(url, {
    method,
    headers,
    redirect: "manual",
    signal: AbortSignal.timeout(15000),
  });

  return {
    body: method === "HEAD" ? "" : await response.text(),
    headers: response.headers,
    statusCode: response.status,
    url,
  };
}

function assertStatus(response, expected, label) {
  if (!expected.includes(response.statusCode)) {
    fail(`${label}: expected status ${expected.join(" or ")}, got ${response.statusCode}`);
  }
}

function assertHeaderEquals(headers, header, expected, label) {
  const actual = normalizeHeaderValue(headers, header);
  if (actual.toLowerCase() !== expected.toLowerCase()) {
    fail(`${label}: expected ${header}: ${expected}, got ${actual || "<missing>"}`);
  }
}

function assertHeaderIncludes(headers, header, expectedParts, label) {
  const actual = normalizeHeaderValue(headers, header);
  const missing = expectedParts.filter(
    (part) => !actual.toLowerCase().includes(part.toLowerCase()),
  );
  if (missing.length > 0) {
    fail(`${label}: ${header} missing ${missing.join(", ")}; got ${actual || "<missing>"}`);
  }
}

function assertRedirect(response, expectedLocation, label) {
  assertStatus(response, [301, 302, 307, 308], label);
  const actual = normalizeHeaderValue(response.headers, "location");
  if (actual !== expectedLocation) {
    fail(`${label}: expected location ${expectedLocation}, got ${actual || "<missing>"}`);
  }
}

function assertCacheState(headers, label) {
  const cacheState = normalizeHeaderValue(headers, "x-vercel-cache").toUpperCase();
  const allowed = new Set(["HIT", "MISS", "STALE", "BYPASS", "REVALIDATED"]);
  if (!allowed.has(cacheState)) {
    fail(`${label}: expected x-vercel-cache, got ${cacheState || "<missing>"}`);
  }
}

function assertCompression(headers, label) {
  const encoding = normalizeHeaderValue(headers, "content-encoding").toLowerCase();
  if (!["br", "gzip", "zstd"].includes(encoding)) {
    fail(`${label}: expected br/gzip/zstd compression, got ${encoding || "<missing>"}`);
  }
}

function findStaticChunk(html) {
  const match = html.match(/src="(\/_next\/static\/chunks\/[^"]+\.js)"/);
  return match?.[1] ?? null;
}

const httpRedirect = await request("http://civant.eu/", { method: "HEAD" });
assertRedirect(httpRedirect, `${origin}/`, "HTTP to HTTPS redirect");

const wwwRedirect = await request("https://www.civant.eu/", { method: "HEAD" });
assertRedirect(wwwRedirect, `${origin}/`, "www to apex redirect");

const homepage = await request(`${origin}/`, {
  headers: { "accept-encoding": "br, gzip, zstd" },
});
assertStatus(homepage, [200], "Homepage");
assertCompression(homepage.headers, "Homepage");
assertCacheState(homepage.headers, "Homepage");
assertHeaderIncludes(homepage.headers, "strict-transport-security", ["max-age="], "Homepage");

for (const [header, expected] of Object.entries(expectedSecurityHeaders)) {
  if (Array.isArray(expected)) {
    assertHeaderIncludes(homepage.headers, header, expected, "Homepage");
  } else {
    assertHeaderEquals(homepage.headers, header, expected, "Homepage");
  }
}

const homepageHtml = await request(`${origin}/`, {
  headers: { "accept-encoding": "identity" },
});
assertStatus(homepageHtml, [200], "Homepage HTML");

const html = homepageHtml.body;
const staticChunkPath = findStaticChunk(html);
if (!staticChunkPath) {
  fail("Homepage: could not find a Next.js static chunk to verify CDN asset behavior");
} else {
  const staticChunk = await request(`${origin}${staticChunkPath}`, {
    headers: { "accept-encoding": "br, gzip, zstd" },
  });
  assertStatus(staticChunk, [200], "Static chunk");
  assertCompression(staticChunk.headers, "Static chunk");
  assertCacheState(staticChunk.headers, "Static chunk");
  assertHeaderIncludes(
    staticChunk.headers,
    "cache-control",
    ["max-age=31536000", "immutable"],
    "Static chunk",
  );
}

if (failures.length > 0) {
  console.error("Production verification failed:");
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log("Production verification passed.");
