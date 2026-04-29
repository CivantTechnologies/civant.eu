"use client";

import { type CSSProperties, type FormEvent, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Check, Minus, Plus } from "lucide-react";
import { Section } from "../../components/site/Section";
import { CTAGroup } from "../../components/site/CTAGroup";
import { ProofSection } from "../../components/site/ProofSection";

// ─── Types ────────────────────────────────────────────────────────────────────

type Plan = {
  name: string;
  tagline: string;
  headline: string;
  monthlyPrice: number | null;
  annualPrice: number | null;
  annualBilled: string | null;
  annualSaving: string | null;
  ctaLabel: string;
  ctaHref: string;
  featured: boolean;
  features: string[];
};

type FaqItem = {
  q: string;
  a: string;
};

type PriceKey =
  | "vanguard_monthly"
  | "vanguard_annual"
  | "summit_monthly"
  | "summit_annual";

type SignupIntent = {
  planName: "Vanguard" | "Summit";
  priceLabel: string;
  priceKey: PriceKey;
};

const CHECKOUT_ENDPOINT =
  "https://ossoggqkqifdkihybbew.supabase.co/functions/v1/create-checkout-session";
const CHECKOUT_SUCCESS_URL = "https://app.civant.eu/welcome";
const CHECKOUT_CANCEL_URL = "https://civant.eu/pricing";

// ─── Data ────────────────────────────────────────────────────────────────────

const plans: Plan[] = [
  {
    name: "Vanguard",
    tagline:
      "For one user or a lean team building a steady procurement rhythm.",
    headline: "Build your market routine",
    monthlyPrice: 299,
    annualPrice: 249,
    annualBilled: "Billed €2,988/year",
    annualSaving: "Save €600",
    ctaLabel: "Start Vanguard",
    ctaHref: "/contact",
    featured: false,
    features: [
      "1 seat",
      "10 saved alert rules",
      "5 competitors tracked",
      "50 intelligence briefs per day",
      "All live countries included",
      "Buyer and award history",
      "Renewal forecasting",
    ],
  },
  {
    name: "Summit",
    tagline:
      "For bid teams that need broader coverage, clearer prioritisation, and competitor context.",
    headline: "Run a sharper pipeline",
    monthlyPrice: 699,
    annualPrice: 599,
    annualBilled: "Billed €7,188/year",
    annualSaving: "Save €1,200",
    ctaLabel: "Start Summit",
    ctaHref: "/contact",
    featured: true,
    features: [
      "3 seats included, €99 per extra seat",
      "50 saved alert rules",
      "25 competitors tracked",
      "100 intelligence briefs per day",
      "All live countries included",
      "Buyer and award history",
      "Renewal forecasting",
      "Competitor intelligence",
      "Priority email support",
    ],
  },
  {
    name: "Custom",
    tagline:
      "For larger teams that need rollout support, governance, and commercial terms shaped around how they work.",
    headline: "Scale Civant your way",
    monthlyPrice: null,
    annualPrice: null,
    annualBilled: "Annual contract and bespoke pricing",
    annualSaving: null,
    ctaLabel: "Request Custom Plan",
    ctaHref: "/contact",
    featured: false,
    features: [
      "Flexible seat volume",
      "Unlimited alerts & competitors",
      "Configurable intelligence credit pool",
      "All live countries included",
      "Dedicated onboarding lead",
      "Team training",
      "Workflow, SLA, and billing alignment",
    ],
  },
];

const faqs: FaqItem[] = [
  {
    q: "What does every Civant plan include?",
    a: "Every plan includes all live Civant countries, buyer and award history, renewal forecasting, tender monitoring, saved alerts, competitor tracking, and intelligence briefs. Plan differences are mainly about seats, alert volume, competitor coverage, support, and rollout needs.",
  },
  {
    q: "What happens after I choose Vanguard or Summit?",
    a: "You enter a short signup flow, complete payment through Stripe, and your Civant workspace is created after payment. From there, onboarding starts with your company profile, target markets, competitors, and alert setup.",
  },
  {
    q: "When should I request a custom plan instead?",
    a: "Use a custom plan when you need more seats, procurement workflow support, tailored onboarding, enterprise billing, SLA requirements, or help rolling Civant out across multiple teams.",
  },
  {
    q: "Which markets are covered?",
    a: "Every plan covers the markets Civant currently operates in: Ireland, the United Kingdom (England, Scotland, Wales, and Northern Ireland), Spain, France, and Italy. Finland, Belgium, Germany, and the Netherlands are coming next and will be included automatically at no extra cost.",
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
    a: "Yes. Monthly plans can be cancelled at any time with no penalty. Annual plans include a 14-day money-back guarantee. After the 14-day window, annual plans run to the end of the contract period.",
  },
  {
    q: "How fresh is the procurement data?",
    a: "Tender data is updated daily across all markets. Award and contract history is updated weekly. AI intelligence briefs are cached for 7 days to maintain quality and consistency, then refreshed on demand.",
  },
  {
    q: "How accurate is the ROI calculator?",
    a: "The ROI calculator is an illustrative planning model, not a revenue guarantee. It helps teams estimate the potential upside of earlier visibility, sharper prioritisation, and better pursuit focus using their own tender volume, win rate, and contract value assumptions.",
  },
  {
    q: "How long does onboarding take?",
    a: "Most teams are fully set up within 15 minutes. You complete a short company profile that calibrates your CPV codes, target markets, and buyer types. From there, your dashboard and alerts are live immediately.",
  },
];

const buyingPaths = [
  {
    title: "Vanguard",
    label: "Focused start",
    body: "For one user or a compact team that wants full market coverage and a disciplined way to monitor future demand.",
    cta: "Compare Plans",
    href: "#plans",
  },
  {
    title: "Summit",
    label: "Team pipeline",
    body: "For bid, sales, or intelligence teams that need shared visibility, competitor context, and broader alert capacity.",
    cta: "Compare Plans",
    href: "#plans",
  },
  {
    title: "Custom",
    label: "Enterprise rollout",
    body: "For larger teams that need onboarding support, invoice terms, governance, SLA alignment, or a tailored buying path.",
    cta: "Talk to Us",
    href: "/contact",
  },
];

const pricingHeroProof = [
  "All live countries included",
  "Monthly or annual",
  "Custom rollout available",
];

// ─── Helpers ─────────────────────────────────────────────────────────────────

function fmt(n: number): string {
  if (n >= 1_000_000) return `€${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `€${Math.round(n / 1_000)}K`;
  return `€${n}`;
}

function clamp(val: number, min: number, max: number) {
  return Math.min(Math.max(val, min), max);
}

function slugifyWorkspace(value: string): string {
  const slug = value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 40)
    .replace(/-+$/g, "");

  return slug || "workspace";
}

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

function buildSignupIntent(plan: Plan, annual: boolean): SignupIntent | null {
  if (plan.name !== "Vanguard" && plan.name !== "Summit") {
    return null;
  }

  const priceValue = annual ? plan.annualPrice : plan.monthlyPrice;
  if (priceValue === null) {
    return null;
  }

  const priceKey: PriceKey =
    plan.name === "Vanguard"
      ? annual
        ? "vanguard_annual"
        : "vanguard_monthly"
      : annual
        ? "summit_annual"
        : "summit_monthly";

  return {
    planName: plan.name,
    priceLabel: `€${priceValue}/month`,
    priceKey,
  };
}

function SignupModal({
  intent,
  onClose,
}: {
  intent: SignupIntent;
  onClose: () => void;
}) {
  const [companyName, setCompanyName] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [ownerEmail, setOwnerEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const workspaceSlug = useMemo(() => slugifyWorkspace(companyName), [companyName]);
  const canSubmit =
    companyName.trim().length > 0 &&
    ownerName.trim().length > 0 &&
    isValidEmail(ownerEmail) &&
    !submitting;

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!canSubmit) {
      return;
    }

    setSubmitting(true);
    setError(null);

    try {
      const response = await fetch(CHECKOUT_ENDPOINT, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          new_signup: true,
          company_name: companyName.trim(),
          owner_name: ownerName.trim(),
          owner_email: ownerEmail.trim(),
          price_key: intent.priceKey,
          success_url: CHECKOUT_SUCCESS_URL,
          cancel_url: CHECKOUT_CANCEL_URL,
        }),
      });

      const payload = (await response.json().catch(() => ({}))) as {
        url?: string;
        message?: string;
        error?: string;
      };

      if (!response.ok) {
        throw new Error(payload.message || payload.error || "Unable to start checkout.");
      }

      if (!payload.url) {
        throw new Error("Checkout URL was not returned.");
      }

      window.location.assign(payload.url);
    } catch (cause) {
      const message =
        cause instanceof Error ? cause.message : "Unable to start checkout.";
      setError(message);
      setSubmitting(false);
    }
  }

  return (
    <div
      className="pricing-signup-modal-backdrop"
      role="presentation"
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        className="pricing-signup-modal card"
        role="dialog"
        aria-modal="true"
        aria-labelledby="pricing-signup-modal-title"
      >
        <p className="eyebrow">Complete signup</p>
        <h2 id="pricing-signup-modal-title" className="headline-lg pricing-signup-modal-title">
          Continue with {intent.planName}
        </h2>
        <p className="pricing-signup-plan-readonly">
          {intent.planName}, {intent.priceLabel}
        </p>

        <form className="contact-live-form-grid" onSubmit={handleSubmit}>
          <label className="contact-field">
            <span className="contact-label">Company name</span>
            <input
              type="text"
              className="contact-input"
              value={companyName}
              onChange={(event) => setCompanyName(event.target.value)}
              required
              autoComplete="organization"
              placeholder="Acme Procurement Ltd"
            />
            <span className="pricing-signup-workspace-preview">
              Your workspace: {workspaceSlug}
            </span>
          </label>

          <label className="contact-field">
            <span className="contact-label">Full name</span>
            <input
              type="text"
              className="contact-input"
              value={ownerName}
              onChange={(event) => setOwnerName(event.target.value)}
              required
              autoComplete="name"
              placeholder="Alexander Collins"
            />
          </label>

          <label className="contact-field">
            <span className="contact-label">Work email</span>
            <input
              type="email"
              className="contact-input"
              value={ownerEmail}
              onChange={(event) => setOwnerEmail(event.target.value)}
              required
              autoComplete="email"
              placeholder="you@company.com"
            />
          </label>

          <button type="submit" className="btn btn-primary" disabled={!canSubmit}>
            {submitting ? (
              <>
                <span className="contact-live-spinner" aria-hidden="true" />
                Processing...
              </>
            ) : (
              "Continue to payment"
            )}
          </button>

          {error ? <p className="pricing-signup-error">{error}</p> : null}

          <p className="pricing-checkout-footnote">
            Secure Stripe checkout. Your Civant workspace is created after
            payment and monthly plans can be cancelled anytime.
          </p>
        </form>
      </div>
    </div>
  );
}

// ─── Stepper ──────────────────────────────────────────────────────────────────

function Stepper({
  label,
  display,
  onIncrement,
  onDecrement,
  atMin,
  atMax,
}: {
  label: string;
  display: string;
  onIncrement: () => void;
  onDecrement: () => void;
  atMin: boolean;
  atMax: boolean;
}) {
  const btnBase: CSSProperties = {
    width: 34,
    height: 34,
    borderRadius: "0.52rem",
    border: "1px solid rgba(255,255,255,0.15)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    transition: "background 180ms, color 180ms",
    cursor: "pointer",
  };

  return (
    <div style={{ textAlign: "center" }}>
      <p
        style={{
          margin: "0 0 0.55rem",
          fontSize: "0.75rem",
          fontWeight: 600,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "#9ca3af",
        }}
      >
        {label}
      </p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.75rem",
        }}
      >
        <button
          onClick={onDecrement}
          disabled={atMin}
          aria-label={`Decrease ${label}`}
          style={{
            ...btnBase,
            background: atMin ? "rgba(255,255,255,0.02)" : "rgba(0,196,196,0.1)",
            color: atMin ? "#4b5563" : "#00c4c4",
            cursor: atMin ? "not-allowed" : "pointer",
          }}
        >
          <Minus size={14} />
        </button>
        <span
          style={{
            fontSize: "1.25rem",
            fontWeight: 700,
            color: "#fff",
            minWidth: "5.5rem",
            textAlign: "center",
            fontVariantNumeric: "tabular-nums",
          }}
        >
          {display}
        </span>
        <button
          onClick={onIncrement}
          disabled={atMax}
          aria-label={`Increase ${label}`}
          style={{
            ...btnBase,
            background: atMax ? "rgba(255,255,255,0.02)" : "rgba(0,196,196,0.1)",
            color: atMax ? "#4b5563" : "#00c4c4",
            cursor: atMax ? "not-allowed" : "pointer",
          }}
        >
          <Plus size={14} />
        </button>
      </div>
    </div>
  );
}

// ─── ROI Calculator ───────────────────────────────────────────────────────────

const SEAT_OPTIONS    = [1, 2, 3, 4, 5, 7, 10, 15, 25, 50];
const TENDER_OPTIONS  = [5, 10, 15, 20, 30, 40, 50, 75, 100, 150, 200, 300];
const WIN_OPTIONS     = [5, 10, 15, 20, 25, 30, 35, 40, 50, 60, 65, 70, 75, 80, 85, 90];
const CONTRACT_OPTIONS = [10000, 25000, 50000, 75000, 100000, 250000, 500000, 1000000, 2500000, 5000000];

function RoiCalculator() {
  const [seatIdx,     setSeatIdx]     = useState(1); // 2 people
  const [tenderIdx,   setTenderIdx]   = useState(2); // 20
  const [winIdx,      setWinIdx]      = useState(4); // 25%
  const [contractIdx, setContractIdx] = useState(2); // €50K

  const seats    = SEAT_OPTIONS[seatIdx];
  const tenders  = TENDER_OPTIONS[tenderIdx];
  const winRate  = WIN_OPTIONS[winIdx] / 100;
  const contract = CONTRACT_OPTIONS[contractIdx];

  const extraOpps  = Math.round(tenders * 0.4);
  const newWinRate = Math.max(winRate, Math.min(winRate * 1.35, 0.85));
  const extraWins  = Math.max(0, (tenders + extraOpps) * newWinRate - tenders * winRate);
  const revenue    = Math.round(extraWins * contract);

  const planCost =
    seats > 3 || tenders > 80 ? 18000
    : seats > 1 || tenders > 30 ? 699 * 12
    : 299 * 12;

  const multiple = planCost > 0 ? Math.round((revenue / planCost) * 10) / 10 : 0;
  const planCostLabel =
    seats > 3 || tenders > 80 ? "Custom pricing" : `${fmt(planCost)}/year`;
  const recommendedPlan =
    seats > 3 || tenders > 80
      ? {
          name: "Custom plan",
          detail: "Best fit when rollout, support, or broader team coverage matters.",
        }
      : seats > 1 || tenders > 30
        ? {
            name: "Summit annual",
            detail: "Best fit for multi-user teams that need broader market and competitor context.",
          }
        : {
            name: "Vanguard annual",
            detail: "Best fit for one user or a lean team building a repeatable routine.",
          };
  const calculatorInputs = [
    {
      id: "seats",
      stepper: {
        label: "Bid managers / users",
        display: `${seats} ${seats === 1 ? "person" : "people"}`,
        onDecrement: () => setSeatIdx((i) => clamp(i - 1, 0, SEAT_OPTIONS.length - 1)),
        onIncrement: () => setSeatIdx((i) => clamp(i + 1, 0, SEAT_OPTIONS.length - 1)),
        atMin: seatIdx === 0,
        atMax: seatIdx === SEAT_OPTIONS.length - 1,
      },
    },
    {
      id: "tenders",
      stepper: {
        label: "Tenders per year",
        display: String(tenders),
        onDecrement: () => setTenderIdx((i) => clamp(i - 1, 0, TENDER_OPTIONS.length - 1)),
        onIncrement: () => setTenderIdx((i) => clamp(i + 1, 0, TENDER_OPTIONS.length - 1)),
        atMin: tenderIdx === 0,
        atMax: tenderIdx === TENDER_OPTIONS.length - 1,
      },
    },
    {
      id: "win-rate",
      stepper: {
        label: "Current win rate",
        display: `${WIN_OPTIONS[winIdx]}%`,
        onDecrement: () => setWinIdx((i) => clamp(i - 1, 0, WIN_OPTIONS.length - 1)),
        onIncrement: () => setWinIdx((i) => clamp(i + 1, 0, WIN_OPTIONS.length - 1)),
        atMin: winIdx === 0,
        atMax: winIdx === WIN_OPTIONS.length - 1,
      },
    },
    {
      id: "contract-value",
      stepper: {
        label: "Avg contract value",
        display: fmt(contract),
        onDecrement: () => setContractIdx((i) => clamp(i - 1, 0, CONTRACT_OPTIONS.length - 1)),
        onIncrement: () => setContractIdx((i) => clamp(i + 1, 0, CONTRACT_OPTIONS.length - 1)),
        atMin: contractIdx === 0,
        atMax: contractIdx === CONTRACT_OPTIONS.length - 1,
      },
    },
  ];
  const calculatorOutputs = [
    { label: "Extra opportunities per year", value: `+${extraOpps}` },
    { label: "Additional wins estimated", value: `+${Math.round(extraWins * 10) / 10}` },
    { label: "Indicative annual plan cost", value: planCostLabel },
    { label: "Estimated return on investment", value: `${multiple}x` },
  ];

  return (
    <div className="pricing-roi-shell">
      <div className="pricing-roi-header">
        <p className="eyebrow">Model your current team</p>
        <h3>Estimate the value of better timing</h3>
        <p>
          Adjust four assumptions to see how earlier visibility and sharper
          prioritisation could change the economics of your public-sector
          pipeline.
        </p>
      </div>

      <div className="pricing-roi-layout">
        <div className="pricing-roi-controls" aria-label="ROI calculator assumptions">
          {calculatorInputs.map((column) => (
            <div key={column.id} className="pricing-roi-control-card">
              <Stepper
                label={column.stepper.label}
                display={column.stepper.display}
                onDecrement={column.stepper.onDecrement}
                onIncrement={column.stepper.onIncrement}
                atMin={column.stepper.atMin}
                atMax={column.stepper.atMax}
              />
            </div>
          ))}
        </div>

        <aside className="pricing-roi-value-card" aria-label="Estimated annual value">
          <p className="pricing-roi-value-label">Estimated annual value</p>
          <p className="pricing-roi-value">{fmt(revenue)}</p>
          <p className="pricing-roi-value-copy">
            Based on {tenders} tenders per year, a {WIN_OPTIONS[winIdx]}% current
            win rate, and an average contract value of {fmt(contract)}.
          </p>
          <div className="pricing-roi-assumption-strip">
            <span>{tenders} tenders/year</span>
            <span>{WIN_OPTIONS[winIdx]}% win rate</span>
            <span>{fmt(contract)} average value</span>
          </div>
        </aside>
      </div>

      <div className="pricing-roi-summary-grid">
        {calculatorOutputs.map((item) => (
          <div key={item.label} className="pricing-roi-summary-card">
            <p>{item.value}</p>
            <span>{item.label}</span>
          </div>
        ))}
        <div className="pricing-roi-summary-card pricing-roi-plan-card">
          <p>{recommendedPlan.name}</p>
          <span>{recommendedPlan.detail}</span>
        </div>
      </div>

      <p className="pricing-roi-disclaimer">
        Illustrative planning model only. It estimates the commercial effect of
        earlier tender visibility, stronger prioritisation, and better pursuit
        focus. It is not a guarantee of revenue.
      </p>
    </div>
  );
}

// ─── Billing toggle ───────────────────────────────────────────────────────────

function BillingToggle({ annual, onChange }: { annual: boolean; onChange: (v: boolean) => void }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.75rem", marginTop: "2rem" }}>
      {/* Toggle row */}
      <div style={{ display: "flex", alignItems: "center", gap: "0.9rem" }}>
        <span style={{ fontSize: "0.9rem", fontWeight: 600, color: annual ? "#6b7280" : "#fff", transition: "color 180ms" }}>
          Monthly
        </span>

        {/* Toggle — deliberately square-ish to distinguish from pill badge */}
        <button
          role="switch"
          aria-checked={annual}
          onClick={() => onChange(!annual)}
          style={{
            position: "relative",
            width: 52,
            height: 28,
            background: annual ? "rgba(0,196,196,0.4)" : "rgba(255,255,255,0.1)",
            border: annual ? "1px solid rgba(0,196,196,0.6)" : "1px solid rgba(255,255,255,0.2)",
            borderRadius: "6px",
            cursor: "pointer",
            transition: "background 200ms, border-color 200ms",
            padding: 0,
          }}
          aria-label="Toggle annual billing"
        >
          <span style={{
            position: "absolute",
            top: 4,
            left: annual ? 26 : 4,
            width: 20,
            height: 20,
            borderRadius: "4px",
            background: annual ? "#00c4c4" : "#9ca3af",
            transition: "left 200ms, background 200ms",
          }} />
        </button>

        <span style={{ fontSize: "0.9rem", fontWeight: 600, color: annual ? "#fff" : "#6b7280", transition: "color 180ms" }}>
          Annual
        </span>
      </div>

      {/* Savings badge — only glows when annual is active */}
      <div style={{
        fontSize: "0.78rem",
        fontWeight: 700,
        letterSpacing: "0.04em",
        background: annual ? "rgba(0,196,196,0.15)" : "rgba(255,255,255,0.04)",
        border: annual ? "1px solid rgba(0,196,196,0.5)" : "1px solid rgba(255,255,255,0.1)",
        color: annual ? "#00c4c4" : "#6b7280",
        borderRadius: "var(--radius-sm)",
        padding: "0.35rem 0.85rem",
        transition: "all 250ms",
        boxShadow: annual ? "0 0 14px rgba(0,196,196,0.35)" : "none",
      }}>
        {annual ? "Save €600–€1,200 per year" : "Get annual billing and save €600–€1,200"}
      </div>
    </div>
  );
}

// ─── Plan card ────────────────────────────────────────────────────────────────

function PlanCard({
  plan,
  annual,
  onPlanPurchase,
}: {
  plan: Plan;
  annual: boolean;
  onPlanPurchase: (intent: SignupIntent) => void;
}) {
  const price = plan.monthlyPrice === null ? null : annual ? plan.annualPrice : plan.monthlyPrice;
  const signupIntent = buildSignupIntent(plan, annual);

  return (
    <article
      style={{
        position: "relative",
        background: plan.featured ? "linear-gradient(150deg, rgba(0,196,196,0.09), rgba(255,255,255,0.04) 70%)" : "rgba(255,255,255,0.05)",
        border: plan.featured ? "1px solid rgba(0,196,196,0.55)" : "1px solid rgba(255,255,255,0.1)",
        borderRadius: "var(--radius-lg)",
        padding: "1.8rem",
        display: "flex",
        flexDirection: "column",
        boxShadow: plan.featured ? "0 0 32px rgba(0,196,196,0.14)" : undefined,
      }}
    >
      {plan.featured && (
        <span style={{ position: "absolute", top: -13, left: "50%", transform: "translateX(-50%)", background: "var(--accent)", color: "#0a1628", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", padding: "0.28rem 0.85rem", borderRadius: 999, whiteSpace: "nowrap" }}>
          Most popular
        </span>
      )}

      <p style={{ margin: "0 0 0.55rem", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--accent)" }}>
        {plan.name}
      </p>
      <h2 className="card-title" style={{ marginBottom: "0.5rem" }}>{plan.headline}</h2>
      <p className="card-body" style={{ minHeight: "3rem", marginBottom: "1.4rem" }}>{plan.tagline}</p>

      <div style={{ display: "grid", alignContent: "start", gap: "0.4rem", minHeight: "5.2rem", marginBottom: "1.4rem" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: "0.4rem" }}>
          {price !== null ? (
            <>
              <span style={{ fontSize: "2.4rem", fontWeight: 700, color: "#fff", letterSpacing: "-0.03em", lineHeight: 1 }}>€{price}</span>
              <span style={{ fontSize: "0.9rem", color: "#9ca3af" }}>/month</span>
            </>
          ) : (
            <span style={{ fontSize: "2.15rem", fontWeight: 700, color: "#f3f4f6", letterSpacing: "-0.03em", lineHeight: 1.05 }}>
              Let&apos;s talk
            </span>
          )}
        </div>

        <p style={{ fontSize: "0.78rem", fontWeight: annual && plan.annualSaving ? 600 : 400, color: annual && plan.annualSaving ? "#00c4c4" : "#6b7280", textShadow: annual && plan.annualSaving ? "0 0 10px rgba(0,196,196,0.6)" : "none", margin: 0, minHeight: "1.15rem", transition: "color 250ms, text-shadow 250ms" }}>
          {annual && plan.annualBilled
            ? `${plan.annualBilled}${plan.annualSaving ? `, ${plan.annualSaving}` : ""}`
            : plan.monthlyPrice === null
              ? (plan.annualBilled ?? "\u00a0")
              : "Monthly billing"}
        </p>
      </div>

      <hr style={{ border: "none", borderTop: "1px solid rgba(255,255,255,0.09)", margin: "0 0 1.2rem" }} />

      <ul style={{ listStyle: "none", margin: "0 0 1.6rem", padding: 0, display: "grid", gap: "0.62rem", flex: 1 }}>
        {plan.features.map((f) => (
          <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem", fontSize: "0.9rem", color: "#d1d5db", lineHeight: 1.45 }}>
            <Check size={16} color="#00c4c4" style={{ flexShrink: 0, marginTop: "0.12rem" }} />
            {f}
          </li>
        ))}
      </ul>

      {signupIntent ? (
        <>
          <button
            type="button"
            className={plan.featured ? "btn btn-primary" : "btn btn-secondary"}
            style={{ textAlign: "center" }}
            onClick={() => onPlanPurchase(signupIntent)}
          >
            {plan.ctaLabel}
          </button>
          <p className="pricing-plan-reassurance">
            Secure Stripe checkout, then workspace setup begins
          </p>
        </>
      ) : (
        <>
          <Link
            href={plan.ctaHref}
            className={plan.featured ? "btn btn-primary" : "btn btn-secondary"}
            style={{ textAlign: "center" }}
          >
            {plan.ctaLabel}
          </Link>
          <p className="pricing-plan-reassurance">
            Request a setup call for rollout, billing, and support
          </p>
        </>
      )}
    </article>
  );
}

function FaqAccordion() {
  return (
    <div className="solution-compact-faq pricing-compact-faq">
      <h3 className="card-title">Pricing FAQ</h3>
      <div className="solution-compact-faq-list pricing-compact-faq-list">
        {faqs.map((item) => (
          <details key={item.q} className="solution-compact-faq-item pricing-compact-faq-item">
            <summary>{item.q}</summary>
            <p>{item.a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}

function BuyingPathCards() {
  return (
    <div className="pricing-buying-paths" aria-label="Ways to buy Civant">
      {buyingPaths.map((path) => (
        <article key={path.title} className="pricing-buying-path">
          <div>
            <p className="pricing-buying-path-label">{path.label}</p>
            <h2 className="card-title">{path.title}</h2>
            <p className="card-body">{path.body}</p>
          </div>
          <Link href={path.href} className="card-link-cta">
            {path.cta}
          </Link>
        </article>
      ))}
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function PricingPageClient() {
  const [annual, setAnnual] = useState(false);
  const [activeIntent, setActiveIntent] = useState<SignupIntent | null>(null);

  return (
    <>
      {/* Hero */}
      <Section className="hero-block hero-section">
        <p className="eyebrow">Pricing</p>
        <h1 className="headline-xl">Pricing for serious public-sector growth</h1>
        <p className="text-lead">
          Every plan includes all live countries, buyer history, tender
          forecasting, and market monitoring. Start self-serve when you want
          immediate access, or talk to us when seats, rollout, billing, or
          workflow alignment matter.
        </p>
        <div className="pricing-hero-actions">
          <Link href="#plans" className="btn btn-primary">
            Choose a Plan
          </Link>
          <Link href="/contact" className="btn btn-secondary">
            Book a 20-minute walkthrough
          </Link>
        </div>
        <div className="pricing-hero-proof" aria-label="Pricing highlights">
          {pricingHeroProof.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </Section>

      <Section muted>
        <div className="section-heading-wrap pricing-buying-paths-heading">
          <p className="eyebrow">Where to start</p>
          <h2 className="headline-lg">Choose by team shape, not by country count</h2>
          <p className="text-lead section-intro">
            Civant does not make you buy one market at a time. The real choice is
            how much team coverage, competitor context, and rollout support you
            need.
          </p>
        </div>
        <BuyingPathCards />
        <p className="pricing-start-note">
          Vanguard: immediate access and focused monitoring. Summit: shared
          visibility across buyers, competitors, and upcoming opportunities.
          Custom: onboarding, governance, billing, seats, or workflow alignment.
        </p>
      </Section>

      {/* Plans */}
      <Section id="plans">
        <div style={{ textAlign: "center", marginBottom: "0.5rem" }}>
          <p className="eyebrow">Plans</p>
          <h2 className="headline-lg">Match the plan to your operating rhythm</h2>
          <p className="text-lead section-intro pricing-plans-intro">
            Start with Vanguard or Summit for immediate access. Choose Custom
            when your team needs supported rollout, procurement workflow
            alignment, or tailored commercial terms.
          </p>
        </div>

        <BillingToggle annual={annual} onChange={setAnnual} />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.05rem",
            alignItems: "start",
            marginTop: "2.4rem",
          }}
        >
          {plans.map((plan) => (
            <PlanCard
              key={plan.name}
              plan={plan}
              annual={annual}
              onPlanPurchase={(intent) => setActiveIntent(intent)}
            />
          ))}
        </div>

        <div className="pricing-next-step-card">
          <p className="eyebrow">What happens next?</p>
          <h3 className="card-title">Self-serve when you are ready, supported when you need it.</h3>
          <p className="card-body">
            Choose Vanguard or Summit to begin self-serve setup. After checkout,
            your workspace is created and configured for your selected market
            focus. For larger teams, custom workflows, additional seats, or
            multi-market rollout, request a Custom Plan and Civant will arrange
            a short setup call.
          </p>
        </div>
      </Section>

      {/* ROI Calculator */}
      <Section muted>
        <div className="section-heading-wrap" style={{ textAlign: "center", margin: "0 auto 0" }}>
          <p className="eyebrow">Value Model</p>
          <h2 className="headline-lg">Pressure-test the upside of earlier visibility</h2>
          <p className="text-lead section-intro" style={{ margin: "0.9rem auto 0" }}>
            Use your current team shape and tender profile to estimate what
            better timing, sharper prioritisation, and more focused bidding
            could be worth over a year.
          </p>
        </div>
        <RoiCalculator />
      </Section>

      {/* Proof */}
      <Section muted>
        <ProofSection compact />
      </Section>

      {/* FAQ */}
      <Section>
        <FaqAccordion />
      </Section>

      {/* Final CTA */}
      <Section muted>
        <div className="final-cta">
          <h2 className="headline-lg final-cta-title">Start building your public-sector advantage</h2>
          <p className="text-lead platform-cta-copy">
            Start with Vanguard or Summit today. Use custom plans when your team
            needs tailored onboarding, procurement workflows, or commercial terms.
          </p>
          <CTAGroup
            primaryHref="#plans"
            primaryLabel="Choose a Plan"
            secondaryHref="/contact"
            secondaryLabel="Book a 20-minute walkthrough"
          />
        </div>
      </Section>

      {activeIntent ? (
        <SignupModal intent={activeIntent} onClose={() => setActiveIntent(null)} />
      ) : null}
    </>
  );
}
