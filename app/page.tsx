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
  title: "Win Before the Tender | Procurement Forecasting Intelligence | Civant",
  description:
    "Civant is a procurement forecasting intelligence platform for Europe, helping teams identify likely tender timing using buyer cycles, contract lifecycles, and public signals.",
  path: "/",
});

const heroProof = [
  {
    label: "Validation Match Rate",
    value: "90.8%",
    detail: "Measured against subsequently published tender activity.",
  },
  {
    label: "Forecasts Validated To Date",
    value: "79K",
    detail: "Structured checks across lifecycle and market evidence.",
  },
  {
    label: "Evidence Refresh",
    value: "Hourly",
    detail: "Tender notices, awards, buyer movement, and public signals.",
  },
];

const pricingPreview = [
  {
    name: "Vanguard",
    price: "€299",
    cadence: "/month",
  },
  {
    name: "Summit",
    price: "€699",
    cadence: "/month",
    featured: true,
  },
];

const audienceCards = [
  {
    title: "SMEs entering new public-sector markets",
    body: "See which buyers, frameworks, and renewal windows deserve attention before a formal tender appears.",
    fit: "Best fit: expansion into Ireland, the UK, Spain, France, or Italy.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Bid teams escaping reactive tender alerts",
    body: "Prioritize likely opportunities early enough to shape positioning, partnerships, and qualification work.",
    fit: "Best fit: teams that need preparation time, not another inbox feed.",
    icon: Compass,
  },
  {
    title: "Commercial teams tracking strategic buyers",
    body: "Monitor incumbent patterns, buyer cycles, and external public signals so account engagement starts months earlier.",
    fit: "Best fit: suppliers selling into complex public-sector accounts.",
    icon: Landmark,
  },
];

const productTour = [
  {
    title: "Panorama",
    label: "User dashboard",
    body: "See market momentum, strategic runway, and renewal opportunities in one operating view.",
    screenshot: "/screenshots/panorama.png",
    width: 2880,
    height: 1558,
    alt: "Panorama dashboard showing strategic runway, operational status, and renewal opportunities",
    caption: "Panorama: your strategic runway at a glance",
  },
  {
    title: "Forecast",
    label: "Forecasting engine",
    body: "Track scoped opportunities, upcoming windows, horizon timing, and validation evidence across markets.",
    screenshot: "/screenshots/forecast-validation.png",
    width: 1352,
    height: 680,
    alt: "Forecast dashboard showing scoped opportunities, upcoming windows, horizon timing and validation metrics",
    caption: "Forecast: validation, timing, and market evidence in one view",
  },
  {
    title: "Finder",
    label: "Target discovery",
    body: "Narrow the market by buyer, country, source, and category so teams focus on the right accounts.",
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
    question: "What is Civant?",
    answer:
      "Civant is a European procurement forecasting intelligence platform. It helps bid, sales, and market intelligence teams identify likely tender timing earlier by combining buyer history, contract lifecycles, competitor activity, and public evidence.",
  },
  {
    question: "How is Civant different from a tender alert tool?",
    answer:
      "Tender alert tools notify teams after notices are published. Civant is built for earlier planning: it monitors procurement history, renewal cycles, awards, market movement, and external signals so teams can prioritise accounts before the formal notice appears.",
  },
  {
    question: "What does Civant validate?",
    answer:
      "Civant validates forecast logic against subsequently published tenders and award activity. The validation loop checks whether evidence-led signals, timing windows, and buyer patterns align with real procurement outcomes over time.",
  },
  {
    question: "Who should use Civant?",
    answer:
      "Civant is built for B2G sales teams, bid teams, founders, market intelligence teams, and public-sector suppliers that need earlier visibility, better account prioritisation, and more disciplined bid or no-bid decisions.",
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
            <CTAGroup
              primaryHref="/pricing"
              primaryLabel="Get Started"
              secondaryHref="/platform"
              secondaryLabel="See Platform"
            />
            <p className="cred-line">
              Evidence-led forecasting, continuously checked against published
              tender activity.
            </p>
          </div>

        </div>

        <div className="hero-proof-strip" aria-label="Civant validation proof">
          {heroProof.map((item) => (
            <article key={item.label} className="hero-proof-item">
              <p>{item.label}</p>
              <strong>{item.value}</strong>
              <span>{item.detail}</span>
            </article>
          ))}
        </div>
      </Section>

      <Section muted className="home-audience-section">
        <div className="home-audience-heading">
          <p className="eyebrow">Who Civant Is For</p>
          <h2 className="headline-lg">
            Built for teams that need earlier public-sector market timing
          </h2>
          <p className="text-lead section-intro">
            Civant is strongest when the cost of finding out late is missed
            positioning, rushed qualification, or a poor bid/no-bid decision.
          </p>
        </div>

        <div className="home-audience-grid">
          {audienceCards.map((card) => {
            const Icon = card.icon;

            return (
              <article key={card.title} className="home-audience-card">
                <div className="home-audience-card-head">
                  <span className="home-audience-icon" aria-hidden="true">
                    <Icon />
                  </span>
                  <h3>{card.title}</h3>
                </div>
                <p>{card.body}</p>
                <p className="home-audience-fit">{card.fit}</p>
              </article>
            );
          })}
        </div>

        <div className="home-audience-decision">
          <p>
            If your team only needs a list of live tender notices, Civant is
            probably more intelligence than you need. If you need to know where
            the market is likely to move next, this is the right layer.
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
            A Forecasting Engine built from hard data, evidence and validated every day
          </h2>
          <p className="text-lead section-intro">
            Forecast is the center of Civant. The screens below show how market
            visibility, target discovery, and competitor context feed the
            forecasting workflow for public-sector growth teams.
          </p>
        </div>

        <div className="product-tour-grid">
          {productTour.map((item) => (
            <article key={item.title} className="product-tour-card">
              <div className="product-tour-card-copy">
                <p className="micro-label">{item.label}</p>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
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
          <span>Connected workflows</span>
          {connectedWorkflows.map((item) => (
            <Link key={item.label} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
      </Section>

      <Section muted>
        <ProofSection compact />
      </Section>

      <Section className="pricing-preview-section">
        <div className="section-heading-wrap">
          <p className="eyebrow">Our Starter Plans</p>
          <h2 className="headline-lg">Start with the plan that matches your bid motion</h2>
          <p className="text-lead section-intro">
            Vanguard gives lean teams the operating rhythm. Summit gives bid
            teams broader coverage, competitor context, and more saved rules.
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
                </div>
                <div className="pricing-preview-price">
                  <strong>{plan.price}</strong>
                  <span>{plan.cadence}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section muted className="home-faq-section">
        <div className="section-heading-wrap">
          <p className="eyebrow">FAQ</p>
          <h2 className="headline-lg">Clear answers for buyers and search engines</h2>
          <p className="text-lead section-intro">
            Civant is built for earlier, evidence-led procurement decisions,
            not generic alerts or vague market noise.
          </p>
        </div>

        <div className="home-faq-list">
          {homeFaqs.map((faq) => (
            <article key={faq.question} className="home-faq-item">
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <div className="final-cta">
          <h2 className="headline-lg final-cta-title">
            Start mastering procurement cycles
          </h2>
          <CTAGroup
            primaryHref="/pricing"
            primaryLabel="Get Started"
            secondaryHref="/contact"
            secondaryLabel="Request Custom Plan"
          />
        </div>
      </Section>

      <SchemaScript data={homeSchema} />
    </>
  );
}
