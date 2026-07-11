import "server-only";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";

/*
 * Dictionaries are loaded lazily so each locale's copy is code-split
 * and never shipped to another locale's pages.
 */
const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  ko: () => import("@/lib/i18n/dictionaries/ko").then((m) => m.default),
  en: () => import("@/lib/i18n/dictionaries/en").then((m) => m.default),
  zh: () => import("@/lib/i18n/dictionaries/zh").then((m) => m.default),
  ja: () => import("@/lib/i18n/dictionaries/ja").then((m) => m.default),
};

export function getDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale]();
}
