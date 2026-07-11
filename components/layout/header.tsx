"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";
import { site } from "@/lib/constants/site";
import { Logo } from "@/components/shared/logo";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { MobileNav } from "@/components/layout/mobile-nav";

export interface HeaderStrings {
  nav: Dictionary["nav"];
  a11y: Dictionary["a11y"];
}

export function Header({
  locale,
  dict,
}: {
  locale: Locale;
  dict: HeaderStrings;
}) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Home renders a dark full-bleed hero behind the header,
  // so the header starts as a light-on-dark overlay there.
  const isHome = pathname === `/${locale}`;
  const overlay = isHome && !scrolled;

  const links = [
    { href: `/${locale}/about`, label: dict.nav.about },
    { href: `/${locale}/products`, label: dict.nav.products },
    { href: `/${locale}/contact`, label: dict.nav.contact },
  ];

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,box-shadow] duration-300",
        overlay
          ? "border-b border-transparent bg-transparent text-white"
          : "border-b border-border bg-background/90 text-foreground backdrop-blur-md",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:h-[4.5rem] md:px-8">
        <Link
          href={`/${locale}`}
          className="rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
          aria-label={dict.a11y.homeLink}
          onClick={(e) => {
            // Already on home: reset to the initial view (hero at top)
            if (isHome) {
              e.preventDefault();
              const reduce = window.matchMedia(
                "(prefers-reduced-motion: reduce)",
              ).matches;
              window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
            }
          }}
        >
          <Logo className="text-[1.4rem] md:text-[1.55rem]" />
        </Link>

        <nav
          aria-label={dict.a11y.mainNavigation}
          className="hidden items-center gap-8 md:flex"
        >
          {links.map((link) => {
            const current =
              pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={current ? "page" : undefined}
                className={cn(
                  "rounded-sm text-sm font-medium underline-offset-8 outline-none transition-colors hover:underline focus-visible:ring-2 focus-visible:ring-ring",
                  current && "underline",
                  overlay
                    ? "text-white/90 hover:text-white"
                    : "text-foreground/80 hover:text-foreground",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-1.5 md:gap-3">
          <LanguageSwitcher
            locale={locale}
            label={dict.a11y.selectLanguage}
            overlay={overlay}
          />
          <a
            href={site.smartStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "hidden h-9 items-center gap-1 rounded-md border px-3.5 text-sm font-medium transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring sm:inline-flex",
              overlay
                ? "border-white/40 text-white hover:bg-white/10"
                : "border-primary/30 text-primary hover:bg-secondary",
            )}
          >
            {dict.nav.smartstore}
            <ArrowUpRight className="size-3.5" aria-hidden="true" />
            <span className="sr-only">({dict.a11y.newTab})</span>
          </a>
          <MobileNav locale={locale} dict={dict} overlay={overlay} />
        </div>
      </div>
    </header>
  );
}
