import Image from "next/image";
import {
  Activity,
  Building2,
  CalendarClock,
  ClipboardCheck,
  FileText,
  Target,
  Trophy,
} from "lucide-react";
import { CTAGroup } from "../../components/site/CTAGroup";
import { Section } from "../../components/site/Section";
import { MarketCoverageLinks } from "../../components/site/MarketCoverageLinks";
import { SchemaScript } from "../../components/site/SchemaScript";
import { buildFaqSchema, buildPageMetadata } from "../../lib/seo";

export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  title: "Procurement Forecasting Intelligence Use Cases | Civant",
  description:
    "See how sales, marketing, account, bid, technical, partnership, and leadership teams use Civant to turn procurement timing into practical operating decisions.",
  path: "/use-cases",
});

const decisionGrid = [
  {
    title: "Prioritise accounts",
    body: "Focus commercial effort on buyers and markets with stronger timing evidence.",
  },
  {
    title: "Set realistic targets",
    body: "Shape pipeline goals around buyer cycles, renewal windows, and category movement.",
  },
  {
    title: "Plan campaigns",
    body: "Align events, ABM, content, and PPC with markets showing stronger signals.",
  },
  {
    title: "Prepare bids earlier",
    body: "Start qualification, evidence gathering, and bid planning before deadlines compress.",
  },
  {
    title: "Coordinate presales support",
    body: "Protect technical capacity around opportunities likely to need deeper validation.",
  },
  {
    title: "Align leadership decisions",
    body: "Give sales, marketing, partnerships, and delivery teams the same market reality.",
  },
];

const lifecycleStages = [
  {
    stage: "Early signals",
    body: "Budget activity, policy movement, market notices, and public context begin to show direction.",
    mode: "civant",
    icon: Activity,
  },
  {
    stage: "Buyer cycle",
    body: "Recurring buyers, category cadence, and contract history reveal likely timing patterns.",
    mode: "civant",
    icon: Building2,
  },
  {
    stage: "Renewal window",
    body: "Contract lifecycles and incumbent movement help teams prepare before demand is formalised.",
    mode: "civant",
    icon: CalendarClock,
  },
  {
    stage: "Commercial preparation",
    body: "Teams align sales, campaigns, partners, technical input, and bid readiness around evidence.",
    mode: "civant",
    icon: Target,
  },
  {
    stage: "Tender published",
    body: "The wider market reacts, timelines compress, and late discovery becomes expensive.",
    mode: "market",
    icon: FileText,
  },
  {
    stage: "Evaluation",
    body: "Prepared teams can respond with stronger context, better qualification, and clearer value.",
    mode: "market",
    icon: ClipboardCheck,
  },
  {
    stage: "Award",
    body: "Outcomes become new evidence for the next procurement cycle and renewal window.",
    mode: "value",
    icon: Trophy,
  },
];

const operatingUseCases = [
  {
    team: "Sales Directors",
    title: "Set realistic targets around real procurement cycles",
    timing: "Best used during buyer cycles and renewal windows",
    body:
      "Civant helps sales leaders move from broad territory ambition to clearer, evidence-led goals. By identifying buyer cycles, renewal windows, and high-confidence opportunities, sales directors can prioritise accounts, assign effort, and set attainable pipeline targets based on where demand is likely to move next.",
    decisions: [
      "Which accounts deserve attention this quarter?",
      "Where is demand likely to move?",
      "Which opportunities justify pipeline focus?",
      "How should targets reflect real procurement timing?",
    ],
  },
  {
    team: "Marketing Teams",
    title: "Spend budget where timing and buyer intent are stronger",
    timing: "Best used during early signals and commercial preparation",
    body:
      "Marketing teams can use Civant to align campaigns with sales priorities and upcoming procurement windows. Instead of spreading budget evenly across trade shows, PPC, content, and ABM, teams can focus spend around sectors, regions, and buyer groups showing stronger signals of movement.",
    decisions: [
      "Which events deserve budget?",
      "Which regions or sectors need ABM now?",
      "Where should PPC and content support sales?",
      "Which campaigns are too early, too late, or well timed?",
    ],
  },
  {
    team: "Account Managers",
    title: "Build more intentional relationships before the tender appears",
    timing: "Best used during buyer cycles and engagement windows",
    body:
      "Account managers can use Civant as a commercial compass, especially when entering new markets or managing large territories. The platform helps them understand which buyers may need attention, where renewal windows are approaching, and where relationship-building, travel, and meetings are most likely to matter.",
    decisions: [
      "Which buyers should I visit?",
      "Where should I build relationships now?",
      "Which accounts are entering a relevant renewal window?",
      "How do I enter a new market with clearer direction?",
    ],
  },
  {
    team: "Technical and Presales Teams",
    title: "Plan expertise around what is likely to enter the pipeline",
    timing: "Best used during commercial preparation",
    body:
      "Technical and presales teams are often pulled in too late, once deadlines are already tight. Civant helps them see what may be coming, prepare reusable material, anticipate likely requirements, and allocate expertise around the opportunities most likely to need deeper support.",
    decisions: [
      "Which opportunities may need technical preparation?",
      "What reusable material should be prepared now?",
      "Where should presales time be protected?",
      "Which upcoming opportunities may require partner or technical validation?",
    ],
  },
  {
    team: "Partnership and Regional Teams",
    title: "Coordinate regional routes to market before opportunities become crowded",
    timing: "Best used during regional preparation and renewal windows",
    body:
      "Partnership and regional teams can use Civant to understand where local presence, reseller support, implementation capacity, or technical alliances may matter. Instead of activating partners after publication, teams can prepare routes to market around emerging buyer cycles and regional demand signals.",
    decisions: [
      "Which markets need partner support?",
      "Where does local presence matter?",
      "Which partners should be activated before publication?",
      "Which regions justify deeper commercial preparation?",
    ],
  },
  {
    team: "Leadership",
    title: "Align teams around the same market reality",
    timing: "Best used across the full procurement cycle",
    body:
      "Civant gives leadership a shared evidence base for commercial planning. Sales, marketing, partnerships, account management, bid teams, and presales can work from the same view of buyer cycles, competitor movement, renewal windows, and confidence-scored opportunities.",
    decisions: [
      "Where should we invest attention?",
      "Which markets justify budget?",
      "Which targets are realistic?",
      "Which teams need to align before opportunities become visible to everyone?",
    ],
  },
];

const alignmentFlow = [
  "Signals",
  "Forecast windows",
  "Team decisions",
  "Prepared action",
];

const useCaseFaqs = [
  {
    question: "What are Civant use cases?",
    answer:
      "Civant use cases show how commercial, bid, marketing, account, technical, partnership, and leadership teams use procurement forecasting intelligence to make earlier operating decisions.",
  },
  {
    question: "How do commercial teams use Civant?",
    answer:
      "Commercial teams use Civant to prioritise accounts, set realistic targets, time outreach, and focus effort around buyer cycles, renewal windows, competitor movement, and confidence-scored opportunities.",
  },
  {
    question: "How do marketing teams use Civant?",
    answer:
      "Marketing teams use Civant to align events, PPC, content, and ABM with sectors, regions, and buyer groups showing stronger evidence of upcoming public-sector demand.",
  },
  {
    question: "How do technical and presales teams use Civant?",
    answer:
      "Technical and presales teams use Civant to anticipate likely pipeline needs, prepare reusable material, protect specialist capacity, and support opportunities before response windows become compressed.",
  },
  {
    question: "Why does earlier market timing matter?",
    answer:
      "Earlier market timing matters because once a tender is published, response windows are narrow and requirements may already be shaped. Civant helps teams prepare while buying windows are still forming.",
  },
  {
    question: "How does Civant support leadership planning?",
    answer:
      "Civant gives leadership a shared evidence base for sales targets, campaign timing, partner activation, account travel, technical readiness, and investment decisions across public-sector markets.",
  },
];

const useCasesSchema = buildFaqSchema(useCaseFaqs);

export default function UseCasesPage() {
  return (
    <>
      <Section
        className="hero-block hero-section use-cases-hero"
        containerClassName="use-cases-hero-container"
      >
        <div className="use-cases-hero-copy">
          <p className="eyebrow">Use Cases</p>
          <h1 className="headline-xl">Use cases for earlier public-sector market decisions</h1>
          <p className="text-lead">
            Civant turns procurement timing into practical operating decisions.
            Sales, marketing, account, bid, technical, and leadership teams can
            work from the same evidence base, using buyer cycles, renewal
            windows, competitor movement, and confidence-scored opportunities
            to decide where to focus next.
          </p>
          <CTAGroup
            primaryHref="/contact"
            primaryLabel="Book a 20-minute walkthrough"
            secondaryHref="/pricing"
            secondaryLabel="View Pricing"
          />
        </div>
        <div className="use-cases-hero-visual use-cases-hero-panel" aria-label="Civant operating layer">
          <span className="use-cases-hero-panel-kicker">Evidence-led operating layer</span>
          <div className="use-cases-hero-panel-flow">
            <span>Signals</span>
            <span>Forecast windows</span>
            <span>Team decisions</span>
            <span>Prepared action</span>
          </div>
          <p>
            One shared view of buyer cycles, renewal windows, competitor movement,
            and confidence-scored opportunities.
          </p>
        </div>
      </Section>

      <Section muted>
        <div className="use-cases-lifecycle-section">
          <div className="section-heading-wrap use-cases-section-heading">
            <p className="eyebrow">Tender lifecycle</p>
            <h2 className="headline-lg">The tender lifecycle starts before the market reacts</h2>
            <p className="text-lead section-intro">
              Civant helps teams act during the early signal, buyer cycle,
              renewal, and commercial preparation stages, before a tender is
              visible to everyone else.
            </p>
          </div>

          <div className="use-cases-lifecycle-panel" aria-label="Public tender lifecycle">
            <div className="use-cases-lifecycle-rail">
              {lifecycleStages.map((item) => {
                const Icon = item.icon;

                return (
                <article
                  key={item.stage}
                  className={`use-cases-lifecycle-stage use-cases-lifecycle-stage-${item.mode}`}
                >
                  <span className="use-cases-lifecycle-icon">
                    <Icon aria-hidden="true" />
                  </span>
                  <span className="use-cases-lifecycle-title">{item.stage}</span>
                  <p>{item.body}</p>
                </article>
                );
              })}
            </div>

            <div className="use-cases-lifecycle-contrast" aria-label="Operating contrast">
              <div>
                <span>With Civant</span>
                <p>Earlier focus, better timing, prepared teams.</p>
              </div>
              <div>
                <span>Without early intelligence</span>
                <p>Late discovery, rushed response, weaker qualification.</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="section-heading-wrap use-cases-section-heading">
          <p className="eyebrow">Operating decisions</p>
          <h2 className="headline-lg">From market signals to operating decisions</h2>
          <p className="text-lead section-intro">
            Civant helps teams move from fragmented public procurement data to
            practical decisions: which accounts to prioritise, which campaigns
            to fund, which meetings to plan, which bids deserve preparation,
            and which technical resources should be ready before the deadline
            clock starts.
          </p>
        </div>
        <figure className="use-cases-operating-image-band">
          <Image
            src="/images/use-cases/civant-use-cases-boardroom.webp"
            alt="Civant boardroom presentation for public-sector market planning"
            width={1661}
            height={947}
            sizes="(max-width: 980px) 100vw, 92vw"
            priority
          />
          <figcaption>
            Commercial teams need one shared view before the tender window opens.
          </figcaption>
        </figure>
        <div className="use-cases-decision-grid">
          {decisionGrid.map((item) => (
            <article key={item.title} className="use-cases-decision-card">
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <div className="section-heading-wrap use-cases-section-heading">
          <p className="eyebrow">Team use cases</p>
          <h2 className="headline-lg">Where Civant changes the next decision</h2>
          <p className="text-lead section-intro">
            Each team uses the same procurement-cycle intelligence differently.
            The value is not another dashboard. It is clearer commercial focus
            before the market becomes reactive.
          </p>
        </div>
        <div className="use-cases-operating-grid">
          {operatingUseCases.map((item) => (
            <article key={item.team} className="use-cases-operating-card">
              <p className="module-label">{item.team}</p>
              <h3>{item.title}</h3>
              <p className="use-cases-timing-tag">{item.timing}</p>
              <p>{item.body}</p>
              <div>
                <span>Decision moments</span>
                <ul>
                  {item.decisions.map((decision) => (
                    <li key={decision}>{decision}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section muted>
        <div className="use-cases-alignment-band">
          <div className="use-cases-alignment-copy">
            <p className="eyebrow">Shared operating layer</p>
            <h2 className="headline-lg">One evidence base for the whole commercial team</h2>
            <p className="text-lead section-intro">
              Public-sector opportunities do not only affect bid teams. They
              shape sales targets, campaign timing, partner activation, account
              travel, technical readiness, and leadership planning. Civant gives
              every team a clearer view of the same market movement, so
              decisions can happen earlier and with more confidence.
            </p>
          </div>
          <div className="use-cases-alignment-flow" aria-label="Civant operating flow">
            {alignmentFlow.map((step) => (
              <span key={step}>{step}</span>
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

      <Section>
        <div className="final-cta use-cases-final-cta">
          <div className="use-cases-final-cta-copy">
            <p className="eyebrow">Next Step</p>
            <h2 className="headline-lg final-cta-title">
              Plan before the tender window opens
            </h2>
            <p className="text-lead platform-cta-copy">
              See how Civant helps your team align sales, marketing, account
              planning, and technical preparation around evidence-led
              procurement timing.
            </p>
            <CTAGroup
              primaryHref="/contact"
              primaryLabel="Book a 20-minute walkthrough"
              secondaryHref="/pricing"
              secondaryLabel="View Pricing"
            />
          </div>
          <div className="use-cases-final-cta-panel" aria-label="Civant workflow outcomes">
            <span>Commercial focus</span>
            <span>Market timing</span>
            <span>Prepared action</span>
          </div>
        </div>
      </Section>
      <SchemaScript data={useCasesSchema} />
    </>
  );
}
