import { CTAGroup } from "../../components/site/CTAGroup";
import { Section } from "../../components/site/Section";
import { buildPageMetadata } from "../../lib/seo";

export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  title: "Platform | Civant Intelligence Platform",
  description:
    "Explore the Civant Intelligence Platform modules that turn procurement cycle signals into prioritized, executable opportunities.",
  path: "/platform",
});

const systemLayers = [
  {
    step: "01",
    title: "Unify market context",
    body: "Panorama creates a single intelligence layer across buyers, categories, and procurement momentum.",
  },
  {
    step: "02",
    title: "Select strategic targets",
    body: "Finder narrows the field to institutions and segments aligned to your commercial focus.",
  },
  {
    step: "03",
    title: "Predict opportunity timing",
    body: "Forecast applies lifecycle and behavior signals to estimate where opportunities will likely emerge.",
  },
  {
    step: "04",
    title: "Execute with confidence",
    body: "Competitors, Alerts, and Bids connect market intelligence to bid planning and team ownership.",
  },
];

const modules = [
  {
    title: "Panorama",
    purpose:
      "Provides a macro-level view of procurement activity by institution, category, and market segment.",
    benefit:
      "Gives leadership teams a strategic map of where momentum is building or cooling.",
    role: "Workflow role: market baseline and opportunity prioritization.",
    label: "Market Intelligence",
  },
  {
    title: "Finder",
    purpose:
      "Discovers buyer organizations, procurement segments, and target categories that match your strategy.",
    benefit:
      "Eliminates broad searching and focuses teams on the highest-fit institutions.",
    role: "Workflow role: target account and category selection.",
    label: "Target Discovery",
  },
  {
    title: "Forecast",
    purpose:
      "Generates confidence-scored projections for likely procurement windows by buyer and category.",
    benefit:
      "Helps teams engage early, plan resources, and reduce reactive bid cycles.",
    role: "Workflow role: timing intelligence and planning trigger.",
    label: "Predictive Engine",
  },
  {
    title: "Competitors",
    purpose:
      "Tracks incumbent position, participation intensity, and historical win dynamics in target markets.",
    benefit:
      "Improves positioning decisions before committing to high-effort opportunities.",
    role: "Workflow role: competitive strategy context.",
    label: "Competitive Insight",
  },
  {
    title: "Alerts",
    purpose:
      "Monitors procurement and participation signals across your tracked buyers and categories.",
    benefit:
      "Moves teams from static reporting to time-sensitive action when conditions change.",
    role: "Workflow role: operational signal monitoring.",
    label: "Signal Monitoring",
  },
  {
    title: "Bids",
    purpose:
      "Connects intelligence outputs to execution workflows for ownership, timing, and follow-through.",
    benefit:
      "Bridges strategy and delivery so opportunity intelligence becomes measurable execution.",
    role: "Workflow role: bid orchestration and accountability.",
    label: "Execution Workspace",
  },
];

export default function PlatformPage() {
  return (
    <>
      <Section className="hero-block hero-section">
        <p className="eyebrow">Platform</p>
        <h1 className="headline-xl">Inside the Civant Intelligence Platform</h1>
        <p className="text-lead">
          Civant is a procurement intelligence platform built around procurement
          cycles. It combines market context, contract lifecycle signals, and
          participation dynamics to help enterprise teams identify, prioritize,
          and execute opportunities earlier.
        </p>
      </Section>

      <Section muted>
        <div className="section-heading-wrap">
          <p className="eyebrow">How Modules Work Together</p>
          <h2 className="headline-lg">
            One connected workflow from market signal to bid execution
          </h2>
          <p className="text-lead section-intro">
            Each module has a defined role, but the advantage comes from how
            they connect into a single decision workflow.
          </p>
        </div>
        <div className="flow-track">
          {systemLayers.map((layer) => (
            <article key={layer.step} className="flow-card">
              <div className="flow-index">{layer.step}</div>
              <h3 className="card-title">{layer.title}</h3>
              <p className="card-body">{layer.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <div className="section-heading-wrap">
          <p className="eyebrow">Platform Modules</p>
          <h2 className="headline-lg">Purpose-built capabilities for each stage</h2>
        </div>
        <div className="grid grid-2 platform-module-grid">
          {modules.map((module) => (
            <article key={module.title} className="card platform-module-card">
              <p className="module-label">{module.label}</p>
              <h3 className="card-title">{module.title}</h3>
              <p className="card-body">{module.purpose}</p>
              <p className="module-benefit">{module.benefit}</p>
              <p className="module-role">{module.role}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section muted>
        <div className="final-cta">
          <h2 className="headline-lg final-cta-title">
            See the platform in your market context
          </h2>
          <p className="text-lead platform-cta-copy">
            Request a demo to review how Civant can support your target
            categories, institutions, and procurement-cycle planning workflow.
          </p>
          <CTAGroup
            primaryHref="/contact"
            primaryLabel="Request Demo"
            secondaryHref="/use-cases"
            secondaryLabel="Explore Use Cases"
          />
        </div>
      </Section>
    </>
  );
}
