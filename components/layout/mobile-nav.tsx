"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { locales, localeLabels, type Locale } from "@/lib/i18n/config";
import { site } from "@/lib/constants/site";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Logo } from "@/components/shared/logo";
import { BrandRule } from "@/components/shared/brand-rule";
import type { HeaderStrings } from "@/components/layout/header";
import { localizedPath } from "@/components/layout/language-switcher";

export function MobileNav({
  locale,
  dict,
  overlay,
}: {
  locale: Locale;
  dict: HeaderStrings;
  overlay?: boolean;
}) {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();

  const links = [
    { href: `/${locale}`, label: dict.nav.home },
    { href: `/${locale}/about`, label: dict.nav.about },
    { href: `/${locale}/products`, label: dict.nav.products },
    { href: `/${locale}/contact`, label: dict.nav.contact },
  ];

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        aria-label={dict.a11y.openMenu}
        className={cn(
          "inline-flex size-11 items-center justify-center rounded-md transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring md:hidden",
          overlay
            ? "text-white hover:bg-white/10"
            : "text-foreground hover:bg-muted",
        )}
      >
        <Menu className="size-5" aria-hidden="true" />
      </SheetTrigger>
      <SheetContent
        side="right"
        closeLabel={dict.a11y.closeMenu}
        className="w-[85vw] max-w-sm gap-0 p-0"
      >
        <SheetHeader className="p-6 pb-4">
          <SheetTitle>
            <Logo className="text-2xl" />
            <span className="sr-only">SMBEST</span>
          </SheetTitle>
        </SheetHeader>
        <BrandRule className="mx-6 w-auto" />
        <nav
          aria-label={dict.a11y.mainNavigation}
          className="flex flex-col px-3 py-4"
        >
          {links.map((link) => {
            const current = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                aria-current={current ? "page" : undefined}
                className={cn(
                  "rounded-md px-3 py-3.5 text-lg font-medium outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ring",
                  current
                    ? "bg-secondary text-secondary-foreground"
                    : "text-foreground hover:bg-muted",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div className="px-6">
          <div className="rule" />
          <p className="eyebrow pt-4">{dict.a11y.selectLanguage}</p>
          <ul className="grid grid-cols-2 gap-2 pt-3">
            {locales.map((l) => (
              <li key={l}>
                <Link
                  href={localizedPath(pathname, l)}
                  lang={l}
                  hrefLang={l}
                  onClick={() => setOpen(false)}
                  aria-current={l === locale ? "true" : undefined}
                  className={cn(
                    "flex h-11 items-center justify-center rounded-md border text-sm font-medium outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ring",
                    l === locale
                      ? "border-primary/40 bg-secondary text-secondary-foreground"
                      : "border-border text-foreground hover:bg-muted",
                  )}
                >
                  {localeLabels[l]}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-auto p-6">
          <a
            href={site.smartStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 items-center justify-center gap-1.5 rounded-md bg-primary text-[0.9375rem] font-medium text-primary-foreground transition-colors outline-none hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-ring"
          >
            {dict.nav.smartstore}
            <ArrowUpRight className="size-4" aria-hidden="true" />
            <span className="sr-only">({dict.a11y.newTab})</span>
          </a>
        </div>
      </SheetContent>
    </Sheet>
  );
}
