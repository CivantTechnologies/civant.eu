export type SiteRoute = {
  href: string;
  label: string;
};

export type ContentRoute = {
  href: string;
  changeFrequency: "weekly" | "monthly";
  priority: number;
};

export const TOP_LEVEL_ROUTES: SiteRoute[] = [
  { href: "/", label: "Home" },
  { href: "/platform", label: "Platform" },
  { href: "/solutions", label: "Solutions" },
  { href: "/markets", label: "Markets" },
  { href: "/use-cases", label: "Use Cases" },
  { href: "/methodology", label: "Methodology" },
  { href: "/pricing", label: "Pricing" },
  { href: "/resources", label: "Resources" },
  { href: "/resources/reports", label: "Forecast Reports" },
  { href: "/company", label: "Company" },
  { href: "/contact", label: "Contact" },
];

export const REPORT_ROUTES: ContentRoute[] = [
  {
    href: "/resources/education-procurement-outlook-q4-2026",
    changeFrequency: "weekly",
    priority: 0.72,
  },
  {
    href: "/resources/healthcare-procurement-outlook-q4-2026",
    changeFrequency: "weekly",
    priority: 0.72,
  },
  {
    href: "/resources/public-construction-procurement-outlook-q4-2026",
    changeFrequency: "weekly",
    priority: 0.72,
  },
];

export const SOLUTION_ROUTES: ContentRoute[] = [
  {
    href: "/solutions/procurement-intelligence-software",
    changeFrequency: "weekly",
    priority: 0.78,
  },
  {
    href: "/solutions/tender-prediction-software",
    changeFrequency: "weekly",
    priority: 0.78,
  },
  {
    href: "/solutions/eu-tender-monitoring",
    changeFrequency: "weekly",
    priority: 0.76,
  },
  {
    href: "/solutions/public-procurement-intelligence",
    changeFrequency: "weekly",
    priority: 0.78,
  },
];

export const MARKET_ROUTES: ContentRoute[] = [
  { href: "/markets/ireland", changeFrequency: "weekly", priority: 0.75 },
  { href: "/markets/united-kingdom", changeFrequency: "weekly", priority: 0.75 },
  { href: "/markets/spain", changeFrequency: "weekly", priority: 0.75 },
  { href: "/markets/france", changeFrequency: "weekly", priority: 0.75 },
  { href: "/markets/italy", changeFrequency: "weekly", priority: 0.75 },
  { href: "/markets/finland", changeFrequency: "monthly", priority: 0.65 },
  { href: "/markets/belgium", changeFrequency: "monthly", priority: 0.65 },
  { href: "/markets/germany", changeFrequency: "monthly", priority: 0.65 },
  { href: "/markets/netherlands", changeFrequency: "monthly", priority: 0.65 },
];

export const RESOURCE_ARTICLE_ROUTES: ContentRoute[] = [
  {
    href: "/resources/what-is-procurement-intelligence",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    href: "/resources/public-procurement-cycles",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    href: "/resources/contract-lifecycle-signals",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    href: "/resources/beyond-raw-data-extracting-insights-from-historical-contract-records",
    changeFrequency: "weekly",
    priority: 0.6,
  },
  {
    href: "/resources/detecting-procurement-patterns-what-past-awards-reveal-about-future-tenders",
    changeFrequency: "weekly",
    priority: 0.6,
  },
  {
    href: "/resources/unified-data-hubs-the-case-for-aggregated-procurement-intelligence",
    changeFrequency: "weekly",
    priority: 0.6,
  },
  {
    href: "/resources/measuring-market-competitiveness-interpreting-supplier-participation-data",
    changeFrequency: "weekly",
    priority: 0.6,
  },
  {
    href: "/resources/early-market-engagement-techniques-to-shape-procurement-requirements",
    changeFrequency: "weekly",
    priority: 0.6,
  },
  {
    href: "/resources/predictive-renewal-signals-forecasting-contract-expiration-and-next-tenders",
    changeFrequency: "weekly",
    priority: 0.6,
  },
  {
    href: "/resources/maximising-preparation-windows-how-long-before-tender-publication-should-suppliers-act",
    changeFrequency: "weekly",
    priority: 0.6,
  },
  {
    href: "/resources/shrinking-tender-windows-impact-of-planned-procurement-notices",
    changeFrequency: "weekly",
    priority: 0.6,
  },
  {
    href: "/resources/renewal-cycles-how-contract-expiry-drives-tender-pipelines",
    changeFrequency: "weekly",
    priority: 0.6,
  },
  {
    href: "/resources/how-contract-renewal-signals-transform-bid-strategy",
    changeFrequency: "weekly",
    priority: 0.6,
  },
  {
    href: "/resources/the-role-of-framework-agreements-in-sustaining-supplier-relationships",
    changeFrequency: "weekly",
    priority: 0.6,
  },
  {
    href: "/resources/framework-agreements-vs-dynamic-purchasing-systems-opportunities-and-constraints",
    changeFrequency: "weekly",
    priority: 0.6,
  },
  {
    href: "/resources/proactive-vs-reactive-bidding-developing-a-winning-strategy",
    changeFrequency: "weekly",
    priority: 0.6,
  },
  {
    href: "/resources/reactive-bidding-vs-proactive-planning-the-timing-challenge",
    changeFrequency: "weekly",
    priority: 0.6,
  },
  {
    href: "/resources/winning-through-positioning-differentiation-in-a-highly-regulated-market",
    changeFrequency: "weekly",
    priority: 0.6,
  },
  {
    href: "/resources/pricing-analysis-in-public-tenders-challenges-and-opportunities",
    changeFrequency: "weekly",
    priority: 0.6,
  },
  {
    href: "/resources/strategic-sourcing-vs-routine-procurement-how-market-structure-influences-approach",
    changeFrequency: "weekly",
    priority: 0.6,
  },
  {
    href: "/resources/building-internal-capacity-for-public-tendering-lessons-for-smes",
    changeFrequency: "weekly",
    priority: 0.6,
  },
  {
    href: "/resources/sme-participation-patterns-overcoming-barriers-in-european-public-procurement",
    changeFrequency: "weekly",
    priority: 0.6,
  },
  {
    href: "/resources/the-incumbent-advantage-why-new-entrants-struggle-in-public-procurement",
    changeFrequency: "weekly",
    priority: 0.6,
  },
  {
    href: "/resources/partnering-for-success-collaboration-strategies-in-public-contracts",
    changeFrequency: "weekly",
    priority: 0.6,
  },
  {
    href: "/resources/navigating-compliance-and-eligibility-in-eu-procurement",
    changeFrequency: "weekly",
    priority: 0.6,
  },
  {
    href: "/resources/centralised-vs-local-procurement-structural-differences-across-the-eu",
    changeFrequency: "weekly",
    priority: 0.6,
  },
  {
    href: "/resources/fragmented-portals-and-the-challenge-of-early-visibility",
    changeFrequency: "weekly",
    priority: 0.6,
  },
  {
    href: "/resources/confidence-scoring-prioritising-opportunities-with-ailike-methods",
    changeFrequency: "weekly",
    priority: 0.6,
  },
  {
    href: "/resources/early-engagement-leveraging-prior-information-and-premarket-engagement-notices",
    changeFrequency: "weekly",
    priority: 0.6,
  },
  {
    href: "/resources/preprocurement-signals-decoding-meeting-minutes-and-budget-reports",
    changeFrequency: "weekly",
    priority: 0.6,
  },
  {
    href: "/resources/procurement-market-size-assessing-the-14-of-eu-gdp-opportunity",
    changeFrequency: "weekly",
    priority: 0.6,
  },
  {
    href: "/resources/timetoopportunity-why-speed-of-tender-discovery-matters",
    changeFrequency: "weekly",
    priority: 0.6,
  },
  {
    href: "/resources/understanding-contract-lifecycles-from-oneoff-contracts-to-multiyear-frameworks",
    changeFrequency: "weekly",
    priority: 0.6,
  },
  {
    href: "/resources/the-preparation-gap-in-european-public-procurement",
    changeFrequency: "weekly",
    priority: 0.6,
  },
  {
    href: "/resources/contract-lifecycle-patterns-in-european-public-procurement",
    changeFrequency: "weekly",
    priority: 0.6,
  },
  {
    href: "/resources/the-incumbent-advantage-in-public-sector-procurement",
    changeFrequency: "weekly",
    priority: 0.6,
  },
  {
    href: "/resources/pre-information-notices-as-procurement-signals",
    changeFrequency: "weekly",
    priority: 0.6,
  },
  {
    href: "/resources/single-bidder-contracts-and-the-competition-deficit-in-eu-procurement",
    changeFrequency: "weekly",
    priority: 0.6,
  },
  {
    href: "/resources/framework-agreements-and-their-impact-on-procurement-competition",
    changeFrequency: "weekly",
    priority: 0.6,
  },
  {
    href: "/resources/the-role-of-procurement-data-in-strategic-market-intelligence",
    changeFrequency: "weekly",
    priority: 0.6,
  },
  {
    href: "/resources/procurement-timing-dynamics-across-european-markets",
    changeFrequency: "weekly",
    priority: 0.6,
  },
  {
    href: "/resources/cross-border-procurement-in-the-eu-single-market",
    changeFrequency: "weekly",
    priority: 0.6,
  },
  {
    href: "/resources/the-hidden-cost-of-reactive-bidding-in-public-procurement",
    changeFrequency: "weekly",
    priority: 0.6,
  },
  {
    href: "/resources/how-contracting-authorities-plan-procurement",
    changeFrequency: "weekly",
    priority: 0.6,
  },
  {
    href: "/resources/sector-specific-procurement-dynamics-in-healthcare",
    changeFrequency: "weekly",
    priority: 0.6,
  },
  {
    href: "/resources/defence-procurement-trends-and-their-market-implications",
    changeFrequency: "weekly",
    priority: 0.6,
  },
  {
    href: "/resources/the-digital-transformation-of-european-procurement-systems",
    changeFrequency: "weekly",
    priority: 0.6,
  },
  {
    href: "/resources/procurement-intelligence-for-smes",
    changeFrequency: "weekly",
    priority: 0.6,
  },
  {
    href: "/resources/understanding-procurement-thresholds-in-the-eu",
    changeFrequency: "weekly",
    priority: 0.6,
  },
  {
    href: "/resources/the-relationship-between-contract-value-and-competition-levels",
    changeFrequency: "weekly",
    priority: 0.6,
  },
  {
    href: "/resources/preliminary-market-consultations-as-competitive-intelligence",
    changeFrequency: "weekly",
    priority: 0.6,
  },
  {
    href: "/resources/dynamic-purchasing-systems-and-their-growing-role-in-eu-procurement",
    changeFrequency: "weekly",
    priority: 0.6,
  },
  {
    href: "/resources/procurement-data-quality-across-european-markets",
    changeFrequency: "weekly",
    priority: 0.6,
  },
  {
    href: "/resources/the-geography-of-eu-procurement-spending",
    changeFrequency: "weekly",
    priority: 0.6,
  },
  {
    href: "/resources/centralised-purchasing-organisations-and-market-concentration",
    changeFrequency: "weekly",
    priority: 0.6,
  },
  {
    href: "/resources/environmental-and-social-value-in-procurement-evaluation",
    changeFrequency: "weekly",
    priority: 0.6,
  },
  {
    href: "/resources/procurement-signals-beyond-formal-notices",
    changeFrequency: "weekly",
    priority: 0.6,
  },
  {
    href: "/resources/the-economics-of-bid-no-bid-decisions",
    changeFrequency: "weekly",
    priority: 0.6,
  },
  {
    href: "/resources/consortium-bidding-in-european-procurement",
    changeFrequency: "weekly",
    priority: 0.6,
  },
  {
    href: "/resources/contract-modification-notices-as-market-intelligence",
    changeFrequency: "weekly",
    priority: 0.6,
  },
  {
    href: "/resources/the-impact-of-eu-procurement-reform-on-market-competition",
    changeFrequency: "weekly",
    priority: 0.6,
  },
  {
    href: "/resources/procurement-intelligence-maturity",
    changeFrequency: "weekly",
    priority: 0.6,
  },
  {
    href: "/resources/building-a-procurement-intelligence-function",
    changeFrequency: "weekly",
    priority: 0.6,
  },
];
