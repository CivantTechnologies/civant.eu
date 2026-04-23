import Link from "next/link";
import { CTAGroup } from "../../components/site/CTAGroup";
import { SchemaScript } from "../../components/site/SchemaScript";
import { Section } from "../../components/site/Section";
import { COMING_MARKETS, LIVE_MARKETS, MARKETS } from "../../lib/markets";
import { buildPageMetadata, SITE_URL } from "../../lib/seo";

export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  title: "European Procurement Intelligence Markets | Civant",
  description:
    "Explore Civant market coverage for public procurement intelligence, tender forecasting, contract lifecycle signals, and European expansion planning.",
  path: "/markets",
});

const marketHubSchema = [
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "European Procurement Intelligence Markets",
    url: `${SITE_URL}/markets`,
    description:
      "Civant market coverage for public procurement intelligence and tender forecasting across European public-sector markets.",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: MARKETS.map((market, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: `${market.country} public procurement intelligence`,
        url: `${SITE_URL}/markets/${market.slug}`,
      })),
    },
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
    ],
  },
];

function MarketCard({ market }: { market: (typeof MARKETS)[number] }) {
  return (
    <Link
      href={`/markets/${market.slug}`}
      className="card card-link market-card interactive-surface"
    >
      <div className="market-card-meta">
        <span className={`market-status market-status-${market.status}`}>
          {market.statusLabel}
        </span>
        <span>{market.country}</span>
      </div>
      <h2 className="card-title">{market.headline}</h2>
      <p className="card-body">{market.summary}</p>
      <span className="card-link-cta">View Market</span>
    </Link>
  );
}

export default function MarketsPage() {
  return (
    <>
      <Section className="hero-block hero-section">
        <p className="eyebrow">Markets</p>
        <h1 className="headline-xl">European procurement intelligence by country</h1>
        <p className="text-lead">
          Civant gives teams a country-by-country view of procurement cycles,
          buyer behavior, contract lifecycles, competitor movement, and external
          public signals across Europe.
        </p>
      </Section>

      <Section muted>
        <div className="section-heading-wrap">
          <p className="eyebrow">Live Coverage</p>
          <h2 className="headline-lg">Markets available in Civant today</h2>
          <p className="text-lead section-intro">
            Current coverage helps teams move from reactive tender alerts to
            structured opportunity planning across active European markets.
          </p>
        </div>
        <div className="grid grid-3 market-grid">
          {LIVE_MARKETS.map((market) => (
            <MarketCard key={market.slug} market={market} />
          ))}
        </div>
      </Section>

      <Section>
        <div className="section-heading-wrap">
          <p className="eyebrow">Coming Next</p>
          <h2 className="headline-lg">Next markets in the rollout</h2>
          <p className="text-lead section-intro">
            Civant is expanding market coverage steadily so suppliers can plan
            European public-sector growth with a consistent intelligence layer.
          </p>
        </div>
        <div className="grid grid-4 market-grid">
          {COMING_MARKETS.map((market) => (
            <MarketCard key={market.slug} market={market} />
          ))}
        </div>
      </Section>

      <Section muted>
        <div className="section-heading-wrap">
          <p className="eyebrow">What Coverage Means</p>
          <h2 className="headline-lg">The same intelligence model across each market</h2>
        </div>
        <div className="flow-track">
          <article className="flow-card">
            <h3 className="card-title">Official procurement evidence</h3>
            <p className="card-body">
              National sources, TED records, notices, awards, and buyer-level
              procurement history form the evidence base.
            </p>
          </article>
          <article className="flow-card">
            <h3 className="card-title">Lifecycle and renewal signals</h3>
            <p className="card-body">
              Contract duration, recurrence, frameworks, and historical buying
              behavior help identify likely future timing.
            </p>
          </article>
          <article className="flow-card">
            <h3 className="card-title">External public signals</h3>
            <p className="card-body">
              PINs, grants, budgets, policy movement, and public hiring activity
              provide additional context for future demand.
            </p>
          </article>
          <article className="flow-card">
            <h3 className="card-title">AI-assisted interpretation</h3>
            <p className="card-body">
              AI helps interpret match, scope, buyer intent, and strategy. It
              does not replace the evidence-based prediction engine.
            </p>
          </article>
        </div>
      </Section>

      <Section>
        <div className="final-cta">
          <h2 className="headline-lg final-cta-title">
            Plan your next European market with better timing
          </h2>
          <CTAGroup
            primaryHref="/pricing"
            primaryLabel="View Pricing"
            secondaryHref="/contact"
            secondaryLabel="Book a Demo"
          />
        </div>
      </Section>

      <SchemaScript data={marketHubSchema} />
    </>
  );
}
