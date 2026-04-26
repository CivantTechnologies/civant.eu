import Link from "next/link";
import { CTAGroup } from "../../components/site/CTAGroup";
import { SchemaScript } from "../../components/site/SchemaScript";
import { Section } from "../../components/site/Section";
import { COMING_MARKETS, LIVE_MARKETS, MARKETS } from "../../lib/markets";
import { buildFaqSchema, buildPageMetadata, SITE_URL } from "../../lib/seo";

export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  title: "European Procurement Intelligence Coverage | Civant",
  description:
    "See where Civant is live now and which markets are coming next for procurement intelligence, tender monitoring, and expansion planning.",
  path: "/markets",
});

const marketCoverageFaqs = [
  {
    question: "Which European public procurement markets does Civant cover?",
    answer:
      "Civant is live for Ireland, the United Kingdom, Spain, France, and Italy. Finland, Belgium, Germany, and the Netherlands are listed as coming next in the rollout.",
  },
  {
    question: "What does market coverage mean in Civant?",
    answer:
      "Market coverage means Civant can connect official procurement sources, TED records, notices, award history, buyer behavior, renewal cycles, competitor context, and public external signals into one country-level intelligence workflow.",
  },
  {
    question: "How is Civant different from tender alerts?",
    answer:
      "Tender alerts usually notify teams after a formal notice is published. Civant is designed for earlier planning by using procurement history, lifecycle patterns, buyer recurrence, and public signals to help teams prepare before tender windows become compressed.",
  },
  {
    question: "Can I request a country that is not listed?",
    answer:
      "Yes. Teams can request a new market from this page. Civant uses market requests to understand demand and prioritize future European coverage where suppliers need earlier visibility.",
  },
  {
    question: "Do I have to pay per market?",
    answer:
      "No. Civant plans include all available countries so teams get better value from the start and can compare European public-sector markets without buying access country by country.",
  },
  {
    question: "Where do the market-size figures come from?",
    answer:
      "Market-size figures are based on the latest available public sources for each country and are shown as scale indicators. The detailed country pages include source links for the spend figures used on the market cards.",
  },
];

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
  buildFaqSchema(marketCoverageFaqs),
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

const marketEvidencePreview: Partial<
  Record<
    (typeof MARKETS)[number]["slug"],
    {
      title: string;
      sources: string[];
      signals: string[];
    }
  >
> = {
  ireland: {
    title: "Ireland coverage passport",
    sources: ["eTenders", "TED", "OGP", "Buyer history"],
    signals: ["Sources", "Awards", "Renewals", "Signals"],
  },
  "united-kingdom": {
    title: "UK coverage passport",
    sources: ["Find a Tender", "Contracts Finder", "TED", "Buyer history"],
    signals: ["Sources", "Awards", "Renewals", "Signals"],
  },
  spain: {
    title: "Spain coverage passport",
    sources: ["PLACSP", "TED", "OIReScon", "Awards"],
    signals: ["Sources", "Awards", "Renewals", "Signals"],
  },
  france: {
    title: "France coverage passport",
    sources: ["BOAMP", "TED", "OECP", "Awards"],
    signals: ["Sources", "Awards", "Renewals", "Signals"],
  },
  italy: {
    title: "Italy coverage passport",
    sources: ["ANAC", "TED", "BDNCP", "MEPA"],
    signals: ["Sources", "Awards", "Renewals", "Signals"],
  },
  finland: {
    title: "Finland rollout passport",
    sources: ["Hilma", "TED", "Buyer history", "Policy signals"],
    signals: ["Sources", "Buyers", "Cycles", "Signals"],
  },
  belgium: {
    title: "Belgium rollout passport",
    sources: ["eProc", "TED", "BOSA", "Regions"],
    signals: ["Sources", "Buyers", "Cycles", "Signals"],
  },
  germany: {
    title: "Germany rollout passport",
    sources: ["Bund.de", "TED", "Destatis", "Buyer history"],
    signals: ["Sources", "Buyers", "Cycles", "Signals"],
  },
  netherlands: {
    title: "Netherlands rollout passport",
    sources: ["TenderNed", "TED", "PIANOo", "Buyer history"],
    signals: ["Sources", "Buyers", "Cycles", "Signals"],
  },
};

function MarketEvidencePassport({ market }: { market: (typeof MARKETS)[number] }) {
  const evidence = marketEvidencePreview[market.slug];

  if (!evidence || !market.procurementSpend) {
    return <p className="card-body">{market.summary}</p>;
  }

  return (
    <div className="market-evidence-passport" aria-label={`${market.country} evidence coverage`}>
      <div className="market-spend-figure">
        <strong>{market.procurementSpend.value}</strong>
        <span>Estimated public procurement spend</span>
      </div>
      <div className="market-passport-sources" aria-label={`${market.country} data sources`}>
        {evidence.sources.map((source) => (
          <span key={source}>{source}</span>
        ))}
      </div>
      <div className="market-passport-layers" aria-label={`${market.country} signal layers`}>
        {evidence.signals.map((signal) => (
          <span key={signal}>
            <i aria-hidden="true" />
            {signal}
          </span>
        ))}
      </div>
    </div>
  );
}

function MarketCard({ market }: { market: (typeof MARKETS)[number] }) {
  const hasEvidencePreview = Boolean(marketEvidencePreview[market.slug]);

  return (
    <Link
      href={`/markets/${market.slug}`}
      className={`card card-link market-card liquid-card interactive-surface${
        hasEvidencePreview ? " market-card-passport" : ""
      }`}
    >
      <div className="market-card-meta">
        <span className={`market-status market-status-${market.status}`}>
          {market.statusLabel}
        </span>
        <span>{market.country}</span>
      </div>
      <h2 className="card-title">
        {marketEvidencePreview[market.slug]?.title ?? market.headline}
      </h2>
      <MarketEvidencePassport market={market} />
      <span className="card-link-cta">View Market</span>
    </Link>
  );
}

const coverageMetrics = [
  {
    label: "Live markets",
    value: LIVE_MARKETS.length.toString(),
    href: "#live-coverage",
  },
  {
    label: "Next rollout",
    value: COMING_MARKETS.length.toString(),
    href: "#coming-next",
  },
  {
    label: "Market size",
    value: "€1.1tn+",
    href: "#live-coverage",
    tone: "market-size",
  },
];

const coverageSignals = [
  {
    label: "Official notices",
    href: "/solutions/eu-tender-monitoring",
  },
  {
    label: "Award history",
    href: "/resources/detecting-procurement-patterns-what-past-awards-reveal-about-future-tenders",
  },
  {
    label: "Renewal cycles",
    href: "/resources/renewal-cycles-how-contract-expiry-drives-tender-pipelines",
  },
  {
    label: "Competitor movement",
    href: "/resources/competitor-intelligence-in-public-procurement",
  },
  {
    label: "External public signals",
    href: "/resources/external-signals-in-public-procurement",
  },
];

const methodologyLinks = [
  {
    label: "Live now",
    href: "/methodology#country-rollout",
  },
  {
    label: "Renewal signals",
    href: "/methodology#core-signals",
  },
  {
    label: "Buyer cycles",
    href: "/methodology#analysis-flow",
  },
  {
    label: "External evidence",
    href: "/methodology#data-sources",
  },
];

export default function MarketsPage() {
  return (
    <>
      <Section className="hero-block hero-section markets-hero">
        <div className="markets-hero-grid">
          <div className="markets-hero-copy">
            <p className="eyebrow">Markets</p>
            <h1 className="headline-xl">
              European procurement intelligence coverage by country
            </h1>
            <p className="text-lead">
              Civant gives teams a Europe-wide, country-by-country view of
              procurement cycles, buyer behavior, contract lifecycles,
              competitor movement, and external public signals across live and
              upcoming markets.
            </p>
          </div>

          <aside className="markets-glass-console liquid-panel" aria-label="Civant market coverage summary">
            <div className="liquid-panel-head">
              <span>Coverage Lens</span>
              <strong>EU signal map</strong>
            </div>
            <div className="markets-console-metrics">
              {coverageMetrics.map((metric) => (
                <Link
                  className="markets-console-metric markets-console-link"
                  href={metric.href}
                  key={metric.label}
                >
                  <span>{metric.label}</span>
                  <strong className={metric.tone ? `metric-value-${metric.tone}` : undefined}>
                    {metric.value}
                  </strong>
                </Link>
              ))}
            </div>
            <div className="markets-signal-stack" aria-label="Coverage signal layers">
              {coverageSignals.map((signal) => (
                <Link
                  className="markets-signal-link"
                  href={signal.href}
                  key={signal.label}
                >
                  <span>{signal.label}</span>
                  <span aria-hidden="true">→</span>
                </Link>
              ))}
            </div>
          </aside>
        </div>
      </Section>

      <Section id="live-coverage" muted className="market-anchor-section">
        <div className="market-glass-stage">
          <div className="section-heading-wrap market-stage-heading">
            <p className="eyebrow">Live Coverage</p>
            <h2 className="headline-lg">Markets available in Civant today</h2>
            <p className="text-lead section-intro">
              Current coverage helps teams move from reactive tender alerts to
              structured opportunity planning across active European
              public-sector markets.
            </p>
          </div>
          <nav className="market-glass-toolbar liquid-panel" aria-label="Market methodology shortcuts">
            {methodologyLinks.map((item) => (
              <Link className="market-toolbar-pill" href={item.href} key={item.label}>
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="grid grid-3 market-grid">
            {LIVE_MARKETS.map((market) => (
              <MarketCard key={market.slug} market={market} />
            ))}
          </div>
          <p className="market-stage-note">
            Each live market uses the same evidence model so teams can compare
            country coverage without changing their operating rhythm.
          </p>
        </div>
      </Section>

      <Section id="coming-next" className="market-anchor-section">
        <div className="section-heading-wrap">
          <p className="eyebrow">Coming Next</p>
          <h2 className="headline-lg">Next markets in the rollout</h2>
          <p className="text-lead section-intro">
            Civant is expanding European market coverage steadily so suppliers
            can plan public-sector growth with a consistent intelligence layer.
          </p>
        </div>
        <div className="grid grid-4 market-grid">
          {COMING_MARKETS.map((market) => (
            <MarketCard key={market.slug} market={market} />
          ))}
        </div>
        <div className="market-request-cta liquid-card">
          <div>
            <h3 className="card-title">Don't see the market you need?</h3>
            <p className="card-body">
              Tell us which country matters to your team and we'll use it to
              prioritize future coverage.
            </p>
          </div>
          <Link href="/contact?request=new-market" className="btn btn-primary">
            Request New Market
          </Link>
        </div>
      </Section>

      <Section muted>
        <div className="section-heading-wrap">
          <p className="eyebrow">What Coverage Means</p>
          <h2 className="headline-lg">The same European intelligence model across each market</h2>
          <p className="text-lead section-intro">
            For a closer explanation of what coverage really means beyond a
            country list, read{" "}
            <Link
              href="/resources/european-procurement-coverage-what-market-coverage-really-means"
              className="text-link"
            >
              European Procurement Coverage: What Market Coverage Really Means
            </Link>
            .
          </p>
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
              does not replace the evidence-based forecasting engine.
            </p>
          </article>
        </div>
        <div className="market-coverage-faq">
          <h3 className="card-title">Coverage FAQ</h3>
          <div className="market-coverage-faq-list">
            {marketCoverageFaqs.map((faq) => (
              <details key={faq.question} className="market-coverage-faq-item">
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
            Plan your next European market with better timing
          </h2>
          <CTAGroup
            primaryHref="/pricing"
            primaryLabel="Get Started"
            secondaryHref="/contact?request=new-market"
            secondaryLabel="Request New Market"
          />
        </div>
      </Section>

      <SchemaScript data={marketHubSchema} />
    </>
  );
}
