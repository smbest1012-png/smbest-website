import type { MetadataRoute } from "next";
import { site } from "@/lib/constants/site";

// Emit a static robots.txt file at export time (no request-time generation).
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
