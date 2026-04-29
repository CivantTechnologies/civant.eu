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
import { SchemaScript } from "../../components/site/SchemaScript";
import {
  buildBreadcrumbSchema,
  buildCollectionPageSchema,
  buildFaqSchema,
  buildPageMetadata,
  buildSoftwareApplicationSchema,
} from "../../lib/seo";

export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  title: "Civant Platform | Procurement Forecasting Intelligence",
  description:
    "Civant is procurement forecasting software that turns buyer cycles, contract lifecycles, competitor context, and public signals into earlier targeting and bid planning.",
  path: "/platform",
});

const platformSchema = buildSoftwareApplicationSchema();

const platformFaqs = [
  {
    question: "What does Civant procurement intelligence software do?",
    answer:
      "Civant turns procurement records, awards, lifecycle timing, competitor movement, and public external signals into one decision workflow so teams can identify, prioritize, and execute opportunities earlier.",
  },
  {
    question: "Where does AI fit in the platform?",
    answer:
      "AI helps interpret match, scope, buyer intent, and tender context. It sits on top of deterministic procurement evidence rather than replacing the forecasting engine.",
  },
  {
    question: "Who is the platform built for?",
    answer:
      "Civant is built for bid teams, sales teams, partnerships teams, and commercial leaders working across European public-sector markets.",
  },
  {
    question: "What data does Civant use to forecast procurement opportunities?",
    answer:
      "Civant combines official tender records, award history, contract lifecycle patterns, buyer and category behaviour, competitor context, and external public signals such as budgets, policy movement, grants, hiring, and prior information notices.",
  },
  {
    question: "How does Civant score forecast confidence?",
    answer:
      "Confidence is based on deterministic evidence such as buyer recurrence, category patterns, lifecycle timing, award history, signal density, and market context. AI can help explain the context, but it does not replace the scoring logic.",
  },
  {
    question: "How does the platform turn intelligence into action?",
    answer:
      "Forecasts feed into target discovery, alerts, competitor views, bid tracking, and reporting so teams can move from market signal to account planning, early engagement, and bid execution in one workflow.",
  },
];

const systemLayers = [
  {
    icon: CircleGauge as LucideIcon,
    label: "Context",
    title: "Unify the market",
    body: "Bring buyers, categories, awards, and market momentum into one operating view.",
  },
  {
    icon: ScanSearch as LucideIcon,
    label: "Targets",
    title: "Select strategic accounts",
    body: "Filter the market to institutions and segments worth pursuing before the notice appears.",
  },
  {
    icon: Crosshair as LucideIcon,
    label: "Timing",
    title: "Forecast opportunity windows",
    body: "Use lifecycle and behaviour signals to estimate where opportunities are likely to emerge.",
    featured: true,
  },
  {
    icon: Target as LucideIcon,
    label: "Execution",
    title: "Move into action",
    body: "Turn forecasted opportunities into alerts, bid planning, and team ownership.",
  },
];

const platformHeroMetrics = [
  {
    label: "Forecast layer",
    value: "Timing",
    detail: "Buyer and category windows.",
    href: "#forecast",
  },
  {
    label: "Evidence checks",
    value: "79K",
    detail: "Validated against notices.",
    href: "/methodology",
  },
  {
    label: "Live markets",
    value: "5",
    detail: "Europe-wide model.",
    href: "/markets",
  },
];

const platformHeroLinks = [
  { label: "Market context", href: "#panorama" },
  { label: "Target discovery", href: "#finder" },
  { label: "Forecast timing", href: "#forecast" },
  { label: "Bid execution", href: "#bids" },
];

const platformProofMetrics = [
  {
    label: "Evidence checks",
    value: "79K",
    body: "Validation compares forecast logic against official notices and historical procurement evidence.",
    href: "/methodology",
  },
  {
    label: "Live markets",
    value: "5",
    body: "Ireland, the UK, Spain, France, and Italy run on the same country-aware platform model.",
    href: "/markets",
  },
  {
    label: "Workflow modules",
    value: "7",
    body: "Forecast, Panorama, Finder, Competitors, Alerts, Bids, and Reports connect signal to action.",
    href: "#forecast",
  },
];

const platformProofLinks = [
  {
    title: "How external signals fit the platform",
    body: "Budgets, grants, PINs, hiring, and policy movement add context without replacing procurement evidence.",
    href: "/resources/external-signals-in-public-procurement",
    signals: ["Budgets", "PINs", "Policy"],
  },
  {
    title: "How competitor intelligence fits the platform",
    body: "Incumbent footprint, participation intensity, and market pressure shape stronger account decisions.",
    href: "/resources/competitor-intelligence-in-public-procurement",
    signals: ["Incumbents", "Participation", "Win patterns"],
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
    slug: "forecast",
    title: "Forecast",
    purpose:
      "Generates confidence-scored projections for likely procurement windows by buyer and category.",
    benefit:
      "Helps teams engage early, plan resources, and reduce reactive bid cycles.",
    role: "Workflow role: timing intelligence and planning trigger.",
    label: "Forecast Engine",
    screenshot: "/screenshots/forecast-pipeline.png",
    screenshotWidth: 1352,
    screenshotHeight: 760,
    screenshotAlt: "Forecast pipeline showing estimated opportunities by month and a list of buyer renewal windows",
    screenshotCaption: "Forecast: opportunity timing, buyer windows, and action flow",
  },
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
    screenshot: "/screenshots/alerts.png",
    screenshotWidth: 2690,
    screenshotHeight: 1342,
    screenshotAlt: "Alerts workspace showing active buyer and forecast alerts with recent matches",
    screenshotCaption: "Alerts: live signal monitoring for tracked buyers and forecasts",
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
    screenshot: "/screenshots/bids.png?v=20260426-3",
    screenshotWidth: 1352,
    screenshotHeight: 692,
    screenshotAlt: "Active Bids workspace showing pursuit status, bid filters, and active procurement opportunities",
    screenshotCaption: "Bids: active pursuit tracking and bid ownership",
  },
  {
    slug: "reports",
    title: "Reports",
    purpose:
      "Turns platform intelligence into configurable reports for leadership, pipeline planning, and market reviews.",
    benefit:
      "Gives teams a clean way to package forecast accuracy, pipeline views, buyer context, and competitor landscape.",
    role: "Workflow role: reporting and decision communication.",
    label: "Reporting Workspace",
    screenshot: "/screenshots/reports.png?v=20260426-2",
    screenshotWidth: 1352,
    screenshotHeight: 692,
    screenshotAlt: "Reports workspace showing report configuration controls and selectable report sections",
    screenshotCaption: "Reports: configurable intelligence outputs for planning reviews",
  },
];

const [featuredModule, ...supportingModules] = modules;

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
    cta: "Explore Solution",
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
      <Section
        className="hero-block hero-section platform-hero"
        containerClassName="platform-hero-container"
      >
        <div className="platform-hero-layout">
          <div className="platform-hero-copy">
            <p className="eyebrow">Platform</p>
            <h1 className="headline-xl">
              Procurement forecasting software for earlier public-sector decisions
            </h1>
            <p className="text-lead">
              Civant connects market context, contract lifecycle signals,
              competitor movement, and forecasting logic into one operating
              layer for public-sector growth teams.
            </p>
            <p className="platform-hero-definition">
              Civant is procurement forecasting software for B2G teams that need
              to identify likely tender timing, prioritize strategic buyers, and
              act before formal notices appear.
            </p>
            <CTAGroup
              primaryHref="/pricing"
              primaryLabel="Get Started"
              secondaryHref="/methodology"
              secondaryLabel="See Methodology"
            />
          </div>

          <aside className="platform-hero-console" aria-label="Civant platform workflow">
            <div className="platform-hero-console-head">
              <p>Platform operating layer</p>
              <span>Signal to action</span>
            </div>
            <div className="platform-hero-metrics">
              {platformHeroMetrics.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`platform-hero-metric ${
                    item.label === "Forecast layer" ? "platform-hero-metric-featured" : ""
                  }`}
                >
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                  <em>{item.detail}</em>
                </Link>
              ))}
            </div>
            <div className="platform-hero-flow">
              <p>Workflow modules</p>
              <div>
                {platformHeroLinks.map((item) => (
                  <Link key={item.label} href={item.href}>
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </Section>

      <Section muted>
        <div className="section-heading-wrap platform-workflow-heading">
          <p className="eyebrow">How Modules Work Together</p>
          <h2 className="headline-lg">
            From market signal to forecasted action
          </h2>
          <p className="text-lead section-intro">
            The platform is strongest when each module feeds the next: context
            narrows the market, targets shape the forecast, and forecasted
            timing drives execution.
          </p>
        </div>
        <div className="platform-workflow-track">
          {systemLayers.map((layer, index) => (
            <article
              key={layer.title}
              className={`platform-workflow-card ${
                layer.featured ? "platform-workflow-card-featured" : ""
              }`}
            >
              <span className="platform-workflow-index">{String(index + 1).padStart(2, "0")}</span>
              <div className="flow-title-row">
                <span className="flow-icon" aria-hidden="true">
                  <layer.icon />
                </span>
                <div>
                  <p className="module-label">{layer.label}</p>
                  <h3 className="card-title">{layer.title}</h3>
                </div>
              </div>
              <p className="card-body">{layer.body}</p>
            </article>
          ))}
        </div>
        <p className="platform-workflow-bridge">
          Civant turns scattered procurement evidence into a practical sequence:
          know the market, choose the right accounts, forecast timing, and move
          the work into execution.
        </p>
      </Section>

      <Section>
        <div className="section-heading-wrap platform-modules-heading">
          <p className="eyebrow">Platform Modules</p>
          <h2 className="headline-lg">Forecast leads the platform workflow</h2>
          <p className="text-lead section-intro">
            Forecast is the planning layer. Panorama, Finder, Competitors,
            Alerts, and Bids support the path from market evidence to action.
          </p>
        </div>
        <div className="platform-modules-system">
          <article
            id={featuredModule.slug}
            className="platform-module-section platform-module-section-featured"
          >
            <div className="platform-module-text">
              <p className="module-label">{featuredModule.label}</p>
              <h3 className="card-title">{featuredModule.title}</h3>
              <p className="card-body">{featuredModule.purpose}</p>
              <p className="module-benefit">{featuredModule.benefit}</p>
              <p className="module-role">{featuredModule.role}</p>
            </div>
            {featuredModule.screenshot &&
              featuredModule.screenshotWidth &&
              featuredModule.screenshotHeight && (
                <div className="platform-module-visual">
                  <BrowserFrame
                    src={featuredModule.screenshot}
                    alt={featuredModule.screenshotAlt || `${featuredModule.title} module`}
                    caption={featuredModule.screenshotCaption}
                    width={featuredModule.screenshotWidth}
                    height={featuredModule.screenshotHeight}
                  />
                </div>
              )}
          </article>

          <div className="platform-module-support-grid">
            {supportingModules.map((module) => (
              <article
                key={module.slug}
                id={module.slug}
                className={`platform-module-section platform-module-section-support ${
                  module.screenshot ? "platform-module-section-support-visual" : ""
                }`}
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
        </div>
      </Section>

      <Section id="proof" muted className="platform-proof-section">
        <div className="section-heading-wrap platform-proof-heading">
          <p className="eyebrow">Proof</p>
          <h2 className="headline-lg">
            The evidence stack behind the platform
          </h2>
          <p className="text-lead section-intro">
            Civant is designed around official evidence first, forecast logic
            second, and practical execution always.
          </p>
        </div>
        <div className="platform-proof-console">
          <div className="platform-proof-copy">
            <p className="module-label">Validation model</p>
            <h3 className="card-title">Inspectable evidence, not decoration.</h3>
            <p className="card-body">
              The platform connects procurement records, awards, lifecycle timing,
              recurrence patterns, external public signals, and team workflows so
              each forecast can be understood before it becomes action.
            </p>
          </div>
          <div className="platform-proof-metrics" aria-label="Civant platform proof points">
            {platformProofMetrics.map((item) => (
              <Link key={item.label} href={item.href} className="platform-proof-metric">
                <span>{item.label}</span>
                <strong>{item.value}</strong>
                <p>{item.body}</p>
              </Link>
            ))}
          </div>
        </div>
        <div className="platform-proof-links">
          {platformProofLinks.map((item) => (
            <Link key={item.title} href={item.href} className="platform-proof-link">
              <h3 className="card-title">{item.title}</h3>
              <p className="card-body">{item.body}</p>
              <div className="platform-proof-link-signals" aria-label={`${item.title} evidence cues`}>
                {item.signals.map((signal) => (
                  <span key={signal}>{signal}</span>
                ))}
              </div>
              <span className="card-link-cta">Read the resource</span>
            </Link>
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

      <Section id="faq" className="platform-faq-section">
        <div className="platform-faq-shell">
          <div className="platform-faq-copy">
            <p className="eyebrow">Common Questions</p>
            <h2 className="headline-lg">
              What teams ask before they buy procurement intelligence software
            </h2>
            <p className="text-lead section-intro">
              Short answers to the questions that usually come up once the
              platform workflow starts to make sense.
            </p>
            <div className="platform-faq-cues" aria-label="Platform FAQ themes">
              <span>Evidence-first</span>
              <span>AI-aware</span>
              <span>Built for teams</span>
            </div>
          </div>
          <div className="platform-faq-list">
            {platformFaqs.map((faq, index) => (
              <details
                key={faq.question}
                className="platform-faq-item"
                open={index === 0}
              >
                <summary>
                  <span className="platform-faq-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{faq.question}</span>
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </Section>

      <Section muted>
        <div className="final-cta">
          <h2 className="headline-lg final-cta-title">
            Find your next public-sector opportunity with Civant
          </h2>
          <p className="text-lead platform-cta-copy">
            Choose a Civant plan to start using procurement forecasts across
            available markets, or talk to us about a custom setup for your team.
          </p>
          <CTAGroup
            primaryHref="/pricing"
            primaryLabel="Get Started"
            secondaryHref="/contact"
            secondaryLabel="Talk to Us"
          />
          <p className="final-cta-note">
            All plans include available Civant markets from the start.
          </p>
        </div>
      </Section>
      <SchemaScript data={pageSchema} />
    </>
  );
}
