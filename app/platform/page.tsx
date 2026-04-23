import {
  CircleGauge,
  Crosshair,
  ScanSearch,
  Target,
  type LucideIcon,
} from "lucide-react";
import { CTAGroup } from "../../components/site/CTAGroup";
import { Section } from "../../components/site/Section";
import { BrowserFrame } from "../../components/site/BrowserFrame";
import { SchemaScript } from "../../components/site/SchemaScript";
import { buildPageMetadata, buildSoftwareApplicationSchema } from "../../lib/seo";

export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  title: "EU Procurement Intelligence Platform | Modules & Workflow",
  description:
    "Explore the Civant Intelligence Platform modules that turn procurement cycle signals into prioritized, executable opportunities.",
  path: "/platform",
});

const platformSchema = buildSoftwareApplicationSchema();

const systemLayers = [
  {
    icon: CircleGauge as LucideIcon,
    title: "Unify market context",
    body: "Panorama creates a single intelligence layer across buyers, categories, and procurement momentum.",
  },
  {
    icon: ScanSearch as LucideIcon,
    title: "Select strategic targets",
    body: "Finder narrows the field to institutions and segments aligned to your commercial focus.",
  },
  {
    icon: Crosshair as LucideIcon,
    title: "Estimate opportunity timing",
    body: "Forecast applies lifecycle and behavior signals to estimate where opportunities will likely emerge.",
  },
  {
    icon: Target as LucideIcon,
    title: "Execute with confidence",
    body: "Competitors, Alerts, and Bids connect market intelligence to bid planning and team ownership.",
  },
];

interface PlatformModule {
  slug: string;
  title: string;
  purpose: string;
  benefit: string;
  role: string;
  label: string;
  screenshot?: string;
  screenshotWidth?: number;
  screenshotHeight?: number;
  screenshotAlt?: string;
  screenshotCaption?: string;
}

const modules: PlatformModule[] = [
  {
    slug: "panorama",
    title: "Panorama",
    purpose:
      "Provides a macro-level view of procurement activity by institution, category, and market segment.",
    benefit:
      "Gives leadership teams a strategic map of where momentum is building or cooling.",
    role: "Workflow role: market baseline and opportunity prioritization.",
    label: "Market Intelligence",
    screenshot: "/screenshots/panorama.png",
    screenshotWidth: 2880,
    screenshotHeight: 1558,
    screenshotAlt: "Panorama dashboard showing strategic runway, operational status, and renewal opportunities",
    screenshotCaption: "Panorama: your strategic runway at a glance",
  },
  {
    slug: "finder",
    title: "Finder",
    purpose:
      "Discovers buyer organizations, procurement segments, and target categories that match your strategy.",
    benefit:
      "Eliminates broad searching and focuses teams on the highest-fit institutions.",
    role: "Workflow role: target account and category selection.",
    screenshot: "/screenshots/finder-filters.png",
    screenshotWidth: 2876,
    screenshotHeight: 1436,
    screenshotAlt: "Finder search interface with country, source, buyer, and CPV category filters",
    screenshotCaption: "Finder: precision filters to narrow your target market",
    label: "Target Discovery",
  },
  {
    slug: "forecast",
    title: "Forecast",
    purpose:
      "Generates confidence-scored projections for likely procurement windows by buyer and category.",
    benefit:
      "Helps teams engage early, plan resources, and reduce reactive bid cycles.",
    role: "Workflow role: timing intelligence and planning trigger.",
    label: "Forecast Engine",
  },
  {
    slug: "competitors",
    title: "Competitors",
    purpose:
      "Tracks incumbent position, participation intensity, and historical win dynamics in target markets.",
    benefit:
      "Improves positioning decisions before committing to high-effort opportunities.",
    role: "Workflow role: competitive strategy context.",
    label: "Competitive Insight",
    screenshot: "/screenshots/competitors.png",
    screenshotWidth: 2880,
    screenshotHeight: 1552,
    screenshotAlt: "Competitors overview showing 18 contracts, total value, strategic insights and strengths",
    screenshotCaption: "Competitors: incumbent footprint and competitive pressure",
  },
  {
    slug: "alerts",
    title: "Alerts",
    purpose:
      "Monitors procurement and participation signals across your tracked buyers and categories.",
    benefit:
      "Moves teams from static reporting to time-sensitive action when conditions change.",
    role: "Workflow role: operational signal monitoring.",
    label: "Signal Monitoring",
  },
  {
    slug: "bids",
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
            <article key={layer.title} className="flow-card">
              <div className="flow-title-row">
                <span className="flow-icon" aria-hidden="true">
                  <layer.icon />
                </span>
                <h3 className="card-title">{layer.title}</h3>
              </div>
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
        <div className="platform-modules-list">
          {modules.map((module) => (
            <article
              key={module.slug}
              id={module.slug}
              className="platform-module-section"
            >
              <div className="platform-module-text">
                <p className="module-label">{module.label}</p>
                <h3 className="card-title">{module.title}</h3>
                <p className="card-body">{module.purpose}</p>
                <p className="module-benefit">{module.benefit}</p>
                <p className="module-role">{module.role}</p>
              </div>
              {module.screenshot && module.screenshotWidth && module.screenshotHeight && (
                <div className="platform-module-visual">
                  <BrowserFrame
                    src={module.screenshot}
                    alt={module.screenshotAlt || `${module.title} module`}
                    caption={module.screenshotCaption}
                    width={module.screenshotWidth}
                    height={module.screenshotHeight}
                  />
                </div>
              )}
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
            Start directly with a self-serve plan, or book a demo if your team
            needs a custom setup across markets, categories, or workflows.
          </p>
          <CTAGroup
            primaryHref="/pricing"
            primaryLabel="View Pricing"
            secondaryHref="/contact"
            secondaryLabel="Book a Demo"
          />
        </div>
      </Section>
      <SchemaScript data={platformSchema} />
    </>
  );
}
