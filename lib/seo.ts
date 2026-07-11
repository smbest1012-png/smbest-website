import type { Metadata } from "next";
import { locales, localeTags, type Locale } from "@/lib/i18n/config";

/**
 * Locale-prefixed, trailing-slashed path — matches the URLs emitted under
 * `trailingSlash: true` (e.g. "" → "/ko/", "/products/resin" → "/ko/products/resin/").
 */
export function localePath(locale: Locale, path: string): string {
  return `/${locale}${path}/`;
}

/**
 * Canonical + hreflang alternates for a page.
 * `path` is the locale-relative path, e.g. "" or "/products/resin".
 * URLs carry a trailing slash so they point at the actual static file host
 * URL rather than one that would redirect.
 */
export function localeAlternates(
  locale: Locale,
  path: string,
): NonNullable<Metadata["alternates"]> {
  return {
    canonical: localePath(locale, path),
    languages: {
      ...Object.fromEntries(
        locales.map((l) => [localeTags[l], localePath(l, path)]),
      ),
      "x-default": localePath("ko", path),
    },
  };
}
