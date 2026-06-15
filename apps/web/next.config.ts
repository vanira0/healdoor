import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow images from public directory (default) and any external sources if needed later
    unoptimized: false,
  },
};

export default nextConfig;
