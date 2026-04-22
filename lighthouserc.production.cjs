const urls = [
  "https://civant.eu/",
  "https://civant.eu/platform",
  "https://civant.eu/use-cases",
  "https://civant.eu/methodology",
  "https://civant.eu/pricing",
  "https://civant.eu/contact",
];

module.exports = {
  ci: {
    collect: {
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
      outputDir: ".lighthouseci-production",
    },
  },
};
