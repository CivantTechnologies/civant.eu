import Link from "next/link";
import { SchemaScript } from "../../../components/site/SchemaScript";
import { Section } from "../../../components/site/Section";
import { getAllReports } from "../../../lib/reportDownloads";
import {
  buildBreadcrumbSchema,
  buildCollectionPageSchema,
  buildPageMetadata,
} from "../../../lib/seo";

export const dynamic = "force-static";

const reports = getAllReports();

export const metadata = buildPageMetadata({
  title: "Forecast Reports",
  description:
    "Sector forecast reports from Civant, including public-safe outlooks for education, healthcare, and public construction demand across European public-sector markets.",
  path: "/resources/reports",
});

const pageSchema = [
  buildCollectionPageSchema({
    name: "Forecast Reports",
    description:
      "Public-safe sector outlooks from Civant showing where demand is forming across European public-sector markets.",
    path: "/resources/reports",
    items: reports.map((report) => ({
      name: report.title,
      path: report.landingPath,
      description: report.metaDescription,
    })),
  }),
  buildBreadcrumbSchema([
    { name: "Home", item: "https://civant.eu" },
    { name: "Resources", item: "https://civant.eu/resources" },
    { name: "Forecast Reports", item: "https://civant.eu/resources/reports" },
  ]),
];

export default function ReportsPage() {
  return (
    <>
      <Section muted>
        <p className="eyebrow">Forecast Reports</p>
        <h1 className="headline-xl">Sector reports built to spark smarter follow-up</h1>
        <p className="text-lead">
          Civant forecast reports are public-safe sector outlooks designed to
          help teams understand where demand is forming, what shapes that demand
          by market, and where deeper account work is worth the effort.
        </p>
      </Section>

      <Section className="resources-page">
        <div className="market-link-panel market-link-panel-compact report-hub-intro">
          <p className="headline-lg">A cleaner home for downloadable outlooks</p>
          <p className="card-body">
            The main resources library is for explainers, methodology, and
            market intelligence articles. This page is where gated sector
            outlooks live.
          </p>
        </div>

        <div className="card-grid resources-grid">
          {reports.map((report) => (
            <article key={report.slug} className="card resource-card module-card">
              <p className="module-label">{report.eyebrow}</p>
              <h2 className="card-title">{report.title}</h2>
              <p className="card-body">{report.subtitle}</p>
              <p className="comparison-line">Snapshot dated {report.snapshotDate}</p>
              <Link href={report.landingPath} className="card-link-cta">
                View report
              </Link>
            </article>
          ))}
        </div>
      </Section>

      <SchemaScript data={pageSchema} />
    </>
  );
}
