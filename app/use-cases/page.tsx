import Image from "next/image";
import Link from "next/link";
import { CTAGroup } from "../../components/site/CTAGroup";
import { Section } from "../../components/site/Section";
import { MarketCoverageLinks } from "../../components/site/MarketCoverageLinks";
import { SchemaScript } from "../../components/site/SchemaScript";
import { buildFaqSchema, buildPageMetadata } from "../../lib/seo";

export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  title: "Use Cases for Bid and B2G Teams",
  description:
    "See how bid, B2G sales, partnerships, and intelligence teams use Civant to plan earlier, prioritize buyers, and improve bid decisions.",
  path: "/use-cases",
});

const audiences = [
  {
    title: "Bid Management Teams",
    need: "Know which opportunities deserve bid effort before deadlines compress.",
    signal: "Lifecycle timing, buyer recurrence, fit signals, and confidence context.",
    decision: "Prioritize bid/no-bid, resource planning, and early qualification.",
  },
  {
    title: "Sales & Partnerships",
    need: "Time account and partner engagement while buying windows are still forming.",
    signal: "Award outcomes, buyer cycles, incumbent movement, and external public signals.",
    decision: "Focus outreach, partner alignment, and account strategy before tenders open.",
  },
  {
    title: "Market Intelligence Teams",
    need: "Explain where demand, competition, and procurement activity are moving.",
    signal: "Participation shifts, category patterns, public budgets, grants, and policy signals.",
    decision: "Brief leadership on market movement, growth focus, and category timing.",
  },
];

const useCaseFaqs = [
  {
    question: "What are Civant use cases?",
    answer:
      "Civant use cases show how bid, B2G sales, partnerships, and market intelligence teams apply procurement forecasting intelligence to plan earlier, prioritize accounts, and improve public-sector growth decisions.",
  },
  {
    question: "How do bid teams use Civant?",
    answer:
      "Bid teams use Civant to identify likely opportunities earlier, assess buyer recurrence and contract lifecycle timing, and make stronger bid/no-bid decisions before tender deadlines compress.",
  },
  {
    question: "How do B2G sales teams use Civant?",
    answer:
      "B2G sales teams use Civant to time account outreach, partner engagement, and pipeline planning around buyer activity, award outcomes, incumbent movement, and external public signals.",
  },
  {
    question: "How do market intelligence teams use Civant?",
    answer:
      "Market intelligence teams use Civant to explain where public-sector demand, competition, budgets, policy movement, and category activity are changing across European procurement markets.",
  },
  {
    question: "Why does earlier tender visibility matter?",
    answer:
      "Earlier tender visibility matters because once a tender is published, requirements may already be shaped and response windows are narrow. Civant helps teams prepare while buying windows are still forming.",
  },
  {
    question: "How does Civant support bid/no-bid decisions?",
    answer:
      "Civant supports bid/no-bid decisions by combining tender history, award outcomes, lifecycle timing, competitor activity, and external public signals into evidence-led forecasting visibility.",
  },
];

const useCasesSchema = buildFaqSchema(useCaseFaqs);

export default function UseCasesPage() {
  return (
    <>
      <Section className="hero-block hero-section">
        <p className="eyebrow">Use Cases</p>
        <h1 className="headline-xl">How bid, B2G sales, and intelligence teams apply Civant</h1>
        <p className="text-lead">
          Use procurement evidence to plan earlier, time accounts better, and
          make stronger bid decisions before tender windows open.
        </p>
        <CTAGroup
          primaryHref="/pricing"
          primaryLabel="Get Started"
          secondaryHref="/contact"
          secondaryLabel="Talk to Us"
        />
      </Section>

      <Section muted>
        <div className="section-heading-wrap">
          <p className="eyebrow">Operating Workflows</p>
          <h2 className="headline-lg">
            One intelligence layer for the teams that shape public-sector growth
          </h2>
          <p className="text-lead section-intro">
            Civant helps bid, commercial, and market intelligence teams use
            procurement evidence before tender windows open, so each function
            can act earlier with the same signal base.
          </p>
        </div>
        <div className="audience-workflow-shell">
          <div className="audience-workflow-matrix" aria-label="Civant use cases by team">
            <div className="audience-workflow-head" aria-hidden="true">
              <span>Team</span>
              <span>Need earlier</span>
              <span>Civant signal</span>
              <span>Decision improved</span>
            </div>
            {audiences.map((audience) => (
              <article key={audience.title} className="audience-workflow-row">
                <h3>{audience.title}</h3>
                <p>
                  <span>Need earlier</span>
                  {audience.need}
                </p>
                <p>
                  <span>Civant signal</span>
                  {audience.signal}
                </p>
                <p>
                  <span>Decision improved</span>
                  {audience.decision}
                </p>
              </article>
            ))}
          </div>

          <aside className="audience-signal-graphic" aria-label="Explore Civant workflow evidence">
            <div className="audience-signal-source">
              <span>Shared evidence layer</span>
              <p>
                Tender history, award outcomes, lifecycle timing, competitor
                movement, and external public signals.
              </p>
            </div>
            <nav className="audience-signal-links" aria-label="Related procurement intelligence reading">
              <Link href="/resources/the-economics-of-bid-no-bid-decisions">
                <span>Bid priority</span>
                <small>Improve bid/no-bid discipline</small>
              </Link>
              <Link href="/resources/timetoopportunity-why-speed-of-tender-discovery-matters">
                <span>Account timing</span>
                <small>Prepare before tender windows open</small>
              </Link>
              <Link href="/resources/the-role-of-procurement-data-in-strategic-market-intelligence">
                <span>Market movement</span>
                <small>Explain demand and competition shifts</small>
              </Link>
            </nav>
          </aside>
        </div>
        <div className="audience-planning-band">
          <div className="audience-planning-copy">
            <p className="module-label">From signal to team planning</p>
            <h3 className="card-title">
              Bring bid, commercial, and intelligence teams into the same room.
            </h3>
            <p className="card-body">
              Once a tender is published, the room for influence narrows.
              Requirements may already reflect incumbent knowledge, buyer
              history, and months of internal planning. Civant helps bid,
              commercial, and marketing teams use public procurement evidence
              earlier, so they can prioritize the right accounts, align effort,
              and estimate acquisition cost before the market becomes reactive.
            </p>
          </div>
          <div className="audience-planning-image">
            <Image
              src="/images/use-cases/civant-bid-planning-room-day-v2.webp"
              alt="Public-sector growth team reviewing Civant competitor and tender dashboards in a daytime meeting room"
              width={1663}
              height={945}
              sizes="(max-width: 900px) 100vw, 58vw"
            />
          </div>
        </div>
        <div className="solution-compact-faq">
          <h3 className="card-title">Use Cases FAQ</h3>
          <div className="solution-compact-faq-list">
            {useCaseFaqs.map((faq) => (
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
        <div className="final-cta use-cases-final-cta">
          <div className="use-cases-final-cta-copy">
            <p className="eyebrow">Next Step</p>
            <h2 className="headline-lg final-cta-title">
              Align your team before the next tender
            </h2>
            <p className="text-lead platform-cta-copy">
              See how Civant turns tender history, award outcomes, lifecycle
              timing, and external public signals into earlier planning for
              bid, sales, and market intelligence teams.
            </p>
            <CTAGroup
              primaryHref="/pricing"
              primaryLabel="Get Started"
              secondaryHref="/contact"
              secondaryLabel="Talk to Us"
            />
          </div>
          <div className="use-cases-final-cta-panel" aria-label="Civant workflow outcomes">
            <span>Bid priority</span>
            <span>Account timing</span>
            <span>Market movement</span>
          </div>
        </div>
      </Section>
      <SchemaScript data={useCasesSchema} />
    </>
  );
}
