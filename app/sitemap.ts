import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n/config";
import { categories } from "@/lib/products/products";
import { site } from "@/lib/constants/site";

const paths = [
  "",
  "/about",
  "/products",
  ...categories.map((c) => `/products/${c}`),
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return paths.map((path) => ({
    url: `${site.url}/ko${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
    alternates: {
      languages: Object.fromEntries(
        locales.map((l) => [l, `${site.url}/${l}${path}`]),
      ),
    },
  }));
}
