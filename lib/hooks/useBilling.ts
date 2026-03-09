"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  type BillingCycle,
  type BillingPlan,
  type BillingState,
  PRICE_KEYS,
  formatPlan,
  getPriceKey,
  isBillingCycle,
  isBillingState,
} from "../billing";

type BillingStatus = {
  state: BillingState;
  plan: BillingPlan;
  cycle: BillingCycle;
  renewsAt: string | null;
};

type CheckoutState = "success" | "cancelled" | null;

type ActionKind = "checkout" | "portal" | null;

type StartCheckoutArgs = {
  plan: Exclude<BillingPlan, "custom">;
};

const DEFAULT_STATUS: BillingStatus = {
  state: "pilot",
  plan: "vanguard",
  cycle: "monthly",
  renewsAt: null,
};

export function useBilling() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const safePathname = pathname ?? "/billing";

  const [status, setStatus] = useState<BillingStatus>(DEFAULT_STATUS);
  const [cycle, setCycle] = useState<BillingCycle>(DEFAULT_STATUS.cycle);
  const [loading, setLoading] = useState(true);
  const [action, setAction] = useState<ActionKind>(null);
  const [error, setError] = useState<string | null>(null);
  const [checkoutState, setCheckoutState] = useState<CheckoutState>(null);

  const hydrateStatus = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/billing/status", {
        method: "GET",
        cache: "no-store",
      });

      if (!response.ok) {
        throw new Error("Unable to load billing status");
      }

      const payload = (await response.json()) as Partial<BillingStatus>;

      const nextState = isBillingState(payload.state ?? null)
        ? (payload.state as BillingState)
        : DEFAULT_STATUS.state;
      const nextPlan: BillingPlan = payload.plan ?? DEFAULT_STATUS.plan;
      const nextCycle = isBillingCycle(payload.cycle ?? null)
        ? (payload.cycle as BillingCycle)
        : DEFAULT_STATUS.cycle;

      setStatus({
        state: nextState,
        plan: nextPlan,
        cycle: nextCycle,
        renewsAt: payload.renewsAt ?? null,
      });
      setCycle(nextCycle);
    } catch (cause) {
      const message = cause instanceof Error ? cause.message : "Unable to load billing state";
      setError(message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void hydrateStatus();
  }, [hydrateStatus]);

  useEffect(() => {
    if (!searchParams) {
      return;
    }

    const checkout = searchParams.get("checkout");
    const stateOverride = searchParams.get("state");

    if (checkout === "success" || checkout === "cancelled") {
      setCheckoutState(checkout);

      const nextParams = new URLSearchParams(searchParams.toString());
      nextParams.delete("checkout");
      const nextQuery = nextParams.toString();
      router.replace(nextQuery ? `${safePathname}?${nextQuery}` : safePathname, { scroll: false });
    }

    if (isBillingState(stateOverride)) {
      setStatus((current) => ({ ...current, state: stateOverride }));
    }
  }, [router, safePathname, searchParams]);

  const startCheckout = useCallback(
    async ({ plan }: StartCheckoutArgs) => {
      setAction("checkout");
      setError(null);

      try {
        const priceKey = getPriceKey(plan, cycle);
        const response = await fetch("/api/billing/checkout", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ plan, cycle, priceKey }),
        });

        if (!response.ok) {
          const payload = await response.json().catch(() => ({ message: "Checkout failed" }));
          throw new Error(payload.message || "Checkout failed");
        }

        const payload = (await response.json()) as { redirectUrl?: string };
        if (!payload.redirectUrl) {
          throw new Error("Checkout URL not provided");
        }

        window.location.assign(payload.redirectUrl);
      } catch (cause) {
        const message = cause instanceof Error ? cause.message : "Checkout failed";
        setError(message);
      } finally {
        setAction(null);
      }
    },
    [cycle],
  );

  const openPortal = useCallback(async () => {
    setAction("portal");
    setError(null);

    try {
      const response = await fetch("/api/billing/portal", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
      });

      if (!response.ok) {
        const payload = await response.json().catch(() => ({ message: "Portal unavailable" }));
        throw new Error(payload.message || "Portal unavailable");
      }

      const payload = (await response.json()) as { redirectUrl?: string };
      if (!payload.redirectUrl) {
        throw new Error("Portal URL not provided");
      }

      window.location.assign(payload.redirectUrl);
    } catch (cause) {
      const message = cause instanceof Error ? cause.message : "Portal unavailable";
      setError(message);
    } finally {
      setAction(null);
    }
  }, []);

  const activePriceKeys = useMemo(
    () => ({
      vanguard: PRICE_KEYS.vanguard[cycle],
      summit: PRICE_KEYS.summit[cycle],
    }),
    [cycle],
  );

  return {
    status,
    cycle,
    setCycle,
    loading,
    error,
    checkoutState,
    clearCheckoutState: () => setCheckoutState(null),
    isCheckoutLoading: action === "checkout",
    isPortalLoading: action === "portal",
    startCheckout,
    openPortal,
    refresh: hydrateStatus,
    activePriceKeys,
    formattedPlan: formatPlan(status.plan),
  };
}
