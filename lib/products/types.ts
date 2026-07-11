export type ProductCategory = "resin" | "filament" | "kitchenware";

export interface LocalizedText {
  ko: string;
  en: string;
  zh: string;
  ja: string;
}

export interface Product {
  id: string;
  slug: string;
  category: ProductCategory;
  /** Naver Smart Store product URL — the single source of truth for purchase. */
  storeUrl: string;
  /**
   * Product photo under /public/products.
   * null → the UI renders a material-motif placeholder until the
   * official product photo is supplied.
   */
  image: string | null;
  name: LocalizedText;
  summary: LocalizedText;
  /**
   * true while name/summary are generic placeholders.
   * Replace with official product copy, then flip to false.
   */
  isPlaceholder: boolean;
  featured: boolean;
  order: number;
}
