import { NextResponse } from "next/server";
import {
  type BillingCycle,
  type BillingPlan,
  type BillingState,
  isBillingCycle,
  isBillingState,
} from "../../../../lib/billing";

function normalizePlan(raw: string | undefined): BillingPlan {
  if (raw === "vanguard" || raw === "summit" || raw === "custom") {
    return raw;
  }
  return "vanguard";
}

export async function GET() {
  const rawState = process.env.BILLING_DEFAULT_STATE?.toLowerCase() ?? "pilot";
  const rawPlan = process.env.BILLING_DEFAULT_PLAN?.toLowerCase();
  const rawCycle = process.env.BILLING_DEFAULT_CYCLE?.toLowerCase() ?? "monthly";

  const state: BillingState = isBillingState(rawState) ? rawState : "pilot";
  const plan: BillingPlan = normalizePlan(rawPlan);
  const cycle: BillingCycle = isBillingCycle(rawCycle) ? rawCycle : "monthly";
  const renewsAt = process.env.BILLING_RENEWS_AT ?? null;

  return NextResponse.json({
    state,
    plan,
    cycle,
    renewsAt,
  });
}
