import Link from "next/link";
import { CTAGroup } from "../../components/site/CTAGroup";
import { MarketCoverageLinks } from "../../components/site/MarketCoverageLinks";
import { SchemaScript } from "../../components/site/SchemaScript";
import { Section } from "../../components/site/Section";
import { SOLUTIONS } from "../../lib/solutions";
import {
  buildPageMetadata,
  buildSoftwareApplicationSchema,
  SITE_URL,
} from "../../lib/seo";

export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  title: "Procurement Intelligence Solutions | Civant",
  description:
    "Explore Civant solutions for procurement intelligence software, tender forecasting, EU tender monitoring, and public procurement strategy.",
  path: "/solutions",
});

const solutionsSchema = [
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Civant Procurement Intelligence Solutions",
    url: `${SITE_URL}/solutions`,
    description:
      "Solution pages explaining Civant's procurement intelligence platform for European public-sector markets.",
    hasPart: SOLUTIONS.map((solution) => ({
      "@type": "WebPage",
      name: solution.title,
      url: `${SITE_URL}/solutions/${solution.slug}`,
      description: solution.description,
    })),
    publisher: {
      "@type": "Organization",
      name: "Civant Technologies Limited",
      url: SITE_URL,
    },
  },
  buildSoftwareApplicationSchema(),
];

export default function SolutionsPage() {
  return (
    <>
      <Section className="hero-block hero-section">
        <p className="eyebrow">Solutions</p>
        <h1 className="headline-xl">
          Forecasting intelligence for teams that need to act earlier
        </h1>
        <p className="text-lead">
          Civant helps suppliers move beyond tender alerts by connecting
          procurement history, award outcomes, contract lifecycles, competitor
          movement, and external public signals into one planning workflow.
        </p>
        <CTAGroup
          primaryHref="/pricing"
          primaryLabel="View Pricing"
          secondaryHref="/contact"
          secondaryLabel="Request Custom Plan"
        />
      </Section>

      <Section muted>
        <div className="section-heading-wrap">
          <p className="eyebrow">Solution Map</p>
          <h2 className="headline-lg">
            Four ways buyers search for what Civant does
          </h2>
          <p className="text-lead section-intro">
            Each page answers a high-intent search pattern with clear language,
            evidence-led positioning, and a path into pricing.
          </p>
        </div>
        <div className="grid grid-2 solution-card-grid">
          {SOLUTIONS.map((solution) => (
            <Link
              key={solution.slug}
              href={`/solutions/${solution.slug}`}
              className="card card-link interactive-surface solution-card"
            >
              <p className="module-label">{solution.title}</p>
              <h2 className="card-title">{solution.headline}</h2>
              <p className="card-body">{solution.description}</p>
              <span className="card-link-cta">Explore Solution</span>
            </Link>
          ))}
        </div>
      </Section>

      <Section>
        <div className="section-heading-wrap">
          <p className="eyebrow">Civant Positioning</p>
          <h2 className="headline-lg">
            Not a chatbot. Not another alert feed. A forecasting intelligence
            layer.
          </h2>
          <p className="text-lead section-intro">
            AI is useful when it interprets match, scope, documents, and buyer
            intent. Civant's forecasting advantage comes from hard public
            evidence: procurement records, TED context, awards, lifecycles, and
            external signals.
          </p>
        </div>
        <div className="solution-proof-strip">
          <article>
            <h3 className="card-title">Evidence first</h3>
            <p className="card-body">
              Forecasting starts from official records, awards, lifecycle
              timing, buyer recurrence, and public external signals.
            </p>
          </article>
          <article>
            <h3 className="card-title">AI where it helps</h3>
            <p className="card-body">
              AI supports interpretation, tender analysis, and strategic
              context on top of deterministic procurement intelligence.
            </p>
          </article>
          <article>
            <h3 className="card-title">Built for action</h3>
            <p className="card-body">
              Teams use Civant to prioritize buyers, prepare earlier, and make
              stronger bid/no-bid decisions.
            </p>
          </article>
        </div>
      </Section>

      <Section muted>
        <MarketCoverageLinks
          eyebrow="Coverage"
          title="One intelligence model across live and upcoming markets"
          body="Civant is live in Ireland, the United Kingdom, Spain, France, and Italy, with Finland, Belgium, Germany, and the Netherlands coming next."
          compact
        />
      </Section>

      <Section>
        <div className="final-cta">
          <h2 className="headline-lg final-cta-title">
            Turn search intent into a working procurement plan
          </h2>
          <p className="text-lead platform-cta-copy">
            Start with a self-serve plan, or request a custom plan if your team
            needs market, category, or workflow setup.
          </p>
          <CTAGroup
            primaryHref="/pricing"
            primaryLabel="View Pricing"
            secondaryHref="/contact"
            secondaryLabel="Request Custom Plan"
          />
        </div>
      </Section>

      <SchemaScript data={solutionsSchema} />
    </>
  );
}
