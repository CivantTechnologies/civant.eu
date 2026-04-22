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
  title: "EU Public Procurement Intelligence & Tender Forecasting",
  description:
    "Civant analyzes procurement history, contract lifecycle signals, and market activity to surface likely upcoming tender opportunities across European public sector markets.",
  path: "/",
});

const howItWorks = [
  {
    step: "01",
    icon: CircleGauge as LucideIcon,
    title: "Procurement history",
    body: "Historical procurement records reveal recurring buying cadence.",
  },
  {
    step: "02",
    icon: CalendarClock as LucideIcon,
    title: "Contract lifecycle signals",
    body: "Lifecycle and renewal windows indicate likely retender periods.",
  },
  {
    step: "03",
    icon: Activity as LucideIcon,
    title: "Market activity analysis",
    body: "Participation and award patterns surface demand and competition shifts.",
  },
  {
    step: "04",
    icon: Target as LucideIcon,
    title: "Actionable insights",
    body: "Signals are ranked into prioritized opportunities and action paths.",
  },
];

const modules = [
  {
    slug: "panorama",
    title: "Panorama",
    purpose: "Maps buyer, category, and market momentum in one view.",
    label: "Market View",
  },
  {
    slug: "finder",
    title: "Finder",
    purpose: "Identifies institutions and segments aligned to your focus.",
    label: "Target Discovery",
  },
  {
    slug: "forecast",
    title: "Forecast",
    purpose: "Estimates likely tender windows by buyer, segment, and category.",
    label: "Forecast Layer",
  },
  {
    slug: "competitors",
    title: "Competitors",
    purpose: "Shows incumbent footprint and competitive pressure by account.",
    label: "Competitive Signal",
  },
  {
    slug: "alerts",
    title: "Alerts",
    purpose: "Flags material signal changes across your tracked targets.",
    label: "Monitoring",
  },
  {
    slug: "bids",
    title: "Bids",
    purpose: "Connects intelligence to bid planning, ownership, and follow-through.",
    label: "Execution",
  },
];

const useCases = [
  {
    title: "Bid Management Teams",
    body: "Allocate bid effort earlier on higher-probability opportunities.",
  },
  {
    title: "Sales & Partnerships",
    body: "Time account and partner engagement before tender publication.",
  },
  {
    title: "Market Intelligence Teams",
    body: "Deliver clear market signals leadership can prioritize with confidence.",
  },
];

const trustBlocks = [
  {
    title: "Procurement-cycle intelligence",
    body: "Civant is built for early planning and prioritization, not post-publication alert chasing.",
  },
  {
    title: "Built on public procurement evidence",
    body: "Coverage includes notices, award records, supplier participation, and contract lifecycle data.",
  },
  {
    title: "Continuously validated",
    body: "Signals are continuously checked against subsequently published tenders.",
  },
];

export default function HomePage() {
  return (
    <>
      <Section
        className="hero-block hero-section home-hero"
        containerClassName="home-hero-container"
      >
        <div className="home-hero-watermark" aria-hidden="true" />
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
          <p className="text-lead section-intro">
            A focused sequence that turns fragmented procurement data into
            prioritized opportunities.
          </p>
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
            A concise preview of the core modules that power planning,
            prioritization, and execution.
          </p>
        </div>
        <div className="grid grid-3 module-grid">
          {modules.map((module) => (
            <Link
              key={module.slug}
              href={`/platform#${module.slug}`}
              className="card module-card module-card-link"
            >
              <p className="module-label">{module.label}</p>
              <h3 className="card-title">{module.title}</h3>
              <p className="card-body">{module.purpose}</p>
              <span className="module-link-hint" aria-hidden="true">
                View module &rarr;
              </span>
            </Link>
          ))}
        </div>
        <div className="button-row">
          <Link href="/platform" className="btn btn-secondary">
            Explore Platform Details
          </Link>
        </div>
      </Section>

      <Section muted>
        <div className="section-heading-wrap">
          <p className="eyebrow">Use Cases Preview</p>
          <h2 className="headline-lg">Built for high-accountability teams</h2>
          <p className="text-lead section-intro">
            Three common teams use Civant to plan earlier and execute with
            tighter focus.
          </p>
        </div>
        <div className="grid grid-3 use-case-grid">
          {useCases.map((item) => (
            <article key={item.title} className="card use-case-card">
              <h3 className="card-title">{item.title}</h3>
              <p className="card-body">{item.body}</p>
            </article>
          ))}
        </div>
        <div className="button-row">
          <Link href="/use-cases" className="btn btn-secondary">
            Explore Use Cases
          </Link>
        </div>
      </Section>

      <Section>
        <div className="section-heading-wrap">
          <p className="eyebrow">Why Civant</p>
          <h2 className="headline-lg">
            Procurement intelligence, not alert-only tender monitoring
          </h2>
          <p className="text-lead section-intro">
            Civant combines public procurement evidence, lifecycle analysis, and
            continuous validation to support stronger enterprise decisions.
          </p>
        </div>
        <div className="grid grid-3">
          {trustBlocks.map((item) => (
            <article key={item.title} className="card">
              <h3 className="card-title">{item.title}</h3>
              <p className="card-body">{item.body}</p>
            </article>
          ))}
        </div>
        <div className="button-row">
          <Link href="/methodology" className="btn btn-secondary">
            Explore Methodology
          </Link>
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
