import Link from "next/link";
import { notFound } from "next/navigation";
import { CTAGroup } from "../../../components/site/CTAGroup";
import { SchemaScript } from "../../../components/site/SchemaScript";
import { Section } from "../../../components/site/Section";
import { getMarketBySlug, MARKETS } from "../../../lib/markets";
import { buildFaqSchema, buildPageMetadata, SITE_URL } from "../../../lib/seo";

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
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: `${market.country} Public Procurement Intelligence`,
      url: `${SITE_URL}/markets/${market.slug}`,
      description: market.description,
      about: [
        "public procurement intelligence",
        "tender forecasting",
        `${market.adjective} public-sector buyers`,
        "contract lifecycle signals",
      ],
      publisher: {
        "@type": "Organization",
        name: "Civant Technologies Limited",
        url: SITE_URL,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: SITE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Markets",
          item: `${SITE_URL}/markets`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: market.country,
          item: `${SITE_URL}/markets/${market.slug}`,
        },
      ],
    },
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
            <h3 className="card-title">Market coverage</h3>
            <p className="card-body">
              {market.status === "live"
                ? `Civant currently supports public procurement intelligence for ${market.buyersLabel}.`
                : `${market.country} is prepared as part of Civant's next country rollout.`}
            </p>
          </article>
          <article className="card market-detail-card">
            <span className="market-status market-status-live">Evidence-led</span>
            <h3 className="card-title">Prediction engine</h3>
            <p className="card-body">
              Forecasting is based on procurement evidence, contract lifecycles,
              buyer behavior, competitor context, and public external signals.
            </p>
          </article>
          <article className="card market-detail-card">
            <span className="market-status market-status-live">AI-assisted</span>
            <h3 className="card-title">Strategic interpretation</h3>
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
