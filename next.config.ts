import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: {
    buildActivity: false,
  },
  experimental: {
    appDir: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },  
  /* config options here */
};

export default nextConfig;
