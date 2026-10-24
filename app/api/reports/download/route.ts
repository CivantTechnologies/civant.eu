import { NextRequest, NextResponse } from "next/server";
import {
  getReportBySlug,
  renderReportHtml,
  verifyReportDownloadToken,
} from "../../../../lib/reportDownloads";
import { ApiRequestError } from "../../../../lib/apiSecurity";

export async function GET(request: NextRequest) {
  const tokens = request.nextUrl.searchParams.getAll("token");
  const token = tokens[0];

  if (!token || tokens.length !== 1) {
    return new NextResponse("Missing token.", { status: 400 });
  }

  let payload;
  try {
    payload = verifyReportDownloadToken(token);
  } catch (error) {
    if (error instanceof ApiRequestError) {
      return new NextResponse(error.message, { status: error.status, headers: { "Cache-Control": "private, no-store" } });
    }
    throw error;
  }

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
      "Referrer-Policy": "no-referrer",
      "X-Content-Type-Options": "nosniff",
      "Content-Security-Policy": "default-src 'none'; img-src https://civant.eu; style-src 'unsafe-inline'; base-uri 'none'; form-action 'none'; frame-ancestors 'none'",
    },
  });
}
