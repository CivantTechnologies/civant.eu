import Link from "next/link";
import { ReportRequestForm } from "../../../components/site/ReportRequestForm";
import { SchemaScript } from "../../../components/site/SchemaScript";
import { Section } from "../../../components/site/Section";
import { buildBreadcrumbSchema, buildPageMetadata } from "../../../lib/seo";

export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  title: "Request a Sector Report",
  description:
    "Request a Civant sector forecast report for a specific industry, market, buyer type, or European public procurement question.",
  path: "/resources/request-report",
});

const pageSchema = buildBreadcrumbSchema([
  { name: "Home", item: "https://civant.eu" },
  { name: "Resources", item: "https://civant.eu/resources" },
  { name: "Forecast Reports", item: "https://civant.eu/resources/reports" },
  {
    name: "Request a Sector Report",
    item: "https://civant.eu/resources/request-report",
  },
]);

export default function RequestReportPage() {
  return (
    <>
      <Section className="hero-block hero-section">
        <p className="eyebrow">Forecast Reports</p>
        <h1 className="headline-xl">Request a sector report</h1>
        <p className="text-lead">
          Civant&apos;s report library will keep growing. Tell us which sector,
          country, buyer group, or procurement question would help your team
          plan earlier, and we will review it for a future report cycle.
        </p>
        <div className="button-row">
          <Link href="/resources/reports" className="btn btn-secondary">
            View Current Reports
          </Link>
        </div>
      </Section>

      <Section muted>
        <ReportRequestForm />
      </Section>

      <SchemaScript data={pageSchema} />
    </>
  );
}
