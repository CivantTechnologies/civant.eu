import assert from "node:assert/strict";
import { constants } from "node:fs";
import { access, mkdir, mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import puppeteer from "puppeteer-core";

const base = new URL(process.argv[2] || "http://127.0.0.1:3100");
assert.ok(
  base.protocol === "http:" && ["127.0.0.1", "localhost", "[::1]"].includes(base.hostname)
    && !base.username && !base.password,
  "This smoke check is restricted to a loopback HTTP production server",
);
const outputDir = resolve(process.env.SECURITY_SMOKE_OUTPUT_DIR || "output/security-fixes-20261024/browser");
const checkoutEndpoint = "https://ossoggqkqifdkihybbew.supabase.co/functions/v1/create-checkout-session";
const routes = [
  "/", "/platform", "/pricing", "/contact", "/resources",
  "/resources/healthcare-procurement-outlook-q4-2026",
];
const results = { baseUrl: base.origin, node: process.version, checks: [], pages: [], policyProbes: null };
await mkdir(outputDir, { recursive: true });
const profile = await mkdtemp(join(tmpdir(), "civant-security-browser-"));
let browser;

async function check(name, action) {
  try {
    const evidence = await action();
    results.checks.push({ name, passed: true, evidence });
    console.log(`PASS ${name}`);
  } catch (error) {
    results.checks.push({ name, passed: false, error: String(error?.stack || error) });
    console.error(`FAIL ${name}: ${error?.message || error}`);
  }
}

async function createPage({ mobile = false, checkoutProbe = false } = {}) {
  const page = await browser.newPage();
  const diagnostics = { pageErrors: [], consoleErrors: [], failedResources: [], badResponses: [], blockedRequests: [], mockedCheckoutRequests: [] };
  page.setDefaultTimeout(15000);
  page.setDefaultNavigationTimeout(30000);
  await page.setCacheEnabled(false);
  await page.setViewport(mobile ? { width: 390, height: 844, isMobile: true, hasTouch: true } : { width: 1440, height: 1000 });
  await page.evaluateOnNewDocument(() => {
    window.__securityViolations = [];
    document.addEventListener("securitypolicyviolation", (event) => {
      window.__securityViolations.push({
        directive: event.effectiveDirective, blockedURI: event.blockedURI,
        disposition: event.disposition, sourceFile: event.sourceFile,
      });
    });
  });
  await page.setRequestInterception(true);
  page.on("request", (request) => {
    if (request.isInterceptResolutionHandled()) return;
    const url = new URL(request.url());
    const method = request.method();
    // The only permitted checkout request is a synthetic GET answered here.
    // No contact/report submission, payment call or external fetch reaches a server.
    if (checkoutProbe && request.url() === checkoutEndpoint && method === "GET") {
      diagnostics.mockedCheckoutRequests.push({ url: request.url(), method });
      void request.respond({ status: 200, contentType: "application/json", headers: { "access-control-allow-origin": base.origin }, body: '{"smokeProbe":true}' });
      return;
    }
    if (!["GET", "HEAD"].includes(method) || (url.protocol !== "data:" && url.origin !== base.origin) || url.pathname.startsWith("/api/")) {
      diagnostics.blockedRequests.push({ url: request.url(), method });
      void request.abort("blockedbyclient");
      return;
    }
    void request.continue();
  });
  page.on("pageerror", (error) => diagnostics.pageErrors.push(String(error)));
  page.on("console", (message) => {
    if (message.type() === "error") diagnostics.consoleErrors.push(message.text());
  });
  page.on("requestfailed", (request) => {
    if (new URL(request.url()).origin === base.origin) diagnostics.failedResources.push({ url: request.url(), error: request.failure()?.errorText });
  });
  page.on("response", (response) => {
    if (new URL(response.url()).origin === base.origin && response.status() >= 400) diagnostics.badResponses.push({ url: response.url(), status: response.status() });
  });
  return { page, diagnostics };
}

async function visit(page, route) {
  const response = await page.goto(new URL(route, base).href, { waitUntil: "networkidle0" });
  assert.equal(response?.status(), 200);
  const policy = response.headers()["content-security-policy"];
  assert.ok(policy, "Response must carry an enforced CSP");
  assert.ok(!policy.includes("'unsafe-eval'"), "Use the production build, not next dev");
  await page.waitForSelector("main h1");
  return policy;
}

async function assertHealthy(page, diagnostics) {
  assert.deepEqual(diagnostics.pageErrors, [], "Unexpected page errors");
  assert.deepEqual(diagnostics.consoleErrors, [], "Unexpected browser console errors");
  assert.deepEqual(diagnostics.failedResources, [], "Failed local resource requests");
  assert.deepEqual(diagnostics.badResponses, [], "Local resources returned errors");
  assert.deepEqual(diagnostics.blockedRequests, [], "Page attempted an external or side-effect request");
  assert.deepEqual(await page.evaluate(() => window.__securityViolations), [], "Unexpected CSP violations");
}

try {
  // GitHub's Ubuntu runner supplies CHROME_BIN=/usr/bin/google-chrome.
  // Explicit executable settings do not silently fall back to another browser.
  const configuredChrome = process.env.CHROME_PATH || process.env.PUPPETEER_EXECUTABLE_PATH || process.env.CHROME_BIN;
  const candidates = configuredChrome ? [configuredChrome] : [
    "/usr/bin/google-chrome", "/usr/bin/google-chrome-stable",
    "/usr/bin/chromium", "/usr/bin/chromium-browser",
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  ];
  let executablePath;
  for (const candidate of candidates) {
    try {
      await access(candidate, constants.X_OK);
      executablePath = candidate;
      break;
    } catch { /* Try only installed executable candidates. */ }
  }
  assert.ok(executablePath, "No executable Chrome found. Set CHROME_PATH to an installed Chrome or Chromium binary.");
  results.browserExecutable = executablePath;
  browser = await puppeteer.launch({
    executablePath,
    userDataDir: profile,
    headless: true,
    args: ["--disable-background-networking", "--disable-component-update", "--no-first-run"],
  });
  results.browser = await browser.version();

  for (const route of routes) {
    await check(`render ${route}`, async () => {
      const { page, diagnostics } = await createPage();
      const evidence = { route, diagnostics };
      results.pages.push(evidence);
      try {
        evidence.policy = await visit(page, route);
        // Exercise lazy image optimization on the full page, not just the hero.
        evidence.assets = await page.evaluate(async () => {
          const images = [...document.images];
          for (const img of images) img.loading = "eager";
          const decoded = await Promise.all(images.map(async (img) => {
            try { await img.decode(); } catch { /* Report failed images below. */ }
            return { src: img.currentSrc || img.src, width: img.naturalWidth, complete: img.complete };
          }));
          await document.fonts.ready;
          return {
            images: decoded,
            fonts: [...document.fonts].map(({ family, status }) => ({ family, status })),
            fontResources: performance.getEntriesByType("resource").filter(({ name }) => /\.woff2?(?:\?|$)/.test(name)).map(({ name }) => name),
          };
        });
        assert.ok(evidence.assets.images.length > 0);
        assert.ok(evidence.assets.images.every(({ width, complete }) => width > 0 && complete), "Every page image must decode");
        assert.ok(evidence.assets.fonts.some(({ status }) => status === "loaded"), "The local web font must load");
        assert.ok(evidence.assets.fontResources.length > 0, "A self-hosted font resource must be fetched");
        await assertHealthy(page, diagnostics);
        evidence.screenshot = join(outputDir, `${route === "/" ? "home" : route.slice(1).replaceAll("/", "-")}.png`);
        await page.screenshot({ path: evidence.screenshot, fullPage: true });
        return { images: evidence.assets.images.length, fonts: evidence.assets.fontResources.length, screenshot: evidence.screenshot };
      } finally {
        await page.close();
      }
    });
  }

  await check("desktop client navigation and pricing form hydration", async () => {
    const { page, diagnostics } = await createPage();
    try {
      await visit(page, "/");
      await page.click(".site-nav-desktop a.site-nav-trigger[href='/platform']");
      await page.waitForFunction(() => location.pathname === "/platform" && !!document.querySelector("main h1"));
      await page.click("a.site-cta-desktop[href='/pricing']");
      await page.waitForFunction(() => location.pathname === "/pricing" && !!document.querySelector("#plans"));
      await page.click("#plans button.btn");
      await page.waitForSelector(".pricing-signup-modal", { visible: true });
      assert.equal(await page.$eval(".pricing-signup-modal button[type='submit']", (button) => button.disabled), true);
      await page.type(".pricing-signup-modal input[autocomplete='organization']", "Security Smoke");
      await page.type(".pricing-signup-modal input[autocomplete='name']", "Local Test");
      await page.type(".pricing-signup-modal input[type='email']", "invalid-email");
      await page.waitForFunction(() => document.querySelector(".pricing-signup-workspace-preview")?.textContent.includes("security-smoke"));
      assert.equal(await page.$eval(".pricing-signup-modal button[type='submit']", (button) => button.disabled), true, "Invalid email must keep checkout disabled");
      await page.keyboard.press("Escape");
      await page.waitForSelector(".pricing-signup-modal", { hidden: true });
      await assertHealthy(page, diagnostics);
      return { navigation: "home > platform > pricing", invalidEmailCheckoutDisabled: true, networkSubmissions: 0 };
    } finally { await page.close(); }
  });

  await check("mobile menu and invalid contact form", async () => {
    const { page, diagnostics } = await createPage({ mobile: true });
    try {
      await visit(page, "/");
      await page.click("button.site-mobile-toggle");
      await page.waitForSelector("#site-mobile-menu", { visible: true });
      assert.equal(await page.$eval(".site-mobile-toggle", (button) => button.getAttribute("aria-expanded")), "true");
      await page.click("#site-mobile-menu a[href='/contact']");
      await page.waitForFunction(() => location.pathname === "/contact" && !!document.querySelector("#contact-name"));
      await page.waitForSelector("#site-mobile-menu", { hidden: true });
      assert.equal(await page.$eval(".contact-live-primary-form button[type='submit']", (button) => button.disabled), true);
      await page.click(".contact-live-primary-form input[type='checkbox'][required]");
      await page.waitForFunction(() => !document.querySelector(".contact-live-primary-form button[type='submit']").disabled);
      await page.click(".contact-live-primary-form button[type='submit']");
      assert.equal(await page.$eval("#contact-name", (input) => input.validity.valueMissing), true);
      await page.type("#contact-name", "Local Test");
      await page.type("#contact-email", "invalid-email");
      await page.click(".contact-live-primary-form button[type='submit']");
      assert.equal(await page.$eval("#contact-email", (input) => input.validity.typeMismatch), true);
      await assertHealthy(page, diagnostics);
      await page.screenshot({ path: join(outputDir, "mobile-contact.png"), fullPage: true });
      return { menuNavigation: true, consentStateHydrated: true, emptyAndInvalidFieldsBlocked: true, networkSubmissions: 0 };
    } finally { await page.close(); }
  });

  await check("browser enforces CSP and permits only the mocked checkout connection", async () => {
    const { page, diagnostics } = await createPage({ checkoutProbe: true });
    results.policyProbes = { diagnostics };
    try {
      await visit(page, "/");
      await assertHealthy(page, diagnostics);
      await page.evaluate(() => {
        const inline = document.createElement("script");
        // Run eval in a new browser task, outside the DevTools evaluation stack.
        inline.textContent = "window.__inlineAllowed = true; setTimeout(() => { try { eval('window.__evalExecuted = true'); } catch (error) { window.__evalBlocked = error.name; } }, 0);";
        document.body.append(inline);
        const external = document.createElement("script");
        external.src = "data:text/javascript,window.__dataScriptExecuted=true";
        document.body.append(external);
        const button = document.createElement("button");
        button.setAttribute("onclick", "window.__eventHandlerExecuted=true");
        document.body.append(button);
        button.click();
        const frame = document.createElement("iframe");
        frame.src = "https://security-probe.invalid/frame";
        document.body.append(frame);
        const form = document.createElement("form");
        form.action = "https://security-probe.invalid/form";
        document.body.append(form);
        form.submit();
        void fetch("https://security-probe.invalid/data").catch(() => {});
      });
      try {
        await page.waitForFunction(() => ["script-src", "script-src-elem", "script-src-attr", "frame-src", "form-action", "connect-src"].every((directive) => window.__securityViolations.some((event) => event.directive === directive)));
      } catch {
        results.policyProbes.violations = await page.evaluate(() => window.__securityViolations);
        throw new Error(`Missing expected browser CSP rejections; observed ${JSON.stringify(results.policyProbes.violations)}`);
      }
      const probes = await page.evaluate(() => ({
        inlineAllowed: window.__inlineAllowed === true,
        evalBlocked: window.__evalBlocked === "EvalError",
        evalExecuted: window.__evalExecuted === true,
        dataScriptExecuted: window.__dataScriptExecuted === true,
        eventHandlerExecuted: window.__eventHandlerExecuted === true,
        violations: window.__securityViolations,
      }));
      assert.equal(probes.inlineAllowed, true, "Document the inline hydration permission as a residual limitation");
      assert.equal(probes.evalBlocked, true);
      assert.equal(probes.evalExecuted, false);
      assert.equal(probes.dataScriptExecuted, false);
      assert.equal(probes.eventHandlerExecuted, false);
      assert.equal(new URL(page.url()).origin, base.origin, "Cross-origin form must not navigate");
      assert.ok(probes.violations.every(({ disposition }) => disposition === "enforce"));
      const checkout = await page.evaluate(async (url) => (await fetch(url)).json(), checkoutEndpoint);
      assert.deepEqual(checkout, { smokeProbe: true });
      assert.equal(diagnostics.mockedCheckoutRequests.length, 1);
      assert.deepEqual(diagnostics.blockedRequests, [], "Prohibited requests must be stopped by CSP before network interception");
      results.policyProbes = { ...probes, diagnostics };
      return { directivesEnforced: [...new Set(probes.violations.map(({ directive }) => directive))], checkoutConnectionMocked: true, inlineScriptResidualConfirmed: true };
    } finally { await page.close(); }
  });
} catch (error) {
  results.checks.push({ name: "browser setup", passed: false, error: String(error?.stack || error) });
} finally {
  if (browser) await browser.close();
  await rm(profile, { recursive: true, force: true });
  results.passed = results.checks.length === routes.length + 3 && results.checks.every(({ passed }) => passed);
  await writeFile(join(outputDir, "summary.json"), `${JSON.stringify(results, null, 2)}\n`);
  console.log(`Browser evidence: ${join(outputDir, "summary.json")}`);
  if (!results.passed) process.exitCode = 1;
}
