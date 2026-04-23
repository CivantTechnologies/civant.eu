import {
  getReportLandingMetadata,
  ReportLandingPage,
} from "../../../components/site/ReportLandingPage";

export const dynamic = "force-static";

export const metadata = getReportLandingMetadata(
  "public-construction-procurement-outlook-q4-2026",
);

export default function PublicConstructionProcurementOutlookPage() {
  return (
    <ReportLandingPage reportSlug="public-construction-procurement-outlook-q4-2026" />
  );
}
