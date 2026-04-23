import {
  getReportLandingMetadata,
  ReportLandingPage,
} from "../../../components/site/ReportLandingPage";

export const dynamic = "force-static";

export const metadata = getReportLandingMetadata(
  "healthcare-procurement-outlook-q4-2026",
);

export default function HealthcareProcurementOutlookPage() {
  return (
    <ReportLandingPage reportSlug="healthcare-procurement-outlook-q4-2026" />
  );
}
