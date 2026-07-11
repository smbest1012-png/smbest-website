import type { Metadata } from "next";
import { notFound } from "next/navigation";
import "@/app/globals.css";
import { locales, localeTags, isLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { localeAlternates } from "@/lib/seo";
import { fontStylesheet, fontStyleVars } from "@/lib/fonts";
import { site } from "@/lib/constants/site";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { OrganizationJsonLd } from "@/components/shared/organization-jsonld";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale);

  return {
    metadataBase: new URL(site.url),
    title: {
      default: dict.meta.title,
      template: "%s",
    },
    description: dict.meta.description,
    alternates: localeAlternates(locale, ""),
    openGraph: {
      type: "website",
      siteName: site.nameEn,
      title: dict.meta.title,
      description: dict.meta.description,
      locale: localeTags[locale].replace("-", "_"),
      url: `/${locale}`,
    },
    robots: { index: true, follow: true },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale: Locale = rawLocale;
  const dict = await getDictionary(locale);

  return (
    <html lang={localeTags[locale]} style={fontStyleVars(locale)}>
      <body className="flex min-h-svh flex-col">
        {/* Per-locale self-hosted fonts; hoisted to <head> by React */}
        <link
          rel="stylesheet"
          href={fontStylesheet(locale)}
          precedence="default"
        />
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2.5 focus:text-sm focus:text-primary-foreground"
        >
          {dict.a11y.skipToContent}
        </a>
        <Header locale={locale} dict={{ nav: dict.nav, a11y: dict.a11y }} />
        <main id="content" className="flex-1">
          {children}
        </main>
        <Footer locale={locale} dict={dict} />
        <OrganizationJsonLd />
      </body>
    </html>
  );
}
