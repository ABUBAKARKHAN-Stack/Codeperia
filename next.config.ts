import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: { remotePatterns: [{ hostname: "cdn.sanity.io" }] },
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
};

export default nextConfig;
