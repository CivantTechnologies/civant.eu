import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  CalendarDays,
  Clock3,
  FileText,
  Globe2,
  ListChecks,
  Radar,
  SearchCheck,
  ShieldCheck,
  Trophy,
  type LucideIcon,
} from "lucide-react";
import { CTAGroup } from "../../components/site/CTAGroup";
import { Section } from "../../components/site/Section";
import { SchemaScript } from "../../components/site/SchemaScript";
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildPageMetadata,
  SITE_URL,
} from "../../lib/seo";

export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  title: "Civant Methodology | Evidence-Led Procurement Forecasting",
  description:
    "See how Civant's forecasting model uses procurement records, contract lifecycles, buyer behavior, and public signals to estimate likely tender timing.",
  path: "/methodology",
});

const methodologyFaqs = [
  {
    question: "How does Civant forecast upcoming tenders?",
    answer:
      "Civant analyzes historical procurement records, contract lifecycle windows, buyer behavior, renewal patterns, and market participation signals to identify where future procurement activity is more likely to emerge.",
  },
  {
    question: "What data sources does Civant use?",
    answer:
      "Civant uses public procurement notices, contract award records, supplier participation data, contract lifecycle information, PINs and early-market notices, public expenditure budgets, grants, policy signals, and buyer activity patterns.",
  },
  {
    question: "How accurate are Civant forecasts?",
    answer:
      "Civant continuously validates forecast signals against subsequently published tenders. Validation results evolve as new tenders are published, so customers review current figures inside the live platform.",
  },
  {
    question: "Is Civant an AI chatbot?",
    answer:
      "No. Civant is a procurement forecasting intelligence platform. AI helps interpret matches, documents, buyer intent, and scope, while the forecasting methodology is grounded in structured procurement evidence and external public signals.",
  },
  {
    question: "Does Civant guarantee tender publication dates?",
    answer:
      "No. Civant provides planning and prioritization intelligence, not guarantees about tender publication dates, procurement decisions, or contract award outcomes.",
  },
  {
    question: "How do external signals affect forecast confidence?",
    answer:
      "External signals such as PINs, hiring, budgets, funding, policy movement, news, and press releases help strengthen or weaken confidence when they align with procurement history, lifecycle timing, and buyer recurrence patterns.",
  },
];

const methodologyPipeline = [
  {
    step: "01",
    title: "Data ingestion",
    body: "Public procurement records and external signals are collected across supported markets.",
  },
  {
    step: "02",
    title: "Normalization",
    body: "Sources are reconciled into comparable buyers, suppliers, categories, dates, and contract events.",
  },
  {
    step: "03",
    title: "Signal engineering",
    body: "Lifecycle timing, recurrence, incumbency, participation, and external movement become forecast signals.",
  },
  {
    step: "04",
    title: "Forecast modeling",
    body: "Signals are modeled to estimate likely tender timing, demand movement, and opportunity fit.",
  },
  {
    step: "05",
    title: "Confidence scoring",
    body: "Forecasts are weighted by evidence quality, corroboration, market context, and observed patterns.",
  },
  {
    step: "06",
    title: "Actionable intelligence",
    body: "Outputs are translated into planning visibility for bid, sales, and market intelligence teams.",
  },
];

const methodologyItemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Civant evidence-led procurement forecasting methodology",
  description:
    "A structured workflow for turning public procurement records, lifecycle timing, and external public signals into confidence-scored forecasting intelligence.",
  itemListElement: methodologyPipeline.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.title,
    description: item.body,
  })),
};

const methodologySchema = [
  buildFaqSchema(methodologyFaqs),
  methodologyItemListSchema,
  buildBreadcrumbSchema([
    { name: "Home", item: SITE_URL },
    { name: "Methodology", item: `${SITE_URL}/methodology` },
  ]),
];

const dataUniverse = [
  "Procurement portals",
  "Contract and award notices",
  "Budgets and grants",
  "PINs and eForms",
  "Policy updates",
  "Company and people signals",
  "Market and industry data",
  "News and media sources",
  "Buyer activity patterns",
];

const evidenceSources = [
  {
    icon: FileText as LucideIcon,
    title: "Tender notices",
    signal: "Publication history",
  },
  {
    icon: Trophy as LucideIcon,
    title: "Award outcomes",
    signal: "Supplier movement",
  },
  {
    icon: Clock3 as LucideIcon,
    title: "Contract lifecycles",
    signal: "Renewal timing",
  },
  {
    icon: Radar as LucideIcon,
    title: "Buyer recurrence",
    signal: "Buying cadence",
  },
  {
    icon: Activity as LucideIcon,
    title: "Competitor movement",
    signal: "Market pressure",
  },
  {
    icon: Globe2 as LucideIcon,
    title: "External signals",
    signal: "Public context",
  },
];

const methodologyOutputs = [
  {
    icon: CalendarDays as LucideIcon,
    title: "Timing",
    body: "When preparation should start",
  },
  {
    icon: ShieldCheck as LucideIcon,
    title: "Confidence",
    body: "How strong the evidence is",
  },
  {
    icon: ListChecks as LucideIcon,
    title: "Priority",
    body: "Where teams should focus",
  },
];

const coreSignals = [
  {
    title: "PINs and early-market notices",
    body: "Prior information notices, market consultations, and eForms can indicate buyer intent before a formal tender is published.",
  },
  {
    title: "Hiring and team expansion",
    body: "New roles, delivery teams, and specialist hiring can corroborate demand movement around upcoming programmes or service needs.",
  },
  {
    title: "Budgets, grants, and funding",
    body: "Approved budgets, grant allocations, and funding rounds help Civant assess whether a need has financial support behind it.",
  },
  {
    title: "Policy and regulatory movement",
    body: "Policy deadlines, compliance changes, and public-sector reform priorities can raise confidence that procurement activity is likely to follow.",
  },
  {
    title: "News feeds and public announcements",
    body: "Local news, public statements, board updates, and programme announcements provide context around timing, scope, and urgency.",
  },
  {
    title: "Press releases and supplier movement",
    body: "Supplier wins, partnerships, framework activity, and press releases help Civant read competitive pressure around a buyer or category.",
  },
];

const coreSignalPrinciple = {
  title: "Confidence corroboration",
  body: "External signals do not replace hard procurement evidence. They strengthen or weaken confidence when they align with lifecycle timing, buyer recurrence, and observed procurement patterns.",
};

const responsibleInterpretation = [
  {
    icon: FileText as LucideIcon,
    title: "Evidence-led",
    body: "Civant uses public procurement records and public external signals to support earlier planning.",
  },
  {
    icon: ShieldCheck as LucideIcon,
    title: "Confidence-aware",
    body: "Forecasts are weighted by evidence quality, corroboration, and observed buyer patterns.",
  },
  {
    icon: ListChecks as LucideIcon,
    title: "Decision-supportive",
    body: "Civant helps teams prioritize where to prepare, engage, and bid while commercial judgment stays with the team.",
  },
];

const validationLoop = [
  {
    icon: SearchCheck as LucideIcon,
    title: "Forecast signal identified",
    body: "A lifecycle pattern or external signal raises the likelihood of future procurement activity.",
  },
  {
    icon: CalendarDays as LucideIcon,
    title: "Published tender observed",
    body: "Civant checks whether a matching tender later appears in the public procurement record.",
  },
  {
    icon: Activity as LucideIcon,
    title: "Alignment compared",
    body: "Buyer, category, timing, scope, and evidence quality are compared against the original signal.",
  },
  {
    icon: ShieldCheck as LucideIcon,
    title: "Confidence calibrated",
    body: "Signal weights are refined so future forecasts reflect observed downstream alignment.",
  },
];

const validationMeasures = [
  "Downstream publication alignment",
  "Evidence quality",
  "ML Engine",
];

export default function MethodologyPage() {
  return (
    <div className="methodology-page">
      <Section
        className="hero-block hero-section methodology-hero"
        containerClassName="methodology-hero-container"
      >
        <div className="methodology-hero-copy">
          <p className="eyebrow">Methodology</p>
          <h1 className="headline-xl">How Civant forecasts tenders from public evidence</h1>
          <p className="text-lead">
            Civant connects procurement records, contract lifecycles, buyer
            behavior, competitor movement, and external public signals into
            forecasting visibility teams can use before tender windows open.
          </p>
          <CTAGroup
            primaryHref="/pricing"
            primaryLabel="Get Started"
            secondaryHref="/contact"
            secondaryLabel="Talk to Us"
          />
        </div>
        <div className="methodology-hero-model" aria-label="Civant methodology model">
          <div className="methodology-model-source">
            <span>Public evidence</span>
            <small>Notices</small>
            <small>PINs</small>
            <small>Awards</small>
            <small>Lifecycles</small>
            <small>External signals</small>
          </div>
          <div className="methodology-model-flow" aria-hidden="true">
            <i />
            <i />
            <i />
          </div>
          <div className="methodology-model-output">
            <span>Forecasting visibility</span>
            <strong>Earlier planning signals</strong>
            <p>Timing, confidence, fit, and competitive context for bid and market teams.</p>
          </div>
        </div>
      </Section>

      <Section muted>
        <div className="methodology-data-engine">
          <div className="methodology-data-copy">
            <p className="eyebrow">Data Sources</p>
            <h2 className="headline-lg">Inside the forecasting engine</h2>
            <p className="text-lead section-intro">
              Civant does not treat sources as a flat feed. Public evidence is
              normalized, engineered into signals, scored for confidence, and
              turned into planning intelligence.
            </p>
          </div>
          <div className="methodology-engine-visual" aria-label="Civant forecasting engine">
            <div className="methodology-engine-board">
              <div className="methodology-evidence-bank">
                <span className="methodology-board-label">Evidence inputs</span>
                <div className="methodology-evidence-grid">
                  {evidenceSources.map((source) => {
                    const Icon = source.icon;
                    return (
                      <article key={source.title} className="methodology-evidence-tile">
                        <Icon aria-hidden="true" />
                        <div>
                          <h3>{source.title}</h3>
                          <p>{source.signal}</p>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
              <div className="methodology-core-stack">
                <span className="methodology-board-label">Methodology core</span>
                <div className="methodology-core-orbit" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </div>
                <div className="methodology-core">
                  <Image
                    className="methodology-core-mark"
                    src="/icon-512.png"
                    alt="Civant"
                    width={92}
                    height={92}
                  />
                  <span>Normalize</span>
                  <strong>Forecasting model</strong>
                  <small>Signals weighted by timing, recurrence, corroboration, and market context.</small>
                </div>
              </div>
              <div className="methodology-output-bank">
                <span className="methodology-board-label">Planning outputs</span>
                {methodologyOutputs.map((output) => {
                  const Icon = output.icon;
                  return (
                    <article key={output.title} className="methodology-output-tile">
                      <Icon aria-hidden="true" />
                      <div>
                        <h3>{output.title}</h3>
                        <p>{output.body}</p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
            <div className="methodology-engine-stage-row" aria-label="Forecasting methodology stages">
              {methodologyPipeline.map((item) => (
                <article
                  key={item.step}
                  className="methodology-engine-stage"
                  aria-label={`${item.title}: ${item.body}`}
                >
                  <span>{item.step}</span>
                  <h3>{item.title}</h3>
                </article>
              ))}
            </div>
            <div className="methodology-data-universe">
              <span>Data universe</span>
              <div>
                {dataUniverse.map((source) => (
                  <small key={source}>{source}</small>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="section-heading-wrap">
          <p className="eyebrow">Core Signals</p>
          <h2 className="headline-lg">
            External signals that sharpen forecast confidence
          </h2>
          <p className="text-lead section-intro">
            Civant separates hard procurement evidence from public context. External
            signals help explain whether a likely opportunity has timing, budget,
            urgency, and market movement behind it.
          </p>
        </div>
        <div className="grid grid-3 methodology-grid methodology-signal-grid">
          {coreSignals.map((signal) => (
            <article key={signal.title} className="card methodology-signal-card">
              <h3 className="card-title">{signal.title}</h3>
              <p className="card-body">{signal.body}</p>
            </article>
          ))}
        </div>
        <div className="methodology-signal-principle">
          <span>Scoring principle</span>
          <h3>{coreSignalPrinciple.title}</h3>
          <p>{coreSignalPrinciple.body}</p>
        </div>
      </Section>

      <Section>
        <div className="section-heading-wrap">
          <p className="eyebrow">Validation</p>
          <h2 className="headline-lg">
            Forecasts are validated against what actually happens
          </h2>
          <p className="text-lead section-intro">
            Civant compares identified forecasting signals with tenders that are
            later published, creating a calibration loop between evidence,
            public outcomes, and future confidence scoring.
          </p>
        </div>
        <div className="methodology-validation-console">
          <div className="methodology-validation-loop" aria-label="Civant validation loop">
            {validationLoop.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="methodology-validation-step">
                  <Icon aria-hidden="true" />
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </div>
                </article>
              );
            })}
          </div>
          <div className="methodology-validation-measures" aria-label="Validation measures">
            {validationMeasures.map((measure) => (
              <span key={measure}>{measure}</span>
            ))}
          </div>
          <p className="methodology-validation-principle">
            <strong>Validation principle:</strong> signal quality is measured by
            observed downstream publication alignment, not by marketing claims.
          </p>
        </div>
        <div className="grid grid-2 solution-related-grid methodology-validation-links">
          <Link
            href="/resources/external-signals-in-public-procurement"
            className="card card-link interactive-surface methodology-resource-card"
          >
            <div className="methodology-resource-image">
              <Image
                src="/images/resources/guide-external-signals.jpg"
                alt="External public signals feeding procurement intelligence"
                width={1200}
                height={675}
                sizes="(max-width: 900px) 100vw, 44vw"
              />
            </div>
            <div className="methodology-resource-copy">
              <h3 className="card-title">Go deeper on external signals</h3>
              <p className="card-body">
                See how budgets, grants, PINs, hiring, and policy changes support
                earlier procurement timing when they are tied back to hard public
                evidence.
              </p>
              <span className="card-link-cta">Read the resource</span>
            </div>
          </Link>
          <Link
            href="/resources/competitor-intelligence-in-public-procurement"
            className="card card-link interactive-surface methodology-resource-card"
          >
            <div className="methodology-resource-image">
              <Image
                src="/images/resources/guide-competitor-intelligence.jpg"
                alt="Competitor intelligence signals for public procurement"
                width={1200}
                height={675}
                sizes="(max-width: 900px) 100vw, 44vw"
              />
            </div>
            <div className="methodology-resource-copy">
              <h3 className="card-title">Go deeper on competitor context</h3>
              <p className="card-body">
                Understand how incumbent position, participation patterns, and
                market pressure strengthen forecasting and prioritization.
              </p>
              <span className="card-link-cta">Read the resource</span>
            </div>
          </Link>
        </div>
      </Section>

      <Section muted>
        <div className="methodology-governance-band">
          <div className="methodology-governance-copy">
            <p className="eyebrow">Responsible Interpretation</p>
            <h2 className="headline-lg">
              Forecasting intelligence built for disciplined decisions
            </h2>
            <p className="text-lead section-intro">
              Civant helps teams move earlier with evidence and confidence context,
              without treating forecasts as certainty or replacing commercial judgment.
            </p>
          </div>
          <div className="methodology-governance-rail">
            {responsibleInterpretation.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="methodology-governance-item">
                  <Icon aria-hidden="true" />
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </Section>

      <Section>
        <div className="methodology-compact-faq">
          <h3 className="card-title">Methodology FAQ</h3>
          <div className="methodology-compact-faq-list">
          {methodologyFaqs.map((item) => (
            <details key={item.question} className="methodology-compact-faq-item">
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="methodology-final-cta">
          <div className="methodology-final-cta-copy">
            <p className="eyebrow">From method to market timing</p>
            <h2 className="headline-lg final-cta-title">
              Turn public evidence into earlier procurement decisions
            </h2>
            <p className="text-lead platform-cta-copy">
              See how Civant converts tender history, external signals, and
              validation feedback into forecast visibility your team can act on
              before tender windows open.
            </p>
            <CTAGroup
              primaryHref="/pricing"
              primaryLabel="Get Started"
              secondaryHref="/contact"
              secondaryLabel="Talk to Us"
            />
          </div>
        </div>
      </Section>
      <SchemaScript data={methodologySchema} />
    </div>
  );
}
