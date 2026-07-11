import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";
import type { ProductCategory } from "@/lib/products/types";
import { CategoryMotif } from "@/components/products/category-motif";

const order: ProductCategory[] = ["resin", "filament", "kitchenware"];

export function CategorySection({
  locale,
  categories,
}: {
  locale: Locale;
  categories: Dictionary["categories"];
}) {
  return (
    <section className="border-y border-border bg-muted/40">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">{categories.eyebrow}</p>
            <h2 className="font-display mt-4 text-3xl leading-tight font-medium md:text-[2.5rem]">
              {categories.heading}
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            {categories.description}
          </p>
        </div>

        {/* Editorial asymmetric grid: resin leads tall, the others stack */}
        <div className="mt-12 grid gap-5 md:grid-cols-2 md:grid-rows-2">
          {order.map((category, index) => {
            const copy = categories.items[category];
            const lead = index === 0;
            return (
              <Link
                key={category}
                href={`/${locale}/products/${category}`}
                className={cn(
                  "group relative flex flex-col justify-between overflow-hidden rounded-lg border border-border bg-card p-7 outline-none transition-shadow duration-200 hover:shadow-[0_2px_20px_-6px_hsl(150_18%_12%/0.14)] focus-visible:ring-2 focus-visible:ring-ring md:p-8",
                  lead ? "min-h-72 md:row-span-2" : "min-h-56",
                )}
              >
                <CategoryMotif
                  category={category}
                  className={cn(
                    "self-end transition-transform duration-500 group-hover:scale-[1.05]",
                    lead ? "size-36 md:size-48" : "size-24 md:size-28",
                  )}
                />
                <div className="mt-10">
                  <h3 className="font-display text-2xl font-medium md:text-[1.7rem]">
                    {copy.name}
                  </h3>
                  <p className="mt-1 text-[0.8125rem] font-medium tracking-wide text-muted-foreground uppercase">
                    {copy.tagline}
                  </p>
                  <p
                    className={cn(
                      "mt-3 text-sm leading-relaxed text-muted-foreground",
                      lead ? "max-w-md" : "line-clamp-2 md:max-w-md",
                    )}
                  >
                    {copy.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary group-hover:underline group-hover:underline-offset-4">
                    {copy.cta}
                    <ArrowRight
                      className="size-4 transition-transform duration-200 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
