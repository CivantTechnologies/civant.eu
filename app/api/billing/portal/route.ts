import { NextResponse } from "next/server";

export async function POST() {
  const portalUrl = process.env.STRIPE_BILLING_PORTAL_URL;

  if (!portalUrl) {
    return NextResponse.json(
      { message: "Billing portal is not configured yet. Contact support for subscription changes." },
      { status: 503 },
    );
  }

  return NextResponse.json({ redirectUrl: portalUrl });
}
