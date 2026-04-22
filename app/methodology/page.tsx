import {
  Binary,
  Database,
  SearchCheck,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { CTAGroup } from "../../components/site/CTAGroup";
import { Section } from "../../components/site/Section";
import { BrowserFrame } from "../../components/site/BrowserFrame";
import { SchemaScript } from "../../components/site/SchemaScript";
import { buildFaqSchema, buildPageMetadata } from "../../lib/seo";

export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  title: "Methodology | Procurement Intelligence Approach",
  description:
    "Learn how Civant uses procurement-cycle analysis across historical procurement data, contract lifecycles, and market participation signals to identify likely upcoming opportunities.",
  path: "/methodology",
});

const methodologyFaqs = [
  {
    question: "How does Civant predict upcoming tenders?",
    answer:
      "Civant analyzes historical procurement records, contract lifecycle windows, buyer behavior, renewal patterns, and market participation signals to identify where future procurement activity is more likely to emerge.",
  },
  {
    question: "What data sources does Civant use?",
    answer:
      "Civant uses public procurement notices, contract award records, supplier participation data, contract lifecycle information, public expenditure budgets, and buyer activity patterns.",
  },
  {
    question: "How accurate are Civant forecasts?",
    answer:
      "Civant continuously validates forecast signals against subsequently published tenders. The current methodology page shows a 90.8% forecast accuracy dashboard across 79K resolved forecasts.",
  },
  {
    question: "Does Civant guarantee tender publication dates?",
    answer:
      "No. Civant provides planning and prioritization intelligence, not guarantees about tender publication dates, procurement decisions, or contract award outcomes.",
  },
];

const methodologySchema = buildFaqSchema(methodologyFaqs);

const dataSources = [
  "European procurement notices",
  "Contract award records",
  "Supplier participation data",
  "Contract lifecycle information",
  "Public expenditure budgets",
  "Buyer activity patterns",
];

const coreSignals = [
  {
    title: "Procurement history",
    body: "Historical notice and award sequences reveal how institutions buy over time.",
  },
  {
    title: "Contract duration signals",
    body: "Known and inferred contract windows highlight likely retender time ranges.",
  },
  {
    title: "Renewal patterns",
    body: "Category-level renewal behavior helps identify repeatable procurement cycles.",
  },
  {
    title: "Buyer behavior",
    body: "Institution-specific buying cadence and category emphasis support targeting accuracy.",
  },
  {
    title: "Market participation",
    body: "Supplier entry, repeat participation, and award dynamics indicate competitive movement.",
  },
  {
    title: "Competitor incumbency exposure",
    body: "Incumbent supplier footprint and concentration patterns reveal where competitive defensibility may be strongest.",
  },
];

const analysisFlow = [
  {
    step: "01",
    icon: Database as LucideIcon,
    title: "Ingest and normalize",
    body: "Civant standardizes procurement data across sources, structures, and jurisdictions.",
  },
  {
    step: "02",
    icon: Binary as LucideIcon,
    title: "Extract lifecycle context",
    body: "Contract timelines and renewal indicators are modeled into comparable procurement-cycle signals.",
  },
  {
    step: "03",
    icon: TrendingUp as LucideIcon,
    title: "Model market behavior",
    body: "Participation and award patterns are analyzed to estimate where demand is likely to emerge.",
  },
  {
    step: "04",
    icon: SearchCheck as LucideIcon,
    title: "Prioritize opportunities",
    body: "Signals are translated into ranked intelligence outputs for planning and execution workflows.",
  },
];

export default function MethodologyPage() {
  return (
    <div className="methodology-page">
      <Section className="hero-block hero-section">
        <p className="eyebrow">Methodology</p>
        <h1 className="headline-xl">How Civant procurement intelligence works</h1>
        <p className="text-lead">
          Civant analyzes historical public procurement data, contract
          lifecycles, and market activity to identify likely upcoming tender
          opportunities across European public sector markets.
        </p>
      </Section>

      <Section muted>
        <div className="section-heading-wrap">
          <p className="eyebrow">Data Sources</p>
          <h2 className="headline-lg">
            Built on public procurement and contract evidence
          </h2>
        </div>
        <div className="grid grid-3 methodology-grid">
          {dataSources.map((source) => (
            <article key={source} className="card signal-card">
              <h3 className="card-title">{source}</h3>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <div className="section-heading-wrap">
          <p className="eyebrow">Core Signals</p>
          <h2 className="headline-lg">
            The procurement-cycle signals Civant tracks continuously
          </h2>
        </div>
        <div className="grid grid-3 methodology-grid">
          {coreSignals.map((signal) => (
            <article key={signal.title} className="card">
              <h3 className="card-title">{signal.title}</h3>
              <p className="card-body">{signal.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section muted>
        <div className="section-heading-wrap">
          <p className="eyebrow">How Analysis Works</p>
          <h2 className="headline-lg">
            From structured procurement data to actionable intelligence
          </h2>
        </div>
        <div className="flow-track methodology-flow">
          {analysisFlow.map((item) => (
            <article key={item.step} className="flow-card methodology-flow-card">
              <div className="flow-title-row">
                <span className="flow-icon" aria-hidden="true">
                  <item.icon />
                </span>
                <h3 className="card-title">{item.title}</h3>
              </div>
              <p className="card-body">{item.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <div className="section-heading-wrap">
          <p className="eyebrow">Validation</p>
          <h2 className="headline-lg">
            Continuously tested against subsequently published tenders
          </h2>
          <p className="text-lead section-intro">
            Civant continuously compares identified procurement-cycle signals
            with tenders that are later published. This allows signal tuning,
            confidence calibration, and transparent methodology refinement over
            time.
          </p>
        </div>
        <article className="card comparison-card">
          <p className="comparison-line">
            <strong>Validation principle:</strong> signal quality is measured by
            observed downstream publication alignment, not by marketing claims.
          </p>
        </article>
        <div className="methodology-validation-visual">
          <BrowserFrame
            src="/screenshots/forecast-accuracy.png"
            alt="Forecast accuracy dashboard showing 90.8% overall accuracy across 79,000 resolved forecasts"
            caption="Live validation: 90.8% forecast accuracy across 79K resolved forecasts"
            width={2390}
            height={582}
          />
        </div>
      </Section>

      <Section muted>
        <div className="section-heading-wrap">
          <p className="eyebrow">Responsible Interpretation</p>
          <h2 className="headline-lg">
            Intelligence for planning and prioritization, not guarantees
          </h2>
        </div>
        <article className="card">
          <p className="card-body">
            Civant supports earlier planning, sharper prioritization, and better
            resource allocation. It does not guarantee tender publication dates,
            procurement decisions, or contract award outcomes.
          </p>
        </article>
      </Section>

      <Section>
        <div className="section-heading-wrap">
          <p className="eyebrow">Methodology FAQ</p>
          <h2 className="headline-lg">Common questions about Civant forecasting</h2>
        </div>
        <div className="grid grid-2 methodology-grid">
          {methodologyFaqs.map((item) => (
            <article key={item.question} className="card">
              <h3 className="card-title">{item.question}</h3>
              <p className="card-body">{item.answer}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <div className="final-cta">
          <h2 className="headline-lg final-cta-title">
            See Civant methodology in practice
          </h2>
          <p className="text-lead platform-cta-copy">
            Request a demo to review how Civant methodology applies to your
            target institutions, categories, and procurement-cycle strategy.
          </p>
          <CTAGroup
            primaryHref="/contact"
            primaryLabel="Request Demo"
            secondaryHref="/platform"
            secondaryLabel="Explore the Platform"
          />
        </div>
      </Section>
      <SchemaScript data={methodologySchema} />
    </div>
  );
}
