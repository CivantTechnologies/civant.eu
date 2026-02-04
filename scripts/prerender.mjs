import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import puppeteer from "puppeteer-core";
import chromium from "@sparticuz/chromium";

// ----------------------------
// Paths
// ----------------------------
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DIST_DIR = path.resolve(__dirname, "..", "dist");

// ----------------------------
// Config (edit only these if needed)
// ----------------------------
const PROD_ORIGIN = "https://civant.eu";
const OG_IMAGE_URL = `${PROD_ORIGIN}/og-civant.png?v=2`;

const routes = ["/", "/challenge", "/solution", "/proof", "/about", "/contact"];

const routeMeta = {
  "/": {
    title: "Public Procurement Intelligence & Early Signals | Civant",
    description:
      "Civant helps organisations identify public-sector procurement opportunities early using data, signals, and funding cycles across Europe.",
  },
  "/challenge": {
    title: "The Challenge | Civant",
    description:
      "Why procurement cycles are predictable — and why organisations still react too late.",
  },
  "/solution": {
    title: "The Solution | Civant",
    description:
      "Early signals and predictive intelligence that help teams prepare before tenders go live.",
  },
  "/proof": {
    title: "Validation & Evidence | Civant",
    description:
      "Feasibility-stage validation approach, data sources, assumptions, and confidence scoring.",
  },
  "/about": {
    title: "About Civant",
    description:
      "Civant is an Irish pre-revenue project focused on predictive public procurement intelligence.",
  },
  "/contact": {
    title: "Contact | Civant",
    description:
      "Get in touch with Civant regarding feasibility, partnerships, and early access.",
  },
};

// ----------------------------
// Helpers
// ----------------------------
async function ensureDir(dir) {
  await fs.promises.mkdir(dir, { recursive: true });
}

async function writeRouteHtml(route, html) {
  const outDir =
    route === "/" ? DIST_DIR : path.join(DIST_DIR, route.replace(/^\//, ""));
  await ensureDir(outDir);
  const outFile = path.join(outDir, "index.html");
  await fs.promises.writeFile(outFile, html, "utf8");
  console.log(`✅ Wrote ${path.relative(process.cwd(), outFile)}`);
}

function escapeAttr(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function upsertIntoHead(html, tag) {
  return html.replace(/<head[^>]*>/i, (m) => `${m}\n${tag}`);
}

function upsert(html, regex, tag) {
  if (regex.test(html)) return html.replace(regex, tag);
  return upsertIntoHead(html, tag);
}

function stripExistingOgAndTwitter(html) {
  html = html.replace(/<meta\s+property=["']og:[^>]*>\s*/gi, "");
  html = html.replace(/<meta\s+name=["']twitter:[^>]*>\s*/gi, "");
  return html;
}

function applyMeta(html, route) {
  const meta = routeMeta[route] || routeMeta["/"];
  const canonical = `${PROD_ORIGIN}${route === "/" ? "/" : route}`;

  // Title
  html = upsert(
    html,
    /<title>.*<\/title>/i,
    `<title>${escapeAttr(meta.title)}</title>`
  );

  // Description
  html = upsert(
    html,
    /<meta\s+name=["']description["'][^>]*>/i,
    `<meta name="description" content="${escapeAttr(meta.description)}">`
  );

  // Canonical
  html = upsert(
    html,
    /<link\s+rel=["']canonical["'][^>]*>/i,
    `<link rel="canonical" href="${canonical}">`
  );

  // Remove old OG/Twitter tags to avoid duplicates
  html = stripExistingOgAndTwitter(html);

  // Force OG + Twitter
  const ogBlock = `
<meta property="og:site_name" content="Civant">
<meta property="og:type" content="website">
<meta property="og:url" content="${canonical}">
<meta property="og:title" content="${escapeAttr(meta.title)}">
<meta property="og:description" content="${escapeAttr(meta.description)}">
<meta property="og:image" content="${OG_IMAGE_URL}">
<meta property="og:image:secure_url" content="${OG_IMAGE_URL}">
<meta property="og:image:type" content="image/png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="Civant — Public Procurement Intelligence">
`.trim();

  const twitterBlock = `
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${escapeAttr(meta.title)}">
<meta name="twitter:description" content="${escapeAttr(meta.description)}">
<meta name="twitter:image" content="${OG_IMAGE_URL}">
<meta name="twitter:image:alt" content="Civant — Public Procurement Intelligence">
`.trim();

  html = upsertIntoHead(html, ogBlock);
  html = upsertIntoHead(html, twitterBlock);

  // Remove localhost remnants from prerender capture
  html = html.replace(/http:\/\/localhost:4173/gi, PROD_ORIGIN);

  // Replace Base44 preview OG image if it appears anywhere
  html = html.replace(
    /https:\/\/[^"'\s]*supabase\.co\/storage\/v1\/object\/public\/base44-prod\/public\/civant-og-preview\.jpg/gi,
    OG_IMAGE_URL
  );

  // Also fix any accidental localhost og:url that might still exist
  html = html.replace(
    /<meta\s+property=["']og:url["'][^>]*>/i,
    `<meta property="og:url" content="${canonical}">`
  );

  return html;
}

function isVercelOrLambda() {
  return (
    process.env.VERCEL === "1" ||
    !!process.env.AWS_LAMBDA_FUNCTION_NAME ||
    !!process.env.LAMBDA_TASK_ROOT
  );
}

async function getExecutablePath() {
  // Serverless (Vercel): use Sparticuz Chromium
  if (isVercelOrLambda()) return await chromium.executablePath();

  // Local Mac: use installed Google Chrome (most reliable)
  if (process.env.CHROME_PATH && fs.existsSync(process.env.CHROME_PATH)) {
    return process.env.CHROME_PATH;
  }

  const macChrome =
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
  if (fs.existsSync(macChrome)) return macChrome;

  // If you use Chromium via Homebrew or another path, set CHROME_PATH.
  throw new Error(
    "Local Chrome not found. Install Google Chrome or set CHROME_PATH to your Chrome/Chromium executable."
  );
}

// ----------------------------
// Main
// ----------------------------
async function run() {
  // Serve dist locally for SPA routing during prerender
  const http = await import("node:http");
  const serveHandler = (await import("serve-handler")).default;

  const server = http.createServer((req, res) =>
    serveHandler(req, res, { public: DIST_DIR })
  );

  await new Promise((resolve) => server.listen(4173, resolve));
  console.log("🟢 Serving dist on http://localhost:4173");

  const executablePath = await getExecutablePath();

  const browser = await puppeteer.launch({
    executablePath,
    headless: true,
    args: isVercelOrLambda() ? chromium.args : [],
  });

  try {
    const page = await browser.newPage();

    for (const route of routes) {
      const url = `http://localhost:4173${route}`;
      console.log(`➡️ Rendering ${url}`);

      await page.goto(url, { waitUntil: "networkidle0" });

      const html = applyMeta(await page.content(), route);
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