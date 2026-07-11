import type { Locale } from "@/lib/i18n/config";

/**
 * Typography system — self-hosted variable fonts via Fontsource
 * (see scripts/build-fonts.mjs for why next/font/google isn't used).
 *
 * Display: EB Garamond — echoes the garamond-style serif of the SMBEST
 * wordmark. Latin glyphs in headlines render in Garamond; CJK glyphs
 * fall through to the locale's Noto Serif.
 * Body: locale-matched Noto Sans (covers Latin as well).
 *
 * Each locale loads exactly one stylesheet (/fonts/{locale}.css); the
 * unicode-range subsets mean browsers fetch only the glyph files a page
 * actually renders.
 */

const fontPairs: Record<Locale, { sans: string; serif: string }> = {
  ko: { sans: "Noto Sans KR Variable", serif: "Noto Serif KR Variable" },
  en: { sans: "Noto Sans KR Variable", serif: "Noto Serif KR Variable" },
  zh: { sans: "Noto Sans SC Variable", serif: "Noto Serif SC Variable" },
  ja: { sans: "Noto Sans JP Variable", serif: "Noto Serif JP Variable" },
};

/** Stylesheet URL for a locale's font bundle. */
export function fontStylesheet(locale: Locale): string {
  return `/fonts/${locale}.css`;
}

/** Inline CSS variables activating the locale's font pair. */
export function fontStyleVars(locale: Locale): React.CSSProperties {
  const pair = fontPairs[locale];
  return {
    "--font-sans-active": `'${pair.sans}'`,
    "--font-display-active": `'${pair.serif}'`,
  } as React.CSSProperties;
}
