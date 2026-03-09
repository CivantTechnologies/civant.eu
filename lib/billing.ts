export type BillingState = "pilot" | "paid" | "custom";
export type BillingCycle = "monthly" | "annual";
export type BillingPlan = "vanguard" | "summit" | "custom";

export const BILLING_STATE_VALUES: BillingState[] = ["pilot", "paid", "custom"];
export const BILLING_CYCLE_VALUES: BillingCycle[] = ["monthly", "annual"];

export const PRICE_KEYS: Record<Exclude<BillingPlan, "custom">, Record<BillingCycle, string>> = {
  vanguard: {
    monthly: process.env.NEXT_PUBLIC_STRIPE_PRICE_VANGUARD_MONTHLY ?? "price_vanguard_monthly",
    annual: process.env.NEXT_PUBLIC_STRIPE_PRICE_VANGUARD_ANNUAL ?? "price_vanguard_annual",
  },
  summit: {
    monthly: process.env.NEXT_PUBLIC_STRIPE_PRICE_SUMMIT_MONTHLY ?? "price_summit_monthly",
    annual: process.env.NEXT_PUBLIC_STRIPE_PRICE_SUMMIT_ANNUAL ?? "price_summit_annual",
  },
};

export function isBillingState(value: string | null): value is BillingState {
  return value !== null && BILLING_STATE_VALUES.includes(value as BillingState);
}

export function isBillingCycle(value: string | null): value is BillingCycle {
  return value !== null && BILLING_CYCLE_VALUES.includes(value as BillingCycle);
}

export function getPriceKey(
  plan: Exclude<BillingPlan, "custom">,
  cycle: BillingCycle,
): string {
  return PRICE_KEYS[plan][cycle];
}

export function formatPlan(plan: BillingPlan): string {
  if (plan === "vanguard") return "Vanguard";
  if (plan === "summit") return "Summit";
  return "Custom";
}
