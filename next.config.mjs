/** @type {import('next').NextConfig} */
const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const publicAssetHeaders = [
  { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
];

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  pageExtensions: ["ts", "tsx"],
  eslint: {
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
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
