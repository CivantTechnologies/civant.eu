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
      <Section className="hero-block hero-section">
        <p className="eyebrow">{report.eyebrow}</p>
        <h1 className="headline-xl">{report.title}</h1>
        <p className="text-lead">{report.subtitle}</p>
      </Section>

      <Section>
        <div className="section-heading-wrap">
          <p className="eyebrow">Visible Snapshot</p>
          <h2 className="headline-lg">
            A live runway view before the form
          </h2>
          <p className="text-lead report-snapshot-intro">
            This page shows a public-safe cut of the approved Civant education
            snapshot from {runwaySnapshotDate}. It is enough to show the shape
            of the runway, without exposing the buyer-level workflow behind it.
          </p>
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

        <div className="grid grid-2 report-snapshot-detail-grid">
          <article className="card report-country-card">
            <p className="module-label">Country runway split</p>
            <h3 className="headline-sm report-snapshot-heading">
              Where the current education runway is concentrated
            </h3>
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
            <p className="contact-live-note" style={{ marginTop: "1.25rem" }}>
              Share of visible runway in the dated snapshot, not total market
              size.
            </p>
          </article>

          <article className="card report-country-card">
            <p className="module-label">Historic value context</p>
            <h3 className="headline-sm report-snapshot-heading">
              What education contract sizes look like in public award history
            </h3>
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
        <div className="grid grid-2 report-landing-grid">
          <article className="card">
            <p className="module-label">What you will learn</p>
            <h2 className="headline-lg report-landing-title">
              A public-safe look at Q4 education demand
            </h2>
            <p className="card-body">{report.summary}</p>
            <div className="report-highlight-grid">
              {landingHighlights.map((item) => (
                <div key={item} className="report-highlight-item">
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <p className="contact-live-note" style={{ marginTop: "1.5rem" }}>
              This is designed to make the right teams curious, not to replace
              the buyer-level workflow inside Civant.
            </p>
          </article>

          <ReportLeadCapture
            reportSlug={report.slug}
            reportTitle={report.title}
          />
        </div>
      </Section>

      <Section muted>
        <div className="section-heading-wrap">
          <p className="eyebrow">Supplier Pressure</p>
          <h2 className="headline-lg">
            Repeat winners are visible before you ever see the full buyer list
          </h2>
        </div>
        <div className="grid grid-3 methodology-grid">
          {supplierSignals.map((item) => (
            <article key={item} className="card">
              <p className="card-body">{item}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <div className="section-heading-wrap">
          <p className="eyebrow">Who This Is For</p>
          <h2 className="headline-lg">
            Built for teams selling into public education markets
          </h2>
        </div>
        <div className="grid grid-3 methodology-grid">
          {report.audience.map((item) => (
            <article key={item} className="card">
              <p className="card-body">{item}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section muted>
        <div className="section-heading-wrap">
          <p className="eyebrow">Visible Signal Themes</p>
          <h2 className="headline-lg">
            Enough signal to be useful, not enough to give the engine away
          </h2>
        </div>
        <div className="grid grid-2 solution-related-grid">
          {report.visibleSignals.map((item) => (
            <article key={item} className="card">
              <h3 className="card-title">Signal theme</h3>
              <p className="card-body">{item}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <div className="section-heading-wrap">
          <p className="eyebrow">What Teams Should Do</p>
          <h2 className="headline-lg">
            The report is built to support practical preparation
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
