import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { isLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { localeAlternates } from "@/lib/seo";
import { categories, productsByCategory } from "@/lib/products/products";
import { PageHeader } from "@/components/shared/page-header";
import { ProductCard } from "@/components/products/product-card";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale);
  return {
    title: dict.meta.productsTitle,
    description: dict.meta.productsDescription,
    alternates: localeAlternates(locale, "/products"),
  };
}

export default async function ProductsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale);

  return (
    <>
      <PageHeader
        eyebrow={dict.productsPage.eyebrow}
        title={dict.productsPage.heading}
        lead={dict.productsPage.description}
      />

      <div className="mx-auto max-w-6xl px-5 md:px-8">
        {categories.map((category) => {
          const copy = dict.categories.items[category];
          const items = productsByCategory(category);
          return (
            <section
              key={category}
              className="border-b border-border py-14 last:border-b-0 md:py-20"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="eyebrow">
                    {dict.productsPage.categoryEyebrow[category]}
                  </p>
                  <h2 className="font-display mt-2 text-2xl leading-tight font-medium md:text-3xl">
                    {copy.tagline}
                  </h2>
                </div>
                <Link
                  href={`/${locale}/products/${category}`}
                  className="inline-flex items-center gap-1.5 self-start rounded-sm text-sm font-medium text-primary underline-offset-4 outline-none hover:underline focus-visible:ring-2 focus-visible:ring-ring sm:self-auto"
                >
                  {copy.cta}
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </div>
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
            </section>
          );
        })}

        <p className="pt-8 pb-16 text-xs leading-relaxed text-muted-foreground md:pb-20">
          {dict.productsPage.detailNote}
        </p>
      </div>
    </>
  );
}
