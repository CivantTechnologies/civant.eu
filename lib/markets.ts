export type MarketStatus = "live" | "coming";

export type MarketFaq = {
  question: string;
  answer: string;
};

export type Market = {
  slug: string;
  country: string;
  adjective: string;
  status: MarketStatus;
  statusLabel: string;
  headline: string;
  description: string;
  metaDescription?: string;
  summary: string;
  buyersLabel: string;
  signalFocus: string[];
  useCases: string[];
  faqs: MarketFaq[];
};

const liveFaqSuffix =
  "Civant combines official procurement records, award history, contract lifecycle signals, competitor movement, and external public signals to help teams plan before formal tender deadlines compress the response window.";

const comingFaqSuffix =
  "The market is part of Civant's next coverage rollout. Teams can use Civant's current European coverage now and discuss upcoming market requirements for category, buyer, and workflow planning.";

export const MARKETS: Market[] = [
  {
    slug: "ireland",
    country: "Ireland",
    adjective: "Irish",
    status: "live",
    statusLabel: "Live coverage",
    headline: "Public procurement intelligence for Ireland",
    description:
      "Civant helps suppliers use Irish public procurement intelligence to monitor buyer activity, renewal windows, and early signals across national and European sources.",
    metaDescription:
      "Use Irish public procurement intelligence to monitor buyer activity, renewal windows, and early signals across national and European sources.",
    summary:
      "Live Irish coverage supports teams tracking public-sector buyers, recurring contract cycles, supplier participation, and renewal signals.",
    buyersLabel: "Irish public-sector buyers",
    signalFocus: [
      "National and TED procurement records",
      "Award history and contract lifecycle patterns",
      "Buyer and category recurrence",
      "Competitor and incumbent movement",
    ],
    useCases: [
      "Prepare earlier for repeat public-sector buying cycles.",
      "Prioritize Irish buyers and categories with stronger strategic fit.",
      "Track incumbent positions before renewal windows become active tenders.",
    ],
    faqs: [
      {
        question: "Does Civant cover public procurement in Ireland?",
        answer: `Yes. Ireland is live in Civant. ${liveFaqSuffix}`,
      },
      {
        question: "How is this different from Irish tender alerts?",
        answer:
          "Tender alerts usually notify teams after a formal notice appears. Civant focuses on earlier procurement intelligence: cycles, awards, buyers, competitors, and external signals that help teams prepare before the notice.",
      },
      {
        question: "Who uses Irish procurement intelligence?",
        answer:
          "Bid teams, sales teams, partnerships teams, and market intelligence teams use Irish procurement intelligence to prioritize buyers, shape account plans, and reduce reactive bidding.",
      },
    ],
  },
  {
    slug: "united-kingdom",
    country: "United Kingdom",
    adjective: "UK",
    status: "live",
    statusLabel: "Live coverage",
    headline: "Public procurement intelligence for the United Kingdom",
    description:
      "Civant helps suppliers use UK public procurement intelligence to monitor buyer activity, renewal windows, and early signals across national and European public-domain sources.",
    metaDescription:
      "Use UK public procurement intelligence to monitor buyer activity, renewal windows, and early signals across national and European sources.",
    summary:
      "Live UK coverage supports teams operating in a high-volume market where timing, buyer segmentation, and incumbent context matter.",
    buyersLabel: "UK public-sector buyers",
    signalFocus: [
      "National procurement records and public notices",
      "Award history and contract duration patterns",
      "Buyer, framework, and category recurrence",
      "Policy, budget, hiring, and pre-procurement signals",
    ],
    useCases: [
      "Map likely renewal windows across complex buyer landscapes.",
      "Prioritize categories where preparation time creates an advantage.",
      "Coordinate sales and bid work before formal tender publication.",
    ],
    faqs: [
      {
        question: "Does Civant cover public procurement in the United Kingdom?",
        answer: `Yes. The United Kingdom is live in Civant. ${liveFaqSuffix}`,
      },
      {
        question: "Can Civant help with UK framework and renewal planning?",
        answer:
          "Yes. Civant is designed to connect award history, lifecycle patterns, buyer behavior, and external signals so teams can plan around likely renewal and re-procurement windows.",
      },
      {
        question: "How does Civant support UK market entry?",
        answer:
          "Civant helps teams identify target buyers, understand incumbent context, and prioritize earlier engagement instead of waiting for late-stage tender alerts.",
      },
    ],
  },
  {
    slug: "spain",
    country: "Spain",
    adjective: "Spanish",
    status: "live",
    statusLabel: "Live coverage",
    headline: "Public procurement intelligence for Spain",
    description:
      "Civant helps suppliers use Spanish public procurement intelligence to monitor buyer activity, renewal windows, and early signals across national and European sources.",
    metaDescription:
      "Use Spanish public procurement intelligence to monitor buyer activity, renewal windows, and early signals across national and European sources.",
    summary:
      "Live Spanish coverage supports teams tracking buyers, categories, supplier participation, and timing signals across a decentralized public-sector market.",
    buyersLabel: "Spanish public-sector buyers",
    signalFocus: [
      "National and TED procurement records",
      "Award history and buyer recurrence",
      "Category and contract lifecycle timing",
      "External budget, grant, policy, and hiring signals",
    ],
    useCases: [
      "Identify Spanish buyers and categories worth early engagement.",
      "Monitor renewal and re-procurement patterns across recurring categories.",
      "Compare supplier participation and incumbent movement before bid decisions.",
    ],
    faqs: [
      {
        question: "Does Civant cover public procurement in Spain?",
        answer: `Yes. Spain is live in Civant. ${liveFaqSuffix}`,
      },
      {
        question: "Why does Spanish procurement need intelligence beyond alerts?",
        answer:
          "Fragmented buyer activity and timing variation can make reactive monitoring inefficient. Civant helps teams connect awards, lifecycles, buyer recurrence, and external public signals into a planning view.",
      },
      {
        question: "Can Civant support Spanish market expansion?",
        answer:
          "Yes. Civant helps teams build target buyer lists, monitor recurring categories, and prioritize engagement before tender windows become compressed.",
      },
    ],
  },
  {
    slug: "france",
    country: "France",
    adjective: "French",
    status: "live",
    statusLabel: "Live coverage",
    headline: "Public procurement intelligence for France",
    description:
      "Civant helps suppliers use French public procurement intelligence to monitor buyer activity, renewal windows, and early signals across national and European sources.",
    metaDescription:
      "Use French public procurement intelligence to monitor buyer activity, renewal windows, and early signals across national and European sources.",
    summary:
      "Live French coverage supports teams tracking public buyers, category recurrence, incumbent movement, and early indicators of future procurement.",
    buyersLabel: "French public-sector buyers",
    signalFocus: [
      "National and TED procurement records",
      "Award and buyer history",
      "Lifecycle, framework, and renewal patterns",
      "Competitor movement and external public signals",
    ],
    useCases: [
      "Prioritize French buyers where contract cycles indicate future demand.",
      "Understand competitor and incumbent positions before formal notices.",
      "Support education, technology, and services teams entering French public-sector markets.",
    ],
    faqs: [
      {
        question: "Does Civant cover public procurement in France?",
        answer: `Yes. France is live in Civant. ${liveFaqSuffix}`,
      },
      {
        question: "How does Civant help with French public-sector planning?",
        answer:
          "Civant connects procurement records, awards, buyer recurrence, and external public signals so teams can identify where future opportunities are more likely to emerge.",
      },
      {
        question: "Is Civant an AI chatbot for French tenders?",
        answer:
          "No. Civant is a procurement forecasting intelligence platform. AI helps interpret match, scope, intent, and strategy, but the forecast layer is built on structured procurement evidence.",
      },
    ],
  },
  {
    slug: "italy",
    country: "Italy",
    adjective: "Italian",
    status: "live",
    statusLabel: "Live coverage",
    headline: "Public procurement intelligence for Italy",
    description:
      "Civant helps suppliers use Italian public procurement intelligence to monitor buyer activity, renewal windows, and early signals across national and European sources.",
    metaDescription:
      "Use Italian public procurement intelligence to monitor buyer activity, renewal windows, and early signals across national and European sources.",
    summary:
      "Live Italian coverage supports teams tracking buyers, categories, supplier participation, and renewal patterns across public-sector opportunities.",
    buyersLabel: "Italian public-sector buyers",
    signalFocus: [
      "National and TED procurement records",
      "Award history and contract lifecycle patterns",
      "Buyer and category recurrence",
      "Competitor movement and external public signals",
    ],
    useCases: [
      "Identify Italian buyers and categories with recurring procurement rhythms.",
      "Prioritize preparation before formal tender publication.",
      "Track incumbent and participation signals to support bid/no-bid decisions.",
    ],
    faqs: [
      {
        question: "Does Civant cover public procurement in Italy?",
        answer: `Yes. Italy is live in Civant. ${liveFaqSuffix}`,
      },
      {
        question: "What signals does Civant track for Italy?",
        answer:
          "Civant focuses on procurement records, award outcomes, contract lifecycle patterns, buyer recurrence, competitor movement, and external public-domain signals.",
      },
      {
        question: "How can Italian procurement intelligence improve bid planning?",
        answer:
          "It helps teams prepare earlier, reduce low-fit reactive bids, and coordinate account activity around likely future procurement windows.",
      },
    ],
  },
  {
    slug: "finland",
    country: "Finland",
    adjective: "Finnish",
    status: "coming",
    statusLabel: "Coming next",
    headline: "Public procurement intelligence for Finland",
    description:
      "Finland is part of Civant's next market rollout for Finnish public procurement intelligence, tender forecasting, and contract lifecycle monitoring.",
    metaDescription:
      "Finland is part of Civant's next rollout for public procurement intelligence, forecasting, and contract lifecycle monitoring.",
    summary:
      "Finnish coverage is coming next, supporting teams preparing Nordic public-sector expansion and education-market opportunities.",
    buyersLabel: "Finnish public-sector buyers",
    signalFocus: [
      "National and TED procurement records",
      "Buyer, category, and renewal-cycle mapping",
      "Supplier participation and incumbent movement",
      "External education, budget, policy, and hiring signals",
    ],
    useCases: [
      "Prepare Nordic public-sector market entry before coverage goes live.",
      "Map target buyer and category priorities for the Finnish rollout.",
      "Coordinate education-market expansion with procurement timing signals.",
    ],
    faqs: [
      {
        question: "Does Civant cover public procurement in Finland?",
        answer: `Finland is part of Civant's next coverage rollout. ${comingFaqSuffix}`,
      },
      {
        question: "Why is Finland important for Civant's market coverage?",
        answer:
          "Finland strengthens Civant's Nordic coverage and is especially relevant for teams selling education technology, SaaS, services, and other public-sector solutions.",
      },
      {
        question: "Can teams prepare for Finnish coverage now?",
        answer:
          "Yes. Teams can define target categories, buyer segments, and workflow needs now so Civant coverage can be used quickly when the market is available.",
      },
    ],
  },
  {
    slug: "belgium",
    country: "Belgium",
    adjective: "Belgian",
    status: "coming",
    statusLabel: "Coming next",
    headline: "Public procurement intelligence for Belgium",
    description:
      "Belgium is part of Civant's next market rollout for Belgian public procurement intelligence, tender forecasting, and contract lifecycle monitoring.",
    metaDescription:
      "Belgium is part of Civant's next rollout for public procurement intelligence, forecasting, and contract lifecycle monitoring.",
    summary:
      "Belgian coverage is coming next, supporting teams that need early visibility across national, regional, and European public-sector demand.",
    buyersLabel: "Belgian public-sector buyers",
    signalFocus: [
      "National, regional, and TED procurement records",
      "Buyer and category recurrence",
      "Contract lifecycle and framework timing",
      "Policy, grant, budget, and institution-level signals",
    ],
    useCases: [
      "Plan early engagement across Belgian public-sector buyer segments.",
      "Map categories where national, regional, and European demand overlap.",
      "Prepare cross-border account plans before formal tender deadlines.",
    ],
    faqs: [
      {
        question: "Does Civant cover public procurement in Belgium?",
        answer: `Belgium is part of Civant's next coverage rollout. ${comingFaqSuffix}`,
      },
      {
        question: "What will Civant track for Belgium?",
        answer:
          "Civant will focus on procurement records, awards, buyer recurrence, lifecycle timing, competitor movement, and public external signals relevant to future demand.",
      },
      {
        question: "Who should follow Belgian procurement intelligence?",
        answer:
          "Suppliers with cross-border European sales, public-sector account teams, bid teams, and market intelligence teams can use Belgian coverage to plan earlier.",
      },
    ],
  },
  {
    slug: "germany",
    country: "Germany",
    adjective: "German",
    status: "coming",
    statusLabel: "Coming next",
    headline: "Public procurement intelligence for Germany",
    description:
      "Germany is part of Civant's next market rollout for German public procurement intelligence, tender forecasting, and contract lifecycle monitoring.",
    metaDescription:
      "Germany is part of Civant's next rollout for public procurement intelligence, forecasting, and contract lifecycle monitoring.",
    summary:
      "German coverage is coming next, supporting teams preparing for a large, distributed public-sector market with complex buyer and category structures.",
    buyersLabel: "German public-sector buyers",
    signalFocus: [
      "National and TED procurement records",
      "Buyer and category segmentation",
      "Contract lifecycle and renewal timing",
      "Competitor, budget, policy, and hiring signals",
    ],
    useCases: [
      "Prepare German market entry around target buyer segments.",
      "Identify where lifecycle intelligence can reduce reactive bidding.",
      "Coordinate bid, sales, and partner activity before formal notices.",
    ],
    faqs: [
      {
        question: "Does Civant cover public procurement in Germany?",
        answer: `Germany is part of Civant's next coverage rollout. ${comingFaqSuffix}`,
      },
      {
        question: "Why does German procurement need a structured intelligence layer?",
        answer:
          "Distributed buyer activity and category complexity make manual monitoring difficult. Civant is designed to connect procurement records, lifecycles, competitors, and external signals into one planning layer.",
      },
      {
        question: "Can Civant help German market-entry planning before launch?",
        answer:
          "Yes. Teams can use Civant's current European coverage and define German target categories, buyer segments, and workflow requirements ahead of rollout.",
      },
    ],
  },
  {
    slug: "netherlands",
    country: "Netherlands",
    adjective: "Dutch",
    status: "coming",
    statusLabel: "Coming next",
    headline: "Public procurement intelligence for the Netherlands",
    description:
      "The Netherlands is part of Civant's next market rollout for Dutch public procurement intelligence, tender forecasting, and contract lifecycle monitoring.",
    metaDescription:
      "The Netherlands is part of Civant's next rollout for public procurement intelligence, forecasting, and contract lifecycle monitoring.",
    summary:
      "Dutch coverage is coming next, supporting teams preparing Benelux public-sector expansion and earlier opportunity planning.",
    buyersLabel: "Dutch public-sector buyers",
    signalFocus: [
      "National and TED procurement records",
      "Buyer and category recurrence",
      "Contract lifecycle and renewal signals",
      "Competitor movement and external public signals",
    ],
    useCases: [
      "Prepare Benelux public-sector expansion with earlier visibility.",
      "Map buyer and category priorities before coverage goes live.",
      "Track likely renewal and re-procurement windows as part of a wider European plan.",
    ],
    faqs: [
      {
        question: "Does Civant cover public procurement in the Netherlands?",
        answer: `The Netherlands is part of Civant's next coverage rollout. ${comingFaqSuffix}`,
      },
      {
        question: "What will Dutch procurement intelligence include?",
        answer:
          "Civant will focus on procurement records, awards, buyer recurrence, lifecycle patterns, competitor movement, and external public-domain signals.",
      },
      {
        question: "How does Dutch coverage fit the wider Civant rollout?",
        answer:
          "The Netherlands expands Civant's European coverage and supports teams building public-sector pipelines across Benelux and neighboring markets.",
      },
    ],
  },
];

export const LIVE_MARKETS = MARKETS.filter((market) => market.status === "live");
export const COMING_MARKETS = MARKETS.filter((market) => market.status === "coming");

export function getMarketBySlug(slug: string) {
  return MARKETS.find((market) => market.slug === slug);
}
