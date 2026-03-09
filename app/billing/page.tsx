import type { Metadata } from "next";
import BillingPageClient from "./BillingPageClient";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Billing | Civant",
  description:
    "Manage Civant subscription billing, upgrades, and portal access.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function BillingPage() {
  return <BillingPageClient />;
}
