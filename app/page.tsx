import Link from "next/link";
import {
  Activity,
  CalendarClock,
  CircleGauge,
  Target,
  type LucideIcon,
} from "lucide-react";
import { CTAGroup } from "../components/site/CTAGroup";
import { Section } from "../components/site/Section";
import { buildPageMetadata } from "../lib/seo";

export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  title: "Win Before the Tender",
  description:
    "Civant analyzes procurement history, contract lifecycle signals, and market activity to surface likely upcoming tender opportunities across European public sector markets.",
  path: "/",
});

const howItWorks = [
  {
    step: "01",
    icon: CircleGauge as LucideIcon,
    title: "Procurement history",
    body: "Structured historical records reveal recurring institutional purchasing behavior and category cadence.",
  },
  {
    step: "02",
    icon: CalendarClock as LucideIcon,
    title: "Contract lifecycle signals",
    body: "Duration windows and renewal patterns surface likely retender windows before publication.",
  },
  {
    step: "03",
    icon: Activity as LucideIcon,
    title: "Market activity analysis",
    body: "Supplier participation and award outcomes expose shifts in competitive pressure and buyer intent.",
  },
  {
    step: "04",
    icon: Target as LucideIcon,
    title: "Actionable insights",
    body: "Civant turns signal complexity into ranked opportunities and clear action paths for teams.",
  },
];

const modules = [
  {
    title: "Panorama",
    purpose:
      "Unified market-wide visibility across buyers, categories, and procurement momentum.",
    benefit:
      "See where activity is accelerating before teams commit effort to the wrong markets.",
    workflowRole: "Prioritization baseline",
    label: "Market View",
  },
  {
    title: "Finder",
    purpose:
      "High-precision discovery of institutions, buyer segments, and categories that fit your strategy.",
    benefit:
      "Focus account planning on opportunities that match your commercial strengths.",
    workflowRole: "Target selection",
    label: "Target Discovery",
  },
  {
    title: "Forecast",
    purpose:
      "Confidence-scored forecasts for likely tender timing by buyer, segment, and category.",
    benefit:
      "Replace reactive tender chasing with timing-led engagement plans.",
    workflowRole: "Timing intelligence",
    label: "Forecast Layer",
  },
  {
    title: "Competitors",
    purpose:
      "Track incumbent footprint, participation trends, and win patterns across key accounts.",
    benefit:
      "Understand competitive pressure before deciding where to position or partner.",
    workflowRole: "Competitive strategy",
    label: "Competitive Signal",
  },
  {
    title: "Alerts",
    purpose:
      "Real-time notifications when procurement signals shift across your strategic targets.",
    benefit:
      "Trigger action when market conditions change instead of reviewing static dashboards.",
    workflowRole: "Signal monitoring",
    label: "Monitoring",
  },
  {
    title: "Bids",
    purpose:
      "Execution workspace that links opportunity intelligence to bid planning and ownership.",
    benefit:
      "Connect intelligence directly to delivery workflows and accountability.",
    workflowRole: "Execution orchestration",
    label: "Execution",
  },
];

const useCases = [
  {
    title: "Bid Management Teams",
    body: "Prioritize likely near-term opportunities and allocate bid resources before deadlines compress.",
  },
  {
    title: "Sales & Partnerships",
    body: "Engage accounts earlier, align partnerships faster, and improve timing in strategic public deals.",
  },
  {
    title: "Market Intelligence Teams",
    body: "Track demand shifts, buyer behavior, and participation dynamics with a continuously updated signal base.",
  },
];

const differentiators = [
  {
    title: "Contract lifecycle intelligence",
    body: "Civant models contract windows and renewal behavior to identify where demand is likely to emerge before publication.",
  },
  {
    title: "Procurement behavior analysis",
    body: "Civant analyzes how institutions actually buy over time, revealing repeatable decision patterns that alerts alone miss.",
  },
  {
    title: "Market participation signals",
    body: "Civant quantifies supplier participation and award outcomes to expose where competition is strengthening or fragmenting.",
  },
];

const comparisonRows = [
  {
    label: "Primary output",
    monitoring: "Alerts for already published tenders",
    civant: "Likely upcoming opportunity windows with confidence context",
  },
  {
    label: "Timing advantage",
    monitoring: "Post-publication visibility",
    civant: "Pre-publication preparation signal",
  },
  {
    label: "Decision layer",
    monitoring: "Notification feed",
    civant: "Intelligence workflow for prioritization and execution",
  },
];

const coverageBlocks = [
  {
    title: "Core datasets",
    items: [
      "European procurement datasets",
      "Award records and outcomes",
      "Supplier participation histories",
      "Contract lifecycle information",
    ],
  },
  {
    title: "Signal quality framework",
    items: [
      "Cross-source normalization",
      "Deterministic enrichment and mapping",
      "Confidence-based prioritization",
      "Continuous verification against published tenders",
    ],
  },
];

const resources = [
  {
    title: "Procurement Intelligence Briefings",
    body: "Regional and category-level market briefings for teams building reliable public-sector pipeline.",
  },
  {
    title: "Signal Method Playbooks",
    body: "Practical guides for translating procurement and contract lifecycle data into commercial actions.",
  },
  {
    title: "Platform Notes",
    body: "Product insights on how enterprise teams operationalize Civant forecasts and monitoring workflows.",
  },
];

export default function HomePage() {
  return (
    <>
      <Section
        className="hero-block hero-section home-hero"
        containerClassName="home-hero-container"
      >
        <div className="home-hero-main">
          <p className="eyebrow">Procurement Intelligence Platform</p>
          <h1 className="headline-xl hero-headline">Win Before the Tender</h1>
          <p className="text-lead hero-subheadline">
            Civant analyzes procurement history, contract lifecycles, and market
            activity to surface likely upcoming tenders across European public
            sector markets.
          </p>
          <CTAGroup
            primaryHref="/contact"
            primaryLabel="Request Demo"
            secondaryHref="/platform"
            secondaryLabel="Explore the Platform"
          />
          <p className="cred-line">
            Built on European procurement data and continuously validated against
            published tenders.
          </p>
          <div className="hero-mini-grid">
            <article className="micro-card">
              <p className="micro-label">Coverage Focus</p>
              <p className="micro-value">EU Public Sector Markets</p>
            </article>
            <article className="micro-card">
              <p className="micro-label">Signal Model</p>
              <p className="micro-value">Lifecycle + Participation</p>
            </article>
            <article className="micro-card">
              <p className="micro-label">Verification Loop</p>
              <p className="micro-value">Checked Against Published Tenders</p>
            </article>
          </div>
        </div>
      </Section>

      <Section muted className="section-overlap">
        <div className="section-heading-wrap">
          <p className="eyebrow">How Civant Works</p>
          <h2 className="headline-lg">
            Four connected layers from data signal to action
          </h2>
        </div>
        <div className="flow-track">
          {howItWorks.map((item) => (
            <article key={item.step} className="flow-card">
              <div className="flow-title-row">
                <span className="flow-icon" aria-hidden="true">
                  <item.icon />
                </span>
                <h3 className="card-title">{item.title}</h3>
              </div>
              <p className="card-body">{item.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <div className="section-heading-wrap">
          <p className="eyebrow">Platform Overview</p>
          <h2 className="headline-lg">
            A modular procurement intelligence platform
          </h2>
          <p className="text-lead section-intro">
            Designed to move enterprise teams from reactive monitoring to
            proactive market positioning.
          </p>
        </div>
        <div className="grid grid-3 module-grid">
          {modules.map((module) => (
            <article key={module.title} className="card module-card">
              <p className="module-label">{module.label}</p>
              <h3 className="card-title">{module.title}</h3>
              <p className="card-body">{module.purpose}</p>
              <p className="module-benefit">{module.benefit}</p>
              <p className="module-role">{module.workflowRole}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section muted>
        <div className="section-heading-wrap">
          <p className="eyebrow">Use Cases Preview</p>
          <h2 className="headline-lg">Built for high-accountability teams</h2>
        </div>
        <div className="grid grid-3 use-case-grid">
          {useCases.map((item) => (
            <article key={item.title} className="card use-case-card">
              <h3 className="card-title">{item.title}</h3>
              <p className="card-body">{item.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <div className="section-heading-wrap">
          <p className="eyebrow">Why Civant</p>
          <h2 className="headline-lg">
            More than tender monitoring. Built for procurement intelligence.
          </h2>
        </div>
        <div className="comparison-grid">
          {comparisonRows.map((row) => (
            <article key={row.label} className="card comparison-card">
              <p className="module-label">{row.label}</p>
              <p className="comparison-line">
                <strong>Monitoring tools:</strong> {row.monitoring}
              </p>
              <p className="comparison-line">
                <strong>Civant:</strong> {row.civant}
              </p>
            </article>
          ))}
        </div>
        <div className="grid grid-3">
          {differentiators.map((item) => (
            <article key={item.title} className="card">
              <h3 className="card-title">{item.title}</h3>
              <p className="card-body">{item.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section muted>
        <div className="section-heading-wrap">
          <p className="eyebrow">Data Coverage</p>
          <h2 className="headline-lg">
            Credible inputs engineered for enterprise decision confidence
          </h2>
        </div>
        <div className="grid grid-2 coverage-grid">
          {coverageBlocks.map((block) => (
            <article key={block.title} className="card">
              <h3 className="card-title">{block.title}</h3>
              <ul className="stack-list coverage-list">
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="cred-line">
          Data quality is continuously monitored as new tenders and awards are
          published across covered markets.
        </p>
      </Section>

      <Section>
        <div className="section-heading-wrap">
          <p className="eyebrow">Resources Preview</p>
          <h2 className="headline-lg">
            A growing authority layer for procurement intelligence teams
          </h2>
        </div>
        <div className="grid grid-3">
          {resources.map((item) => (
            <article key={item.title} className="card">
              <h3 className="card-title">{item.title}</h3>
              <p className="card-body">{item.body}</p>
            </article>
          ))}
        </div>
        <div className="button-row">
          <Link href="/resources" className="btn btn-secondary">
            Explore Resources
          </Link>
        </div>
      </Section>

      <Section muted>
        <div className="grid grid-2 about-preview-grid">
          <div>
            <p className="eyebrow">About Civant Preview</p>
            <h2 className="headline-lg">
              An Irish-founded company focused on European procurement
              intelligence
            </h2>
            <p className="text-lead section-intro">
              Civant is building a durable intelligence platform for teams that
              need better timing, sharper prioritization, and stronger strategic
              preparation in public-sector markets.
            </p>
            <div className="button-row">
              <Link href="/company" className="btn btn-secondary">
                Learn About Civant
              </Link>
            </div>
          </div>
          <article className="card">
            <h3 className="card-title">Enterprise credibility focus</h3>
            <ul className="stack-list coverage-list">
              <li>Deterministic data workflows with explainable outputs</li>
              <li>Procurement-cycle intelligence over alert-only feeds</li>
              <li>Positioned for cross-market expansion across Europe</li>
            </ul>
          </article>
        </div>
      </Section>

      <Section>
        <div className="final-cta">
          <h2 className="headline-lg final-cta-title">
            Start mastering procurement cycles
          </h2>
          <CTAGroup
            primaryHref="/contact"
            primaryLabel="Request Demo"
            secondaryHref="/platform"
            secondaryLabel="Explore the Platform"
          />
        </div>
      </Section>
    </>
  );
}
