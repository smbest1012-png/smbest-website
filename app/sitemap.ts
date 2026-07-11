import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n/config";
import { categories } from "@/lib/products/products";
import { site } from "@/lib/constants/site";
import { localePath } from "@/lib/seo";

// Emit a static sitemap.xml file at export time (no request-time generation).
export const dynamic = "force-static";

const paths = [
  "",
  "/about",
  "/products",
  ...categories.map((c) => `/products/${c}`),
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  // Trailing-slashed absolute URLs to match the exported static pages.
  return paths.map((path) => ({
    url: `${site.url}${localePath("ko", path)}`,
    lastModified,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
    alternates: {
      languages: Object.fromEntries(
        locales.map((l) => [l, `${site.url}${localePath(l, path)}`]),
      ),
    },
  }));
}
