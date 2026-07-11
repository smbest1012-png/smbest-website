import type { Metadata } from "next";
import { locales, localeTags, type Locale } from "@/lib/i18n/config";

/**
 * Canonical + hreflang alternates for a page.
 * `path` is the locale-relative path, e.g. "" or "/products/resin".
 */
export function localeAlternates(
  locale: Locale,
  path: string,
): NonNullable<Metadata["alternates"]> {
  return {
    canonical: `/${locale}${path}`,
    languages: {
      ...Object.fromEntries(locales.map((l) => [localeTags[l], `/${l}${path}`])),
      "x-default": `/ko${path}`,
    },
  };
}
