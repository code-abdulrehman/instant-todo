import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ✅ Tell Next.js to look for routes in src/
  experimental: {
    appDir: true,
  },
};

export default nextConfig;

