import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* export-ADDED BEFORE BUILD */

    output : 'export',
    images : {
      unoptimized:true,
    }



};

export default nextConfig;
