"use client";

import Link from "next/link";
import { Section } from "../../components/site/Section";
import { useBilling } from "../../lib/hooks/useBilling";
import { formatPlan, type BillingCycle } from "../../lib/billing";

const PLAN_COPY = {
  vanguard: {
    title: "Vanguard",
    monthly: "€299/month",
    annual: "€249/month billed annually",
    summary: "For individuals and small teams building a repeatable procurement intelligence workflow.",
  },
  summit: {
    title: "Summit",
    monthly: "€699/month",
    annual: "€599/month billed annually",
    summary: "For growth teams that need broader market coverage, deeper tracking, and stronger competitive context.",
  },
};

function CycleToggle({
  cycle,
  setCycle,
  disabled,
}: {
  cycle: BillingCycle;
  setCycle: (value: BillingCycle) => void;
  disabled?: boolean;
}) {
  return (
    <div className="billing-cycle-toggle" role="tablist" aria-label="Billing cycle">
      <button
        type="button"
        className={`billing-cycle-btn ${cycle === "monthly" ? "is-active" : ""}`.trim()}
        onClick={() => setCycle("monthly")}
        disabled={disabled}
      >
        Monthly
      </button>
      <button
        type="button"
        className={`billing-cycle-btn ${cycle === "annual" ? "is-active" : ""}`.trim()}
        onClick={() => setCycle("annual")}
        disabled={disabled}
      >
        Annual
      </button>
    </div>
  );
}

export default function BillingPageClient() {
  const {
    status,
    cycle,
    setCycle,
    loading,
    error,
    checkoutState,
    clearCheckoutState,
    isCheckoutLoading,
    isPortalLoading,
    startCheckout,
    openPortal,
    activePriceKeys,
  } = useBilling();

  return (
    <>
      <Section className="hero-block hero-section">
        <p className="eyebrow">Billing</p>
        <h1 className="headline-xl">Manage your Civant subscription</h1>
        <p className="text-lead">
          Upgrade your plan, review billing state, and open your subscription portal.
        </p>
      </Section>

      <Section muted>
        {checkoutState ? (
          <div
            className={`billing-banner ${checkoutState === "success" ? "is-success" : "is-cancelled"}`.trim()}
            role="status"
          >
            <p>
              {checkoutState === "success"
                ? "Checkout completed successfully. Your billing status will update shortly."
                : "Checkout was cancelled. No changes were made to your subscription."}
            </p>
            <button
              type="button"
              onClick={clearCheckoutState}
              className="billing-banner-dismiss"
            >
              Dismiss
            </button>
          </div>
        ) : null}

        {error ? (
          <div className="billing-banner is-error" role="alert">
            {error}
          </div>
        ) : null}

        {loading ? (
          <article className="card billing-state-card">
            <h2 className="card-title">Loading billing state</h2>
            <p className="card-body">Fetching your current subscription details.</p>
          </article>
        ) : null}

        {!loading && status.state === "pilot" ? (
          <>
            <div className="section-heading-wrap">
              <p className="eyebrow">Pilot State</p>
              <h2 className="headline-lg">Choose your upgrade path</h2>
              <p className="text-lead section-intro">
                Select a billing cycle, then start checkout for the plan that matches your team.
              </p>
            </div>

            <CycleToggle cycle={cycle} setCycle={setCycle} disabled={isCheckoutLoading} />

            <div className="grid grid-2 billing-plan-grid">
              {(Object.keys(PLAN_COPY) as Array<keyof typeof PLAN_COPY>).map((plan) => (
                <article key={plan} className="card billing-plan-card">
                  <h3 className="card-title">{PLAN_COPY[plan].title}</h3>
                  <p className="billing-price">
                    {cycle === "monthly" ? PLAN_COPY[plan].monthly : PLAN_COPY[plan].annual}
                  </p>
                  <p className="card-body">{PLAN_COPY[plan].summary}</p>
                  <p className="billing-price-key">Price key: {activePriceKeys[plan]}</p>
                  <button
                    type="button"
                    className="btn btn-primary"
                    disabled={isCheckoutLoading}
                    onClick={() => startCheckout({ plan })}
                  >
                    {isCheckoutLoading ? "Redirecting..." : `Upgrade to ${PLAN_COPY[plan].title}`}
                  </button>
                </article>
              ))}
            </div>

            <article className="card billing-state-card">
              <h3 className="card-title">Need enterprise terms?</h3>
              <p className="card-body">
                For custom contracts, procurement onboarding, or procurement-team rollout,
                contact the Civant team.
              </p>
              <div className="button-row">
                <Link href="/contact" className="btn btn-secondary">Contact Sales</Link>
              </div>
            </article>
          </>
        ) : null}

        {!loading && status.state === "paid" ? (
          <article className="card billing-state-card">
            <p className="eyebrow">Paid State</p>
            <h2 className="headline-lg">Your subscription is active</h2>
            <p className="card-body">
              Plan: <strong>{formatPlan(status.plan)}</strong> · Cycle: <strong>{status.cycle}</strong>
              {status.renewsAt ? ` · Renews ${status.renewsAt}` : ""}
            </p>
            <div className="button-row">
              <button
                type="button"
                className="btn btn-primary"
                onClick={openPortal}
                disabled={isPortalLoading}
              >
                {isPortalLoading ? "Opening portal..." : "Manage Subscription"}
              </button>
              <Link href="/contact" className="btn btn-secondary">
                Contact Billing Support
              </Link>
            </div>
          </article>
        ) : null}

        {!loading && status.state === "custom" ? (
          <article className="card billing-state-card">
            <p className="eyebrow">Custom State</p>
            <h2 className="headline-lg">Custom contract billing</h2>
            <p className="card-body">
              Your account is managed under a custom commercial agreement. For billing updates,
              invoicing changes, or seat adjustments, contact us directly.
            </p>
            <div className="button-row">
              <a className="btn btn-primary" href="mailto:hello@civant.eu?subject=Civant%20Billing%20Support">
                Email Billing Team
              </a>
              <Link href="/contact" className="btn btn-secondary">
                Open Contact Form
              </Link>
            </div>
          </article>
        ) : null}
      </Section>
    </>
  );
}
