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
  { href: "/use-cases", label: "Use Cases" },
  { href: "/methodology", label: "Methodology" },
  { href: "/pricing", label: "Pricing" },
  { href: "/resources", label: "Resources" },
  { href: "/company", label: "Company" },
  { href: "/contact", label: "Contact" },
];

export const RESOURCE_ARTICLE_ROUTES: ContentRoute[] = [
  {
    href: "/resources/what-is-procurement-intelligence",
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    href: "/resources/public-procurement-cycles",
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    href: "/resources/contract-lifecycle-signals",
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    href: "/resources/beyond-raw-data-extracting-insights-from-historical-contract-records",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    href: "/resources/detecting-procurement-patterns-what-past-awards-reveal-about-future-tenders",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    href: "/resources/unified-data-hubs-the-case-for-aggregated-procurement-intelligence",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    href: "/resources/measuring-market-competitiveness-interpreting-supplier-participation-data",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    href: "/resources/early-market-engagement-techniques-to-shape-procurement-requirements",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    href: "/resources/predictive-renewal-signals-forecasting-contract-expiration-and-next-tenders",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    href: "/resources/maximising-preparation-windows-how-long-before-tender-publication-should-suppliers-act",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    href: "/resources/shrinking-tender-windows-impact-of-planned-procurement-notices",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    href: "/resources/renewal-cycles-how-contract-expiry-drives-tender-pipelines",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    href: "/resources/how-contract-renewal-signals-transform-bid-strategy",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    href: "/resources/the-role-of-framework-agreements-in-sustaining-supplier-relationships",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    href: "/resources/framework-agreements-vs-dynamic-purchasing-systems-opportunities-and-constraints",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    href: "/resources/proactive-vs-reactive-bidding-developing-a-winning-strategy",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    href: "/resources/reactive-bidding-vs-proactive-planning-the-timing-challenge",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    href: "/resources/winning-through-positioning-differentiation-in-a-highly-regulated-market",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    href: "/resources/pricing-analysis-in-public-tenders-challenges-and-opportunities",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    href: "/resources/strategic-sourcing-vs-routine-procurement-how-market-structure-influences-approach",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    href: "/resources/building-internal-capacity-for-public-tendering-lessons-for-smes",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    href: "/resources/sme-participation-patterns-overcoming-barriers-in-european-public-procurement",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    href: "/resources/the-incumbent-advantage-why-new-entrants-struggle-in-public-procurement",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    href: "/resources/partnering-for-success-collaboration-strategies-in-public-contracts",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    href: "/resources/navigating-compliance-and-eligibility-in-eu-procurement",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    href: "/resources/centralised-vs-local-procurement-structural-differences-across-the-eu",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    href: "/resources/fragmented-portals-and-the-challenge-of-early-visibility",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    href: "/resources/confidence-scoring-prioritising-opportunities-with-ailike-methods",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    href: "/resources/early-engagement-leveraging-prior-information-and-premarket-engagement-notices",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    href: "/resources/preprocurement-signals-decoding-meeting-minutes-and-budget-reports",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    href: "/resources/procurement-market-size-assessing-the-14-of-eu-gdp-opportunity",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    href: "/resources/timetoopportunity-why-speed-of-tender-discovery-matters",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    href: "/resources/understanding-contract-lifecycles-from-oneoff-contracts-to-multiyear-frameworks",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    href: "/resources/the-preparation-gap-in-european-public-procurement",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    href: "/resources/contract-lifecycle-patterns-in-european-public-procurement",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    href: "/resources/the-incumbent-advantage-in-public-sector-procurement",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    href: "/resources/pre-information-notices-as-procurement-signals",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    href: "/resources/single-bidder-contracts-and-the-competition-deficit-in-eu-procurement",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    href: "/resources/framework-agreements-and-their-impact-on-procurement-competition",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    href: "/resources/the-role-of-procurement-data-in-strategic-market-intelligence",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    href: "/resources/procurement-timing-dynamics-across-european-markets",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    href: "/resources/cross-border-procurement-in-the-eu-single-market",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    href: "/resources/the-hidden-cost-of-reactive-bidding-in-public-procurement",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    href: "/resources/how-contracting-authorities-plan-procurement",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    href: "/resources/sector-specific-procurement-dynamics-in-healthcare",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    href: "/resources/defence-procurement-trends-and-their-market-implications",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    href: "/resources/the-digital-transformation-of-european-procurement-systems",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    href: "/resources/procurement-intelligence-for-smes",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    href: "/resources/understanding-procurement-thresholds-in-the-eu",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    href: "/resources/the-relationship-between-contract-value-and-competition-levels",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    href: "/resources/preliminary-market-consultations-as-competitive-intelligence",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    href: "/resources/dynamic-purchasing-systems-and-their-growing-role-in-eu-procurement",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    href: "/resources/procurement-data-quality-across-european-markets",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    href: "/resources/the-geography-of-eu-procurement-spending",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    href: "/resources/centralised-purchasing-organisations-and-market-concentration",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    href: "/resources/environmental-and-social-value-in-procurement-evaluation",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    href: "/resources/procurement-signals-beyond-formal-notices",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    href: "/resources/the-economics-of-bid-no-bid-decisions",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    href: "/resources/consortium-bidding-in-european-procurement",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    href: "/resources/contract-modification-notices-as-market-intelligence",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    href: "/resources/the-impact-of-eu-procurement-reform-on-market-competition",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    href: "/resources/procurement-intelligence-maturity",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    href: "/resources/building-a-procurement-intelligence-function",
    changeFrequency: "monthly",
    priority: 0.6,
  },
];