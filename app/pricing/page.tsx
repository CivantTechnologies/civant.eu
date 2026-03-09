import PricingPageClient from "./PricingPageClient";
import { buildPageMetadata } from "../../lib/seo";

export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  title: "Pricing | Civant",
  description:
    "Compare Civant pricing plans, estimate return with procurement intelligence, and choose the package that matches your team.",
  path: "/pricing",
});

export default function PricingPage() {
  return <PricingPageClient />;
}
