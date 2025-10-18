import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optional: you can still enable experimental flags if needed,
  // but "appDir" is no longer valid in Next.js 14+
  reactStrictMode: true,
  swcMinify: true
};

export default nextConfig;

