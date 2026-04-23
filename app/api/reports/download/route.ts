import { NextRequest, NextResponse } from "next/server";
import {
  getReportBySlug,
  renderReportHtml,
  verifyReportDownloadToken,
} from "../../../../lib/reportDownloads";

export async function GET(request: NextRequest) {
  const token = request.nextUrl.searchParams.get("token");

  if (!token) {
    return new NextResponse("Missing token.", { status: 400 });
  }

  const payload = verifyReportDownloadToken(token);

  if (!payload) {
    return new NextResponse("This download link is invalid or has expired.", {
      status: 403,
    });
  }

  const report = getReportBySlug(payload.reportSlug);

  if (!report) {
    return new NextResponse("Report not found.", { status: 404 });
  }

  return new NextResponse(renderReportHtml(report), {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Content-Disposition": `attachment; filename="${report.fileName}"`,
      "Cache-Control": "private, no-store, max-age=0",
    },
  });
}
