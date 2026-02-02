import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import puppeteer from "puppeteer-core";
import chromium from "@sparticuz/chromium";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DIST_DIR = path.resolve(__dirname, "..", "dist");

// ✅ Make sure this matches your routes
const routes = ["/", "/challenge", "/solution", "/proof", "/about", "/contact"];

async function ensureDir(dir) {
  await fs.promises.mkdir(dir, { recursive: true });
}

async function writeRouteHtml(route, html) {
  const outDir = route === "/" ? DIST_DIR : path.join(DIST_DIR, route.replace(/^\//, ""));
  await ensureDir(outDir);
  const outFile = path.join(outDir, "index.html");
  await fs.promises.writeFile(outFile, html, "utf8");
  console.log(`✅ Wrote ${path.relative(process.cwd(), outFile)}`);
}

async function run() {
  // Vercel build will not have a dev server running.
  // We use the built files by serving them via file:// is NOT reliable with SPA routing,
  // so we use a simple local server.
  const http = await import("node:http");
  const serveHandler = (await import("serve-handler")).default;

  const server = http.createServer((req, res) => serveHandler(req, res, { public: DIST_DIR }));
  await new Promise((resolve) => server.listen(4173, resolve));
  console.log("🟢 Serving dist on http://localhost:4173");

  const browser = await puppeteer.launch({
    args: chromium.args,
    defaultViewport: chromium.defaultViewport,
    executablePath: await chromium.executablePath(),
    headless: chromium.headless,
  });

  try {
    const page = await browser.newPage();

    for (const route of routes) {
      const url = `http://localhost:4173${route}`;
      console.log(`➡️ Rendering ${url}`);
      await page.goto(url, { waitUntil: "networkidle0" });

      // grab fully rendered HTML
      const html = await page.content();
      await writeRouteHtml(route, html);
    }

    console.log("🎉 Prerender complete.");
  } finally {
    await browser.close();
    server.close();
  }
}

run().catch((err) => {
  console.error("❌ Prerender failed:", err);
  process.exit(1);
});