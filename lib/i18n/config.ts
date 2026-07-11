export const locales = ["ko", "en", "zh", "ja"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "ko";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** BCP 47 tags for <html lang> and Open Graph. */
export const localeTags: Record<Locale, string> = {
  ko: "ko-KR",
  en: "en-US",
  zh: "zh-CN",
  ja: "ja-JP",
};

/** Native-language labels for the language switcher. */
export const localeLabels: Record<Locale, string> = {
  ko: "한국어",
  en: "English",
  zh: "中文",
  ja: "日本語",
};
