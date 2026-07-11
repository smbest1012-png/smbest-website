import type { Product, ProductCategory } from "@/lib/products/types";

/**
 * SMBEST product catalog — single source of truth.
 *
 * Store URLs and Korean product names were provided by SMBEST (2026-07).
 * The original store listing titles are kept as comments above each entry.
 * en/zh/ja names and all summaries are derived from those titles
 * (임시 번역 — 공식 번역 수령 시 교체).
 *
 * Product photos: captured from the smartstore detail pages by SMBEST
 * (2026-07-11), converted to webp in /public/products.
 * 레진 브랜드 로마자 "RORNART"는 제품 라벨 표기로 확인함.
 *
 * Still pending from SMBEST:
 *   - 홈딱이 romanization ("Homttagi" assumed; 상세 이미지에는 "홈닦기" 표기 —
 *     스토어 제목(홈딱이)을 따름), 설거지 친구들 → "Dishwashing Friends" assumed
 */

const store = (id: string) => `https://smartstore.naver.com/mog/products/${id}`;

export const products: Product[] = [
  // ── Resin ────────────────────────────────────────────────
  // 원문: 고속출력 / 워셔블 레진 / 론아트 W 레진 / 1kg
  {
    id: "8044525896",
    slug: "resin-01",
    category: "resin",
    storeUrl: store("8044525896"),
    image: "/products/resin-01.webp",
    name: {
      ko: "론아트 W 워셔블 레진 1kg",
      en: "RORNART W Washable Resin 1kg",
      zh: "RORNART W 水洗树脂 1kg",
      ja: "RORNART W ウォッシャブルレジン 1kg",
    },
    summary: {
      ko: "물 세척이 가능한 고속 출력용 워셔블 UV 레진입니다.",
      en: "A fast-printing washable UV resin that cleans up with water.",
      zh: "支持高速打印、可用水清洗的水洗型UV树脂。",
      ja: "水洗いできる高速出力対応のウォッシャブルUVレジンです。",
    },
    isPlaceholder: false,
    featured: true,
    order: 1,
  },
  // 원문: 무독성 / 고속출력 / 론아트 P시리즈 / UV레진 / 1kg
  {
    id: "6925858882",
    slug: "resin-02",
    category: "resin",
    storeUrl: store("6925858882"),
    image: "/products/resin-02.webp",
    name: {
      ko: "론아트 P시리즈 UV 레진 1kg",
      en: "RORNART P-Series UV Resin 1kg",
      zh: "RORNART P系列 UV树脂 1kg",
      ja: "RORNART Pシリーズ UVレジン 1kg",
    },
    summary: {
      ko: "무독성 고속 출력용 UV 레진입니다.",
      en: "A non-toxic UV resin built for fast printing.",
      zh: "无毒、支持高速打印的UV树脂。",
      ja: "無毒性・高速出力対応のUVレジンです。",
    },
    isPlaceholder: false,
    featured: false,
    order: 2,
  },
  // 원문: 덴탈 무독성 / 고속출력 / 론아트 D-Model / UV레진 1kg
  {
    id: "6876753347",
    slug: "resin-03",
    category: "resin",
    storeUrl: store("6876753347"),
    image: "/products/resin-03.webp",
    name: {
      ko: "론아트 D-Model 덴탈 레진 1kg",
      en: "RORNART D-Model Dental Resin 1kg",
      zh: "RORNART D-Model 牙科树脂 1kg",
      ja: "RORNART D-Model デンタルレジン 1kg",
    },
    summary: {
      ko: "덴탈 모델용 무독성 고속 출력 UV 레진입니다.",
      en: "A non-toxic, fast-printing UV resin for dental models.",
      zh: "用于牙科模型的无毒高速UV树脂。",
      ja: "歯科模型向けの無毒性・高速出力UVレジンです。",
    },
    isPlaceholder: false,
    featured: false,
    order: 3,
  },
  // 원문: 워셔블 덴탈 무독성 / 고속출력 / 론아트 D-Model / UV레진 1kg
  {
    id: "10301855216",
    slug: "resin-04",
    category: "resin",
    storeUrl: store("10301855216"),
    image: "/products/resin-04.webp",
    name: {
      ko: "론아트 D-Model 워셔블 덴탈 레진 1kg",
      en: "RORNART D-Model Washable Dental Resin 1kg",
      zh: "RORNART D-Model 水洗牙科树脂 1kg",
      ja: "RORNART D-Model ウォッシャブルデンタルレジン 1kg",
    },
    summary: {
      ko: "물 세척이 가능한 덴탈 모델용 무독성 UV 레진입니다.",
      en: "A water-washable, non-toxic UV resin for dental models.",
      zh: "可水洗、用于牙科模型的无毒UV树脂。",
      ja: "水洗いできる歯科模型向けの無毒性UVレジンです。",
    },
    isPlaceholder: false,
    featured: false,
    order: 4,
  },
  // ── Filament ─────────────────────────────────────────────
  // 원문: 무독성 3D펜 스틱 필라멘트/고온 PLA/30cm X 30개/9M
  {
    id: "7893753744",
    slug: "filament-01",
    category: "filament",
    storeUrl: store("7893753744"),
    image: "/products/filament-01.webp",
    name: {
      ko: "3D펜 스틱 필라멘트 PLA (30cm × 30개)",
      en: "3D Pen Stick Filament PLA (30cm × 30)",
      zh: "3D笔用PLA棒状线材（30cm×30支）",
      ja: "3Dペン用スティックフィラメント PLA（30cm×30本）",
    },
    summary: {
      ko: "고온 방식 3D펜용 무독성 PLA 스틱 필라멘트입니다. 30cm 스틱 30개, 총 9m 구성입니다.",
      en: "Non-toxic PLA stick filament for high-temperature 3D pens — thirty 30cm sticks, 9m in total.",
      zh: "适用于高温3D笔的无毒PLA棒状线材，30cm×30支，共9米。",
      ja: "高温タイプの3Dペン向け無毒性PLAスティックフィラメント。30cm×30本、合計9mです。",
    },
    isPlaceholder: false,
    featured: false,
    order: 1,
  },
  // 원문: 고온/국산/무독성/3D펜 필라멘트/5M/PLA
  {
    id: "4215639975",
    slug: "filament-02",
    category: "filament",
    storeUrl: store("4215639975"),
    image: "/products/filament-02.webp",
    name: {
      ko: "3D펜 필라멘트 PLA (5m)",
      en: "3D Pen Filament PLA (5m)",
      zh: "3D笔用PLA线材（5m）",
      ja: "3Dペン用フィラメント PLA（5m）",
    },
    summary: {
      ko: "국내 생산한 고온 방식 3D펜용 무독성 PLA 필라멘트입니다. 5m 단위로 제공됩니다.",
      en: "Non-toxic PLA filament for high-temperature 3D pens, made in Korea. Sold in 5m lengths.",
      zh: "韩国生产的无毒高温3D笔线材，以5米为单位供应。",
      ja: "韓国産・高温タイプの3Dペン向け無毒性PLAフィラメント。5m単位でのご提供です。",
    },
    isPlaceholder: false,
    featured: false,
    order: 2,
  },
  // 원문: 무독성 3D펜 필라멘트 (소재)
  {
    id: "2522282539",
    slug: "filament-03",
    category: "filament",
    storeUrl: store("2522282539"),
    image: "/products/filament-03.webp",
    name: {
      ko: "무독성 3D펜 필라멘트 (소재)",
      en: "Non-Toxic 3D Pen Filament (Material)",
      zh: "无毒3D笔线材（材料）",
      ja: "無毒性3Dペンフィラメント（素材）",
    },
    summary: {
      ko: "3D펜용 무독성 필라멘트 소재입니다. 옵션 구성은 스토어에서 확인해 주세요.",
      en: "Non-toxic filament material for 3D pens. See the store page for options.",
      zh: "3D笔用无毒线材材料，具体选项请在商店页面确认。",
      ja: "3Dペン用の無毒性フィラメント素材です。オプション構成はストアでご確認ください。",
    },
    isPlaceholder: false,
    featured: false,
    order: 3,
  },
  // 원문: 에스엠베스트/3D프린터/커피필라멘트 (1kg)
  {
    id: "2007670927",
    slug: "filament-04",
    category: "filament",
    storeUrl: store("2007670927"),
    image: "/products/filament-04.webp",
    name: {
      ko: "커피 필라멘트 1kg",
      en: "Coffee Filament 1kg",
      zh: "咖啡线材 1kg",
      ja: "コーヒーフィラメント 1kg",
    },
    summary: {
      ko: "커피박(커피 찌꺼기)을 활용한 3D 프린터용 친환경 필라멘트입니다.",
      en: "An eco-friendly 3D printer filament made with used coffee grounds.",
      zh: "利用咖啡渣制成的环保3D打印机线材。",
      ja: "コーヒーかすを活用した3Dプリンター用エコフィラメントです。",
    },
    isPlaceholder: false,
    featured: true,
    order: 4,
  },
  // 원문: [약초함유]에스엠베스트/한방(약초)필라멘트 1kg
  {
    id: "8404630271",
    slug: "filament-05",
    category: "filament",
    storeUrl: store("8404630271"),
    image: "/products/filament-05.webp",
    name: {
      ko: "한방(약초) 필라멘트 1kg",
      en: "Herbal Filament 1kg",
      zh: "汉方（草药）线材 1kg",
      ja: "漢方（薬草）フィラメント 1kg",
    },
    summary: {
      ko: "약초 성분을 함유한 3D 프린터용 필라멘트입니다.",
      en: "A 3D printer filament made with traditional medicinal herbs.",
      zh: "含有草药成分的3D打印机线材。",
      ja: "薬草成分を含む3Dプリンター用フィラメントです。",
    },
    isPlaceholder: false,
    featured: false,
    order: 5,
  },
  // ── Kitchenware ──────────────────────────────────────────
  // 원문: 홈딱이/틈새청소/청소솔
  {
    id: "10102395782",
    slug: "kitchenware-01",
    category: "kitchenware",
    storeUrl: store("10102395782"),
    image: "/products/kitchenware-01.webp",
    name: {
      ko: "홈딱이 틈새 청소솔",
      en: "Homttagi Crevice Cleaning Brush",
      zh: "缝隙清洁刷",
      ja: "すき間掃除ブラシ",
    },
    summary: {
      ko: "홈과 틈새를 구석까지 닦아내는 청소솔입니다.",
      en: "A cleaning brush that reaches into grooves and narrow gaps.",
      zh: "深入沟槽与缝隙的清洁刷。",
      ja: "溝やすき間の奥まで届く掃除ブラシです。",
    },
    isPlaceholder: false,
    featured: true,
    order: 1,
  },
  // 원문: 텀블러 세척/설거지 친구들/청소솔
  {
    id: "4720974910",
    slug: "kitchenware-02",
    category: "kitchenware",
    storeUrl: store("4720974910"),
    image: "/products/kitchenware-02.webp",
    name: {
      ko: "설거지 친구들 텀블러 청소솔",
      en: "Dishwashing Friends Tumbler Brush",
      zh: "保温杯·餐具清洁刷",
      ja: "タンブラー洗いブラシ",
    },
    summary: {
      ko: "텀블러 세척과 설거지를 위한 청소솔입니다.",
      en: "A cleaning brush for tumblers and everyday dishwashing.",
      zh: "用于清洗保温杯和日常餐具的清洁刷。",
      ja: "タンブラーの洗浄や食器洗いのための掃除ブラシです。",
    },
    isPlaceholder: false,
    featured: false,
    order: 2,
  },
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
