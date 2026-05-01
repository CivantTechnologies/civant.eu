import Image from "next/image";
import Link from "next/link";
import { BriefcaseBusiness, Compass, Landmark } from "lucide-react";
import { BrowserFrame } from "../components/site/BrowserFrame";
import { CTAGroup } from "../components/site/CTAGroup";
import { ProofSection } from "../components/site/ProofSection";
import { SchemaScript } from "../components/site/SchemaScript";
import { Section } from "../components/site/Section";
import {
  buildFaqSchema,
  buildPageMetadata,
  buildPricingProductSchema,
  buildSoftwareApplicationSchema,
} from "../lib/seo";

export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  title: "Procurement Forecasting Intelligence | Civant",
  description:
    "Civant is procurement forecasting software for European B2G teams, helping teams identify likely tender timing using buyer cycles, contract lifecycles, and public signals.",
  path: "/",
});

const heroProof = [
  {
    label: "Match rate",
    value: "90.8%",
    detail: "Against tender activity.",
    href: "/methodology",
  },
  {
    label: "Validated",
    value: "79K",
    detail: "Evidence checks.",
    href: "/platform",
  },
  {
    label: "Opportunity",
    value: "€1.1tn+",
    detail: "Covered markets.",
    href: "/markets",
  },
];

const heroSignalLayers = [
  { label: "Buyer cycles", href: "/resources/public-procurement-cycles" },
  {
    label: "Renewal windows",
    href: "/resources/renewal-cycles-how-contract-expiry-drives-tender-pipelines",
  },
  {
    label: "Competitor movement",
    href: "/resources/competitor-intelligence-in-public-procurement",
  },
  {
    label: "Public signals",
    href: "/resources/external-signals-in-public-procurement",
  },
];

const pricingPreview = [
  {
    name: "Vanguard",
    price: "€299",
    cadence: "/month",
    description: "For lean teams building an early procurement rhythm.",
    note: "All available countries included.",
  },
  {
    name: "Summit",
    price: "€699",
    cadence: "/month",
    description: "For teams that need broader coverage and competitor context.",
    note: "All available countries included.",
    featured: true,
  },
];

const homeForecastReports = [
  {
    label: "Education",
    title: "Education Procurement Outlook Q4 2026",
    href: "/resources/education-procurement-outlook-q4-2026",
    src: "/images/resources/report-education-forecast.jpg",
    alt: "Civant education procurement forecast report cover",
  },
  {
    label: "Healthcare",
    title: "Healthcare Procurement Outlook Q4 2026",
    href: "/resources/healthcare-procurement-outlook-q4-2026",
    src: "/images/resources/report-healthcare-forecast.jpg",
    alt: "Civant healthcare procurement forecast report cover",
  },
  {
    label: "Public construction",
    title: "Public Construction Procurement Outlook Q4 2026",
    href: "/resources/public-construction-procurement-outlook-q4-2026",
    src: "/images/resources/report-construction-forecast.jpg",
    alt: "Civant public construction procurement forecast report cover",
  },
];

const audienceCards = [
  {
    label: "Market entry",
    title: "Teams entering new public-sector markets",
    body: "Choose countries, buyers, and renewal windows before a formal tender appears.",
    fit: "Best fit: expansion into Ireland, the UK, Spain, France, or Italy.",
    href: "/markets",
    icon: BriefcaseBusiness,
  },
  {
    label: "Bid timing",
    title: "Bid teams escaping reactive tender alerts",
    body: "Move earlier on qualification, partner planning, and bid/no-bid decisions.",
    fit: "Best fit: teams that need preparation time, not another inbox feed.",
    href: "/use-cases",
    icon: Compass,
  },
  {
    label: "Account strategy",
    title: "Commercial teams tracking strategic buyers",
    body: "Track buyers, incumbents, renewal cycles, and public signals for better account timing.",
    fit: "Best fit: suppliers selling into complex public-sector accounts.",
    href: "/platform",
    icon: Landmark,
  },
];

const productTour = [
  {
    title: "Forecast",
    label: "Forecasting engine",
    body: "Turn buyer cycles, renewal windows, award history, and public signals into scoped forecast windows your team can act on.",
    href: "/platform#forecast",
    featured: true,
    screenshot: "/screenshots/forecast-validation.png",
    width: 1352,
    height: 680,
    alt: "Forecast dashboard showing scoped opportunities, upcoming windows, horizon timing and validation metrics",
    caption: "Forecast: validation, timing, and market evidence in one view",
  },
  {
    title: "Panorama",
    label: "User dashboard",
    body: "See market momentum, strategic runway, and renewal opportunities in one operating view.",
    href: "/platform",
    screenshot: "/screenshots/panorama.png",
    width: 2880,
    height: 1558,
    alt: "Panorama dashboard showing strategic runway, operational status, and renewal opportunities",
    caption: "Panorama: your strategic runway at a glance",
  },
  {
    title: "Finder",
    label: "Target discovery",
    body: "Narrow the market by buyer, country, source, and category so teams focus on the right accounts.",
    href: "/platform#finder",
    screenshot: "/screenshots/finder-filters.png",
    width: 2876,
    height: 1436,
    alt: "Finder search interface with country, source, buyer, and CPV category filters",
    caption: "Finder: precision filters to narrow your target market",
  },
  {
    title: "Competitors",
    label: "Incumbent pressure",
    body: "Understand contract footprint, competitive intensity, and positioning context before committing bid effort.",
    href: "/platform#competitors",
    screenshot: "/screenshots/competitors.png",
    width: 2880,
    height: 1552,
    alt: "Competitors overview showing contracts, value, strategic insights and strengths",
    caption: "Competitors: incumbent footprint and competitive pressure",
  },
];

const connectedWorkflows = [
  { label: "Alerts", href: "/platform#alerts" },
  { label: "Bids", href: "/platform#bids" },
  { label: "Reports", href: "/resources/reports" },
];

const homeFaqs = [
  {
    question: "What is procurement forecasting intelligence?",
    answer:
      "Procurement forecasting intelligence helps teams identify likely tender timing before formal notices appear. Civant builds forecasts from buyer cycles, contract lifecycles, award history, competitor movement, and public signals.",
  },
  {
    question: "How is Civant different from tender alerts?",
    answer:
      "Tender alerts tell teams when a notice has already been published. Civant helps teams plan earlier by monitoring renewal windows, buyer behaviour, incumbent patterns, and external public signals before the tender appears.",
  },
  {
    question: "Which European markets does Civant cover?",
    answer:
      "Civant currently covers Ireland, the United Kingdom, Spain, France, and Italy, with Finland, Belgium, Germany, and the Netherlands listed as upcoming markets.",
  },
  {
    question: "Do Civant plans include all available countries?",
    answer:
      "Yes. Civant plans include all available countries, so teams can compare markets and build cross-border coverage without paying separately for each market.",
  },
  {
    question: "Who should use Civant?",
    answer:
      "Civant is built for B2G sales teams, bid teams, founders, market intelligence teams, and public-sector suppliers that need earlier visibility, better account prioritisation, and more disciplined bid or no-bid decisions.",
  },
  {
    question: "How does Civant validate forecast quality?",
    answer:
      "Civant checks forecast logic against subsequently published tender and award activity. The validation loop tests whether evidence-led timing signals and buyer patterns align with real procurement outcomes over time.",
  },
];

const homeSchema = [
  buildSoftwareApplicationSchema(),
  buildPricingProductSchema(),
  buildFaqSchema(homeFaqs),
];

export default function HomePage() {
  return (
    <>
      <Section
        className="hero-block hero-section home-hero"
        containerClassName="home-hero-container"
      >
        <div className="home-hero-layout">
          <div className="home-hero-main">
            <p className="eyebrow">Procurement Forecasting Intelligence</p>
            <h1 className="headline-xl hero-headline">Win before the tender.</h1>
            <p className="text-lead hero-subheadline">
              Evidence-led forecasting for European procurement teams, built
              from buyer cycles, contract lifecycles, competitor movement, and
              public signals.
            </p>
            <p className="home-hero-definition">
              Civant is procurement forecasting software for B2G teams that
              need earlier market timing, buyer intelligence, and evidence-led
              bid planning.
            </p>
            <CTAGroup
              primaryHref="/contact"
              primaryLabel="Book a 20-minute walkthrough"
              secondaryHref="/pricing"
              secondaryLabel="View Pricing"
            />
            <p className="cred-line">
              Validated against 79K evidence checks across live and upcoming
              European markets.
            </p>
          </div>

          <aside className="home-hero-console" aria-label="Civant forecasting console">
            <div className="home-hero-console-head">
              <p>Forecast operating layer</p>
              <span>Evidence loop</span>
            </div>

            <div className="home-hero-console-metrics">
              {heroProof.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`home-hero-metric ${
                    item.label === "Opportunity" ? "home-hero-metric-opportunity" : ""
                  }`}
                  aria-label={`${item.label}: ${item.value}. ${item.detail}`}
                >
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                  <em>{item.detail}</em>
                </Link>
              ))}
            </div>

            <div className="home-hero-signal-panel">
              <div className="home-hero-signal-copy">
                <p>Signals into forecast</p>
                <span>Each layer links to the evidence behind the model.</span>
              </div>
              <div className="home-hero-signal-list">
                {heroSignalLayers.map((item) => (
                  <Link key={item.label} href={item.href}>
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </Section>

      <Section muted className="home-audience-section">
        <div className="home-audience-heading">
          <p className="eyebrow">Who Civant Is For</p>
          <h2 className="headline-lg">Who Civant is for</h2>
          <p className="text-lead section-intro">
            Civant is for B2G teams where finding out late means missed
            positioning, rushed qualification, or weaker bid/no-bid decisions.
          </p>
        </div>

        <div className="home-audience-grid">
          {audienceCards.map((card) => {
            const Icon = card.icon;

            return (
              <Link key={card.title} href={card.href} className="home-audience-card">
                <div className="home-audience-card-head">
                  <span className="home-audience-icon" aria-hidden="true">
                    <Icon />
                  </span>
                  <div>
                    <p className="home-audience-label">{card.label}</p>
                    <h3>{card.title}</h3>
                  </div>
                </div>
                <p>{card.body}</p>
                <p className="home-audience-fit">{card.fit}</p>
                <span className="home-audience-link">Explore fit</span>
              </Link>
            );
          })}
        </div>

        <div className="home-audience-decision">
          <p>
            If your team only needs a list of live tender notices, Civant may be
            more intelligence than you need. If timing, evidence, and account
            focus shape the outcome, this is the right layer.
          </p>
          <Link href="/pricing" className="btn btn-primary">
            Start with Civant
          </Link>
        </div>
      </Section>

      <Section className="product-tour-section">
        <div className="section-heading-wrap product-tour-heading">
          <p className="eyebrow">Product</p>
          <h2 className="headline-lg">
            Procurement forecasting software built from buyer cycles, awards, and public signals
          </h2>
          <p className="text-lead section-intro">
            Forecast sits at the center of Civant. Market visibility, target
            discovery, and competitor context all feed the workflow that helps
            public-sector growth teams act earlier.
          </p>
        </div>

        <div className="product-tour-grid">
          {productTour.map((item) => (
            <article
              key={item.title}
              className={`product-tour-card ${
                item.featured ? "product-tour-card-featured" : ""
              } ${
                item.featured ? "" : "product-tour-card-secondary"
              }`}
            >
              <div className="product-tour-card-copy">
                <p className="micro-label">{item.label}</p>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <Link href={item.href} className="product-tour-card-link">
                  View module
                </Link>
              </div>
              <BrowserFrame
                src={item.screenshot}
                alt={item.alt}
                caption={item.caption}
                width={item.width}
                height={item.height}
              />
            </article>
          ))}
        </div>

        <div className="product-tour-workflows" aria-label="Connected Civant workflows">
          <span>From signal to action</span>
          {connectedWorkflows.map((item) => (
            <Link key={item.label} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>

        <div className="product-tour-next-step">
          <p>
            Start with market coverage, then use the forecast layer to turn
            timing signals into account plans, bid/no-bid decisions, and earlier
            pipeline conversations.
          </p>
          <div>
            <Link href="/markets">See markets</Link>
            <Link href="/platform">Explore platform</Link>
          </div>
        </div>
      </Section>

      <Section muted>
        <ProofSection compact />
      </Section>

      <Section className="pricing-preview-section">
        <div className="section-heading-wrap">
          <p className="eyebrow">Our Starter Plans</p>
          <h2 className="headline-lg">Start forecasting before the next tender appears</h2>
          <p className="text-lead section-intro">
            Every Civant plan includes all available countries, so teams can
            start with market visibility from day one instead of paying per
            market.
          </p>
        </div>

        <div className="pricing-preview-grid">
          {pricingPreview.map((plan) => (
            <Link
              href="/pricing"
              key={plan.name}
              className={`pricing-preview-card ${
                plan.featured ? "pricing-preview-card-featured" : ""
              }`}
              aria-label={`View ${plan.name} pricing`}
            >
              <div className="pricing-preview-top">
                <div>
                  <p className="micro-label">{plan.featured ? "Most popular" : "Starter"}</p>
                  <h3>{plan.name}</h3>
                  <p className="pricing-preview-description">{plan.description}</p>
                  <p className="pricing-preview-note">{plan.note}</p>
                </div>
                <div className="pricing-preview-price">
                  <strong>{plan.price}</strong>
                  <span>{plan.cadence}</span>
                </div>
              </div>
              <span className="pricing-preview-cta">View pricing</span>
            </Link>
          ))}
        </div>
      </Section>

      <Section className="home-reports-after-pricing-section">
        <div className="home-report-strip">
          <div className="home-report-strip-heading">
            <div>
              <p className="eyebrow">Forecast Reports</p>
              <h2 className="headline-lg">Public-sector demand, by sector</h2>
            </div>
            <p>
              Read concise Civant outlooks on where demand, renewal windows,
              buyer activity, and market movement are forming across priority
              sectors.
            </p>
          </div>

          <div className="home-report-grid">
            {homeForecastReports.map((report) => (
              <Link key={report.href} href={report.href} className="home-report-card">
                <span className="home-report-thumb">
                  <Image
                    src={report.src}
                    alt={report.alt}
                    width={520}
                    height={680}
                    sizes="(max-width: 700px) 34vw, 140px"
                  />
                </span>
                <span className="home-report-copy">
                  <span className="micro-label">{report.label}</span>
                  <strong>{report.title}</strong>
                  <span>View report</span>
                </span>
              </Link>
            ))}
          </div>

          <div className="home-report-footer">
            <Link href="/resources/reports">Browse forecast reports</Link>
          </div>
        </div>
      </Section>

      <Section muted className="home-faq-section">
        <div className="solution-compact-faq home-compact-faq">
          <h3 className="card-title">Home FAQ</h3>
          <div className="solution-compact-faq-list home-compact-faq-list">
            {homeFaqs.map((faq) => (
              <details key={faq.question} className="solution-compact-faq-item home-compact-faq-item">
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="final-cta">
          <h2 className="headline-lg final-cta-title">
            Start mastering procurement cycles
          </h2>
          <CTAGroup
            primaryHref="/contact"
            primaryLabel="Book a 20-minute walkthrough"
            secondaryHref="/pricing"
            secondaryLabel="View Pricing"
          />
        </div>
      </Section>

      <SchemaScript data={homeSchema} />
    </>
  );
}
