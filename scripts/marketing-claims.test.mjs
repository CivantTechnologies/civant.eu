import assert from "node:assert/strict";
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import test from "node:test";

const projectRoot = process.cwd();
const publicSourceRoots = ["app", "components", "lib"];

async function read(relativePath) {
  return readFile(path.join(projectRoot, relativePath), "utf8");
}

async function collectSourceFiles(relativeDirectory) {
  const directory = path.join(projectRoot, relativeDirectory);
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const relativePath = path.join(relativeDirectory, entry.name);

    if (entry.isDirectory()) {
      files.push(...(await collectSourceFiles(relativePath)));
    } else if (/\.(?:ts|tsx|js|jsx|mjs)$/.test(entry.name)) {
      files.push(relativePath);
    }
  }

  return files;
}

test("the canonical Civant definition has one source of truth", async () => {
  const companySource = await read("lib/company.ts");
  const homeSource = await read("app/page.tsx");
  const understandingSource = await read("app/understanding-civant/page.tsx");
  const platformSource = await read("app/platform/page.tsx");
  const solutionsSource = await read("app/solutions/page.tsx");
  const methodologySource = await read("app/methodology/page.tsx");
  const marketsSource = await read("lib/markets.ts");
  const expectedDefinition =
    "Civant is a procurement intelligence platform with forecasting at its core.";

  assert.match(companySource, new RegExp(expectedDefinition.replaceAll(".", "\\.")));
  assert.match(homeSource, /CIVANT_DEFINITION/);
  assert.match(understandingSource, /answer: CIVANT_DEFINITION/);
  assert.match(platformSource, /CIVANT_DEFINITION/);
  assert.match(solutionsSource, /answer: CIVANT_DEFINITION/);
  assert.match(methodologySource, /CIVANT_SHORT_DEFINITION/);
  assert.match(marketsSource, /CIVANT_SHORT_DEFINITION/);
});

test("site-wide timing and identity language stays consistent with the P0 brief", async () => {
  const sourceFiles = (
    await Promise.all([...publicSourceRoots, "scripts"].map((root) => collectSourceFiles(root)))
  ).flat().filter((file) => file !== "scripts/marketing-claims.test.mjs");
  const siteSource = (
    await Promise.all(sourceFiles.map(async (file) => `${file}\n${await read(file)}`))
  ).join("\n");

  assert.doesNotMatch(
    siteSource,
    /\b(?:prepare|preparing|prepared|plan)\s+earlier\b|earlier preparation|ready to prepare/i,
  );

  const legacyDefinitions = [
    "Civant is a procurement forecasting intelligence platform",
    "Civant is a public procurement forecasting intelligence platform",
    "Civant is procurement forecasting software for B2G teams",
    "procurement intelligence platform for European B2G teams",
    "Irish procurement intelligence platform for European public-sector markets",
  ];

  for (const definition of legacyDefinitions) {
    assert.equal(
      siteSource.includes(definition),
      false,
      `Found legacy identity language: ${definition}`,
    );
  }
});

test("market status matches the platform-confirmed coverage snapshot", async () => {
  const marketsSource = await read("lib/markets.ts");
  const factsSource = await read("lib/siteFacts.ts");

  assert.equal((marketsSource.match(/status: "live"/g) ?? []).length, 8);
  assert.equal((marketsSource.match(/status: "coming"/g) ?? []).length, 2);
  assert.match(marketsSource, /country: "Netherlands"[\s\S]*?status: "coming"/);
  assert.match(marketsSource, /country: "Czechia"[\s\S]*?status: "coming"/);
  assert.match(factsSource, /dateIso: "2026-08-10"/);
});

test("data freshness copy reflects source-specific platform schedules", async () => {
  const pricingSource = await read("lib/pricing.ts");

  assert.match(pricingSource, /source-specific ingestion and refresh pipelines/);
  assert.doesNotMatch(pricingSource, /daily for tender data and weekly for award/);
  assert.match(pricingSource, /cached for up to seven days/);
});

test("programme names and undocumented aggregate validation figures stay out of public source", async () => {
  const sourceFiles = (
    await Promise.all(publicSourceRoots.map((root) => collectSourceFiles(root)))
  ).flat();
  const publicSource = (
    await Promise.all(sourceFiles.map(async (file) => `${file}\n${await read(file)}`))
  ).join("\n");

  const blockedClaims = [
    "Enterprise Ireland",
    "New Frontiers",
    "Local Enterprise Office",
    "Regional Development Centre",
    "Seedcorn finalist",
    "90.8%",
    "79K",
    "€1.1tn+",
  ];

  for (const claim of blockedClaims) {
    assert.equal(publicSource.includes(claim), false, `Found blocked public claim: ${claim}`);
  }
});

test("founder authorship resolves to a first-party Civant profile", async () => {
  const seoSource = await read("lib/seo.ts");
  const articleTemplateSource = await read("components/site/ResourceArticleTemplate.tsx");
  const founderPageSource = await read("app/team/david-manrique/page.tsx");

  assert.match(seoSource, /url: `\$\{SITE_URL\}\$\{founder\.profilePath\}`/);
  assert.match(articleTemplateSource, /href=\{founder\.profilePath\}/);
  assert.match(founderPageSource, /buildFounderPersonSchema/);
});

test("the future validation record remains unindexed until evidence is published", async () => {
  const validationPageSource = await read("app/validation/page.tsx");

  assert.match(validationPageSource, /index: false/);
  assert.match(validationPageSource, /follow: false/);
});

test("high-trust pages use product proof instead of synthetic scene imagery", async () => {
  const solutionsSource = await read("app/solutions/page.tsx");
  const useCasesSource = await read("app/use-cases/page.tsx");
  const resourcesSource = await read("app/resources/page.tsx");

  assert.match(solutionsSource, /screenshots\/finder-filters\.png/);
  assert.doesNotMatch(solutionsSource, /civant-evidence-engine\.webp/);
  assert.match(useCasesSource, /screenshots\/competitors\.png/);
  assert.doesNotMatch(useCasesSource, /civant-use-cases-boardroom\.webp/);
  assert.match(resourcesSource, /screenshots\/reports\.png/);
  assert.doesNotMatch(resourcesSource, /action-team-preparation\.jpg/);
});

test("buyer intelligence has a first-class platform path", async () => {
  const homeSource = await read("app/page.tsx");
  const platformSource = await read("app/platform/page.tsx");

  assert.match(homeSource, /\{ label: "Buyers", href: "\/platform#buyers" \}/);
  assert.match(platformSource, /slug: "buyers"/);
  assert.match(platformSource, /screenshot: "\/screenshots\/buyers\.png\?v=20260811-1"/);
  assert.match(platformSource, /Buyer Intelligence/);
});

test("resource index copy removes synthetic truncation and citation artifacts before display", async () => {
  const resourcesSource = await read("app/resources/page.tsx");

  assert.doesNotMatch(resourcesSource, /【\d|†L/);
  assert.match(resourcesSource, /function publicArticleSummary/);
  assert.match(resourcesSource, /description: publicArticleSummary\(article\)/);
});
