"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { defaultLocale, isLocale, type Locale } from "@/lib/i18n/config";

/*
 * Localized 404. not-found boundaries don't receive route params, so the
 * locale is derived from the URL. Copy is kept inline (a tiny map) to
 * avoid shipping full dictionaries to the client.
 */
const copy: Record<Locale, { title: string; body: string; backHome: string }> =
  {
    ko: {
      title: "페이지를 찾을 수 없습니다",
      body: "요청하신 페이지가 존재하지 않거나 이동되었습니다.",
      backHome: "홈으로 돌아가기",
    },
    en: {
      title: "Page not found",
      body: "The page you requested does not exist or has been moved.",
      backHome: "Back to home",
    },
    zh: {
      title: "找不到页面",
      body: "您访问的页面不存在或已被移动。",
      backHome: "返回首页",
    },
    ja: {
      title: "ページが見つかりません",
      body: "お探しのページは存在しないか、移動しました。",
      backHome: "ホームへ戻る",
    },
  };

export default function NotFound() {
  const pathname = usePathname();
  const segment = pathname.split("/")[1] ?? "";
  const locale: Locale = isLocale(segment) ? segment : defaultLocale;
  const t = copy[locale];

  return (
    <section className="mx-auto flex max-w-6xl flex-col items-center px-5 pt-40 pb-28 text-center md:px-8">
      <p className="font-display text-7xl font-medium text-muted-foreground/50 italic md:text-8xl">
        404
      </p>
      <h1 className="font-display mt-6 text-3xl font-medium md:text-4xl">
        {t.title}
      </h1>
      <p className="mt-3 text-muted-foreground">{t.body}</p>
      <Link
        href={`/${locale}`}
        className="mt-8 inline-flex h-11 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors outline-none hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        {t.backHome}
      </Link>
    </section>
  );
}
