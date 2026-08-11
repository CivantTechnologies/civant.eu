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
  type LucideIcon,
} from "lucide-react";
import { CTAGroup } from "../../components/site/CTAGroup";
import { Section } from "../../components/site/Section";
import { SchemaScript } from "../../components/site/SchemaScript";
import { CIVANT_SHORT_DEFINITION } from "../../lib/company";
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildPageMetadata,
  SITE_URL,
} from "../../lib/seo";
import {
  VALIDATION_RECORD_PATH,
  VALIDATION_SUMMARY,
} from "../../lib/validation";

export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  title: "Civant Methodology | Evidence-Led Procurement Forecasting",
  description:
    "See how Civant's deterministic forecasting model uses procurement history, contract lifecycles, buyer cadence, seasonality, framework expiry, and qualified public signals to estimate likely tender timing.",
  path: "/methodology",
  image: "/screenshots/forecast-validation.png",
});

const methodologyFaqs = [
  {
    question: "How does Civant forecast upcoming tenders?",
    answer:
      "Civant's deterministic model evaluates procurement history, cycle proximity, seasonality, framework expiry, buyer cadence, and qualified public signals to estimate a likely tender window, forecast score, and confidence context.",
  },
  {
    question: "What data sources does Civant use?",
    answer:
      "The forecast model uses structured procurement notices, award events, contract lifecycle information, buyer and category patterns, PINs and early-market notices, public-sector hiring, approved budgets, public funding and grant awards, and policy or programme signals that have been normalized and linked to a buyer or category.",
  },
  {
    question: "How accurate are Civant forecasts?",
    answer:
      "Civant checks forecast signals against subsequently published tenders. Current platform results evolve as new procurement activity appears. Public performance results are published only when the cohort, method, time window, limitations, and supporting documentation are inspectable.",
  },
  {
    question: "Is Civant an AI chatbot?",
    answer:
      `No. ${CIVANT_SHORT_DEFINITION} AI helps interpret matches, documents, buyer intent, and scope. It does not calculate forecast probability or override the numeric score produced from structured evidence.`,
  },
  {
    question: "Does Civant guarantee tender publication dates?",
    answer:
      "No. Civant provides planning and prioritization intelligence, not guarantees about tender publication dates, procurement decisions, or contract award outcomes.",
  },
  {
    question: "How do external signals affect forecast confidence?",
    answer:
      "Qualified signals such as PINs, public-sector hiring, approved budgets, public funding and grant awards, and policy or programme movement can provide capped, time-decayed corroboration when they are normalized, linked, and supported by evidence. General news and press coverage remain research context unless they pass that process.",
  },
  {
    question: "How do buyer and competitor intelligence fit the methodology?",
    answer:
      "Buyer cadence and procurement history can contribute directly to forecast features. Wider buyer intelligence explains recurrence and account context. Competitor intelligence supports incumbency analysis, positioning, and bid decisions, but it is not a direct input to the forecast formula.",
  },
];

const methodologyPipeline = [
  {
    step: "01",
    title: "Normalize evidence",
    body: "Structured events are reconciled into comparable buyers, suppliers, categories, dates, and contract records.",
  },
  {
    step: "02",
    title: "Calculate features",
    body: "Cycle proximity, seasonality, framework expiry, buyer cadence, public-signal timing, and data quality are calculated deterministically.",
  },
  {
    step: "03",
    title: "Estimate the window",
    body: "The model returns a likely publication window, forecast score, probability, and confidence context.",
  },
  {
    step: "04",
    title: "Publish the evidence trail",
    body: "Supporting drivers and evidence remain available for review before teams commit bid effort.",
  },
];

const methodologyItemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Civant evidence-led procurement forecasting methodology",
  description:
    "A deterministic workflow for turning structured procurement evidence and qualified public signals into likely tender windows, forecast scores, and confidence context.",
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

const evidenceSources = [
  {
    icon: FileText as LucideIcon,
    title: "Procurement history",
    signal: "Notice and award events",
  },
  {
    icon: Clock3 as LucideIcon,
    title: "Contract lifecycles",
    signal: "Cycle proximity and renewal timing",
  },
  {
    icon: CalendarDays as LucideIcon,
    title: "Seasonality",
    signal: "Month and category alignment",
  },
  {
    icon: ListChecks as LucideIcon,
    title: "Framework expiry",
    signal: "Structural timing evidence",
  },
  {
    icon: Radar as LucideIcon,
    title: "Buyer cadence",
    signal: "Recurrence reliability",
  },
  {
    icon: Globe2 as LucideIcon,
    title: "Qualified public signals",
    signal: "Capped, time-decayed corroboration",
  },
];

const methodologyOutputs = [
  {
    icon: CalendarDays as LucideIcon,
    title: "Timing window",
    body: "Estimated publication period",
  },
  {
    icon: Activity as LucideIcon,
    title: "Forecast score",
    body: "Strength of the timing opportunity",
  },
  {
    icon: ShieldCheck as LucideIcon,
    title: "Confidence",
    body: "Reliability of the supporting evidence",
  },
];

const intelligenceLayers = [
  {
    title: "Forecast model",
    body: "Estimates likely tender timing and returns a forecast score, probability, confidence, and supporting drivers.",
    href: "/platform#forecast",
    cta: "Explore forecasting",
  },
  {
    title: "Buyer intelligence",
    body: "Explains procurement history, recurrence, and account context. Buyer cadence can support direct forecast features.",
    href: "/platform#buyers",
    cta: "Explore buyers",
  },
  {
    title: "Competitor intelligence",
    body: "Shows incumbency, wins, participation, and market pressure for positioning and bid decisions. It is not a direct forecast formula input.",
    href: "/platform#competitors",
    cta: "Explore competitors",
  },
];

const coreSignals = [
  {
    title: "PINs and early-market notices",
    body: "Prior information notices, market consultations, and eForms can indicate buyer intent before a formal tender is published when they are linked to the relevant buyer and category.",
  },
  {
    title: "Public-sector hiring",
    body: "Verified roles, delivery teams, and specialist hiring can corroborate demand movement around an upcoming programme or service need.",
  },
  {
    title: "Budgets, public funding, and grant awards",
    body: "Approved budgets, public funding allocations, and documented grant awards can show that a stated need has financial support behind it.",
  },
  {
    title: "Policy, regulatory, and programme signals",
    body: "Evidence-backed policy deadlines, compliance changes, and public programmes can corroborate timing when they are normalized and category-relevant.",
  },
];

const coreSignalPrinciple = {
  title: "Corroboration, not replacement",
  body: "Qualified public signals are capped and time-decayed. They cannot replace behavioural procurement evidence, and general news or press coverage remains research context unless it is normalized, linked, and evidenced.",
};

const responsibleInterpretation = [
  {
    icon: FileText as LucideIcon,
    title: "Evidence-led",
    body: "Civant uses structured procurement records and qualified public signals to support planning before a tender is published.",
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
    icon: FileText as LucideIcon,
    title: "Forecast snapshot recorded",
    body: "The estimated window, score, confidence, drivers, and supporting evidence are stored at computation time.",
  },
  {
    icon: CalendarDays as LucideIcon,
    title: "Later publication observed",
    body: "A subsequently published tender is identified in the public procurement record.",
  },
  {
    icon: SearchCheck as LucideIcon,
    title: "Outcome matched and compared",
    body: "Buyer, category, publication timing, and supporting evidence are compared with the recorded forecast.",
  },
  {
    icon: ShieldCheck as LucideIcon,
    title: "Performance evaluated",
    body: "Resolved cohorts support performance evaluation and probability calibration review. Model changes remain deliberate and separately validated.",
  },
];

const validationMeasures = [
  "Forecast snapshot integrity",
  "Buyer, category, and window alignment",
  "Cohort performance and calibration",
];

export default function MethodologyPage() {
  return (
    <div className="methodology-page">
      <Section
        className="hero-block hero-section hero-feature methodology-hero"
        containerClassName="methodology-hero-container"
      >
        <div className="methodology-hero-copy">
          <p className="eyebrow">Methodology</p>
          <h1 className="headline-xl">How Civant estimates likely tender timing</h1>
          <p className="text-lead">
            Civant&apos;s deterministic forecasting model evaluates procurement
            history, contract lifecycles, cycle timing, seasonality, buyer cadence,
            framework expiry, and qualified public signals to estimate a likely
            tender window and confidence context.
          </p>
          <CTAGroup
            primaryHref="#forecast-validation"
            primaryLabel="See the Evidence Trail"
            secondaryHref="/platform#forecast"
            secondaryLabel="Explore Forecasts"
          />
        </div>
      </Section>

      <Section id="evidence-model" muted>
        <div className="methodology-data-engine">
          <div className="methodology-data-copy">
            <p className="eyebrow">Evidence Model</p>
            <h2 className="headline-lg">What the deterministic model evaluates</h2>
            <p className="text-lead section-intro">
              Structured procurement evidence is normalized into explicit timing,
              recurrence, structural, corroboration, and data-quality features.
              Those features produce the forecast. AI does not calculate or override
              the numeric result.
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
                <span className="methodology-board-label">Deterministic model</span>
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
                  <span>Calculate</span>
                  <strong>Timing model</strong>
                  <small>Features are weighted into probability, score, and confidence outputs with evidence and coverage constraints.</small>
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
            <div className="methodology-intelligence-boundary">
              <div className="methodology-intelligence-boundary-copy">
                <span>Model boundary</span>
                <h3>Forecasting at the core, context around the decision</h3>
                <p>
                  Buyer and competitor intelligence remain first-class platform
                  capabilities. Their roles are explicit so teams can distinguish
                  forecast inputs from account and bid-decision context.
                </p>
              </div>
              <div className="methodology-intelligence-layer-grid">
                {intelligenceLayers.map((layer) => (
                  <Link
                    key={layer.title}
                    href={layer.href}
                    className="methodology-intelligence-layer interactive-surface"
                  >
                    <h3>{layer.title}</h3>
                    <p>{layer.body}</p>
                    <span>{layer.cta}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="section-heading-wrap">
          <p className="eyebrow">Qualified Public Signals</p>
          <h2 className="headline-lg">
            Public signals can corroborate forecast timing
          </h2>
          <p className="text-lead section-intro">
            Only normalized, buyer-linked, category-relevant, and evidenced public
            events can affect scoring. General news and press coverage remain
            research context unless they pass that process.
          </p>
        </div>
        <div className="grid grid-2 methodology-grid methodology-signal-grid">
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

      <Section id="forecast-validation">
        <div className="section-heading-wrap">
          <p className="eyebrow">Validation</p>
          <h2 className="headline-lg">
            Forecast outcomes are evaluated against later publication
          </h2>
          <p className="text-lead section-intro">
            Civant records forecast evidence and later compares it with published
            tenders. Resolved cohorts support performance evaluation and probability
            calibration review. Model changes are deliberate and separately
            validated, not automatic after each outcome.
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
            <strong>Validation principle:</strong> evaluation is based on recorded
            forecasts and observed outcomes. Model changes require separate review
            and validation.
          </p>
        </div>
        <div className="methodology-independent-review">
          <div>
            <p className="module-label">Independent review publication standard</p>
            <h3>Outcomes will be published only when the evidence is inspectable</h3>
            <p>{VALIDATION_SUMMARY}</p>
          </div>
          <Link href={VALIDATION_RECORD_PATH} className="btn btn-secondary">
            Read the Publication Standard
          </Link>
        </div>
        <div className="grid grid-2 solution-related-grid methodology-validation-links">
          <Link
            href="/resources/external-signals-in-public-procurement"
            className="card card-link interactive-surface methodology-resource-card"
          >
            <div className="methodology-resource-image">
              <Image
                src="/screenshots/alerts.png"
                alt="Civant alerts showing evidence-backed market signals"
                width={1200}
                height={675}
                sizes="(max-width: 900px) 100vw, 44vw"
              />
            </div>
            <div className="methodology-resource-copy">
              <h3 className="card-title">Go deeper on external signals</h3>
              <p className="card-body">
                See how PINs, public-sector hiring, budgets, public funding, grant
                awards, and policy signals can corroborate timing after they are
                normalized, linked, and evidenced.
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
                src="/screenshots/competitors.png"
                alt="Civant competitor intelligence showing incumbency and market context"
                width={1200}
                height={675}
                sizes="(max-width: 900px) 100vw, 44vw"
              />
            </div>
            <div className="methodology-resource-copy">
              <h3 className="card-title">Go deeper on competitor context</h3>
              <p className="card-body">
                Understand how incumbent position, participation patterns, and
                market pressure support positioning, account planning, and bid
                decisions without becoming direct forecast formula inputs.
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
              Move from forecast evidence to a bid decision
            </h2>
            <p className="text-lead platform-cta-copy">
              Use forecast timing, buyer context, competitor intelligence, and the
              evidence trail together before your team commits bid effort.
            </p>
            <CTAGroup
              primaryHref="/pricing"
              primaryLabel="View Plans"
              secondaryHref="/contact"
              secondaryLabel="Book a Walkthrough"
            />
          </div>
        </div>
      </Section>
      <SchemaScript data={methodologySchema} />
    </div>
  );
}
