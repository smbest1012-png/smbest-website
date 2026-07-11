import type { Product, ProductCategory } from "@/lib/products/types";

/**
 * SMBEST product catalog — single source of truth.
 *
 * Store URLs were provided by SMBEST (2026-07) and are final.
 *
 * ⚠ TEMPORARY DATA: names/summaries are generic per-category placeholders
 * (isPlaceholder: true). Official product names, one-line descriptions and
 * photos have not been provided yet. When they arrive:
 *   1. Replace `name` / `summary` with the official copy (all 4 locales).
 *   2. Drop the photo into /public/products and set `image`.
 *   3. Set `isPlaceholder: false`.
 * Nothing else in the codebase needs to change.
 */

const placeholderName = {
  resin: {
    ko: "3D 프린팅용 레진",
    en: "Resin for 3D printing",
    zh: "3D打印用树脂",
    ja: "3Dプリント用レジン",
  },
  filament: {
    ko: "3D 프린터용 필라멘트",
    en: "Filament for 3D printers",
    zh: "3D打印机用线材",
    ja: "3Dプリンター用フィラメント",
  },
  kitchenware: {
    ko: "친환경 주방용품",
    en: "Eco-friendly kitchenware",
    zh: "环保厨房用品",
    ja: "エコキッチン用品",
  },
} satisfies Record<ProductCategory, Product["name"]>;

const placeholderSummary = {
  resin: {
    ko: "정밀한 출력을 위한 3D 프린팅용 레진입니다. 상세 사양은 스토어에서 확인해 주세요.",
    en: "A resin for precise 3D printing. See the store page for full specifications.",
    zh: "用于精密打印的3D打印树脂。详细规格请在商店页面查看。",
    ja: "精密な出力のための3Dプリント用レジンです。詳細仕様はストアでご確認ください。",
  },
  filament: {
    ko: "친환경 소재 기술로 만든 3D 프린터용 필라멘트입니다. 상세 사양은 스토어에서 확인해 주세요.",
    en: "A 3D printer filament built on our eco-material technology. See the store page for details.",
    zh: "以环保材料技术制造的3D打印机线材。详情请在商店页面查看。",
    ja: "環境配慮素材の技術でつくられた3Dプリンター用フィラメントです。詳細はストアでご確認ください。",
  },
  kitchenware: {
    ko: "소재 기술을 일상에 담은 주방용품입니다. 상세 정보는 스토어에서 확인해 주세요.",
    en: "Kitchenware that brings our material know-how into daily life. See the store page for details.",
    zh: "将材料技术融入日常的厨房用品。详情请在商店页面查看。",
    ja: "素材技術を暮らしに取り入れたキッチン用品です。詳細はストアでご確認ください。",
  },
} satisfies Record<ProductCategory, Product["summary"]>;

function makeProduct(
  category: ProductCategory,
  storeProductId: string,
  order: number,
  featured = false,
): Product {
  return {
    id: storeProductId,
    slug: `${category}-${String(order).padStart(2, "0")}`,
    category,
    storeUrl: `https://smartstore.naver.com/mog/products/${storeProductId}`,
    image: null, // TODO(SMBEST): 공식 제품 이미지 제공 시 /products/… 경로로 교체
    name: placeholderName[category], // TODO(SMBEST): 공식 제품명으로 교체
    summary: placeholderSummary[category], // TODO(SMBEST): 공식 한 줄 설명으로 교체
    isPlaceholder: true,
    featured,
    order,
  };
}

export const products: Product[] = [
  // ── Resin ────────────────────────────────────────────────
  makeProduct("resin", "8044525896", 1, true),
  makeProduct("resin", "6925858882", 2),
  makeProduct("resin", "6876753347", 3),
  makeProduct("resin", "10301855216", 4),
  // ── Filament ─────────────────────────────────────────────
  makeProduct("filament", "7893753744", 1, true),
  makeProduct("filament", "4215639975", 2),
  makeProduct("filament", "2522282539", 3),
  makeProduct("filament", "2007670927", 4),
  makeProduct("filament", "8404630271", 5),
  // ── Kitchenware ──────────────────────────────────────────
  makeProduct("kitchenware", "10102395782", 1, true),
  makeProduct("kitchenware", "4720974910", 2),
];

export const categories: ProductCategory[] = [
  "resin",
  "filament",
  "kitchenware",
];

export function productsByCategory(category: ProductCategory): Product[] {
  return products
    .filter((p) => p.category === category)
    .sort((a, b) => a.order - b.order);
}

export function featuredProducts(): Product[] {
  return products.filter((p) => p.featured);
}
