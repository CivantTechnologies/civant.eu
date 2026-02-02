// scripts/prerender.mjs
import fs from "fs";
import path from "path";
import http from "http";
import { fileURLToPath } from "url";
import puppeteer from "puppeteer";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Routes you want as real HTML files (SSG output)
const ROUTES = ["/", "/challenge", "/solution", "/proof", "/about", "/contact"];

// Where Vite outputs the build
const DIST_DIR = path.resolve(__dirname, "..", "dist");

// Small static server to serve /dist locally so Puppeteer can render it
function serveStatic(distDir, port = 4173) {
  const server = http.createServer((req, res) => {
    const urlPath = decodeURIComponent((req.url || "/").split("?")[0]);

    // SPA fallback: always serve dist/index.html for routes without a file
    let filePath = path.join(distDir, urlPath);

    // If requesting a directory, try index.html
    if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
      filePath = path.join(filePath, "index.html");
    }

    // If file doesn't exist, fallback to SPA entry
    if (!fs.existsSync(filePath)) {
      filePath = path.join(distDir, "index.html");
    }

    try {
      const data = fs.readFileSync(filePath);
      res.writeHead(200, { "Content-Type": contentType(filePath) });
      res.end(data);
    } catch (e) {
      res.writeHead(500);
      res.end("Server error");
    }
  });

  return new Promise((resolve) => {
    server.listen(port, () => resolve(server));
  });
}

function contentType(filePath) {
  if (filePath.endsWith(".html")) return "text/html; charset=utf-8";
  if (filePath.endsWith(".css")) return "text/css; charset=utf-8";
  if (filePath.endsWith(".js")) return "application/javascript; charset=utf-8";
  if (filePath.endsWith(".json")) return "application/json; charset=utf-8";
  if (filePath.endsWith(".png")) return "image/png";
  if (filePath.endsWith(".jpg") || filePath.endsWith(".jpeg")) return "image/jpeg";
  if (filePath.endsWith(".svg")) return "image/svg+xml";
  return "application/octet-stream";
}

function ensureDir(p) {
  fs.mkdirSync(p, { recursive: true });
}

function routeToFile(route) {
  // "/" => dist/index.html
  // "/challenge" => dist/challenge/index.html
  if (route === "/") return path.join(DIST_DIR, "index.html");
  const clean = route.replace(/^\//, "");
  return path.join(DIST_DIR, clean, "index.html");
}

(async () => {
  if (!fs.existsSync(DIST_DIR)) {
    console.error("❌ dist folder not found. Run `npm run build` first.");
    process.exit(1);
  }

  const port = 4173;
  const server = await serveStatic(DIST_DIR, port);
  const baseUrl = `http://localhost:${port}`;

  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();

  // Make it deterministic + closer to Google
  await page.setViewport({ width: 1280, height: 800 });

  for (const route of ROUTES) {
    const url = `${baseUrl}${route}`;
    console.log(`➡️  Rendering ${url}`);

    await page.goto(url, { waitUntil: "networkidle0" });

    // Wait a tiny bit for any last animations/fonts
    await new Promise((r) => setTimeout(r, 250));

    const html = await page.content();
    const outFile = routeToFile(route);
    ensureDir(path.dirname(outFile));
    fs.writeFileSync(outFile, html, "utf-8");

    console.log(`✅ Wrote ${outFile.replace(DIST_DIR + path.sep, "dist/")}`);
  }

  await browser.close();
  server.close();

  console.log("🎉 Prerender complete. You should now have dist/<route>/index.html files.");
})();