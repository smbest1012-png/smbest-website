import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";
import { featuredProducts } from "@/lib/products/products";
import { ProductCard } from "@/components/products/product-card";

export function FeaturedSection({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Pick<Dictionary, "featured" | "productsPage" | "a11y">;
}) {
  const products = featuredProducts();

  return (
    <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="eyebrow">{dict.featured.eyebrow}</p>
          <h2 className="font-display mt-4 text-3xl leading-tight font-medium md:text-[2.5rem]">
            {dict.featured.heading}
          </h2>
        </div>
        <Link
          href={`/${locale}/products`}
          className="inline-flex items-center gap-1.5 self-start rounded-sm text-sm font-medium text-primary underline-offset-4 outline-none hover:underline focus-visible:ring-2 focus-visible:ring-ring md:self-auto"
        >
          {dict.productsPage.allLabel}
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            locale={locale}
            dict={dict}
          />
        ))}
      </div>

      <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
        {dict.featured.storeNote}
      </p>
    </section>
  );
}
