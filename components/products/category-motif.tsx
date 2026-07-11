import type { ProductCategory } from "@/lib/products/types";
import { cn } from "@/lib/utils";

/**
 * Line-art motifs for the three product categories — drawn, not stock
 * photography. Each category borrows one color from the logo diamond:
 * resin → blue, filament → green, kitchenware → orange.
 */

export const categoryColorClass: Record<ProductCategory, string> = {
  resin: "text-brand-blue",
  filament: "text-brand-green",
  kitchenware: "text-brand-orange",
};

export function CategoryMotif({
  category,
  className,
}: {
  category: ProductCategory;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      aria-hidden="true"
      className={cn(categoryColorClass[category], className)}
    >
      {category === "resin" && (
        <>
          {/* Resin droplet over a stilled surface */}
          <path d="M60 14 C60 14 35 46 35 65 a25 25 0 0 0 50 0 C85 46 60 14 60 14 Z" />
          <path d="M47 66 a13 13 0 0 0 13 13" opacity="0.55" />
          <ellipse cx="60" cy="102" rx="30" ry="5.5" opacity="0.4" />
          <ellipse cx="60" cy="102" rx="15" ry="2.8" opacity="0.25" />
        </>
      )}
      {category === "filament" && (
        <>
          {/* Coiled filament with the strand leaving the spool */}
          <circle cx="52" cy="62" r="9" />
          <circle cx="52" cy="62" r="18" opacity="0.7" />
          <circle cx="52" cy="62" r="27" opacity="0.45" />
          <path d="M79 62 C 94 62 98 50 112 46" opacity="0.85" />
          <circle cx="52" cy="62" r="2" fill="currentColor" stroke="none" />
        </>
      )}
      {category === "kitchenware" && (
        <>
          {/* Bowl profile */}
          <ellipse cx="60" cy="50" rx="35" ry="7" />
          <path d="M25 50 a35 32 0 0 0 70 0" />
          <path d="M50 90 h20" opacity="0.55" />
          <path d="M60 82 v8" opacity="0.55" />
        </>
      )}
    </svg>
  );
}
