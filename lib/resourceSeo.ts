export type ResourceSeoOverride = {
  title?: string;
  description?: string;
};

/**
 * Search-only metadata overrides for long-form resources.
 * Visible article headlines and Article schema remain editorially unchanged.
 */
export const RESOURCE_SEO_OVERRIDES: Record<string, ResourceSeoOverride> = {
  "/resources/maximising-preparation-windows-how-long-before-tender-publication-should-suppliers-act": {
    title: "Tender Preparation Windows for Suppliers",
  },
  "/resources/strategic-sourcing-vs-routine-procurement-how-market-structure-influences-approach": {
    title: "Strategic vs Routine Procurement",
  },
  "/resources/understanding-contract-lifecycles-from-oneoff-contracts-to-multiyear-frameworks": {
    title: "Contract Lifecycles and Frameworks",
  },
  "/resources/framework-agreements-vs-dynamic-purchasing-systems-opportunities-and-constraints": {
    title: "Framework Agreements vs DPS",
  },
  "/resources/early-engagement-leveraging-prior-information-and-premarket-engagement-notices": {
    title: "Early Engagement and Prior Information Notices",
  },
  "/resources/sme-participation-patterns-overcoming-barriers-in-european-public-procurement": {
    title: "SME Barriers in European Procurement",
  },
  "/resources/detecting-procurement-patterns-what-past-awards-reveal-about-future-tenders": {
    title: "What Past Awards Reveal About Future Tenders",
  },
  "/resources/measuring-market-competitiveness-interpreting-supplier-participation-data": {
    title: "Measuring Procurement Market Competitiveness",
  },
  "/resources/winning-through-positioning-differentiation-in-a-highly-regulated-market": {
    title: "Positioning in Regulated Procurement Markets",
  },
  "/resources/the-incumbent-advantage-why-new-entrants-struggle-in-public-procurement": {
    title: "Why New Entrants Struggle in Procurement",
    description:
      "Why new entrants struggle against incumbents in public procurement, and how earlier intelligence and renewal tracking improve challenger strategy.",
  },
  "/resources/centralised-vs-local-procurement-structural-differences-across-the-eu": {
    title: "Centralised vs Local EU Procurement",
  },
  "/resources/beyond-raw-data-extracting-insights-from-historical-contract-records": {
    title: "Insights from Historical Contract Records",
  },
  "/resources/early-market-engagement-techniques-to-shape-procurement-requirements": {
    title: "Early Market Engagement for Suppliers",
    description:
      "A supplier guide to market consultations, supplier days and RFIs—and how to use pre-tender signals without creating compliance risk.",
  },
  "/resources/the-role-of-framework-agreements-in-sustaining-supplier-relationships": {
    title: "Framework Agreements and Supplier Relationships",
    description:
      "How framework agreements shape supplier relationships, market access, call-off competition, renewal timing, and challenger strategy.",
  },
  "/resources/single-bidder-contracts-and-the-competition-deficit-in-eu-procurement": {
    title: "Single-Bidder Contracts in EU Procurement",
  },
  "/resources/partnering-for-success-collaboration-strategies-in-public-contracts": {
    title: "Supplier Collaboration in Public Contracts",
  },
  "/resources/preprocurement-signals-decoding-meeting-minutes-and-budget-reports": {
    title: "Pre-Procurement Signals from Public Records",
  },
  "/resources/unified-data-hubs-the-case-for-aggregated-procurement-intelligence": {
    title: "Unified Procurement Intelligence Hubs",
  },
  "/resources/confidence-scoring-prioritising-opportunities-with-ailike-methods": {
    title: "Confidence Scoring for Procurement Opportunities",
    description:
      "How confidence scoring helps bid teams prioritise public-sector opportunities using lifecycle evidence, fit signals, and explainable criteria.",
  },
  "/resources/dynamic-purchasing-systems-and-their-growing-role-in-eu-procurement": {
    title: "Dynamic Purchasing Systems in EU Procurement",
  },
  "/resources/predictive-renewal-signals-forecasting-contract-expiration-and-next-tenders": {
    title: "Renewal Signals and Future Tenders",
  },
  "/resources/building-internal-capacity-for-public-tendering-lessons-for-smes": {
    title: "Building SME Tendering Capacity",
  },
  "/resources/pricing-analysis-in-public-tenders-challenges-and-opportunities": {
    title: "Pricing Analysis in Public Tenders",
  },
  "/resources/procurement-market-size-assessing-the-14-of-eu-gdp-opportunity": {
    title: "EU Public Procurement Market Size",
  },
  "/resources/framework-agreements-and-their-impact-on-procurement-competition": {
    title: "Framework Agreements and Procurement Competition",
  },
  "/resources/shrinking-tender-windows-impact-of-planned-procurement-notices": {
    title: "Shrinking Tender Windows and Planned Notices",
  },
  "/resources/the-relationship-between-contract-value-and-competition-levels": {
    title: "Contract Value and Procurement Competition",
  },
  "/resources/the-role-of-procurement-data-in-strategic-market-intelligence": {
    title: "Procurement Data for Market Intelligence",
  },
  "/resources/centralised-purchasing-organisations-and-market-concentration": {
    title: "Centralised Purchasing and Market Concentration",
  },
  "/resources/proactive-vs-reactive-bidding-developing-a-winning-strategy": {
    title: "Proactive vs Reactive Bidding Strategy",
  },
  "/resources/reactive-bidding-vs-proactive-planning-the-timing-challenge": {
    title: "Reactive Bidding and the Timing Challenge",
  },
  "/resources/preliminary-market-consultations-as-competitive-intelligence": {
    title: "Market Consultations as Competitive Intelligence",
  },
  "/resources/renewal-cycles-how-contract-expiry-drives-tender-pipelines": {
    title: "Renewal Cycles and Tender Pipelines",
  },
  "/resources/timetoopportunity-why-speed-of-tender-discovery-matters": {
    title: "Why Tender Discovery Speed Matters",
  },
  "/resources/contract-lifecycle-patterns-in-european-public-procurement": {
    title: "European Procurement Lifecycle Patterns",
  },
  "/resources/the-digital-transformation-of-european-procurement-systems": {
    title: "Digital Transformation of EU Procurement",
  },
  "/resources/the-hidden-cost-of-reactive-bidding-in-public-procurement": {
    title: "The Cost of Reactive Public-Sector Bidding",
    description:
      "Why reactive tender chasing raises bid costs and weakens preparation—and how procurement intelligence enables earlier, selective planning.",
  },
  "/resources/the-impact-of-eu-procurement-reform-on-market-competition": {
    title: "EU Procurement Reform and Market Competition",
  },
  "/resources/fragmented-portals-and-the-challenge-of-early-visibility": {
    title: "Fragmented Portals and Early Tender Visibility",
  },
  "/resources/defence-procurement-trends-and-their-market-implications": {
    title: "Defence Procurement Market Trends",
    description:
      "Defence procurement trends, including security-sensitive buying, long programme cycles, supplier barriers, and early strategic signals.",
  },
  "/resources/environmental-and-social-value-in-procurement-evaluation": {
    title: "Environmental and Social Value in Procurement",
  },
  "/resources/navigating-compliance-and-eligibility-in-eu-procurement": {
    title: "EU Procurement Compliance and Eligibility",
  },
  "/resources/the-incumbent-advantage-in-public-sector-procurement": {
    title: "The Incumbent Advantage in Public Procurement",
    description:
      "Why incumbents hold structural advantages in public-sector reprocurements—and how challengers can use intelligence to compete earlier.",
  },
  "/resources/contract-modification-notices-as-market-intelligence": {
    title: "Contract Modification Notices as Intelligence",
  },
  "/resources/procurement-intelligence-for-smes": {
    description:
      "How SMEs use procurement intelligence to focus on better-fit opportunities, prepare earlier, reduce wasted effort, and challenge larger incumbents.",
  },
  "/resources/the-preparation-gap-in-european-public-procurement": {
    description:
      "Why reactive tender discovery creates a preparation gap in European procurement, and how intelligence helps teams act earlier.",
  },
  "/resources/how-contract-renewal-signals-transform-bid-strategy": {
    description:
      "How contract renewal signals support earlier account planning, better bid timing, and more disciplined public-sector pursuit decisions.",
  },
  "/resources/sector-specific-procurement-dynamics-in-healthcare": {
    description:
      "Healthcare procurement dynamics: regulatory assurance, clinical evidence, frameworks, supplier concentration, and early market signals.",
  },
  "/resources/what-is-procurement-intelligence": {
    description:
      "What procurement intelligence means, how it differs from tender alerts, and how buyer cycles and market evidence support earlier action.",
  },
  "/resources/public-procurement-cycles": {
    description:
      "How public procurement cycles create opportunity rhythms through planning, publication, award, delivery, renewal and retendering.",
  },
};

export function getResourceSeoOverride(path: string) {
  return RESOURCE_SEO_OVERRIDES[path];
}
