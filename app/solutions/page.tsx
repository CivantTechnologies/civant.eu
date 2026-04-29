import Link from "next/link";
import Image from "next/image";
import { CTAGroup } from "../../components/site/CTAGroup";
import { MarketCoverageLinks } from "../../components/site/MarketCoverageLinks";
import { SchemaScript } from "../../components/site/SchemaScript";
import { Section } from "../../components/site/Section";
import { SOLUTIONS } from "../../lib/solutions";
import {
  buildFaqSchema,
  buildPageMetadata,
  buildSoftwareApplicationSchema,
  SITE_URL,
} from "../../lib/seo";

export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  title: "Procurement Forecasting Intelligence Solutions | Civant",
  description:
    "Explore the Civant solution for procurement intelligence software, tender forecasting, EU tender monitoring, and public procurement strategy.",
  path: "/solutions",
});

const solutionFaqs = [
  {
    question: "What is Civant?",
    answer:
      "Civant is a public procurement forecasting intelligence platform that connects tender history, award outcomes, contract lifecycles, competitor movement, and external public signals into earlier market visibility.",
  },
  {
    question: "How is Civant different from tender alerts?",
    answer:
      "Tender alerts usually notify teams after a notice is published. Civant focuses on earlier visibility by analyzing procurement evidence, lifecycle timing, buyer recurrence, and market signals before tender windows open.",
  },
  {
    question: "How does Civant forecast tender opportunities?",
    answer:
      "Civant translates structured procurement evidence into signals for likely demand timing, opportunity fit, confidence, and competitive pressure, helping teams prioritize where to prepare.",
  },
  {
    question: "What evidence does Civant use?",
    answer:
      "Civant uses official procurement records, award history, contract lifecycle timing, buyer recurrence, competitor activity, and external public signals such as budgets, grants, policy movement, and hiring.",
  },
  {
    question: "Where does agentic analysis fit?",
    answer:
      "Agentic analysis helps interpret match, scope, buyer intent, and strategic context on top of structured procurement evidence. It supports interpretation without replacing the forecasting logic.",
  },
  {
    question: "Who is Civant built for?",
    answer:
      "Civant is built for bid, B2G sales, partnerships, and market intelligence teams that need earlier visibility and stronger bid/no-bid discipline in public-sector markets.",
  },
];

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
  buildFaqSchema(solutionFaqs),
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
              src="/images/solutions/civant-evidence-engine.webp"
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

      <Section className="solution-positioning-section">
        <div className="section-heading-wrap solution-positioning-heading">
          <p className="eyebrow">Civant Positioning</p>
          <h2 className="headline-lg">
            Forecasting intelligence built on public procurement evidence
          </h2>
          <p className="text-lead section-intro">
            Civant connects tender history, award outcomes, contract lifecycles,
            competitor movement, and external public signals into forecasting
            visibility your team can act on before tender windows open.
          </p>
        </div>
        <div className="solution-positioning-panel">
          <article className="solution-positioning-card">
            <span className="solution-positioning-index">01</span>
            <h3 className="card-title">Evidence base</h3>
            <p className="card-body">
              Official procurement records, award history, lifecycle timing,
              buyer recurrence, competitor movement, and external public
              signals.
            </p>
          </article>
          <article className="solution-positioning-card solution-positioning-card-featured">
            <span className="solution-positioning-index">02</span>
            <h3 className="card-title">Forecasting logic</h3>
            <p className="card-body">
              Signals are translated into likely demand timing, opportunity
              fit, confidence, and competitive pressure.
            </p>
          </article>
          <article className="solution-positioning-card">
            <span className="solution-positioning-index">03</span>
            <h3 className="card-title">Commercial discipline</h3>
            <p className="card-body">
              Teams prepare earlier, prioritize better, and make stronger
              bid/no-bid decisions before the market becomes reactive.
            </p>
          </article>
        </div>
        <div className="solution-compact-faq">
          <h3 className="card-title">Solution FAQ</h3>
          <div className="solution-compact-faq-list">
            {solutionFaqs.map((faq) => (
              <details key={faq.question} className="solution-compact-faq-item">
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </Section>

      <Section muted className="solution-coverage-section">
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
            Build your public-sector pipeline before tender windows open
          </h2>
          <p className="text-lead platform-cta-copy">
            Start with a self-serve plan, or talk to us about market, category,
            and workflow setup for your team.
          </p>
          <CTAGroup
            primaryHref="/pricing"
            primaryLabel="Get Started"
            secondaryHref="/contact"
            secondaryLabel="Talk to Us"
          />
        </div>
      </Section>

      <SchemaScript data={solutionsSchema} />
    </>
  );
}
