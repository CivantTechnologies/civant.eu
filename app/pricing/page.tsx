import PricingPageClient from "./PricingPageClient";
import { SchemaScript } from "../../components/site/SchemaScript";
import { buildFaqSchema, buildPageMetadata, buildPricingProductSchema } from "../../lib/seo";

export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  title: "EU Procurement Intelligence Pricing from €299/month",
  description:
    "Compare Civant pricing plans, estimate return with procurement intelligence, and choose the package that matches your team.",
  path: "/pricing",
});

const pricingFaqs = [
  {
    question: "Which markets are covered?",
    answer:
      "Every plan covers all four markets Civant currently operates in: Ireland, the United Kingdom (England, Scotland, Wales, and Northern Ireland), Spain, and France. New markets coming soon — all plans will include them automatically at no extra cost.",
  },
  {
    question: "Can I cancel at any time?",
    answer:
      "Monthly plans can be cancelled at any time with no penalty. Annual plans include a 14-day money-back guarantee. After the 14-day window, annual plans run to the end of the contract period.",
  },
  {
    question: "How fresh is the procurement data?",
    answer:
      "Tender data is updated daily across all markets. Award and contract history is updated weekly. AI intelligence briefs are cached for 7 days to maintain quality and consistency, then refreshed on demand.",
  },
  {
    question: "How long does onboarding take?",
    answer:
      "Most teams are fully set up within 15 minutes. You complete a short company profile that calibrates your CPV codes, target markets, and buyer types. From there, your dashboard and alerts are live immediately.",
  },
];

const pricingSchema = [
  buildPricingProductSchema(),
  buildFaqSchema(pricingFaqs),
];

export default function PricingPage() {
  return (
    <>
      <PricingPageClient />
      <SchemaScript data={pricingSchema} />
    </>
  );
}
