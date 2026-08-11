import { MARKET_COVERAGE_SNAPSHOT } from "./siteFacts";
import { COMING_MARKET_LIST, LIVE_MARKET_LIST } from "./markets";

export type PricingFaq = {
  q: string;
  a: string;
};

export const PRICING_TERMS_EFFECTIVE_DATE = "9 March 2026";

export const PRICING_FAQS: PricingFaq[] = [
  {
    q: "What does every Civant plan include?",
    a: "Every plan includes all live Civant countries, buyer and award history, renewal forecasting, tender monitoring, saved alerts, competitor tracking, and intelligence briefs. Plan differences are mainly about seats, alert volume, competitor coverage, support, and rollout needs.",
  },
  {
    q: "What happens after I choose Vanguard or Summit?",
    a: "You enter a short signup flow, complete payment through Stripe, and your Civant workspace is created after payment. Onboarding then starts with your company profile, target markets, competitors, and alert setup.",
  },
  {
    q: "When should I request a custom plan instead?",
    a: "Use a custom plan when you need more seats, procurement workflow support, tailored onboarding, enterprise billing, SLA requirements, or help rolling Civant out across multiple teams.",
  },
  {
    q: "Which markets are covered?",
    a: `Coverage status last reviewed ${MARKET_COVERAGE_SNAPSHOT.dateLabel}: every plan covered ${LIVE_MARKET_LIST}. ${COMING_MARKET_LIST} were listed as coming soon and will be included automatically when live.`,
  },
  {
    q: "Can we add more seats or markets later?",
    a: "Yes. Live markets are included automatically as Civant expands coverage. Summit includes three seats and additional seats can be added; larger rollout needs are best handled through a custom plan.",
  },
  {
    q: "Do you support invoices?",
    a: "Stripe provides payment receipts for self-serve plans. If your organisation needs invoice-based billing, purchase orders, procurement approval, or custom commercial terms, request a custom plan.",
  },
  {
    q: "Can I cancel at any time?",
    a: `Under Civant's service terms effective ${PRICING_TERMS_EFFECTIVE_DATE}, monthly plans can be cancelled at any time with no penalty. Annual plans include a 14-day money-back guarantee; after that window, the plan runs to the end of the contract period.`,
  },
  {
    q: "How fresh is the procurement data?",
    a: "Civant runs scheduled, source-specific ingestion and refresh pipelines. Timing varies by market, source, and data type, and source availability can affect when individual records appear. Buyer research briefs are cached for up to seven days and refreshed after expiry.",
  },
  {
    q: "How accurate is the ROI calculator?",
    a: "The ROI calculator is an illustrative planning model, not a revenue guarantee. It helps teams estimate the potential upside of earlier visibility, sharper prioritisation, and better pursuit focus using their own tender volume, win rate, and contract value assumptions.",
  },
  {
    q: "How long does onboarding take?",
    a: "The self-serve setup is designed to take about 15 minutes. Actual timing depends on how much company, category, market, buyer, competitor, and alert configuration your team wants to add before using the workspace.",
  },
];
