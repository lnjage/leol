import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  
  basePath: '/leol',
  assetPrefix: '/leol/',
  images: {
    unoptimized: true,
  },
  
};

export default nextConfig;
