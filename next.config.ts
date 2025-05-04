import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  //output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/leol',
  assetPrefix: '/leol/',
};

export default nextConfig;
