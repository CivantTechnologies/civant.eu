import Link from "next/link";
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
import { MarketCoverageLinks } from "../../components/site/MarketCoverageLinks";
import { SchemaScript } from "../../components/site/SchemaScript";
import {
  buildBreadcrumbSchema,
  buildCollectionPageSchema,
  buildFaqSchema,
  buildPageMetadata,
  buildSoftwareApplicationSchema,
} from "../../lib/seo";
import { SOLUTIONS } from "../../lib/solutions";

export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  title: "EU Procurement Intelligence Platform | Modules & Workflow",
  description:
    "Explore the Civant Intelligence Platform modules that turn procurement cycle signals into prioritized, executable opportunities.",
  path: "/platform",
});

const platformSchema = buildSoftwareApplicationSchema();

const platformFaqs = [
  {
    question: "What does the Civant platform actually do?",
    answer:
      "Civant turns procurement records, awards, lifecycle timing, competitor movement, and public external signals into one decision workflow so teams can identify, prioritize, and execute opportunities earlier.",
  },
  {
    question: "Where does AI fit in the platform?",
    answer:
      "AI helps interpret match, scope, buyer intent, and tender context. It sits on top of deterministic procurement evidence rather than replacing the prediction engine.",
  },
  {
    question: "Who is the platform built for?",
    answer:
      "Civant is built for bid teams, sales teams, partnerships teams, and commercial leaders working across European public-sector markets.",
  },
];

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

const platformPathLinks = [
  {
    title: "See the methodology",
    body: "Understand how deterministic signals, lifecycle logic, and AI interpretation fit together.",
    href: "/methodology",
    cta: "View Methodology",
  },
  {
    title: "Match the right solution",
    body: "Choose the search path that best reflects the procurement problem your team is solving.",
    href: "/solutions",
    cta: "Explore Solutions",
  },
  {
    title: "Explore market coverage",
    body: "See where Civant is live now and which countries are coming next in the rollout.",
    href: "/markets",
    cta: "View Markets",
  },
  {
    title: "Start with pricing",
    body: "Move from product understanding into a self-serve or custom buying path.",
    href: "/pricing",
    cta: "View Pricing",
  },
];

export default function PlatformPage() {
  const pageSchema = [
    platformSchema,
    buildFaqSchema(platformFaqs),
    buildCollectionPageSchema({
      name: "Civant Platform Modules",
      description:
        "Platform modules for procurement intelligence, target discovery, tender forecasting, competitor analysis, alerts, and bid execution.",
      path: "/platform",
      items: modules.map((module) => ({
        name: module.title,
        path: `/platform#${module.slug}`,
        description: module.purpose,
      })),
    }),
    buildBreadcrumbSchema([
      { name: "Home", item: "https://civant.eu" },
      { name: "Platform", item: "https://civant.eu/platform" },
    ]),
  ];

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
        <div className="section-heading-wrap">
          <p className="eyebrow">Proof</p>
          <h2 className="headline-lg">
            Why teams trust the Civant workflow
          </h2>
          <p className="text-lead section-intro">
            The product is strongest when timing, market context, and execution
            live in the same operating layer.
          </p>
        </div>
        <div className="solution-proof-strip">
          <article>
            <h3 className="card-title">Evidence-led from the start</h3>
            <p className="card-body">
              The workflow begins with official procurement records, awards,
              lifecycle timing, buyer recurrence, and public external signals.
            </p>
          </article>
          <article>
            <h3 className="card-title">Live across active markets</h3>
            <p className="card-body">
              One platform model already supports Ireland, the UK, Spain,
              France, and Italy, with more countries joining next.
            </p>
          </article>
          <article>
            <h3 className="card-title">Built for action, not observation</h3>
            <p className="card-body">
              Civant helps teams prioritize accounts, prepare earlier, and move
              from signal discovery into concrete bid execution.
            </p>
          </article>
        </div>
      </Section>

      <Section muted>
        <MarketCoverageLinks
          eyebrow="Country Layer"
          title="One platform model across each Civant market"
          body="The same procurement-cycle workflow is available across live markets today and is being extended into the next country rollout."
          compact
        />
      </Section>

      <Section>
        <div className="section-heading-wrap">
          <p className="eyebrow">Solution Paths</p>
          <h2 className="headline-lg">
            Connect the platform workflow to the problem your team is solving
          </h2>
        </div>
        <div className="grid grid-4 solution-link-grid">
          {SOLUTIONS.map((solution) => (
            <Link
              key={solution.slug}
              href={`/solutions/${solution.slug}`}
              className="card card-link interactive-surface solution-link-card"
            >
              <h3 className="card-title">{solution.title}</h3>
              <p className="card-body">{solution.description}</p>
              <span className="card-link-cta">View Solution</span>
            </Link>
          ))}
        </div>
      </Section>

      <Section>
        <div className="section-heading-wrap">
          <p className="eyebrow">Common Questions</p>
          <h2 className="headline-lg">What teams ask before they buy</h2>
          <p className="text-lead section-intro">
            Short answers to the questions that usually come up once the platform
            workflow starts to make sense.
          </p>
        </div>
        <div className="faq-list">
          {platformFaqs.map((faq) => (
            <article key={faq.question} className="faq-item">
              <h3 className="card-title">{faq.question}</h3>
              <p className="card-body">{faq.answer}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section muted>
        <div className="section-heading-wrap">
          <p className="eyebrow">Next Steps</p>
          <h2 className="headline-lg">
            Follow the path that fits your next decision
          </h2>
        </div>
        <div className="grid grid-4 solution-related-grid">
          {platformPathLinks.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="card card-link interactive-surface solution-link-card"
            >
              <h3 className="card-title">{item.title}</h3>
              <p className="card-body">{item.body}</p>
              <span className="card-link-cta">{item.cta}</span>
            </Link>
          ))}
        </div>
      </Section>

      <Section muted>
        <div className="final-cta">
          <h2 className="headline-lg final-cta-title">
            See the platform in your market context
          </h2>
          <p className="text-lead platform-cta-copy">
            Start directly with a self-serve plan, or request a custom plan if
            your team needs tailored setup across markets, categories, or workflows.
          </p>
          <CTAGroup
            primaryHref="/pricing"
            primaryLabel="View Pricing"
            secondaryHref="/contact"
            secondaryLabel="Request Custom Plan"
          />
        </div>
      </Section>
      <SchemaScript data={pageSchema} />
    </>
  );
}
