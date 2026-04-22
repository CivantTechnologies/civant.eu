const urls = [
  "http://127.0.0.1:3000/",
  "http://127.0.0.1:3000/platform",
  "http://127.0.0.1:3000/use-cases",
  "http://127.0.0.1:3000/methodology",
  "http://127.0.0.1:3000/pricing",
  "http://127.0.0.1:3000/contact",
];

module.exports = {
  ci: {
    collect: {
      startServerCommand: "npm run marketing:start -- --hostname 127.0.0.1 --port 3000",
      startServerReadyPattern: "Ready",
      startServerReadyTimeout: 30000,
      url: urls,
      numberOfRuns: 1,
      settings: {
        preset: "desktop",
        chromeFlags: "--headless=new --no-sandbox",
      },
    },
    assert: {
      assertions: {
        "categories:performance": ["error", { minScore: 0.95 }],
        "categories:accessibility": ["error", { minScore: 1 }],
        "categories:best-practices": ["error", { minScore: 1 }],
        "categories:seo": ["error", { minScore: 1 }],
      },
    },
    upload: {
      target: "filesystem",
      outputDir: ".lighthouseci",
    },
  },
};
