import { NextResponse } from "next/server";
import { type BillingCycle, type BillingPlan } from "../../../../lib/billing";

type CheckoutRequest = {
  plan?: BillingPlan;
  cycle?: BillingCycle;
  priceKey?: string;
};

function getCheckoutLink(plan: BillingPlan, cycle: BillingCycle): string | null {
  if (plan === "custom") {
    return null;
  }

  if (plan === "vanguard" && cycle === "monthly") {
    return process.env.STRIPE_CHECKOUT_URL_VANGUARD_MONTHLY ?? null;
  }
  if (plan === "vanguard" && cycle === "annual") {
    return process.env.STRIPE_CHECKOUT_URL_VANGUARD_ANNUAL ?? null;
  }
  if (plan === "summit" && cycle === "monthly") {
    return process.env.STRIPE_CHECKOUT_URL_SUMMIT_MONTHLY ?? null;
  }
  if (plan === "summit" && cycle === "annual") {
    return process.env.STRIPE_CHECKOUT_URL_SUMMIT_ANNUAL ?? null;
  }

  return null;
}

export async function POST(request: Request) {
  const payload = (await request.json().catch(() => ({}))) as CheckoutRequest;

  const plan = payload.plan;
  const cycle = payload.cycle;

  if ((plan !== "vanguard" && plan !== "summit") || (cycle !== "monthly" && cycle !== "annual")) {
    return NextResponse.json(
      { message: "Invalid checkout payload" },
      { status: 400 },
    );
  }

  const checkoutUrl = getCheckoutLink(plan, cycle);
  if (checkoutUrl) {
    return NextResponse.json({ redirectUrl: checkoutUrl });
  }

  const origin = new URL(request.url).origin;
  const fallback = new URL("/billing", origin);
  fallback.searchParams.set("checkout", "success");

  return NextResponse.json({
    redirectUrl: fallback.toString(),
    simulated: true,
    priceKey: payload.priceKey ?? null,
  });
}
