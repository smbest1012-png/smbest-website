import type { NextConfig } from "next";

/**
 * Static export configuration.
 *
 * The site ships as a fully static bundle (`out/`) so it can run on GitHub
 * Pages (custom domain: smbest.kr) with no server. Vercel serves the same
 * static output, so both hosts stay in sync.
 *
 * `redirects()` is intentionally not used here: it is a server feature and is
 * ignored under `output: "export"`. The root "/" → "/ko/" redirect is handled
 * statically by `public/index.html` (meta refresh + JS + a visible fallback
 * link), which works identically on GitHub Pages and Vercel.
 */
const nextConfig: NextConfig = {
  output: "export",
  // Emit /route/index.html so paths resolve on a static file host and refreshes
  // never 404 (e.g. /ko/products/ → ko/products/index.html).
  trailingSlash: true,
  images: {
    // GitHub Pages has no image optimizer; serve images as authored.
    unoptimized: true,
  },
};

export default nextConfig;
