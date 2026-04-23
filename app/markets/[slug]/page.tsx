import Link from "next/link";
import { notFound } from "next/navigation";
import { CTAGroup } from "../../../components/site/CTAGroup";
import { SchemaScript } from "../../../components/site/SchemaScript";
import { Section } from "../../../components/site/Section";
import { getMarketBySlug, MARKETS } from "../../../lib/markets";
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildPageMetadata,
  buildServiceSchema,
  SITE_URL,
} from "../../../lib/seo";

export const dynamic = "force-static";
export const dynamicParams = false;

type MarketPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return MARKETS.map((market) => ({ slug: market.slug }));
}

export function generateMetadata({ params }: MarketPageProps) {
  const market = getMarketBySlug(params.slug);

  if (!market) {
    return {};
  }

  return buildPageMetadata({
    title: `${market.country} Public Procurement Intelligence | Civant`,
    description: market.description,
    path: `/markets/${market.slug}`,
  });
}

function buildMarketSchema(market: NonNullable<ReturnType<typeof getMarketBySlug>>) {
  return [
    buildServiceSchema({
      name: `${market.country} Public Procurement Intelligence`,
      description: market.description,
      path: `/markets/${market.slug}`,
      serviceType: `${market.country} procurement intelligence`,
      areaServed: market.country,
    }),
    buildBreadcrumbSchema([
      { name: "Home", item: SITE_URL },
      { name: "Markets", item: `${SITE_URL}/markets` },
      { name: market.country, item: `${SITE_URL}/markets/${market.slug}` },
    ]),
    buildFaqSchema(market.faqs),
  ];
}

function getCtaMarketLabel(market: NonNullable<ReturnType<typeof getMarketBySlug>>) {
  if (market.slug === "united-kingdom") {
    return "UK";
  }

  if (market.slug === "netherlands") {
    return "NL";
  }

  return market.country;
}

export default function MarketPage({ params }: MarketPageProps) {
  const market = getMarketBySlug(params.slug);

  if (!market) {
    notFound();
  }

  const schema = buildMarketSchema(market);
  const ctaMarketLabel = getCtaMarketLabel(market);
  const marketPathLinks = [
    {
      title: "See the platform workflow",
      body: "Understand how country coverage connects to targeting, forecasting, and execution inside Civant.",
      href: "/platform",
      cta: "View Platform",
    },
    {
      title: "Explore EU tender monitoring",
      body: "Compare this country with the wider European workflow used across live and upcoming markets.",
      href: "/solutions/eu-tender-monitoring",
      cta: "View Solution",
    },
    {
      title: "See tender prediction in context",
      body: "Understand how contract lifecycles and public signals support earlier market timing.",
      href: "/solutions/tender-prediction-software",
      cta: "View Solution",
    },
    {
      title: market.status === "live" ? "Start with pricing" : "Talk about rollout",
      body:
        market.status === "live"
          ? "Move from market understanding into a self-serve or custom buying path."
          : "Discuss early access, rollout priorities, and the setup your team will need.",
      href: market.status === "live" ? "/pricing" : "/contact",
      cta: market.status === "live" ? "View Pricing" : "Contact Civant",
    },
  ];
  const ctaCopy =
    market.status === "live"
      ? `Start with ${market.country} coverage now, or book a custom walkthrough if your team needs a multi-market setup.`
      : `${market.country} is part of the next rollout. Talk to us about early access, target categories, and country-specific planning.`;

  return (
    <>
      <Section className="hero-block hero-section">
        <p className="eyebrow">Markets / {market.country}</p>
        <h1 className="headline-xl">{market.headline}</h1>
        <p className="text-lead">{market.description}</p>
      </Section>

      <Section muted>
        <div className="section-heading-wrap">
          <p className="eyebrow">Coverage Status</p>
          <h2 className="headline-lg">
            {market.status === "live"
              ? `${market.country} is live in Civant`
              : `${market.country} is coming next in the rollout`}
          </h2>
          <p className="text-lead section-intro">{market.summary}</p>
        </div>
        <div className="grid grid-3 market-detail-grid">
          <article className="card market-detail-card">
            <span className={`market-status market-status-${market.status}`}>
              {market.statusLabel}
            </span>
            <h3 className="card-title">
              {market.status === "live"
                ? `Is ${market.country} live in Civant?`
                : `When does ${market.country} join the rollout?`}
            </h3>
            <p className="card-body">
              {market.status === "live"
                ? `Civant currently supports public procurement intelligence for ${market.buyersLabel}.`
                : `${market.country} is prepared as part of Civant's next country rollout.`}
            </p>
          </article>
          <article className="card market-detail-card">
            <span className="market-status market-status-live">Evidence-led</span>
            <h3 className="card-title">What does the prediction engine read?</h3>
            <p className="card-body">
              Forecasting is based on procurement evidence, contract lifecycles,
              buyer behavior, competitor context, and public external signals.
            </p>
          </article>
          <article className="card market-detail-card">
            <span className="market-status market-status-live">AI-assisted</span>
            <h3 className="card-title">Where does AI fit?</h3>
            <p className="card-body">
              AI helps analyze match, scope, documents, and buyer intent on top
              of structured procurement intelligence.
            </p>
          </article>
        </div>
      </Section>

      <Section>
        <div className="section-heading-wrap">
          <p className="eyebrow">Signals</p>
          <h2 className="headline-lg">What Civant tracks for {market.country}</h2>
        </div>
        <div className="grid grid-4 market-signal-grid">
          {market.signalFocus.map((signal) => (
            <article key={signal} className="flow-card">
              <h3 className="card-title">{signal}</h3>
            </article>
          ))}
        </div>
      </Section>

      <Section muted>
        <div className="section-heading-wrap">
          <p className="eyebrow">Use Cases</p>
          <h2 className="headline-lg">
            How teams use {market.adjective} procurement intelligence
          </h2>
        </div>
        <div className="grid grid-3 market-detail-grid">
          {market.useCases.map((useCase) => (
            <article key={useCase} className="card market-detail-card">
              <p className="card-body">{useCase}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <div className="section-heading-wrap">
          <p className="eyebrow">FAQ</p>
          <h2 className="headline-lg">
            {market.country} procurement intelligence questions
          </h2>
          <p className="text-lead section-intro">
            Short answers to the questions teams usually ask before they commit
            to a country market path.
          </p>
        </div>
        <div className="faq-list">
          {market.faqs.map((faq) => (
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
            Build the right route from {market.country}
          </h2>
        </div>
        <div className="grid grid-4 solution-related-grid">
          {marketPathLinks.map((item) => (
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
            Build earlier visibility into {market.adjective} procurement
          </h2>
          <p className="text-lead platform-cta-copy">{ctaCopy}</p>
          <CTAGroup
            primaryHref={market.status === "live" ? "/pricing" : "/contact"}
            primaryLabel={
              market.status === "live"
                ? `Start with ${ctaMarketLabel} Coverage`
                : `Join ${ctaMarketLabel} Early Access`
            }
            secondaryHref={market.status === "live" ? "/contact" : "/markets"}
            secondaryLabel={
              market.status === "live" ? "Plan Custom Setup" : "View Live Markets"
            }
          />
          {market.status === "live" ? (
            <div className="button-row market-back-row">
              <Link href="/markets" className="text-link">
                View all markets
              </Link>
            </div>
          ) : null}
        </div>
      </Section>

      <SchemaScript data={schema} />
    </>
  );
}
