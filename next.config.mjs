/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  distDir: ".next-main",
  pageExtensions: ["ts", "tsx"],
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
