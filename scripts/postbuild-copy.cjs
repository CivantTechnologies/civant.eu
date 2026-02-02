const fs = require("fs");
const path = require("path");

const copies = [
  { from: "public/sitemap.xml", to: "dist/sitemap.xml" },
  { from: "public/robots.txt", to: "dist/robots.txt" },
  { from: "public/og-civant.png", to: "dist/og-civant.png" },
  { from: "public/favicon-32.png", to: "dist/favicon-32.png" },
  { from: "public/apple-touch-icon.png", to: "dist/apple-touch-icon.png" }
];

function copyFileSafe(src, dst) {
  const absSrc = path.resolve(src);
  const absDst = path.resolve(dst);

  if (!fs.existsSync(absSrc)) {
    console.warn(`[postbuild] Missing: ${src}`);
    return;
  }
  fs.mkdirSync(path.dirname(absDst), { recursive: true });
  fs.copyFileSync(absSrc, absDst);
  console.log(`[postbuild] Copied: ${src} -> ${dst}`);
}

copies.forEach(({ from, to }) => copyFileSafe(from, to));
