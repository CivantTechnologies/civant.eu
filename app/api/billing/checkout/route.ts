import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const origin = new URL(request.url).origin;
  const pricingUrl = new URL("/pricing", origin);

  return NextResponse.json({
    message: "Checkout now starts from the pricing signup flow so Civant can create the customer workspace correctly.",
    redirectUrl: pricingUrl.toString(),
  }, { status: 410 });
}
