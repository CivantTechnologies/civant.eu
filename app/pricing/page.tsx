import PricingPageClient from "./PricingPageClient";
import { SchemaScript } from "../../components/site/SchemaScript";
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildPageMetadata,
  buildPricingProductSchema,
} from "../../lib/seo";
import { PRICING_FAQS } from "../../lib/pricing";

export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  title: "Civant Pricing | Procurement Intelligence Plans",
  description:
    "Compare Civant pricing plans, estimate return with procurement intelligence, and choose the package that matches your team.",
  path: "/pricing",
  image: "/screenshots/panorama.png",
});

const pricingFaqs = PRICING_FAQS.map((faq) => ({
  question: faq.q,
  answer: faq.a,
}));

const pricingSchema = [
  buildPricingProductSchema(),
  buildFaqSchema(pricingFaqs),
  buildBreadcrumbSchema([
    { name: "Home", item: "https://civant.eu" },
    { name: "Pricing", item: "https://civant.eu/pricing" },
  ]),
];

export default function PricingPage() {
  return (
    <>
      <PricingPageClient />
      <SchemaScript data={pricingSchema} />
    </>
  );
}
