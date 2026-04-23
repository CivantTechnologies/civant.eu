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
const reportSnapshotDate = "23 April 2026";
const reportSummaryItems = [
  "A dated education runway snapshot across Civant's current market view",
  "Historic contract-value context to help frame likely deal sizes",
  "Repeat-supplier signals already visible in public award history",
  "Practical actions for Q4 planning and qualification",
];
const reportSupportItems = [
  "Built for bid teams, B2G sales teams, and commercial leaders",
  `Snapshot dated ${reportSnapshotDate}`,
  "Public-safe by design. Full buyer-level depth stays inside Civant",
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
      <Section className="report-gate-page" muted>
        <div className="report-gate-shell">
          <article className="report-gate-copy">
            <p className="eyebrow">{report.eyebrow}</p>
            <h1 className="headline-xl">{report.title}</h1>
            <p className="text-lead report-gate-subtitle">{report.subtitle}</p>
            <p className="card-body report-gate-summary">
              Download a concise public-safe brief designed to help your team
              decide where education demand is moving now, what that demand can
              look like by market, and where deeper follow-up is worth the
              effort.
            </p>

            <div className="report-gate-list-wrap">
              <p className="module-label">Inside the report</p>
              <div className="report-gate-list">
                {reportSummaryItems.map((item) => (
                  <div key={item} className="report-gate-list-item">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </article>

          <div className="report-gate-panel">
            <ReportLeadCapture
              reportSlug={report.slug}
              reportTitle={report.title}
            />
          </div>
        </div>

        <p className="contact-live-note report-gate-note">Work email only.</p>
      </Section>

      <Section>
        <div className="report-support-strip">
          {reportSupportItems.map((item) => (
            <div key={item} className="report-support-item">
              {item}
            </div>
          ))}
        </div>
      </Section>

      <SchemaScript data={pageSchema} />
    </>
  );
}
