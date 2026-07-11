import type { Dictionary } from "@/lib/i18n/types";

/**
 * 日本語 — 仮訳(working translation)。
 * 韓国語の原文辞書に基づく自然な仮訳です。公式訳が確定次第、
 * このファイルを差し替えてください。
 */
const ja: Dictionary = {
  meta: {
    title: "SMBEST | 環境配慮素材・3Dプリンティング製品",
    description:
      "コーヒーかすや籾殻などの天然原料から、環境にやさしいプラスチック素材、3Dプリント用レジン・フィラメント、キッチン用品をつくる釜山の素材メーカー、SMBESTです。",
    aboutTitle: "会社紹介 | SMBEST",
    aboutDescription:
      "環境と人を想う企業理念のもと2014年に設立された環境配慮素材メーカー、SMBESTをご紹介します。",
    productsTitle: "製品 | SMBEST",
    productsDescription:
      "3Dプリント用レジンとフィラメント、環境にやさしいキッチン用品 — SMBESTの製品をご紹介します。",
    contactTitle: "お問い合わせ | SMBEST",
    contactDescription:
      "SMBESTへの製品・お取引に関するお問い合わせ。釜山広域市釜山鎮区白楊循環路13。",
  },
  nav: {
    home: "ホーム",
    about: "会社紹介",
    products: "製品",
    contact: "お問い合わせ",
    smartstore: "スマートストア",
  },
  a11y: {
    skipToContent: "本文へスキップ",
    openMenu: "メニューを開く",
    closeMenu: "メニューを閉じる",
    selectLanguage: "言語を選択",
    newTab: "新しいタブで開きます",
    mainNavigation: "メインナビゲーション",
    homeLink: "SMBESTホームへ",
  },
  hero: {
    tagline: "Sustainable Material Innovation",
    headline: ["素材の可能性を、", "より良い製品へ"],
    description:
      "SMBESTは、捨てられていたコーヒーかすや籾殻を素材としてよみがえらせ、3Dプリント材料と日常の製品をつくります。",
    ctaProducts: "製品を見る",
    ctaStore: "Naverスマートストア",
    scroll: "スクロール",
  },
  intro: {
    eyebrow: "About SMBEST",
    heading: "素材が持つ可能性を、製品へつなぎます",
    body: [
      "SMBESTは2014年、韓国・釜山で設立された環境配慮素材メーカーです。環境と人を想う企業理念のもと、さまざまなエコプラスチック素材と製品を開発・生産しています。",
      "生活ごみとして捨てられるコーヒーかす、そのまま捨てられてしまう籾殻やおがくず — 私たちはそこに素材の可能性を見いだし、持続可能なものづくりと、より良い使い心地を追求しています。",
    ],
    values: [
      {
        title: "Sustainable Materials",
        description:
          "石油の代わりに、自然から得た天然原料でバイオプラスチック素材を開発します。",
      },
      {
        title: "Practical Innovation",
        description:
          "レジンやフィラメントからキッチン用品まで、日常で使われる製品として素材を完成させます。",
      },
      {
        title: "Better Manufacturing",
        description:
          "継続的な研究開発と製品革新で、持続可能なものづくりの基準をつくります。",
      },
    ],
  },
  categories: {
    eyebrow: "Products",
    heading: "3つの製品領域",
    description:
      "3Dプリント素材から生活用品まで — 素材技術が向かう3つの方向です。",
    items: {
      resin: {
        name: "レジン",
        tagline: "3Dプリント用レジン",
        description:
          "精密な出力のための3Dプリント用レジンです。用途別の詳細仕様はスマートストアでご確認いただけます。",
        cta: "レジン製品を見る",
      },
      filament: {
        name: "フィラメント",
        tagline: "3Dプリンター用フィラメント",
        description:
          "PLAとコーヒーかすを組み合わせたハイブリッドフィラメントなど、環境にやさしい3Dプリント素材を開発・生産しています。",
        cta: "フィラメント製品を見る",
      },
      kitchenware: {
        name: "キッチン用品",
        tagline: "素材技術を暮らしの中へ",
        description:
          "環境配慮素材の技術を日常に取り入れたキッチン・生活用品です。",
        cta: "キッチン用品を見る",
      },
    },
  },
  featured: {
    eyebrow: "Featured",
    heading: "代表製品",
    description: "SMBESTがつくる製品をご覧ください。",
    buy: "Naverで購入する",
    storeNote:
      "価格や詳細情報は、Naverスマートストアの各商品ページでご確認いただけます。",
  },
  materials: {
    eyebrow: "Materials & Technology",
    heading: "捨てられていた原料が、素材になるまで",
    description:
      "バイオプラスチックと呼ばれる環境配慮プラスチックは、石油ではなく自然から得た天然原料からつくられます。SMBESTはリサイクルが難しい原料を、働く素材としてよみがえらせます。",
    items: [
      {
        title: "コーヒーかすプラスチック",
        description:
          "生活ごみとして分類されるコーヒーかすを活用した、環境にやさしいプラスチック素材です。",
      },
      {
        title: "籾殻・おがくずプラスチック",
        description:
          "稲の外皮である籾殻と、おがくずを活用した環境にやさしいプラスチック素材です。",
      },
      {
        title: "ハイブリッドフィラメント",
        description:
          "トウモロコシのでんぷん由来のPLAとコーヒーかすを組み合わせ、1.75mmで均一に押出した3Dプリンター用フィラメントです。",
      },
    ],
    processTitle: "素材の旅",
    process: [
      {
        title: "原料",
        description:
          "コーヒーかす・籾殻・おがくずなど、捨てられていた天然原料から始まります。",
      },
      {
        title: "素材化",
        description:
          "天然原料を配合し、環境にやさしいプラスチック素材へ。",
      },
      {
        title: "製品",
        description:
          "レジン・フィラメント・キッチン用品など、日常の製品として完成します。",
      },
    ],
  },
  storeCta: {
    heading: "製品をもっと詳しく",
    body: "SMBESTの製品ラインアップと購入オプションは、Naverスマートストアでご確認いただけます。",
    button: "Naverスマートストアへ",
  },
  contact: {
    eyebrow: "Contact",
    heading: "お気軽にお問い合わせください",
    description:
      "製品・お取引に関するお問い合わせはメールでお送りください。確認のうえご返信いたします。",
    addressLabel: "住所",
    address: "韓国 釜山広域市釜山鎮区白楊循環路13",
    phoneLabel: "電話",
    phone: "+82-70-4001-0635",
    emailLabel: "メール",
    email: "sean1012@naver.com",
    hoursNote: "製品はNaverスマートストアで直接ご購入いただけます。",
    mailCta: "メールを送る",
    mapCta: "地図で見る",
  },
  about: {
    eyebrow: "About Us",
    heading: "環境と人を想う素材メーカー",
    lead: "SMBESTは2014年の設立以来、環境にやさしいプラスチック素材と製品を開発・生産してきました。",
    greetingTitle: "代表挨拶",
    greeting: [
      "こんにちは。SMBEST代表のアン・ソンジンです。",
      "環境と人を想う企業理念のもとに設立されたSMBESTは、さまざまなエコプラスチック素材と製品を開発・生産する企業です。優れた製品でお客様にご満足いただけるよう、絶え間ない研究開発と製品革新に情熱を注いでまいりました。",
      "お客様の価値を第一に、信頼と尊重を基本として世界市場に挑戦し、誰もが幸せな環境で暮らせる未来を切り拓くため、これからも努力を続けてまいります。",
    ],
    ceoName: "アン・ソンジン",
    ceoRole: "代表",
    visionTitle: "ビジョン",
    vision: "自然とともに、人のために",
    visionBody:
      "日常に必要な製品をつくりながらも環境を想い、革新的なアイデアを加えて、誰もが楽しく使える製品をつくります。誰もが幸せな環境で暮らす未来 — それがSMBESTの描く明日です。",
    areasTitle: "事業領域",
    areas: [
      {
        title: "環境配慮プラスチック素材",
        description:
          "石油由来のプラスチックとは異なり、自然から得た天然原料でバイオプラスチックを開発・生産します。",
      },
      {
        title: "3Dプリンター用フィラメント",
        description:
          "リサイクルが難しいコーヒーかすや籾殻などの天然原料を活用した、環境にやさしいフィラメントをつくります。",
      },
      {
        title: "3Dプリント用レジン",
        description:
          "歯科模型向けやウォッシャブルなど、用途に合わせた3Dプリント用UVレジンを開発・生産します。",
      },
      {
        title: "生活用品",
        description:
          "エコプラスチックに新しい発想を加えたキッチン・生活用品を開発・生産します。",
      },
      {
        title: "試作品製作",
        description:
          "3Dプリント技術を活用し、アイデアを実物の試作品として形にします。",
      },
    ],
  },
  productsPage: {
    eyebrow: "Products",
    heading: "製品",
    description: "すべての製品はNaverスマートストアでご購入いただけます。",
    allLabel: "すべての製品",
    detailNote:
      "各製品の価格・オプション・詳細仕様は、スマートストアの商品ページでご確認ください。",
    categoryEyebrow: {
      resin: "Resin",
      filament: "Filament",
      kitchenware: "Kitchenware",
    },
  },
  footer: {
    description:
      "コーヒーかすや籾殻などの天然原料から、環境にやさしい素材と製品をつくる釜山の素材メーカーです。",
    navTitle: "メニュー",
    contactTitle: "連絡先",
    companyTitle: "会社情報",
    ceoLabel: "代表",
    bizNoLabel: "事業者登録番号",
    rights: "All rights reserved.",
  },
  notFound: {
    title: "ページが見つかりません",
    body: "お探しのページは存在しないか、移動しました。",
    backHome: "ホームへ戻る",
  },
};

export default ja;
