import { ReportLeadCapture } from "./ReportLeadCapture";
import { SchemaScript } from "./SchemaScript";
import { Section } from "./Section";
import { getReportBySlug } from "../../lib/reportDownloads";
import {
  buildArticleSchema,
  buildBreadcrumbSchema,
  buildPageMetadata,
} from "../../lib/seo";

type ReportLandingPageProps = {
  reportSlug: string;
};

export function getReportLandingMetadata(reportSlug: string) {
  const report = getReportBySlug(reportSlug);

  if (!report) {
    throw new Error(`Missing report configuration for ${reportSlug}.`);
  }

  return buildPageMetadata({
    title: report.metaTitle,
    description: report.metaDescription,
    path: report.landingPath,
  });
}

export function ReportLandingPage({ reportSlug }: ReportLandingPageProps) {
  const report = getReportBySlug(reportSlug);

  if (!report) {
    throw new Error(`Missing report configuration for ${reportSlug}.`);
  }

  const pageSchema = [
    ...buildArticleSchema({
      title: report.title,
      description: report.metaDescription,
      path: report.landingPath,
      datePublished: report.datePublished,
    }),
    buildBreadcrumbSchema([
      { name: "Home", item: "https://civant.eu" },
      { name: "Resources", item: "https://civant.eu/resources" },
      { name: "Forecast Reports", item: "https://civant.eu/resources/reports" },
      { name: report.title, item: `https://civant.eu${report.landingPath}` },
    ]),
  ];

  return (
    <>
      <Section className="report-gate-page" muted>
        <div className="report-gate-shell">
          <article className="report-gate-copy">
            <p className="eyebrow">{report.eyebrow}</p>
            <h1 className="headline-xl">{report.title}</h1>
            <p className="text-lead report-gate-subtitle">{report.subtitle}</p>
            <p className="card-body report-gate-summary">{report.landingIntro}</p>

            <div className="report-gate-list-wrap">
              <p className="module-label">Inside the report</p>
              <div className="report-gate-list">
                {report.reportIncludes.map((item) => (
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
      </Section>

      <Section>
        <div className="report-support-strip">
          {report.supportItems.map((item) => (
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
