import { NextRequest, NextResponse } from "next/server";
import { ApiRequestError, assertFormOrigin, enforceFormRateLimit, readBoundedJson, requireMailApiKey } from "../../../lib/apiSecurity";
import { validateContactPayload } from "../../../lib/formValidation";

/**
 * POST /api/contact
 *
 * Accepts contact form submissions and forwards them to hello@civant.eu
 * via Resend. Set the RESEND_API_KEY environment variable in Vercel.
 */

export async function POST(request: NextRequest) {
  try {
    assertFormOrigin(request);
    const validation = validateContactPayload(await readBoundedJson(request));
    if (!validation.ok) throw new ApiRequestError(400, validation.message);
    const { name, email, reason, message, marketingOptIn } = validation.data;
    const apiKey = requireMailApiKey();
    await enforceFormRateLimit(request, email);

    // Send via Resend API (no SDK needed, just fetch)
    const res = await fetch("https://api.resend.com/emails", {
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
        subject: `[${reason}] New enquiry from ${name}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px;">
            <h2 style="color: #08111F;">New Contact Form Submission</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 12px; font-weight: bold; color: #555; width: 140px;">Name</td>
                <td style="padding: 8px 12px;">${escapeHtml(name)}</td>
              </tr>
              <tr>
                <td style="padding: 8px 12px; font-weight: bold; color: #555;">Email</td>
                <td style="padding: 8px 12px;"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 12px; font-weight: bold; color: #555;">Topic</td>
                <td style="padding: 8px 12px;">${escapeHtml(reason)}</td>
              </tr>
              <tr>
                <td style="padding: 8px 12px; font-weight: bold; color: #555;">Marketing opt-in</td>
                <td style="padding: 8px 12px;">${marketingOptIn ? "Yes" : "No"}</td>
              </tr>
            </table>
            <div style="margin-top: 16px; padding: 16px; background: #f5f5f5; border-radius: 8px;">
              <p style="margin: 0; white-space: pre-wrap;">${escapeHtml(message)}</p>
            </div>
            <p style="margin-top: 16px; font-size: 12px; color: #999;">
              Sent from civant.eu contact form
            </p>
          </div>
        `,
      }),
    });

    if (!res.ok) {
      console.error("[contact] Email provider rejected request:", res.status);
      return NextResponse.json(
        { error: "Failed to send message. Please try again." },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof ApiRequestError) {
      return NextResponse.json({ error: error.message }, {
        status: error.status,
        headers: error.retryAfter ? { "Retry-After": String(error.retryAfter) } : undefined,
      });
    }
    console.error("[contact] Email delivery failed.");
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
