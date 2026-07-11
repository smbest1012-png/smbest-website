import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";
import { site } from "@/lib/constants/site";
import { Logo } from "@/components/shared/logo";
import { BrandRule } from "@/components/shared/brand-rule";

export function Footer({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const year = new Date().getFullYear();
  const companyName = locale === "ko" ? site.nameKo : site.legalNameEn;
  const ceoName = locale === "ko" ? site.ceoKo : dict.about.ceoName;
  const address = locale === "ko" ? site.addressKo : dict.contact.address;

  const navLinks = [
    { href: `/${locale}`, label: dict.nav.home },
    { href: `/${locale}/about`, label: dict.nav.about },
    { href: `/${locale}/products`, label: dict.nav.products },
    { href: `/${locale}/contact`, label: dict.nav.contact },
  ];

  return (
    <footer>
      <BrandRule />
      <div className="border-t border-border bg-muted/40">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.5fr_1fr_1.2fr_1.3fr] md:gap-8 md:px-8">
          <div>
            <Logo className="text-[1.7rem]" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {dict.footer.description}
            </p>
            <a
              href={site.smartStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-1 rounded-sm text-sm font-medium text-primary underline-offset-4 outline-none hover:underline focus-visible:ring-2 focus-visible:ring-ring"
            >
              {dict.nav.smartstore}
              <ArrowUpRight className="size-3.5" aria-hidden="true" />
              <span className="sr-only">({dict.a11y.newTab})</span>
            </a>
          </div>

          <nav aria-label={dict.footer.navTitle}>
            <h2 className="eyebrow">{dict.footer.navTitle}</h2>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="rounded-sm text-sm text-foreground/80 underline-offset-4 outline-none hover:text-foreground hover:underline focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="eyebrow">{dict.footer.contactTitle}</h2>
            <ul className="mt-4 space-y-2.5 text-sm text-foreground/80">
              <li>
                <a
                  href={`tel:${site.phoneIntl}`}
                  className="rounded-sm underline-offset-4 outline-none hover:underline focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {dict.contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="rounded-sm underline-offset-4 outline-none hover:underline focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {site.email}
                </a>
              </li>
              <li className="leading-relaxed">{address}</li>
            </ul>
          </div>

          <div>
            <h2 className="eyebrow">{dict.footer.companyTitle}</h2>
            <ul className="mt-4 space-y-2.5 text-sm text-foreground/80">
              <li>{companyName}</li>
              <li>
                {dict.footer.ceoLabel} · {ceoName}
              </li>
              <li>
                {dict.footer.bizNoLabel} {site.bizRegistrationNo}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border">
          <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between md:px-8">
            <p>
              © {year} {site.legalNameEn} {dict.footer.rights}
            </p>
            <p className="font-display italic">with nature, for people</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
