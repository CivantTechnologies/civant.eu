import Link from "next/link";
import { ReportLeadCapture } from "../../../components/site/ReportLeadCapture";
import { SchemaScript } from "../../../components/site/SchemaScript";
import { Section } from "../../../components/site/Section";
import { getReportBySlug } from "../../../lib/reportDownloads";
import {
  buildArticleSchema,
  buildBreadcrumbSchema,
  buildPageMetadata,
} from "../../../lib/seo";

export const dynamic = "force-static";

function getEducationReport() {
  const report = getReportBySlug("education-procurement-outlook-q4-2026");

  if (!report) {
    throw new Error("Education report configuration is missing.");
  }

  return report;
}

const report = getEducationReport();
const runwaySnapshotDate = "23 April 2026";
const runwaySnapshotTotal = 41;
const runwaySnapshot = [
  { country: "Italy", code: "IT", count: 25, share: 61 },
  { country: "France", code: "FR", count: 8, share: 20 },
  { country: "United Kingdom", code: "UK", count: 7, share: 17 },
  { country: "Ireland", code: "IE", count: 1, share: 2 },
];
const educationBenchmarks = [
  {
    market: "Ireland",
    averageValue: "EUR 1.23M",
    medianValue: "EUR 191K",
    note: "Heavy-ticket education contracts with a much lower median than the headline average.",
  },
  {
    market: "France",
    averageValue: "EUR 1.13M",
    medianValue: "EUR 300K",
    note: "University-linked awards are still meaningful, but the typical contract sits below the average.",
  },
  {
    market: "Spain",
    averageValue: "EUR 247K",
    medianValue: "EUR 55K",
    note: "Lighter average deal sizes, with repeat supplier pressure still visible in selected categories.",
  },
];
const supplierSignals = [
  "The Lunch Bag Unlimited appears repeatedly in Irish education award history.",
  "EBSCO Information Services SAS is visible across French education-related award history.",
  "Fulton S.A. shows repeat presence in Spanish education-facing public contracts.",
];
const landingHighlights = [
  "Dated runway snapshot",
  "Historic contract-value benchmarks",
  "Named repeat-supplier signals",
  "Short methodology note",
];

export const metadata = buildPageMetadata({
  title: report.metaTitle,
  description: report.metaDescription,
  path: report.landingPath,
});

const pageSchema = [
  ...buildArticleSchema({
    title: report.title,
    description: report.metaDescription,
    path: report.landingPath,
    datePublished: "2026-04-23T00:00:00+00:00",
  }),
  buildBreadcrumbSchema([
    { name: "Home", item: "https://civant.eu" },
    { name: "Resources", item: "https://civant.eu/resources" },
    { name: report.title, item: `https://civant.eu${report.landingPath}` },
  ]),
];

export default function EducationProcurementOutlookPage() {
  return (
    <>
      <Section className="report-hero-section" muted>
        <div className="grid grid-2 report-hero-grid">
          <article className="report-hero-copy">
            <p className="eyebrow">{report.eyebrow}</p>
            <h1 className="headline-xl">{report.title}</h1>
            <p className="text-lead report-hero-subtitle">{report.subtitle}</p>
            <p className="card-body report-hero-summary">{report.summary}</p>
            <div className="report-highlight-grid">
              {landingHighlights.map((item) => (
                <div key={item} className="report-highlight-item">
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <p className="contact-live-note report-hero-note">
              Public-safe by design. Useful enough to orient a team, not enough
              to replace the buyer-level workflow inside Civant.
            </p>
          </article>

          <div className="report-hero-gate">
            <ReportLeadCapture
              reportSlug={report.slug}
              reportTitle={report.title}
            />
          </div>
        </div>

        <div className="grid grid-3 report-snapshot-grid">
          <article className="card report-snapshot-card">
            <p className="module-label">High-confidence runway</p>
            <div className="report-snapshot-value">{runwaySnapshotTotal}</div>
            <p className="card-body">
              Visible in the current approved snapshot.
            </p>
          </article>

          <article className="card report-snapshot-card">
            <p className="module-label">Leading market now</p>
            <div className="report-snapshot-value">61%</div>
            <p className="card-body">
              Of the visible runway currently sits in Italy.
            </p>
          </article>

          <article className="card report-snapshot-card">
            <p className="module-label">Historic benchmark layer</p>
            <div className="report-snapshot-value">IE · FR · ES</div>
            <p className="card-body">
              Deepest public award context for value and supplier pressure.
            </p>
          </article>
        </div>
      </Section>

      <Section>
        <div className="grid grid-2 report-snapshot-detail-grid">
          <article className="card report-country-card">
            <p className="module-label">Visible runway now</p>
            <h2 className="headline-lg report-snapshot-heading">
              Where the current education runway is concentrated
            </h2>
            <p className="card-body report-section-intro">
              Share of visible runway in the dated snapshot from{" "}
              {runwaySnapshotDate}. This is not a statement of total market
              size.
            </p>
            <div className="report-country-list">
              {runwaySnapshot.map((item) => (
                <div key={item.code} className="report-country-row">
                  <div className="report-country-meta">
                    <span className="report-country-name">{item.country}</span>
                    <div className="report-country-metrics">
                      <span className="report-country-share">{item.share}%</span>
                      <span className="report-country-count">
                        {item.count} visible
                      </span>
                    </div>
                  </div>
                  <div className="report-country-bar">
                    <span
                      className="report-country-fill"
                      style={{ width: `${item.share}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="card report-country-card">
            <p className="module-label">Historic benchmark layer</p>
            <h2 className="headline-lg report-snapshot-heading">
              What education contract sizes look like in public award history
            </h2>
            <p className="card-body report-section-intro">
              Public award history gives a steadier benchmark for contract size
              and supplier pressure than the live runway alone.
            </p>
            <div className="report-benchmark-stack">
              {educationBenchmarks.map((item) => (
                <div key={item.market} className="report-benchmark-row">
                  <div className="report-benchmark-header">
                    <span className="report-benchmark-market">{item.market}</span>
                    <span className="report-benchmark-values">
                      Avg {item.averageValue} · Median {item.medianValue}
                    </span>
                  </div>
                  <p className="card-body">{item.note}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </Section>

      <Section muted>
        <div className="grid grid-2 report-context-grid">
          <article className="card report-context-card">
            <p className="module-label">Who should read this</p>
            <h2 className="headline-lg report-context-title">
              Built for commercial teams that need earlier education-market
              clarity
            </h2>
            <div className="report-simple-list">
              {report.audience.map((item) => (
                <div key={item} className="report-simple-item">
                  {item}
                </div>
              ))}
            </div>
          </article>

          <article className="card report-context-card">
            <p className="module-label">Supplier pressure</p>
            <h2 className="headline-lg report-context-title">
              Repeat winners are visible before you ever see the full buyer list
            </h2>
            <div className="report-simple-list">
              {supplierSignals.map((item) => (
                <div key={item} className="report-simple-item">
                  {item}
                </div>
              ))}
            </div>
          </article>
        </div>
      </Section>

      <Section>
        <div className="section-heading-wrap">
          <p className="eyebrow">What teams should do</p>
          <h2 className="headline-lg">
            Use the report to qualify faster and plan earlier
          </h2>
        </div>
        <div className="flow-track solution-use-case-flow">
          {report.visibleActions.map((item, index) => (
            <article key={item} className="flow-card">
              <span className="flow-index">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="card-title">{item}</h3>
            </article>
          ))}
        </div>
      </Section>

      <Section muted>
        <div className="final-cta">
          <h2 className="headline-lg final-cta-title">
            Want the deeper buyer-level picture?
          </h2>
          <p className="text-lead platform-cta-copy">
            Use the report to understand the sector, then move into Civant when
            you need buyer timing, competitor context, and a live forecasting
            workflow across markets.
          </p>
          <div className="button-row">
            <Link href="/pricing" className="btn btn-primary">
              View Pricing
            </Link>
            <Link href="/methodology" className="btn btn-secondary">
              View Methodology
            </Link>
          </div>
        </div>
      </Section>

      <SchemaScript data={pageSchema} />
    </>
  );
}
