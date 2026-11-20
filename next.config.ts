import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/shipyard",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;