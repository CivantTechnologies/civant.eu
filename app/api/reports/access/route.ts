import { NextRequest, NextResponse } from "next/server";
import {
  createReportDownloadToken,
  getReportBySlug,
  validateReportLead,
} from "../../../../lib/reportDownloads";
import { ApiRequestError, assertFormOrigin, enforceFormRateLimit, getSiteOrigin, readBoundedJson, requireMailApiKey } from "../../../../lib/apiSecurity";

export async function POST(request: NextRequest) {
  try {
    assertFormOrigin(request);
    const validation = validateReportLead(await readBoundedJson(request));

    if (!validation.ok) {
      return NextResponse.json({ error: validation.message }, { status: 400 });
    }
    const body = validation.data;
    const report = getReportBySlug(body.reportSlug);

    if (!report) {
      return NextResponse.json(
        { error: "That report is not available." },
        { status: 404 },
      );
    }

    const email = body.email;
    const siteUrl = getSiteOrigin();
    const apiKey = requireMailApiKey();
    const token = createReportDownloadToken(report.slug, email);
    const downloadUrl = `${siteUrl}/api/reports/download?token=${encodeURIComponent(token)}`;
    await enforceFormRateLimit(request, email);

    await Promise.all([
      fetch("https://api.resend.com/emails", {
        method: "POST",
        redirect: "error",
        signal: AbortSignal.timeout(10000),
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Civant Website <website@civant.eu>",
          to: ["hello@civant.eu"],
          reply_to: email,
          subject: `[Report Download] ${report.title} requested by ${body.name}`,
          html: `
            <div style="font-family: sans-serif; max-width: 640px;">
              <h2 style="color: #08111F;">New report download request</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr><td style="padding: 8px 12px; font-weight: bold; width: 160px;">Report</td><td style="padding: 8px 12px;">${escapeHtml(
                  report.title,
                )}</td></tr>
                <tr><td style="padding: 8px 12px; font-weight: bold;">Name</td><td style="padding: 8px 12px;">${escapeHtml(
                  body.name,
                )}</td></tr>
                <tr><td style="padding: 8px 12px; font-weight: bold;">Work email</td><td style="padding: 8px 12px;"><a href="mailto:${escapeHtml(
                  email,
                )}">${escapeHtml(email)}</a></td></tr>
                <tr><td style="padding: 8px 12px; font-weight: bold;">Company</td><td style="padding: 8px 12px;">${escapeHtml(
                  body.company,
                )}</td></tr>
                <tr><td style="padding: 8px 12px; font-weight: bold;">Role</td><td style="padding: 8px 12px;">${escapeHtml(
                  body.role,
                )}</td></tr>
                <tr><td style="padding: 8px 12px; font-weight: bold;">Website</td><td style="padding: 8px 12px;">${escapeHtml(
                  body.companyWebsite?.trim() || "Not provided",
                )}</td></tr>
                <tr><td style="padding: 8px 12px; font-weight: bold;">Marketing opt-in</td><td style="padding: 8px 12px;">${
                  body.marketingOptIn ? "Yes" : "No"
                }</td></tr>
              </table>
              <p style="margin-top: 20px;">
                Download link: <a href="${downloadUrl}">${downloadUrl}</a>
              </p>
              <p style="margin-top: 20px; font-size: 12px; color: #7b8794;">
                Sent from civant.eu report gate
              </p>
            </div>
          `,
        }),
      }),
      fetch("https://api.resend.com/emails", {
        method: "POST",
        redirect: "error",
        signal: AbortSignal.timeout(10000),
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Civant <hello@civant.eu>",
          to: [email],
          subject: `Your copy of ${report.title}`,
          html: `
            <div style="font-family: sans-serif; max-width: 640px;">
              <h2 style="color: #08111F;">Here is your report</h2>
              <p>Thanks for requesting <strong>${escapeHtml(report.title)}</strong>.</p>
              <p>
                You can access it here:
                <a href="${downloadUrl}">Download the report</a>
              </p>
              <p>
                This preview is designed to show how Civant sees the market without exposing
                the full buyer-level workflow inside the platform.
              </p>
              <p>
                If you want to go deeper into the category, reply to this email or explore
                <a href="${siteUrl}/pricing">Civant pricing</a>.
              </p>
            </div>
          `,
        }),
      }),
    ]).then(async (responses) => {
      const failed = responses.find((response) => !response.ok);

      if (failed) {
        throw new Error(`Email provider rejected request: ${failed.status}`);
      }
    });

    return NextResponse.json({
      success: true,
      downloadUrl,
      deliveredByEmail: true,
    });
  } catch (error) {
    if (error instanceof ApiRequestError) {
      return NextResponse.json({ error: error.message }, {
        status: error.status,
        headers: error.retryAfter ? { "Retry-After": String(error.retryAfter) } : undefined,
      });
    }
    console.error("[report-access] Email delivery failed.");
    return NextResponse.json(
      { error: "We could not deliver the report. Please try again." },
      { status: 500 },
    );
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
