import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["fakestoreapi.com", "picsum.photos"], // Allow images from this domain
  },
};

export default nextConfig;
