import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { isLocale, locales } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { localeAlternates } from "@/lib/seo";
import { categories, productsByCategory } from "@/lib/products/products";
import type { ProductCategory } from "@/lib/products/types";
import { PageHeader } from "@/components/shared/page-header";
import { ProductCard } from "@/components/products/product-card";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    categories.map((category) => ({ locale, category })),
  );
}

function isCategory(value: string): value is ProductCategory {
  return (categories as string[]).includes(value);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; category: string }>;
}): Promise<Metadata> {
  const { locale, category } = await params;
  if (!isLocale(locale) || !isCategory(category)) notFound();
  const dict = await getDictionary(locale);
  const copy = dict.categories.items[category];
  return {
    title: `${copy.tagline} | SMBEST`,
    description: copy.description,
    alternates: localeAlternates(locale, `/products/${category}`),
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ locale: string; category: string }>;
}) {
  const { locale, category } = await params;
  if (!isLocale(locale) || !isCategory(category)) notFound();
  const dict = await getDictionary(locale);
  const copy = dict.categories.items[category];
  const items = productsByCategory(category);
  const others = categories.filter((c) => c !== category);

  return (
    <>
      <PageHeader
        eyebrow={dict.productsPage.categoryEyebrow[category]}
        title={copy.tagline}
        lead={copy.description}
      />

      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <nav className="pt-8">
          <Link
            href={`/${locale}/products`}
            className="inline-flex items-center gap-1.5 rounded-sm text-sm font-medium text-muted-foreground underline-offset-4 outline-none hover:text-foreground hover:underline focus-visible:ring-2 focus-visible:ring-ring"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            {dict.productsPage.allLabel}
          </Link>
        </nav>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              locale={locale}
              dict={{
                featured: dict.featured,
                productsPage: dict.productsPage,
                a11y: dict.a11y,
              }}
            />
          ))}
        </div>

        <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
          {dict.productsPage.detailNote}
        </p>

        <div className="mt-14 mb-16 border-t border-border pt-8 md:mb-20">
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-8">
            {others.map((other) => (
              <Link
                key={other}
                href={`/${locale}/products/${other}`}
                className="inline-flex items-center gap-1.5 rounded-sm text-sm font-medium text-primary underline-offset-4 outline-none hover:underline focus-visible:ring-2 focus-visible:ring-ring"
              >
                {dict.categories.items[other].cta}
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
