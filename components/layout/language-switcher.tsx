"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Languages, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { locales, localeLabels, type Locale } from "@/lib/i18n/config";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

/** Swap the locale prefix while keeping the rest of the path. */
export function localizedPath(pathname: string, locale: Locale): string {
  const rest = pathname.replace(/^\/(ko|en|zh|ja)(?=\/|$)/, "");
  return `/${locale}${rest}`;
}

export function LanguageSwitcher({
  locale,
  label,
  overlay,
}: {
  locale: Locale;
  label: string;
  overlay?: boolean;
}) {
  const pathname = usePathname();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        aria-label={label}
        className={cn(
          "inline-flex h-11 min-w-11 items-center justify-center gap-1.5 rounded-md px-2 text-sm font-medium transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring md:h-9",
          overlay
            ? "text-white/90 hover:bg-white/10 hover:text-white"
            : "text-foreground/80 hover:bg-muted hover:text-foreground",
        )}
      >
        <Languages className="size-4" aria-hidden="true" />
        <span className="hidden sm:inline">{localeLabels[locale]}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-36">
        {locales.map((l) => (
          <DropdownMenuItem key={l} asChild>
            <Link
              href={localizedPath(pathname, l)}
              lang={l}
              hrefLang={l}
              className="flex h-10 items-center justify-between"
            >
              {localeLabels[l]}
              {l === locale && (
                <Check className="size-4 text-primary" aria-hidden="true" />
              )}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
