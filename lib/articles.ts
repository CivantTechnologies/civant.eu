/**
 * Article metadata registry for internal cross-linking.
 * Each article belongs to a pillar (topic cluster).
 * The getRelatedArticles() helper returns articles from the
 * same pillar first, then nearby pillars, excluding the current article.
 */

export type ArticleMeta = {
  href: string;
  title: string;
  pillar: string;
};

export const PILLAR_ORDER = [
  "Market Intelligence",
  "Timing & Signals",
  "Contract Lifecycle",
  "Strategy",
  "SME Access",
  "Market Structure",
] as const;

export type Pillar = (typeof PILLAR_ORDER)[number];

export const ARTICLES: ArticleMeta[] = [
  // --- Market Intelligence ---
  { href: "/resources/beyond-raw-data-extracting-insights-from-historical-contract-records", title: "Beyond Raw Data: Extracting Insights from Historical Contract Records", pillar: "Market Intelligence" },
  { href: "/resources/detecting-procurement-patterns-what-past-awards-reveal-about-future-tenders", title: "Detecting Procurement Patterns: What Past Awards Reveal About Future Tenders", pillar: "Market Intelligence" },
  { href: "/resources/unified-data-hubs-the-case-for-aggregated-procurement-intelligence", title: "Unified Data Hubs: The Case for Aggregated Procurement Intelligence", pillar: "Market Intelligence" },
  { href: "/resources/measuring-market-competitiveness-interpreting-supplier-participation-data", title: "Measuring Market Competitiveness: Interpreting Supplier Participation Data", pillar: "Market Intelligence" },
  { href: "/resources/confidence-scoring-prioritising-opportunities-with-ailike-methods", title: "Confidence Scoring: Prioritising Opportunities with AI-Like Methods", pillar: "Market Intelligence" },
  { href: "/resources/procurement-market-size-assessing-the-14-of-eu-gdp-opportunity", title: "Procurement Market Size: Assessing the 14% of EU GDP Opportunity", pillar: "Market Intelligence" },
  { href: "/resources/timetoopportunity-why-speed-of-tender-discovery-matters", title: "Time-to-Opportunity: Why Speed of Tender Discovery Matters", pillar: "Market Intelligence" },
  { href: "/resources/single-bidder-contracts-and-the-competition-deficit-in-eu-procurement", title: "Single-Bidder Contracts and the Competition Deficit in EU Procurement", pillar: "Market Intelligence" },
  { href: "/resources/the-role-of-procurement-data-in-strategic-market-intelligence", title: "The Role of Procurement Data in Strategic Market Intelligence", pillar: "Market Intelligence" },
  { href: "/resources/cross-border-procurement-in-the-eu-single-market", title: "Cross-Border Procurement in the EU Single Market", pillar: "Market Intelligence" },
  { href: "/resources/how-contracting-authorities-plan-procurement", title: "How Contracting Authorities Plan Procurement", pillar: "Market Intelligence" },
  { href: "/resources/defence-procurement-trends-and-their-market-implications", title: "Defence Procurement Trends and Their Market Implications", pillar: "Market Intelligence" },
  { href: "/resources/the-relationship-between-contract-value-and-competition-levels", title: "The Relationship Between Contract Value and Competition Levels", pillar: "Market Intelligence" },
  { href: "/resources/preliminary-market-consultations-as-competitive-intelligence", title: "Preliminary Market Consultations as Competitive Intelligence", pillar: "Market Intelligence" },
  { href: "/resources/procurement-data-quality-across-european-markets", title: "Procurement Data Quality Across European Markets", pillar: "Market Intelligence" },
  { href: "/resources/the-geography-of-eu-procurement-spending", title: "The Geography of EU Procurement Spending", pillar: "Market Intelligence" },
  { href: "/resources/centralised-purchasing-organisations-and-market-concentration", title: "Centralised Purchasing Organisations and Market Concentration", pillar: "Market Intelligence" },
  { href: "/resources/the-impact-of-eu-procurement-reform-on-market-competition", title: "The Impact of EU Procurement Reform on Market Competition", pillar: "Market Intelligence" },
  { href: "/resources/procurement-intelligence-maturity", title: "Procurement Intelligence Maturity", pillar: "Market Intelligence" },
  { href: "/resources/building-a-procurement-intelligence-function", title: "Building a Procurement Intelligence Function", pillar: "Market Intelligence" },
  { href: "/resources/what-is-procurement-intelligence", title: "What Is Procurement Intelligence?", pillar: "Market Intelligence" },
  { href: "/resources/competitor-intelligence-in-public-procurement", title: "Competitor Intelligence in Public Procurement", pillar: "Market Intelligence" },

  // --- Timing & Signals ---
  { href: "/resources/external-signals-in-public-procurement", title: "External Signals in Public Procurement", pillar: "Timing & Signals" },
  { href: "/resources/early-market-engagement-techniques-to-shape-procurement-requirements", title: "Early Market Engagement: Techniques to Shape Procurement Requirements", pillar: "Timing & Signals" },
  { href: "/resources/predictive-renewal-signals-forecasting-contract-expiration-and-next-tenders", title: "Predictive Renewal Signals: Forecasting Contract Expiration and Next Tenders", pillar: "Timing & Signals" },
  { href: "/resources/maximising-preparation-windows-how-long-before-tender-publication-should-suppliers-act", title: "Maximising Preparation Windows: How Long Before Tender Publication Should Suppliers Act?", pillar: "Timing & Signals" },
  { href: "/resources/shrinking-tender-windows-impact-of-planned-procurement-notices", title: "Shrinking Tender Windows: Impact of Planned Procurement Notices", pillar: "Timing & Signals" },
  { href: "/resources/early-engagement-leveraging-prior-information-and-premarket-engagement-notices", title: "Early Engagement: Leveraging Prior Information and Pre-Market Engagement Notices", pillar: "Timing & Signals" },
  { href: "/resources/preprocurement-signals-decoding-meeting-minutes-and-budget-reports", title: "Pre-Procurement Signals: Decoding Meeting Minutes and Budget Reports", pillar: "Timing & Signals" },
  { href: "/resources/the-preparation-gap-in-european-public-procurement", title: "The Preparation Gap in European Public Procurement", pillar: "Timing & Signals" },
  { href: "/resources/pre-information-notices-as-procurement-signals", title: "Pre-Information Notices as Procurement Signals", pillar: "Timing & Signals" },
  { href: "/resources/procurement-timing-dynamics-across-european-markets", title: "Procurement Timing Dynamics Across European Markets", pillar: "Timing & Signals" },
  { href: "/resources/procurement-signals-beyond-formal-notices", title: "Procurement Signals Beyond Formal Notices", pillar: "Timing & Signals" },

  // --- Contract Lifecycle ---
  { href: "/resources/renewal-cycles-how-contract-expiry-drives-tender-pipelines", title: "Renewal Cycles: How Contract Expiry Drives Tender Pipelines", pillar: "Contract Lifecycle" },
  { href: "/resources/how-contract-renewal-signals-transform-bid-strategy", title: "How Contract Renewal Signals Transform Bid Strategy", pillar: "Contract Lifecycle" },
  { href: "/resources/the-role-of-framework-agreements-in-sustaining-supplier-relationships", title: "The Role of Framework Agreements in Sustaining Supplier Relationships", pillar: "Contract Lifecycle" },
  { href: "/resources/framework-agreements-vs-dynamic-purchasing-systems-opportunities-and-constraints", title: "Framework Agreements vs Dynamic Purchasing Systems: Opportunities and Constraints", pillar: "Contract Lifecycle" },
  { href: "/resources/understanding-contract-lifecycles-from-oneoff-contracts-to-multiyear-frameworks", title: "Understanding Contract Lifecycles: From One-Off Contracts to Multi-Year Frameworks", pillar: "Contract Lifecycle" },
  { href: "/resources/contract-lifecycle-patterns-in-european-public-procurement", title: "Contract Lifecycle Patterns in European Public Procurement", pillar: "Contract Lifecycle" },
  { href: "/resources/framework-agreements-and-their-impact-on-procurement-competition", title: "Framework Agreements and Their Impact on Procurement Competition", pillar: "Contract Lifecycle" },
  { href: "/resources/dynamic-purchasing-systems-and-their-growing-role-in-eu-procurement", title: "Dynamic Purchasing Systems and Their Growing Role in EU Procurement", pillar: "Contract Lifecycle" },
  { href: "/resources/contract-modification-notices-as-market-intelligence", title: "Contract Modification Notices as Market Intelligence", pillar: "Contract Lifecycle" },
  { href: "/resources/contract-lifecycle-signals", title: "Contract Lifecycle Signals", pillar: "Contract Lifecycle" },
  { href: "/resources/public-procurement-cycles", title: "Public Procurement Cycles", pillar: "Contract Lifecycle" },

  // --- Strategy ---
  { href: "/resources/proactive-vs-reactive-bidding-developing-a-winning-strategy", title: "Proactive vs Reactive Bidding: Developing a Winning Strategy", pillar: "Strategy" },
  { href: "/resources/reactive-bidding-vs-proactive-planning-the-timing-challenge", title: "Reactive Bidding vs Proactive Planning: The Timing Challenge", pillar: "Strategy" },
  { href: "/resources/winning-through-positioning-differentiation-in-a-highly-regulated-market", title: "Winning Through Positioning: Differentiation in a Highly Regulated Market", pillar: "Strategy" },
  { href: "/resources/pricing-analysis-in-public-tenders-challenges-and-opportunities", title: "Pricing Analysis in Public Tenders: Challenges and Opportunities", pillar: "Strategy" },
  { href: "/resources/strategic-sourcing-vs-routine-procurement-how-market-structure-influences-approach", title: "Strategic Sourcing vs Routine Procurement: How Market Structure Influences Approach", pillar: "Strategy" },
  { href: "/resources/the-hidden-cost-of-reactive-bidding-in-public-procurement", title: "The Hidden Cost of Reactive Bidding in Public Procurement", pillar: "Strategy" },

  // --- SME Access ---
  { href: "/resources/building-internal-capacity-for-public-tendering-lessons-for-smes", title: "Building Internal Capacity for Public Tendering: Lessons for SMEs", pillar: "SME Access" },
  { href: "/resources/sme-participation-patterns-overcoming-barriers-in-european-public-procurement", title: "SME Participation Patterns: Overcoming Barriers in European Public Procurement", pillar: "SME Access" },
  { href: "/resources/the-incumbent-advantage-why-new-entrants-struggle-in-public-procurement", title: "The Incumbent Advantage: Why New Entrants Struggle in Public Procurement", pillar: "SME Access" },
  { href: "/resources/partnering-for-success-collaboration-strategies-in-public-contracts", title: "Partnering for Success: Collaboration Strategies in Public Contracts", pillar: "SME Access" },
  { href: "/resources/navigating-compliance-and-eligibility-in-eu-procurement", title: "Navigating Compliance and Eligibility in EU Procurement", pillar: "SME Access" },
  { href: "/resources/procurement-intelligence-for-smes", title: "Procurement Intelligence for SMEs", pillar: "SME Access" },
  { href: "/resources/the-economics-of-bid-no-bid-decisions", title: "The Economics of Bid-No-Bid Decisions", pillar: "SME Access" },
  { href: "/resources/consortium-bidding-in-european-procurement", title: "Consortium Bidding in European Procurement", pillar: "SME Access" },

  // --- Market Structure ---
  { href: "/resources/centralised-vs-local-procurement-structural-differences-across-the-eu", title: "Centralised vs Local Procurement: Structural Differences Across the EU", pillar: "Market Structure" },
  { href: "/resources/fragmented-portals-and-the-challenge-of-early-visibility", title: "Fragmented Portals and the Challenge of Early Visibility", pillar: "Market Structure" },
  { href: "/resources/the-incumbent-advantage-in-public-sector-procurement", title: "The Incumbent Advantage in Public Sector Procurement", pillar: "Market Structure" },
  { href: "/resources/sector-specific-procurement-dynamics-in-healthcare", title: "Sector-Specific Procurement Dynamics in Healthcare", pillar: "Market Structure" },
  { href: "/resources/the-digital-transformation-of-european-procurement-systems", title: "The Digital Transformation of European Procurement Systems", pillar: "Market Structure" },
  { href: "/resources/understanding-procurement-thresholds-in-the-eu", title: "Understanding Procurement Thresholds in the EU", pillar: "Market Structure" },
  { href: "/resources/environmental-and-social-value-in-procurement-evaluation", title: "Environmental and Social Value in Procurement Evaluation", pillar: "Market Structure" },
  { href: "/resources/european-procurement-coverage-what-market-coverage-really-means", title: "European Procurement Coverage: What Market Coverage Really Means", pillar: "Market Structure" },
];

/**
 * Returns up to `count` related articles for the given path.
 * Prioritises same-pillar articles, then adjacent pillars.
 */
export function getRelatedArticles(currentPath: string, count = 4): ArticleMeta[] {
  const current = ARTICLES.find((a) => a.href === currentPath);
  if (!current) return ARTICLES.filter((a) => a.href !== currentPath).slice(0, count);

  const currentPillarIdx = PILLAR_ORDER.indexOf(current.pillar as Pillar);
  const samePillar = ARTICLES.filter(
    (a) => a.pillar === current.pillar && a.href !== currentPath
  );

  // Deterministic shuffle based on path length to vary results per article
  const seed = currentPath.length;
  const shuffled = [...samePillar].sort(
    (a, b) => ((a.title.length * seed) % 97) - ((b.title.length * seed) % 97)
  );

  if (shuffled.length >= count) return shuffled.slice(0, count);

  // Fill remaining slots from adjacent pillars
  const adjacentPillars = PILLAR_ORDER.filter((_, i) => {
    const dist = Math.abs(i - currentPillarIdx);
    return dist > 0 && dist <= 2;
  });

  const adjacent = ARTICLES.filter(
    (a) =>
      adjacentPillars.includes(a.pillar as Pillar) &&
      a.href !== currentPath &&
      !shuffled.some((s) => s.href === a.href)
  ).sort(
    (a, b) => ((a.title.length * seed) % 89) - ((b.title.length * seed) % 89)
  );

  return [...shuffled, ...adjacent].slice(0, count);
}
