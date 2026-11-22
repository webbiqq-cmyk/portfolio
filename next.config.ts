import type { NextConfig } from "next";

// Static export: every route is pre-rendered to real HTML in ./dist,
// so the site can be served by any static host (Vercel, Netlify, Cloudflare Pages, GitHub Pages).
const nextConfig: NextConfig = {
  output: "export",
  distDir: "dist",
  trailingSlash: false,
  images: {
    // No image optimizer exists on a static host; images are pre-sized to WebP
    // with `npm run images` (scripts/optimize-images.mjs) and served as-is.
    unoptimized: true,
  },
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;
