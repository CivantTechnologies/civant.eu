import { NextRequest, NextResponse } from "next/server";

/**
 * POST /api/contact
 *
 * Accepts contact form submissions and forwards them to hello@civant.eu
 * via Resend. Set the RESEND_API_KEY environment variable in Vercel.
 *
 * Fallback: if RESEND_API_KEY is not set, logs the submission and returns
 * success so the form still works during development.
 */

type ContactPayload = {
  name: string;
  email: string;
  reason: string;
  message: string;
  marketingOptIn: boolean;
};

export async function POST(request: NextRequest) {
  try {
    const body: ContactPayload = await request.json();

    const { name, email, reason, message, marketingOptIn } = body;

    if (!name || !email || !reason || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 },
      );
    }

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      // Dev fallback: log and return success
      console.log("[contact] No RESEND_API_KEY set. Submission:", {
        name,
        email,
        reason,
        marketingOptIn,
        messagePreview: message.slice(0, 80),
      });
      return NextResponse.json({ success: true, mode: "dev" });
    }

    // Send via Resend API (no SDK needed, just fetch)
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
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
      const errorData = await res.json().catch(() => ({}));
      console.error("[contact] Resend error:", res.status, errorData);
      return NextResponse.json(
        { error: "Failed to send message. Please try again." },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[contact] Unexpected error:", error);
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
