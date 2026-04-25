export type SolutionFaq = {
  question: string;
  answer: string;
};

export type SolutionPage = {
  slug: string;
  title: string;
  metaTitle?: string;
  eyebrow: string;
  headline: string;
  description: string;
  metaDescription?: string;
  definition: string;
  primaryAudience: string;
  problem: string;
  civantApproach: string;
  differentiator: string;
  proofPoint: string;
  useCases: string[];
  signals: string[];
  faqs: SolutionFaq[];
};

export const SOLUTIONS: SolutionPage[] = [
  {
    slug: "procurement-intelligence-software",
    title: "Procurement Intelligence Software",
    metaTitle: "Procurement Intelligence Software | Civant",
    eyebrow: "Solution / Procurement Intelligence Software",
    headline: "Procurement intelligence software for earlier public-sector growth",
    description:
      "Civant is procurement intelligence software that turns fragmented procurement records, buyer cycles, awards, competitor movement, and external public signals into a focused market planning layer.",
    metaDescription:
      "Civant helps teams turn procurement records, buyer cycles, competitor context, and public signals into earlier public-sector market planning.",
    definition:
      "Procurement intelligence software helps suppliers understand where public-sector demand is likely to emerge by analyzing historical tenders, awards, contract lifecycles, buyer behavior, and market signals.",
    primaryAudience:
      "For SMEs, bid teams, commercial leaders, and market intelligence teams selling into European public-sector markets.",
    problem:
      "Tender portals and alert feeds show activity once it is already public. By then, qualification, partnerships, buyer engagement, and positioning may already be rushed.",
    civantApproach:
      "Civant connects official procurement data with lifecycle analysis, competitor intelligence, and external public signals so teams can prioritize buyers and categories before the formal tender window.",
    differentiator:
      "Civant is not a chatbot layered on top of tender notices. AI helps interpret match, scope, intent, and strategy, while the forecasting layer is grounded in structured procurement evidence.",
    proofPoint:
      "Live coverage includes Ireland, the United Kingdom, Spain, France, and Italy, with Finland, Belgium, Germany, and the Netherlands coming next.",
    useCases: [
      "Build a target account plan around buyers with recurring demand.",
      "Prioritize bid effort before live notices compress the response window.",
      "Track incumbent and competitor movement by category and country.",
    ],
    signals: [
      "Tender and award history",
      "Contract lifecycle and renewal windows",
      "Buyer and category recurrence",
      "Competitor and incumbent activity",
      "PINs, grants, budgets, policy, and hiring signals",
    ],
    faqs: [
      {
        question: "What is procurement intelligence software?",
        answer:
          "Procurement intelligence software analyzes public procurement records, awards, buyer behavior, contract lifecycles, and external signals so suppliers can plan earlier and prioritize better-fit public-sector opportunities.",
      },
      {
        question: "How is Civant different from tender alert software?",
        answer:
          "Tender alert software usually notifies teams after a notice is published. Civant focuses on earlier market intelligence: recurring buying patterns, renewal windows, competitor context, and external public signals.",
      },
      {
        question: "Is Civant an AI chatbot?",
        answer:
          "No. Civant is a procurement forecasting intelligence platform. AI supports interpretation of match, tender documents, buyer intent, and strategic context, but it does not replace the evidence-based forecast engine.",
      },
    ],
  },
  {
    slug: "tender-prediction-software",
    title: "Tender Forecasting Software",
    metaTitle: "Tender Forecasting Software | Civant",
    eyebrow: "Solution / Tender Forecasting Software",
    headline: "Tender forecasting software built on procurement evidence",
    description:
      "Civant helps teams estimate likely future tender windows with tender forecasting software built on contract lifecycles, award history, buyer recurrence, and public-domain market signals.",
    metaDescription:
      "Civant helps teams estimate likely tender windows using contract lifecycles, award history, buyer recurrence, and public market signals.",
    definition:
      "Tender forecasting software estimates where and when public-sector opportunities may emerge by analyzing previous awards, contract durations, buyer patterns, and pre-procurement signals.",
    primaryAudience:
      "For teams that need preparation time before formal tender publication, especially across complex EU and UK public-sector markets.",
    problem:
      "Most suppliers find out about opportunities when everyone else does. That creates rushed bid decisions, weak positioning, and missed early engagement.",
    civantApproach:
      "Civant scores procurement forecasting signals from historical tenders, awards, lifecycle evidence, and public external indicators so teams can see where buyer activity is likely to move next.",
    differentiator:
      "The forecast layer is deterministic and evidence-led. AI is used to explain and interpret opportunities, not to invent probabilities or replace structured scoring.",
    proofPoint:
      "Civant continuously validates signals against subsequently published tenders so forecast quality improves through feedback, not guesswork.",
    useCases: [
      "Identify likely renewal and re-procurement windows.",
      "Sequence buyer engagement before requirements are locked.",
      "Coordinate bid, sales, and partnership work around forecasted demand.",
    ],
    signals: [
      "Contract end dates and extensions",
      "Repeat buying cadence",
      "Award outcomes and supplier participation",
      "Pre-information and market engagement notices",
      "Budget, grant, hiring, and policy indicators",
    ],
    faqs: [
      {
        question: "Can software really forecast tenders?",
        answer:
          "It can estimate likely opportunity windows when the forecasting model is grounded in procurement evidence such as contract duration, award history, buyer recurrence, and external public signals. Civant treats these as confidence-scored indicators, not guarantees.",
      },
      {
        question: "What data does Civant use for tender forecasting?",
        answer:
          "Civant uses official procurement notices, award records, contract lifecycle data, competitor and incumbent patterns, and public external signals such as PINs, grants, budgets, policy movement, and hiring.",
      },
      {
        question: "Who benefits from tender forecasting?",
        answer:
          "Bid teams, sales teams, partnerships teams, and market intelligence teams benefit when they need to prepare before tender publication rather than react after an alert arrives.",
      },
    ],
  },
  {
    slug: "eu-tender-monitoring",
    title: "EU Tender Monitoring",
    metaTitle: "EU Tender Monitoring | Civant",
    eyebrow: "Solution / EU Tender Monitoring",
    headline: "EU tender monitoring that goes beyond live alerts",
    description:
      "Monitor European public procurement markets through official notices, TED-linked context, national sources, award history, lifecycle signals, and country rollout intelligence in one workflow.",
    metaDescription:
      "Monitor European public procurement through official notices, TED context, award history, lifecycle signals, and country coverage in one workflow.",
    definition:
      "EU tender monitoring tracks procurement activity across European markets, including live notices, award outcomes, buyer behavior, lifecycle patterns, and early public indicators of future demand.",
    primaryAudience:
      "For suppliers expanding across multiple European markets who need one planning view instead of separate portal habits in every country.",
    problem:
      "European procurement is fragmented across national systems, TED, buyer portals, regions, languages, and local publication habits. Simple monitoring creates visibility, but not always timing advantage.",
    civantApproach:
      "Civant combines live market monitoring with a consistent intelligence model across countries, helping teams compare buyers, categories, contract cycles, and competitor activity in one workflow.",
    differentiator:
      "Civant separates live market intelligence from rollout messaging: Ireland, the UK, Spain, France, and Italy are live; Finland, Belgium, Germany, and the Netherlands are coming next.",
    proofPoint:
      "The same procurement-cycle workflow is applied country by country as Civant expands, with an average target of one new EU market per month.",
    useCases: [
      "Compare procurement activity across live European markets.",
      "Prepare expansion into upcoming Civant countries.",
      "Track cross-border public-sector demand and buyer timing.",
    ],
    signals: [
      "National procurement sites and TED context",
      "Award outcomes and contract history",
      "Country-specific buyer and category patterns",
      "External public signals by market",
      "Rollout status for new EU coverage",
    ],
    faqs: [
      {
        question: "Which European markets does Civant cover today?",
        answer:
          "Civant currently covers Ireland, the United Kingdom, Spain, France, and Italy. Finland, Belgium, Germany, and the Netherlands are coming next.",
      },
      {
        question: "Is EU tender monitoring the same as procurement intelligence?",
        answer:
          "No. Monitoring helps teams see activity. Procurement intelligence adds lifecycle context, buyer recurrence, award history, competitor movement, and external signals so teams can decide where to act earlier.",
      },
      {
        question: "Does Civant use TED?",
        answer:
          "Yes. Civant uses TED-linked procurement context alongside national procurement sources and other public signals where relevant to the market and opportunity.",
      },
    ],
  },
  {
    slug: "public-procurement-intelligence",
    title: "Public Procurement Intelligence",
    metaTitle: "Public Procurement Intelligence | Civant",
    eyebrow: "Solution / Public Procurement Intelligence",
    headline: "Public procurement intelligence for strategic bid decisions",
    description:
      "Civant helps suppliers use public procurement intelligence to understand buyers, timing, competitors, and signals before committing scarce bid resources to public-sector opportunities.",
    metaDescription:
      "Civant helps suppliers understand buyers, timing, competitors, and signals before committing bid resources to public-sector opportunities.",
    definition:
      "Public procurement intelligence is the practice of turning tenders, awards, buyer behavior, lifecycle evidence, and external signals into strategic decisions about where to engage, bid, partner, or pass.",
    primaryAudience:
      "For leadership, bid, sales, partnerships, and market intelligence teams that need clearer bid/no-bid decisions and earlier account strategy.",
    problem:
      "Public-sector growth is expensive when teams chase every notice. Without context, suppliers spend time on low-fit opportunities and miss earlier positioning windows for stronger ones.",
    civantApproach:
      "Civant gives teams a structured view of buyer cycles, incumbent footprint, category recurrence, and public external signals so commercial strategy and bid execution can work from the same evidence.",
    differentiator:
      "Civant prioritizes explainable evidence over noise. It is designed to show why an opportunity may matter, what signal supports it, and how teams should act before the deadline.",
    proofPoint:
      "Customers use Civant to see markets in one place, score tenders against strengths, and build buyer relationships before tenders are published.",
    useCases: [
      "Improve bid/no-bid discipline with market and competitor context.",
      "Align account planning with likely procurement cycles.",
      "Brief leadership on where public-sector demand is moving next.",
    ],
    signals: [
      "Buyer demand and recurrence",
      "Supplier participation and competition levels",
      "Framework and contract lifecycle patterns",
      "External policy, budget, grant, and hiring signals",
      "AI-assisted tender and scope interpretation",
    ],
    faqs: [
      {
        question: "What is public procurement intelligence?",
        answer:
          "Public procurement intelligence connects procurement data, award history, buyer behavior, lifecycle patterns, and external public signals so suppliers can make stronger market, account, and bid decisions.",
      },
      {
        question: "How does public procurement intelligence improve bid/no-bid decisions?",
        answer:
          "It gives teams context on timing, buyer fit, incumbent position, category recurrence, competition, and strategic match before they commit bid resources.",
      },
      {
        question: "Where does AI fit in Civant?",
        answer:
          "AI helps analyze tender documents, match, buyer intent, scope, and strategic implications. The forecasting engine itself is built from structured procurement data and public evidence.",
      },
    ],
  },
];

export function getSolutionBySlug(slug: string) {
  return SOLUTIONS.find((solution) => solution.slug === slug);
}
