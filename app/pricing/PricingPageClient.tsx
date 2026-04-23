"use client";

import { type CSSProperties, type FormEvent, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Check, Shield, ChevronDown, ChevronUp, Minus, Plus } from "lucide-react";
import { Section } from "../../components/site/Section";
import { CTAGroup } from "../../components/site/CTAGroup";
import { MarketCoverageLinks } from "../../components/site/MarketCoverageLinks";
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
      "For individuals and small teams building a systematic approach to public procurement.",
    headline: "Get ahead of the market",
    monthlyPrice: 299,
    annualPrice: 249,
    annualBilled: "Billed €2,988/year",
    annualSaving: "Save €600",
    ctaLabel: "Choose Vanguard",
    ctaHref: "/contact",
    featured: false,
    features: [
      "1 seat",
      "10 saved alert rules",
      "5 competitors tracked",
      "50 AI intelligence briefs/day",
      "All markets included",
      "Buyer history & award intelligence",
      "Renewal forecasting",
    ],
  },
  {
    name: "Summit",
    tagline:
      "For growing teams that need deeper intelligence, broader coverage, and real competitive awareness.",
    headline: "Full market visibility",
    monthlyPrice: 699,
    annualPrice: 599,
    annualBilled: "Billed €7,188/year",
    annualSaving: "Save €1,200",
    ctaLabel: "Choose Summit",
    ctaHref: "/contact",
    featured: true,
    features: [
      "3 seats included (+€99/seat)",
      "50 saved alert rules",
      "25 competitors tracked",
      "100 AI intelligence briefs/day",
      "All markets included",
      "Buyer history & award intelligence",
      "Renewal forecasting",
      "Competitor intelligence layer",
      "Priority email support",
    ],
  },
  {
    name: "Custom",
    tagline:
      "For large procurement teams that need unlimited scale, dedicated support, and tailored onboarding.",
    headline: "Built around your team",
    monthlyPrice: null,
    annualPrice: null,
    annualBilled: "Annual contract · bespoke pricing",
    annualSaving: null,
    ctaLabel: "Talk to us",
    ctaHref: "/contact",
    featured: false,
    features: [
      "Unlimited seats",
      "Unlimited alerts & competitors",
      "Configurable AI credit pool",
      "All markets included",
      "Dedicated account manager",
      "Custom onboarding & training",
      "SLA & uptime guarantee",
    ],
  },
];

const faqs: FaqItem[] = [
  {
    q: "Which markets are covered?",
    a: "Every plan covers the markets Civant currently operates in: Ireland, the United Kingdom (England, Scotland, Wales, and Northern Ireland), Spain, France, and Italy. Finland, Belgium, Germany, and the Netherlands are coming next and will be included automatically at no extra cost.",
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
    q: "How long does onboarding take?",
    a: "Most teams are fully set up within 15 minutes. You complete a short company profile that calibrates your CPV codes, target markets, and buyer types. From there, your dashboard and alerts are live immediately.",
  },
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
          {intent.planName} — {intent.priceLabel}
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

const SEAT_OPTIONS    = [1, 2, 3, 5, 10, 15];
const TENDER_OPTIONS  = [5, 10, 20, 30, 50, 75, 100, 150];
const WIN_OPTIONS     = [5, 10, 15, 20, 25, 30, 35, 40, 50, 65];
const CONTRACT_OPTIONS = [10000, 25000, 50000, 100000, 250000, 500000, 1000000];

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
  const newWinRate = Math.min(winRate * 1.35, 0.85);
  const extraWins  = Math.max(0, (tenders + extraOpps) * newWinRate - tenders * winRate);
  const revenue    = Math.round(extraWins * contract);

  const planCost =
    seats > 3 || tenders > 80 ? 18000
    : seats > 1 || tenders > 30 ? 699 * 12
    : 299 * 12;

  const multiple = planCost > 0 ? Math.round((revenue / planCost) * 10) / 10 : 0;
  const calculatorColumns = [
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
      result: { value: `+${extraOpps}`, label: "Extra opportunities\nspotted / year" },
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
      result: { value: `+${Math.round(extraWins * 10) / 10}`, label: "Additional wins\nestimated" },
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
      result: { value: fmt(revenue), label: "Estimated revenue\nuplift / year" },
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
      result: { value: `${multiple}x`, label: "Return on\ninvestment" },
    },
  ];

  return (
    <div
      style={{
        background: "linear-gradient(150deg, rgba(0,196,196,0.06), rgba(255,255,255,0.03) 65%)",
        border: "1px solid rgba(0,196,196,0.25)",
        borderRadius: "var(--radius-lg)",
        padding: "2.4rem",
        marginTop: "1.2rem",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "1.8rem",
        }}
      >
        {calculatorColumns.map((column) => (
          <div key={column.id} style={{ textAlign: "center" }}>
            <Stepper
              label={column.stepper.label}
              display={column.stepper.display}
              onDecrement={column.stepper.onDecrement}
              onIncrement={column.stepper.onIncrement}
              atMin={column.stepper.atMin}
              atMax={column.stepper.atMax}
            />
            <div
              style={{
                marginTop: "1.8rem",
                paddingTop: "1.6rem",
                borderTop: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <p style={{ margin: 0, fontSize: "1.8rem", fontWeight: 700, color: "#00c4c4", letterSpacing: "-0.03em", lineHeight: 1 }}>
                {column.result.value}
              </p>
              <p style={{ margin: "0.4rem 0 0", fontSize: "0.75rem", color: "#9ca3af", lineHeight: 1.4, textTransform: "uppercase", letterSpacing: "0.07em", whiteSpace: "pre-line" }}>
                {column.result.label}
              </p>
            </div>
          </div>
        ))}
      </div>

      <p style={{ fontSize: "0.75rem", color: "#4b5563", marginTop: "1.2rem", lineHeight: 1.6 }}>
        *Based on industry averages. Your results will vary.
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

      <div style={{ display: "flex", alignItems: "baseline", gap: "0.4rem", marginBottom: "0.3rem" }}>
        {price !== null ? (
          <>
            <span style={{ fontSize: "2.4rem", fontWeight: 700, color: "#fff", letterSpacing: "-0.03em", lineHeight: 1 }}>€{price}</span>
            <span style={{ fontSize: "0.9rem", color: "#9ca3af" }}>/month</span>
          </>
        ) : (
          <span style={{ fontSize: "1.6rem", fontWeight: 700, color: "#d1d5db" }}>Let&apos;s talk</span>
        )}
      </div>

      <p style={{ fontSize: "0.78rem", fontWeight: annual && plan.annualSaving ? 600 : 400, color: annual && plan.annualSaving ? "#00c4c4" : "#6b7280", textShadow: annual && plan.annualSaving ? "0 0 10px rgba(0,196,196,0.6)" : "none", margin: "0 0 1.4rem", minHeight: "1.15rem", transition: "color 250ms, text-shadow 250ms" }}>
        {annual && plan.annualBilled
          ? `${plan.annualBilled}${plan.annualSaving ? ` — ${plan.annualSaving}` : ""}`
          : plan.monthlyPrice === null ? (plan.annualBilled ?? "\u00a0") : "\u00a0"}
      </p>

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
        <button
          type="button"
          className={plan.featured ? "btn btn-primary" : "btn btn-secondary"}
          style={{ textAlign: "center" }}
          onClick={() => onPlanPurchase(signupIntent)}
        >
          {plan.ctaLabel}
        </button>
      ) : (
        <Link
          href={plan.ctaHref}
          className={plan.featured ? "btn btn-primary" : "btn btn-secondary"}
          style={{ textAlign: "center" }}
        >
          {plan.ctaLabel}
        </Link>
      )}
    </article>
  );
}

function GuaranteeStrip() {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.75rem", padding: "0.9rem 1.4rem", background: "rgba(0,196,196,0.06)", border: "1px solid rgba(0,196,196,0.2)", borderRadius: "var(--radius-md)", marginTop: "1.6rem", flexWrap: "wrap" }}>
      <Shield size={20} color="#00c4c4" style={{ flexShrink: 0 }} />
      <p style={{ margin: 0, fontSize: "0.88rem", color: "#d1d5db", lineHeight: 1.5 }}>
        <strong style={{ color: "#fff" }}>14-day money-back guarantee.</strong>{" "}No questions asked. Cancel within the first 14 days for a full refund.
      </p>
    </div>
  );
}

function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div style={{ maxWidth: "720px", margin: "1.4rem auto 0", display: "grid", gap: "0.65rem" }}>
      {faqs.map((item, i) => (
        <div key={item.q} style={{ border: "1px solid rgba(255,255,255,0.1)", borderRadius: "var(--radius-md)", overflow: "hidden" }}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            style={{ width: "100%", background: "none", border: "none", padding: "1.05rem 1.2rem", textAlign: "left", color: open === i ? "#00c4c4" : "#f3f4f6", fontSize: "0.95rem", fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem", fontFamily: "inherit", transition: "color 180ms" }}
            aria-expanded={open === i}
          >
            {item.q}
            {open === i
              ? <ChevronUp size={18} color="#00c4c4" style={{ flexShrink: 0 }} />
              : <ChevronDown size={18} color="#00c4c4" style={{ flexShrink: 0 }} />}
          </button>
          {open === i && (
            <p style={{ margin: 0, padding: "0 1.2rem 1.1rem", color: "#9ca3af", fontSize: "0.92rem", lineHeight: 1.65 }}>
              {item.a}
            </p>
          )}
        </div>
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
        <h1 className="headline-xl">Intelligence that pays for itself</h1>
        <p className="text-lead">
          Every plan includes all live markets — Ireland, the United Kingdom, Spain,
          France, and Italy. Finland, Belgium, Germany, and the Netherlands are
          coming next. You choose how deep you want to go.
        </p>
      </Section>

      {/* ROI Calculator first */}
      <Section muted>
        <div className="section-heading-wrap" style={{ textAlign: "center", margin: "0 auto 0" }}>
          <p className="eyebrow">ROI Calculator</p>
          <h2 className="headline-lg">What is early intelligence worth to your team?</h2>
          <p className="text-lead section-intro" style={{ margin: "0.9rem auto 0" }}>
            Civant does not write your bids. It gives you the intelligence to pick the right
            fights earlier, build the right relationships, and protect what you already hold.
          </p>
        </div>
        <RoiCalculator />
      </Section>

      {/* Plans */}
      <Section>
        <div style={{ textAlign: "center", marginBottom: "0.5rem" }}>
          <p className="eyebrow">Plans</p>
          <h2 className="headline-lg">Choose your level of intelligence</h2>
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

        <GuaranteeStrip />
        <MarketCoverageLinks
          eyebrow="All markets included"
          title="Live coverage now, next countries included automatically"
          body="Self-serve plans include every live Civant market, with the next rollout countries added automatically as coverage becomes available."
          compact
        />
      </Section>

      {/* Proof */}
      <Section muted>
        <ProofSection compact />
      </Section>

      {/* FAQ */}
      <Section>
        <div className="section-heading-wrap" style={{ textAlign: "center", margin: "0 auto 0" }}>
          <p className="eyebrow">Questions</p>
          <h2 className="headline-lg">Everything you need to know</h2>
        </div>
        <FaqAccordion />
      </Section>

      {/* Final CTA */}
      <Section muted>
        <div className="final-cta">
          <h2 className="headline-lg final-cta-title">Ready to win before the tender?</h2>
          <p className="text-lead platform-cta-copy">
            Start with Vanguard or talk to us about a custom setup. No free tier, no pressure —
            just early intelligence that pays for itself.
          </p>
          <CTAGroup
            primaryHref="/contact"
            primaryLabel="Request Custom Plan"
            secondaryHref="/platform"
            secondaryLabel="Explore the Platform"
          />
        </div>
      </Section>

      {activeIntent ? (
        <SignupModal intent={activeIntent} onClose={() => setActiveIntent(null)} />
      ) : null}
    </>
  );
}
