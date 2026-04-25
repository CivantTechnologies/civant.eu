import Link from "next/link";
import { MarketCoverageLinks } from "../../components/site/MarketCoverageLinks";
import { SchemaScript } from "../../components/site/SchemaScript";
import { Section } from "../../components/site/Section";
import {
  buildBreadcrumbSchema,
  buildCollectionPageSchema,
  buildPageMetadata,
} from "../../lib/seo";
import { getAllReports } from "../../lib/reportDownloads";

export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  title: "Resources",
  description:
    "Procurement intelligence resources from Civant: guides on procurement cycles, lifecycle signals, market intelligence, bidding strategy, and SME access.",
  path: "/resources",
});

type Article = {
  href: string;
  title: string;
  summary: string;
  pillar: string;
};

type IntentLink = {
  question: string;
  answer: string;
  href: string;
  cta: string;
};

type PillarProfile = {
  title: string;
  description: string;
  visualLabel: string;
  question: string;
  bestFor: string;
  proofPoint: string;
};

const articles: Article[] = [
  {
    href: "/resources/external-signals-in-public-procurement",
    title: "External Signals in Public Procurement",
    summary: "Public procurement intent often shows up before a formal notice. Budgets, grants, PINs, hiring, policy changes, and strategic plans can all help teams prepare earlier.",
    pillar: "Timing & Signals",
  },
  {
    href: "/resources/competitor-intelligence-in-public-procurement",
    title: "Competitor Intelligence in Public Procurement",
    summary: "Competitor intelligence helps teams understand incumbent strength, participation patterns, and market pressure before committing bid effort.",
    pillar: "Market Intelligence",
  },
  {
    href: "/resources/european-procurement-coverage-what-market-coverage-really-means",
    title: "European Procurement Coverage: What Market Coverage Really Means",
    summary: "Coverage is more than listing countries. Real European procurement coverage means country-by-country evidence, comparable signals, and a consistent workflow across markets.",
    pillar: "Market Structure",
  },
  {
    href: "/resources/what-is-procurement-intelligence",
    title: "What Is Procurement Intelligence?",
    summary: "Procurement intelligence helps teams identify where public-sector demand is likely to emerge before tender publication, using buying patterns, lifecycle signals, and market participation data.",
    pillar: "Market Intelligence",
  },
  {
    href: "/resources/public-procurement-cycles",
    title: "Public Procurement Cycles",
    summary: "Public procurement follows planning, execution, review, and renewal rhythms. Understanding those cycles helps suppliers prepare before formal notices compress the available response window.",
    pillar: "Contract Lifecycle",
  },
  {
    href: "/resources/contract-lifecycle-signals",
    title: "Contract Lifecycle Signals",
    summary: "Contract lifecycle stages create timing boundaries that can indicate when future procurement activity is more likely, especially in categories with repeat buying patterns.",
    pillar: "Contract Lifecycle",
  },
  {
    href: "/resources/beyond-raw-data-extracting-insights-from-historical-contract-records",
    title: "Beyond Raw Data: Extracting Insights from Historical Contract Records",
    summary: "Public procurement generates vast amounts of data: contract notices, award announcements, framework agreements and spending reports. However, raw data alone does not reveal why a supplier won, how ...",
    pillar: "Market Intelligence",
  },
  {
    href: "/resources/detecting-procurement-patterns-what-past-awards-reveal-about-future-tenders",
    title: "Detecting Procurement Patterns: What Past Awards Reveal About Future Tenders",
    summary: "Public procurement is not random: past awards often follow discernible patterns. By examining who has won contracts, how long they last and how often they are renewed, suppliers can infer when the ...",
    pillar: "Market Intelligence",
  },
  {
    href: "/resources/unified-data-hubs-the-case-for-aggregated-procurement-intelligence",
    title: "Unified Data Hubs: The Case for Aggregated Procurement Intelligence",
    summary: "Fragmentation of tender publication across Europe poses a major challenge for suppliers. Data is scattered across national systems, regional portals and sector‑specific sites, each with its own for...",
    pillar: "Market Intelligence",
  },
  {
    href: "/resources/measuring-market-competitiveness-interpreting-supplier-participation-data",
    title: "Measuring Market Competitiveness: Interpreting Supplier Participation Data",
    summary: "Deciding whether to bid on a tender requires understanding how competitive the market is. Supplier participation data—from the number of bids received to the identity of bidders—provides insights i...",
    pillar: "Market Intelligence",
  },
  {
    href: "/resources/early-market-engagement-techniques-to-shape-procurement-requirements",
    title: "Early Market Engagement: Techniques to Shape Procurement Requirements",
    summary: "Authorities often undertake market engagement activities before launching a tender. Such engagement helps refine requirements, assess the market’s capacity to deliver and avoid overly prescriptive ...",
    pillar: "Timing & Signals",
  },
  {
    href: "/resources/predictive-renewal-signals-forecasting-contract-expiration-and-next-tenders",
    title: "Renewal Forecasting Signals: Contract Expiration and Next Tenders",
    summary: "Knowing when a contract will be re-procured can make the difference between a reactive bid and a strategic pursuit. Renewal forecasting signals use contract durations, spending patterns...",
    pillar: "Timing & Signals",
  },
  {
    href: "/resources/maximising-preparation-windows-how-long-before-tender-publication-should-suppliers-act",
    title: "Maximising Preparation Windows: How Long Before Tender Publication Should Suppliers Act?",
    summary: "Determining when to start preparing for a public tender is an art as much as a science. Suppliers must balance the need for early engagement with the risk of investing in opportunities that may not...",
    pillar: "Timing & Signals",
  },
  {
    href: "/resources/shrinking-tender-windows-impact-of-planned-procurement-notices",
    title: "Shrinking Tender Windows: Impact of Planned Procurement Notices",
    summary: "The Procurement Act 2023 introduces planned procurement notices (PPNs) as a tool for early transparency and streamlined competition. By issuing a PPN months before the contract notice, authorities ...",
    pillar: "Timing & Signals",
  },
  {
    href: "/resources/renewal-cycles-how-contract-expiry-drives-tender-pipelines",
    title: "Renewal Cycles: How Contract Expiry Drives Tender Pipelines",
    summary: "Public procurement follows a cyclical rhythm driven by contract expirations. When existing agreements reach the end of their term, authorities must decide whether to renew, extend or re‑procure. Su...",
    pillar: "Contract Lifecycle",
  },
  {
    href: "/resources/how-contract-renewal-signals-transform-bid-strategy",
    title: "How Contract Renewal Signals Transform Bid Strategy",
    summary: "Renewal signals are a goldmine for suppliers seeking to build a proactive pipeline. By monitoring when existing contracts are due to expire, suppliers can anticipate upcoming competitions and alloc...",
    pillar: "Contract Lifecycle",
  },
  {
    href: "/resources/the-role-of-framework-agreements-in-sustaining-supplier-relationships",
    title: "The Role of Framework Agreements in Sustaining Supplier Relationships",
    summary: "Framework agreements are a cornerstone of public procurement in Europe. They allow contracting authorities to establish a panel of pre‑approved suppliers for a category over several years. For supp...",
    pillar: "Contract Lifecycle",
  },
  {
    href: "/resources/framework-agreements-vs-dynamic-purchasing-systems-opportunities-and-constraints",
    title: "Framework Agreements vs Dynamic Purchasing Systems: Opportunities and Constraints",
    summary: "Public buyers use various procurement mechanisms to streamline purchases and comply with regulations. Two common tools—framework agreements and dynamic purchasing systems—serve different purposes. ...",
    pillar: "Contract Lifecycle",
  },
  {
    href: "/resources/proactive-vs-reactive-bidding-developing-a-winning-strategy",
    title: "Proactive vs Reactive Bidding: Developing a Winning Strategy",
    summary: "Bidding on public tenders requires both awareness of the market and disciplined internal processes. Organisations often oscillate between proactive and reactive behaviours depending on resources an...",
    pillar: "Strategy",
  },
  {
    href: "/resources/reactive-bidding-vs-proactive-planning-the-timing-challenge",
    title: "Reactive Bidding vs Proactive Planning: The Timing Challenge",
    summary: "Too often, suppliers respond to public tenders in a reactive manner, scrambling to prepare a bid within a few weeks. This reactive approach leads to rushed submissions and wasted effort, while proa...",
    pillar: "Strategy",
  },
  {
    href: "/resources/winning-through-positioning-differentiation-in-a-highly-regulated-market",
    title: "Winning Through Positioning: Differentiation in a Highly Regulated Market",
    summary: "Public tenders often prescribe detailed specifications, leaving little room for suppliers to differentiate. In a market governed by strict rules and focused on compliance and price, how can supplie...",
    pillar: "Strategy",
  },
  {
    href: "/resources/pricing-analysis-in-public-tenders-challenges-and-opportunities",
    title: "Pricing Analysis in Public Tenders: Challenges and Opportunities",
    summary: "Price is a key evaluation criterion in most public tenders. However, developing a competitive price requires understanding the cost structure, market rates and risk profile of the contract. Short p...",
    pillar: "Strategy",
  },
  {
    href: "/resources/strategic-sourcing-vs-routine-procurement-how-market-structure-influences-approach",
    title: "Strategic Sourcing vs Routine Procurement: How Market Structure Influences Approach",
    summary: "Not all public procurement is created equal. Strategic categories involve complex solutions, long‑term relationships and higher contract values, whereas routine categories involve commoditised good...",
    pillar: "Strategy",
  },
  {
    href: "/resources/building-internal-capacity-for-public-tendering-lessons-for-smes",
    title: "Building Internal Capacity for Public Tendering: Lessons for SMEs",
    summary: "Participating in public tenders requires more than just identifying opportunities. SMEs in particular must develop internal capacity—people, processes and systems—to meet procurement requirements. ...",
    pillar: "SME Access",
  },
  {
    href: "/resources/sme-participation-patterns-overcoming-barriers-in-european-public-procurement",
    title: "SME Participation Patterns: Overcoming Barriers in European Public Procurement",
    summary: "Small and medium enterprises (SMEs) are the backbone of Europe’s economy, yet they struggle to win a proportionate share of public procurement spend. Despite representing 99 % of businesses, SMEs c...",
    pillar: "SME Access",
  },
  {
    href: "/resources/the-incumbent-advantage-why-new-entrants-struggle-in-public-procurement",
    title: "The Incumbent Advantage: Why New Entrants Struggle in Public Procurement",
    summary: "Public procurement aims to promote competition and value for money, yet market structures often favour the incumbent. Long contract durations, complex compliance requirements and buyer risk aversio...",
    pillar: "SME Access",
  },
  {
    href: "/resources/partnering-for-success-collaboration-strategies-in-public-contracts",
    title: "Partnering for Success: Collaboration Strategies in Public Contracts",
    summary: "Public contracts can be large and complex, requiring a breadth of capabilities that few suppliers possess alone. Partnerships—whether through consortia, joint ventures or subcontracting—provide a w...",
    pillar: "SME Access",
  },
  {
    href: "/resources/navigating-compliance-and-eligibility-in-eu-procurement",
    title: "Navigating Compliance and Eligibility in EU Procurement",
    summary: "Public procurement is governed by laws and regulations that set out how contracts must be tendered and awarded. Suppliers must meet eligibility criteria and comply with procedural rules to particip...",
    pillar: "SME Access",
  },
  {
    href: "/resources/centralised-vs-local-procurement-structural-differences-across-the-eu",
    title: "Centralised vs Local Procurement: Structural Differences Across the EU",
    summary: "The organisation of public procurement across Europe is far from uniform. Some countries run central purchasing bodies that handle large categories for the entire public sector; others rely heavily...",
    pillar: "Market Structure",
  },
  {
    href: "/resources/fragmented-portals-and-the-challenge-of-early-visibility",
    title: "Fragmented Portals and the Challenge of Early Visibility",
    summary: "Despite efforts to harmonise procurement across Europe, tender publication remains decentralised. Contracting authorities use a mix of national platforms, regional sites and sector‑specific portals...",
    pillar: "Market Structure",
  },
  {
    href: "/resources/confidence-scoring-prioritising-opportunities-with-ailike-methods",
    title: "Confidence Scoring: Prioritising Opportunities with AI‑Like Methods",
    summary: "Not all tenders are equally attractive. Suppliers must decide where to invest their limited bid resources. Confidence scoring provides a structured way to evaluate opportunities based on data‑drive...",
    pillar: "Market Intelligence",
  },
  {
    href: "/resources/early-engagement-leveraging-prior-information-and-premarket-engagement-notices",
    title: "Early Engagement: Leveraging Prior Information and Pre‑Market Engagement Notices",
    summary: "The UK Procurement Act 2023 introduces mechanisms for early market engagement aimed at improving transparency and competition. Authorities can publish prior information notices, planned procurement...",
    pillar: "Timing & Signals",
  },
  {
    href: "/resources/preprocurement-signals-decoding-meeting-minutes-and-budget-reports",
    title: "Pre‑Procurement Signals: Decoding Meeting Minutes and Budget Reports",
    summary: "The journey to a public tender often begins months or years before a contract notice appears. During the pre‑procurement phase, authorities assess needs, conduct market analysis and secure approval...",
    pillar: "Timing & Signals",
  },
  {
    href: "/resources/procurement-market-size-assessing-the-14-of-eu-gdp-opportunity",
    title: "Procurement Market Size: Assessing the 14 % of EU GDP Opportunity",
    summary: "The sheer scale of public procurement in Europe makes it an attractive target for businesses. According to Mercell, public procurement accounts for more than 14 % of EU GDP【811032459588661†L70-L79】...",
    pillar: "Market Intelligence",
  },
  {
    href: "/resources/timetoopportunity-why-speed-of-tender-discovery-matters",
    title: "Time‑to‑Opportunity: Why Speed of Tender Discovery Matters",
    summary: "In public procurement, timing is everything. Once a contract notice is published, suppliers have a finite window to understand the requirements, assemble a bid team, obtain approvals and submit a c...",
    pillar: "Market Intelligence",
  },
  {
    href: "/resources/understanding-contract-lifecycles-from-oneoff-contracts-to-multiyear-frameworks",
    title: "Understanding Contract Lifecycles: From One‑Off Contracts to Multi‑Year Frameworks",
    summary: "Many suppliers treat all public tenders alike, yet the structure and duration of a contract profoundly influence the timing and nature of competition. One‑off contracts have fixed lifespans—often 1...",
    pillar: "Contract Lifecycle",
  },
  {
    href: "/resources/the-preparation-gap-in-european-public-procurement",
    title: "The Preparation Gap in European Public Procurement",
    summary: "European public procurement represents approximately two trillion euros in annual spending, accounting for roughly 13.6% of EU GDP. This market is governed by directives designed to ensure transpar...",
    pillar: "Timing & Signals",
  },
  {
    href: "/resources/contract-lifecycle-patterns-in-european-public-procurement",
    title: "Contract Lifecycle Patterns in European Public Procurement",
    summary: "Every public contract has a beginning and an end. Between these points lies a lifecycle that includes contract execution, performance review, renewal planning, specification development, market eng...",
    pillar: "Contract Lifecycle",
  },
  {
    href: "/resources/the-incumbent-advantage-in-public-sector-procurement",
    title: "The Incumbent Advantage in Public Sector Procurement",
    summary: "In any market where switching costs exist and relationships carry weight, incumbents hold structural advantages. Public procurement is designed to mitigate this through open competition, transparen...",
    pillar: "Market Structure",
  },
  {
    href: "/resources/pre-information-notices-as-procurement-signals",
    title: "Pre-Information Notices as Procurement Signals",
    summary: "EU procurement directives provide for the publication of pre-information notices, also known as prior information notices, as a mechanism for contracting authorities to signal upcoming procurement ...",
    pillar: "Timing & Signals",
  },
  {
    href: "/resources/single-bidder-contracts-and-the-competition-deficit-in-eu-procurement",
    title: "Single-Bidder Contracts and the Competition Deficit in EU Procurement",
    summary: "The European Court of Auditors published a landmark report in December 2023 examining competition trends in EU public procurement over the preceding decade. The findings were stark: competition had...",
    pillar: "Market Intelligence",
  },
  {
    href: "/resources/framework-agreements-and-their-impact-on-procurement-competition",
    title: "Framework Agreements and Their Impact on Procurement Competition",
    summary: "Framework agreements are one of the most significant structural features of European public procurement. They allow contracting authorities to establish pre-agreed terms with one or more suppliers ...",
    pillar: "Contract Lifecycle",
  },
  {
    href: "/resources/the-role-of-procurement-data-in-strategic-market-intelligence",
    title: "The Role of Procurement Data in Strategic Market Intelligence",
    summary: "The digitisation of European public procurement has created an unprecedented dataset of market activity. TED alone publishes over 3,000 procurement notices daily, spanning contract notices, award n...",
    pillar: "Market Intelligence",
  },
  {
    href: "/resources/procurement-timing-dynamics-across-european-markets",
    title: "Procurement Timing Dynamics Across European Markets",
    summary: "Public procurement does not occur at a constant rate throughout the year. Spending decisions are shaped by budgetary cycles, political priorities, institutional capacity constraints, and even seaso...",
    pillar: "Timing & Signals",
  },
  {
    href: "/resources/cross-border-procurement-in-the-eu-single-market",
    title: "Cross-Border Procurement in the EU Single Market",
    summary: "The EU public procurement directives were designed, in part, to create a single market for public contracts. By establishing common rules for above-threshold procurement and requiring publication t...",
    pillar: "Market Intelligence",
  },
  {
    href: "/resources/the-hidden-cost-of-reactive-bidding-in-public-procurement",
    title: "The Hidden Cost of Reactive Bidding in Public Procurement",
    summary: "Bidding for public sector contracts is expensive. The costs include dedicated bid team time, specialist input from technical and commercial staff, external consultancy for complex requirements, pri...",
    pillar: "Strategy",
  },
  {
    href: "/resources/how-contracting-authorities-plan-procurement",
    title: "How Contracting Authorities Plan Procurement",
    summary: "Contracting authorities do not procure in isolation. Their purchasing decisions reflect institutional planning cycles, budgetary constraints, political priorities, and operational requirements that...",
    pillar: "Market Intelligence",
  },
  {
    href: "/resources/sector-specific-procurement-dynamics-in-healthcare",
    title: "Sector-Specific Procurement Dynamics in Healthcare",
    summary: "Healthcare procurement represents one of the most regulated and complex sectors within EU public procurement, driven by stringent regulatory framew...",
    pillar: "Market Structure",
  },
  {
    href: "/resources/defence-procurement-trends-and-their-market-implications",
    title: "Defence Procurement Trends and Their Market Implications",
    summary: "Defence procurement operates under distinct regulatory frameworks that diverge from standard public procurement rules, primarily through applicatio...",
    pillar: "Market Intelligence",
  },
  {
    href: "/resources/the-digital-transformation-of-european-procurement-systems",
    title: "The Digital Transformation of European Procurement Systems",
    summary: "The digitalisation of European procurement represents a fundamental shift in how public authorities manage competitive processes, tender submission...",
    pillar: "Market Structure",
  },
  {
    href: "/resources/procurement-intelligence-for-smes",
    title: "Procurement Intelligence for SMEs",
    summary: "Small and medium-sized enterprises (SMEs) represent approximately 99% of European businesses and account for significant portions of employment and...",
    pillar: "SME Access",
  },
  {
    href: "/resources/understanding-procurement-thresholds-in-the-eu",
    title: "Understanding Procurement Thresholds in the EU",
    summary: "EU procurement thresholds establish monetary boundaries above which contracting authorities must apply formal competitive procurement rules under D...",
    pillar: "Market Structure",
  },
  {
    href: "/resources/the-relationship-between-contract-value-and-competition-levels",
    title: "The Relationship Between Contract Value and Competition Levels",
    summary: "Contract value represents one of the strongest forecasting indicators of competitive intensity in EU public procurement, with evidence consistently ...",
    pillar: "Market Intelligence",
  },
  {
    href: "/resources/preliminary-market-consultations-as-competitive-intelligence",
    title: "Preliminary Market Consultations as Competitive Intelligence",
    summary: "Preliminary Market Consultations (PMCs) represent formal engagement by contracting authorities with potential suppliers before procurement process ...",
    pillar: "Market Intelligence",
  },
  {
    href: "/resources/dynamic-purchasing-systems-and-their-growing-role-in-eu-procurement",
    title: "Dynamic Purchasing Systems and Their Growing Role in EU Procurement",
    summary: "Dynamic Purchasing Systems (DPS) represent procurement mechanisms where contracting authorities establish ongoing competitive frameworks with multi...",
    pillar: "Contract Lifecycle",
  },
  {
    href: "/resources/procurement-data-quality-across-european-markets",
    title: "Procurement Data Quality Across European Markets",
    summary: "Procurement data quality has historically represented a significant constraint on market intelligence analysis, with inconsistent publication stand...",
    pillar: "Market Intelligence",
  },
  {
    href: "/resources/the-geography-of-eu-procurement-spending",
    title: "The Geography of EU Procurement Spending",
    summary: "Public procurement spending is distributed highly unevenly across the European Union, with substantial concentration in high-income member states a...",
    pillar: "Market Intelligence",
  },
  {
    href: "/resources/centralised-purchasing-organisations-and-market-concentration",
    title: "Centralised Purchasing Organisations and Market Concentration",
    summary: "Centralised Purchasing Organisations (CPOs) are entities established by public authorities to conduct procurement on behalf of multiple end-using a...",
    pillar: "Market Intelligence",
  },
  {
    href: "/resources/environmental-and-social-value-in-procurement-evaluation",
    title: "Environmental and Social Value in Procurement Evaluation",
    summary: "The integration of environmental and social value criteria into procurement evaluation represents significant shift in how authorities assess bidde...",
    pillar: "Market Structure",
  },
  {
    href: "/resources/procurement-signals-beyond-formal-notices",
    title: "Procurement Signals Beyond Formal Notices",
    summary: "Procurement activity and market demand signals extend substantially beyond formal published procurement notices, with contracting authorities commu...",
    pillar: "Timing & Signals",
  },
  {
    href: "/resources/the-economics-of-bid-no-bid-decisions",
    title: "The Economics of Bid-No-Bid Decisions",
    summary: "Bid-no-bid decisions represent fundamental economic choices for suppliers, determining whether to allocate resources to tender preparation and prop...",
    pillar: "SME Access",
  },
  {
    href: "/resources/consortium-bidding-in-european-procurement",
    title: "Consortium Bidding in European Procurement",
    summary: "Consortium bidding, where multiple suppliers collaborate to submit joint proposals for procurement opportunities, represents significant structural...",
    pillar: "SME Access",
  },
  {
    href: "/resources/contract-modification-notices-as-market-intelligence",
    title: "Contract Modification Notices as Market Intelligence",
    summary: "Contract modification notices represent published communications when contracting authorities make changes to awarded contracts during execution, i...",
    pillar: "Contract Lifecycle",
  },
  {
    href: "/resources/the-impact-of-eu-procurement-reform-on-market-competition",
    title: "The Impact of EU Procurement Reform on Market Competition",
    summary: "The 2014 EU procurement directive reforms represented major restructuring of public procurement rules across the European Union, introducing new me...",
    pillar: "Market Intelligence",
  },
  {
    href: "/resources/procurement-intelligence-maturity",
    title: "Procurement Intelligence Maturity",
    summary: "Procurement intelligence maturity reflects the sophistication, integration, and effectiveness of an organisation's procurement market information a...",
    pillar: "Market Intelligence",
  },
  {
    href: "/resources/building-a-procurement-intelligence-function",
    title: "Building a Procurement Intelligence Function",
    summary: "Establishing a dedicated procurement intelligence function represents significant organisational investment, with successful implementation requiri...",
    pillar: "Market Intelligence",
  }
];

const resourceIntentLinks: IntentLink[] = [
  {
    question: "What is procurement intelligence?",
    answer:
      "Start with the article that defines the category in practical, evidence-led terms.",
    href: "/resources/what-is-procurement-intelligence",
    cta: "Read the primer",
  },
  {
    question: "How do procurement cycles actually work?",
    answer:
      "Understand the planning, renewal, and timing patterns that shape future opportunities.",
    href: "/resources/public-procurement-cycles",
    cta: "Explore the cycle",
  },
  {
    question: "How can we prepare earlier?",
    answer:
      "See how lifecycle signals and renewal patterns create preparation windows before notices go live.",
    href: "/resources/contract-lifecycle-signals",
    cta: "View timing signals",
  },
  {
    question: "How do we decide where to bid?",
    answer:
      "Use structured market and competition context to improve bid or no-bid discipline.",
    href: "/resources/the-economics-of-bid-no-bid-decisions",
    cta: "Read the strategy",
  },
];

const featuredArticleHrefs = [
  "/resources/what-is-procurement-intelligence",
  "/resources/external-signals-in-public-procurement",
  "/resources/competitor-intelligence-in-public-procurement",
];

const pillarProfiles: Record<string, PillarProfile> = {
  "Market Intelligence": {
    title: "Data-driven procurement insights",
    description:
      "Understand demand, competitive pressure, buyer behavior, and market structure before committing bid effort.",
    visualLabel: "Market",
    question: "Where is public-sector demand forming?",
    bestFor: "Market intelligence, sales leadership, and bid teams sizing opportunity.",
    proofPoint: "Buyer history, award patterns, competition, and category movement.",
  },
  "Timing & Signals": {
    title: "Early signals and preparation windows",
    description:
      "Learn how lifecycle evidence, public signals, and source quality shape earlier opportunity timing.",
    visualLabel: "Signals",
    question: "What evidence appears before the notice?",
    bestFor: "Teams trying to prepare before live tender alerts compress the window.",
    proofPoint: "Budgets, PINs, lifecycle movement, public plans, and renewal timing.",
  },
  "Contract Lifecycle": {
    title: "Renewal cycles and framework dynamics",
    description:
      "Map how contract duration, extensions, renewals, frameworks, and DPS structures create future windows.",
    visualLabel: "Lifecycle",
    question: "When is a contract likely to move again?",
    bestFor: "Suppliers tracking retenders, frameworks, and renewal-driven pipeline.",
    proofPoint: "Award dates, contract duration, extensions, modifications, and buyer recurrence.",
  },
  Strategy: {
    title: "Bidding strategy and market positioning",
    description:
      "Move from reactive tender response toward disciplined pursuit, positioning, pricing, and bid/no-bid decisions.",
    visualLabel: "Strategy",
    question: "Which opportunities deserve bid effort?",
    bestFor: "Commercial teams improving qualification, pricing, and pursuit discipline.",
    proofPoint: "Fit, competitive pressure, incumbent context, value, and preparation time.",
  },
  "SME Access": {
    title: "Levelling the playing field for SMEs",
    description:
      "Explore how earlier intelligence helps capable suppliers compete with better timing and sharper preparation.",
    visualLabel: "Access",
    question: "How can smaller suppliers compete earlier?",
    bestFor: "SMEs entering public-sector markets or expanding across Europe.",
    proofPoint: "Eligibility, partnerships, incumbent pressure, capacity, and buyer fit.",
  },
  "Market Structure": {
    title: "How EU procurement markets are structured",
    description:
      "See how geography, thresholds, centralisation, and regulation shape public-sector market opportunity.",
    visualLabel: "Structure",
    question: "How does the market itself shape opportunity?",
    bestFor: "Teams entering new countries, sectors, or regulated buyer environments.",
    proofPoint: "Thresholds, portals, centralisation, regulation, and country-level patterns.",
  },
};

const libraryStats = [
  {
    value: "6",
    label: "topic collections",
    body: "Built around the way bid and market teams actually learn.",
  },
  {
    value: "70+",
    label: "authority resources",
    body: "Crawlable articles, reports, and practical procurement explainers.",
  },
  {
    value: "3",
    label: "forecast reports",
    body: "Sector outlooks that turn research into market timing.",
  },
];

const libraryEntryPoints = [
  {
    label: "Primer",
    title: "New to procurement intelligence",
    body: "Start with category definitions, then move into cycles, signals, and market evidence.",
    href: "/resources/what-is-procurement-intelligence",
    cta: "Start with the primer",
  },
  {
    label: "Signals",
    title: "Trying to prepare earlier",
    body: "Learn what can be detected before a formal notice appears and why evidence quality matters.",
    href: "/resources/external-signals-in-public-procurement",
    cta: "Study early signals",
  },
  {
    label: "Decision",
    title: "Improving bid/no-bid discipline",
    body: "Use timing, value, competition, and incumbent context to protect team capacity.",
    href: "/resources/the-economics-of-bid-no-bid-decisions",
    cta: "Sharpen bid choices",
  },
];

const resourcePathLinks = [
  {
    title: "See the platform workflow",
    body: "Connect the ideas in the resources library to the actual Civant product workflow.",
    href: "/platform",
    cta: "View Platform",
  },
  {
    title: "Match the right solution path",
    body: "Jump from education into the solution page that best fits your search intent.",
    href: "/solutions",
    cta: "Explore Solutions",
  },
  {
    title: "Understand the methodology",
    body: "Read how deterministic procurement evidence and AI interpretation work together.",
    href: "/methodology",
    cta: "View Methodology",
  },
  {
    title: "Turn research into action",
    body: "Move from reading to rollout with self-serve pricing and custom paths.",
    href: "/pricing",
    cta: "View Pricing",
  },
];

const pillarOrder = [
  "Market Intelligence",
  "Timing & Signals",
  "Contract Lifecycle",
  "Strategy",
  "SME Access",
  "Market Structure",
];

function groupByPillar(items: Article[]) {
  const groups: Record<string, Article[]> = {};
  for (const p of pillarOrder) groups[p] = [];
  for (const a of items) {
    if (!groups[a.pillar]) groups[a.pillar] = [];
    groups[a.pillar].push(a);
  }
  return groups;
}

export default function ResourcesPage() {
  const grouped = groupByPillar(articles);
  const reports = getAllReports();
  const featuredArticles = featuredArticleHrefs
    .map((href) => articles.find((article) => article.href === href))
    .filter((article): article is Article => Boolean(article));
  const topicCollections = pillarOrder
    .map((pillar) => ({
      pillar,
      profile: pillarProfiles[pillar],
      articles: grouped[pillar] || [],
      id: pillar.toLowerCase().replaceAll(" ", "-").replaceAll("&", "and"),
    }))
    .filter((collection) => collection.articles.length > 0);
  const resourceSchema = [
    buildCollectionPageSchema({
      name: "Civant Procurement Intelligence Resources",
      description:
        "Procurement intelligence resources from Civant covering procurement cycles, lifecycle signals, market intelligence, bidding strategy, and SME access.",
      path: "/resources",
      items: articles.map((article) => ({
        name: article.title,
        path: article.href,
        description: article.summary,
      })),
    }),
    buildBreadcrumbSchema([
      { name: "Home", item: "https://civant.eu" },
      { name: "Resources", item: "https://civant.eu/resources" },
    ]),
  ];

  return (
    <div className="resources-page resources-library-page">
      <Section className="hero-block hero-section resource-library-hero">
        <div className="resource-library-hero-grid">
          <div className="resource-library-hero-copy">
            <p className="eyebrow">Civant Intelligence Library</p>
            <h1 className="headline-xl">
              Procurement intelligence, organized for earlier decisions
            </h1>
            <p className="text-lead">
              A curated research library for teams that need to understand buyer
              cycles, lifecycle signals, competitive pressure, and public-sector
              market structure before a tender notice appears.
            </p>
            <div className="button-row">
              <a className="btn btn-primary" href="#start-here">
                Start Reading
              </a>
              <Link className="btn btn-secondary" href="/resources/reports">
                View Reports
              </Link>
            </div>
            <p className="cred-line">
              Built for bid teams, B2G sales leaders, founders, and market
              intelligence teams operating across European public procurement.
            </p>
          </div>
          <aside className="resource-library-proof" aria-label="Library summary">
            <div className="resource-library-orbit" aria-hidden="true" />
            {libraryStats.map((stat) => (
              <div key={stat.label} className="resource-library-stat">
                <strong>{stat.value}</strong>
                <div>
                  <p>{stat.label}</p>
                  <span>{stat.body}</span>
                </div>
              </div>
            ))}
          </aside>
        </div>
      </Section>

      <Section muted id="start-here" className="resource-library-start">
        <div className="section-heading-wrap resource-library-heading">
          <p className="eyebrow">Start Here</p>
          <h2 className="headline-lg">
            Choose the question your team is trying to answer
          </h2>
          <p className="text-lead section-intro">
            The fastest route through the library depends on whether you are
            learning the category, looking for earlier timing evidence, or
            improving commercial qualification.
          </p>
        </div>
        <div className="resource-entry-grid">
          {libraryEntryPoints.map((entry) => (
            <Link
              key={entry.title}
              href={entry.href}
              className="resource-entry-card interactive-surface"
            >
              <p className="module-label">{entry.label}</p>
              <h3>{entry.title}</h3>
              <p>{entry.body}</p>
              <span>{entry.cta}</span>
            </Link>
          ))}
        </div>
        <div className="resource-featured-band">
          <div>
            <p className="eyebrow">Featured Guides</p>
            <h2 className="headline-lg">The three reads that set the frame</h2>
          </div>
          {featuredArticles.map((article) => (
            <Link
              key={article.href}
              href={article.href}
              className="resource-featured-mini interactive-surface"
            >
              <p className="module-label">{article.pillar}</p>
              <h3>{article.title}</h3>
              <span>Read guide</span>
            </Link>
          ))}
        </div>
      </Section>

      <Section className="resource-topic-section">
        <div className="section-heading-wrap resource-library-heading">
          <p className="eyebrow">Topic Collections</p>
          <h2 className="headline-lg">
            Six paths through the procurement intelligence stack
          </h2>
          <p className="text-lead section-intro">
            Each collection works as a learning route: start with the question,
            read the most useful guides, then move into the full index when you
            need depth.
          </p>
        </div>
        <div className="resource-topic-grid">
          {topicCollections.map(({ pillar, profile, articles: group, id }) => (
            <article key={pillar} id={id} className="resource-topic-card">
              <div className="resource-topic-visual" aria-hidden="true">
                <span>{profile.visualLabel}</span>
              </div>
              <div className="resource-topic-copy">
                <p className="module-label">{pillar}</p>
                <h3>{profile.question}</h3>
                <p>{profile.description}</p>
                <dl>
                  <div>
                    <dt>Best for</dt>
                    <dd>{profile.bestFor}</dd>
                  </div>
                  <div>
                    <dt>Evidence lens</dt>
                    <dd>{profile.proofPoint}</dd>
                  </div>
                </dl>
              </div>
              <div className="resource-topic-links">
                <p>{group.length} resources in this collection</p>
                {group.slice(0, 3).map((article) => (
                  <Link key={article.href} href={article.href}>
                    {article.title}
                  </Link>
                ))}
                <a href="#complete-index" className="resource-topic-index-link">
                  View full index
                </a>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section muted>
        <div className="resource-report-panel resource-report-panel-premium">
          <div>
            <p className="eyebrow">Forecast Reports</p>
            <h2 className="headline-lg">
              Move from article learning into sector outlooks
            </h2>
            <p className="card-body">
              Downloadable Civant reports turn the same evidence-led library
              into public-safe sector views for education, healthcare, and
              public construction.
            </p>
          </div>
          <Link href="/resources/reports" className="btn btn-primary">
            Browse {reports.length} Forecast Reports
          </Link>
        </div>
      </Section>

      <Section id="complete-index" className="resource-index-section">
        <div className="section-heading-wrap resource-library-heading">
          <p className="eyebrow">Complete Index</p>
          <h2 className="headline-lg">Every guide remains visible and crawlable</h2>
          <p className="text-lead section-intro">
            The landing page stays focused, but the full article surface remains
            available for readers, search engines, and answer engines.
          </p>
        </div>
        <div className="resource-index-grid">
          {topicCollections.map(({ pillar, articles: group }) => (
            <section key={pillar} className="resource-index-group">
              <div className="resource-index-head">
                <h3>{pillar}</h3>
                <span>{group.length}</span>
              </div>
              <ul>
                {group.map((article) => (
                  <li key={article.href}>
                    <Link href={article.href}>{article.title}</Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </Section>

      <Section muted>
        <div className="section-heading-wrap resource-library-heading">
          <p className="eyebrow">Reader Routing</p>
          <h2 className="headline-lg">
            Fast answers for high-intent procurement questions
          </h2>
          <p className="text-lead section-intro">
            These are the practical answer paths buyers and searchers tend to
            need before they understand why Civant exists.
          </p>
        </div>
        <div className="resource-answer-grid">
          {resourceIntentLinks.map((item) => (
            <Link
              key={item.question}
              href={item.href}
              className="resource-answer-card interactive-surface"
            >
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
              <span>{item.cta}</span>
            </Link>
          ))}
        </div>
      </Section>

      <Section>
        <MarketCoverageLinks
          eyebrow="Country Intelligence"
          title="Turn European market research into country-specific planning"
          body="Use the resource library to understand procurement patterns, then move into live market pages for country-level coverage and rollout context."
          compact
        />
      </Section>

      <Section muted>
        <div className="section-heading-wrap resource-library-heading">
          <p className="eyebrow">From Reading To Action</p>
          <h2 className="headline-lg">
            Connect research to the Civant workflow
          </h2>
          <p className="text-lead section-intro">
            Educational content should lead into a platform view, a methodology
            explanation, a solution path, or a buying decision.
          </p>
        </div>
        <div className="grid grid-4 solution-related-grid">
          {resourcePathLinks.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="card card-link interactive-surface solution-link-card"
            >
              <h3 className="card-title">{item.title}</h3>
              <p className="card-body">{item.body}</p>
              <span className="card-link-cta">{item.cta}</span>
            </Link>
          ))}
        </div>
      </Section>

      <Section>
        <div className="resource-library-final">
          <div>
            <p className="eyebrow">Next Step</p>
            <h2 className="headline-lg">
              Turn procurement research into earlier market timing
            </h2>
          </div>
          <div className="button-row">
            <Link href="/platform" className="btn btn-secondary">
              View Platform
            </Link>
            <Link href="/pricing" className="btn btn-primary">
              View Pricing
            </Link>
          </div>
        </div>
      </Section>

      <SchemaScript data={resourceSchema} />
    </div>
  );
}
