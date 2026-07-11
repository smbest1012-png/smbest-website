import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";
import type { Product } from "@/lib/products/types";
import { CategoryMotif } from "@/components/products/category-motif";

const placeholderTint: Record<Product["category"], string> = {
  resin: "bg-[hsl(199_45%_94%)]",
  filament: "bg-[hsl(105_28%_92%)]",
  kitchenware: "bg-[hsl(38_45%_93%)]",
};

/**
 * Product card — the whole card is one external link to the product's
 * Naver Smart Store page (opens in a new tab).
 */
export function ProductCard({
  product,
  locale,
  dict,
}: {
  product: Product;
  locale: Locale;
  dict: Pick<Dictionary, "featured" | "productsPage" | "a11y">;
}) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-shadow duration-200 hover:shadow-[0_2px_16px_-4px_hsl(150_18%_12%/0.12)]">
      <div
        className={`relative flex aspect-square items-center justify-center overflow-hidden ${
          product.image ? "bg-white" : placeholderTint[product.category]
        }`}
      >
        {product.image ? (
          // Store detail captures carry labels/badges to the edges, so show
          // the full image (contain on white) instead of cropping with cover.
          <Image
            src={product.image}
            alt={product.name[locale]}
            fill
            sizes="(max-width: 640px) 78vw, (max-width: 1024px) 45vw, 340px"
            className="object-contain transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <CategoryMotif
            category={product.category}
            className="size-28 transition-transform duration-500 group-hover:scale-[1.06] sm:size-32"
          />
        )}
      </div>
      <div className="flex flex-1 flex-col gap-1.5 p-5">
        <p className="eyebrow">
          {dict.productsPage.categoryEyebrow[product.category]}
        </p>
        <h3 className="text-[0.9375rem] font-semibold leading-snug">
          {product.name[locale]}
        </h3>
        <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">
          {product.summary[locale]}
        </p>
        <a
          href={product.storeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center gap-1 pt-3 text-sm font-medium text-primary outline-none after:absolute after:inset-0 after:rounded-lg group-hover:underline group-hover:underline-offset-4 focus-visible:after:ring-2 focus-visible:after:ring-ring"
        >
          {dict.featured.buy}
          <ArrowUpRight
            className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
          <span className="sr-only">
            — {product.name[locale]} ({dict.a11y.newTab})
          </span>
        </a>
      </div>
    </article>
  );
}
