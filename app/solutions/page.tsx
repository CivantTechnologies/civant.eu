import Link from "next/link";
import Image from "next/image";
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
  title: "Procurement Intelligence Solution | Civant",
  description:
    "Explore the Civant solution for procurement intelligence software, tender forecasting, EU tender monitoring, and public procurement strategy.",
  path: "/solutions",
});

const solutionsSchema = [
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Civant Procurement Intelligence Solution",
    url: `${SITE_URL}/solutions`,
    description:
      "Search paths explaining Civant's procurement intelligence platform for European public-sector markets.",
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

const solutionEvidenceChips = [
  "Official notices",
  "Award outcomes",
  "Lifecycle signals",
  "Buyer recurrence",
  "Competitor movement",
  "External public signals",
  "Agentic analysis",
];

export default function SolutionsPage() {
  return (
    <>
      <Section
        className="hero-block hero-section solution-hero"
        containerClassName="solution-hero-container"
      >
        <div className="solution-hero-editorial">
          <p className="eyebrow">Solution</p>
          <h1 className="headline-xl">
            One procurement intelligence platform for public-sector growth
          </h1>
          <p className="text-lead">
            Civant connects tender history, award outcomes, contract lifecycles,
            competitor movement, and external public signals so teams can focus
            on the right opportunities before the market gets crowded.
          </p>
          <CTAGroup
            primaryHref="/pricing"
            primaryLabel="Get Started"
            secondaryHref="/contact"
            secondaryLabel="Talk to Us"
          />
        </div>

        <nav className="solution-hero-rail" aria-label="Explore Civant search paths">
          <span>Explore by intent</span>
          <div>
            {SOLUTIONS.map((solution) => (
              <Link key={solution.slug} href={`/solutions/${solution.slug}`}>
                {solution.title}
              </Link>
            ))}
          </div>
        </nav>
      </Section>

      <Section muted>
        <div className="section-heading-wrap">
          <p className="eyebrow">Intent Map</p>
          <h2 className="headline-lg">
            Different search intents. One Civant solution.
          </h2>
          <p className="text-lead section-intro">
            Teams arrive through different language, but each path leads back
            to the same evidence engine: procurement records, award outcomes,
            lifecycle signals, competitor movement, external public signals,
            and agentic analysis.
          </p>
        </div>
        <div className="solution-engine-panel">
          <div className="solution-engine-visual">
            <Image
              src="/images/solutions/civant-evidence-engine.png"
              alt="Abstract Civant evidence engine showing public-sector signals flowing into a European procurement forecast"
              width={1586}
              height={992}
              sizes="(max-width: 900px) 100vw, 58vw"
            />
          </div>
          <div className="solution-engine-copy">
            <p className="module-label">Evidence engine</p>
            <h3 className="card-title">
              Public signals converge before the market moves.
            </h3>
            <p className="card-body">
              Civant connects fragmented procurement evidence into one planning
              layer, so each search path starts with the same structured signal
              base.
            </p>
            <div className="solution-engine-chips" aria-label="Civant evidence signals">
              {solutionEvidenceChips.map((chip) => (
                <span key={chip}>{chip}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="solution-intent-grid">
          {SOLUTIONS.map((solution) => (
            <Link
              key={solution.slug}
              href={`/solutions/${solution.slug}`}
              className="solution-intent-card"
            >
              <div className="solution-intent-copy">
                <p className="module-label">{solution.title}</p>
                <h3 className="card-title">{solution.headline}</h3>
                <p className="card-body">{solution.description}</p>
                <span className="card-link-cta">Explore Path</span>
              </div>
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
