import type { NextConfig } from "next";

// Standard Next.js on Vercel: every route is statically generated (SSG) at build time,
// and next/image serves AVIF/WebP at responsive sizes via Vercel's image optimizer.
const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;
