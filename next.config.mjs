const isDevelopment = process.env.NODE_ENV === "development";

// Keep statically generated Next pages compatible with inline hydration and
// React style attributes. This baseline is not a strict nonce/hash CSP: removing
// unsafe-inline requires a separately validated rendering/build change.
// https://nextjs.org/docs/app/guides/content-security-policy#without-nonces
const contentSecurityPolicy = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDevelopment ? " 'unsafe-eval'" : ""}`,
  "script-src-attr 'none'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data:",
  "font-src 'self'",
  // Pricing uses this one browser-side API. Mail requests are server-side;
  // hosted Stripe checkout uses a navigation, not an embedded script or frame.
  `connect-src 'self' https://ossoggqkqifdkihybbew.supabase.co/functions/v1/create-checkout-session${isDevelopment ? " ws://localhost:* ws://127.0.0.1:*" : ""}`,
  "object-src 'none'",
  "base-uri 'none'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "frame-src 'none'",
  "worker-src 'none'",
  ...(!isDevelopment ? ["upgrade-insecure-requests"] : []),
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: contentSecurityPolicy },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const publicAssetHeaders = [
  { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  pageExtensions: ["ts", "tsx"],
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    qualities: [75, 100],
  },
  async redirects() {
    return [
      {
        source: "/about",
        destination: "/company",
        permanent: true,
      },
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
      {
        source: "/solution",
        destination: "/solutions",
        permanent: true,
      },
      {
        source: "/proof",
        destination: "/methodology",
        permanent: true,
      },
      {
        source: "/challenge",
        destination: "/methodology",
        permanent: true,
      },
      {
        source: "/resources/the-incumbent-advantage",
        destination: "/resources/the-incumbent-advantage-in-public-sector-procurement",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/screenshots/:path*",
        headers: publicAssetHeaders,
      },
      {
        source: "/:asset(civant-logo.png|civant-micrologo.jpg|favicon-16.png|favicon-32.png|apple-touch-icon.png|icon-192.png|icon-512.png|og-civant.png)",
        headers: publicAssetHeaders,
      },
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
