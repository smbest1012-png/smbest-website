import type { Dictionary } from "@/lib/i18n/types";

/**
 * 中文（简体）— 临时译文(working translation)。
 * 基于韩语原文辞典的自然翻译。官方译文确定后请替换本文件。
 */
const zh: Dictionary = {
  meta: {
    title: "SMBEST | 环保材料与3D打印产品",
    description:
      "SMBEST是位于韩国釜山的材料企业，利用咖啡渣、稻壳等天然原料制造环保塑料材料、3D打印树脂与线材以及厨房用品。",
    aboutTitle: "公司介绍 | SMBEST",
    aboutDescription:
      "SMBEST成立于2014年，秉持关爱环境与人的企业理念，开发环保塑料材料与产品。",
    productsTitle: "产品 | SMBEST",
    productsDescription:
      "3D打印树脂与线材、环保厨房用品 — 了解SMBEST的产品。",
    contactTitle: "联系我们 | SMBEST",
    contactDescription:
      "SMBEST产品与业务咨询。韩国釜山广域市釜山镇区白杨循环路13。",
  },
  nav: {
    home: "首页",
    about: "公司介绍",
    products: "产品",
    contact: "联系我们",
    smartstore: "智能商店",
  },
  a11y: {
    skipToContent: "跳至正文",
    openMenu: "打开菜单",
    closeMenu: "关闭菜单",
    selectLanguage: "选择语言",
    newTab: "在新标签页中打开",
    mainNavigation: "主导航",
    homeLink: "前往SMBEST首页",
  },
  hero: {
    tagline: "材料 · 3D打印 · 原型制作",
    headline: ["从材料到打印，", "让创意成为现实"],
    description:
      "SMBEST研发并生产环保3D打印机材料，并提供3D打印代工与原型制作服务。",
    ctaContact: "咨询打印与原型制作",
    ctaProducts: "浏览产品",
    scroll: "滚动",
  },
  intro: {
    eyebrow: "About SMBEST",
    heading: "把材料的潜力连接到真实的产品",
    body: [
      "SMBEST是2014年在韩国釜山成立的环保材料企业。我们秉持关爱环境与人的企业理念，开发并生产多种环保塑料材料与产品。",
      "被当作生活垃圾丢弃的咖啡渣，轻易被抛弃的稻壳和木屑 — 我们从中发现材料的可能性，不断思考更可持续的制造方式和更好的使用体验。",
    ],
    values: [
      {
        title: "Sustainable Materials",
        description: "以取自自然的天然原料替代石油，开发生物塑料材料。",
      },
      {
        title: "Practical Innovation",
        description:
          "从树脂、线材到厨房用品，让材料最终成为人们日常使用的产品。",
      },
      {
        title: "Better Manufacturing",
        description: "以持续的研发与产品创新，树立可持续制造的标准。",
      },
    ],
  },
  categories: {
    eyebrow: "Products",
    heading: "三大产品领域",
    description: "从3D打印材料到生活用品 — 材料技术延伸的三个方向。",
    items: {
      resin: {
        name: "树脂",
        tagline: "3D打印用树脂",
        description:
          "用于精密打印的3D打印树脂系列。各用途的详细规格请在智能商店查看。",
        cta: "查看树脂产品",
      },
      filament: {
        name: "线材",
        tagline: "3D打印机用线材",
        description:
          "开发并生产环保3D打印材料，包括将PLA与咖啡渣结合的混合线材。",
        cta: "查看线材产品",
      },
      kitchenware: {
        name: "厨房用品",
        tagline: "融入材料技术的生活产品",
        description: "将环保材料技术带入日常生活的厨房与生活用品。",
        cta: "查看厨房用品",
      },
    },
  },
  featured: {
    eyebrow: "Featured",
    heading: "代表产品",
    description: "了解SMBEST制造的产品。",
    buy: "在Naver购买",
    storeNote: "价格与详细信息请在Naver智能商店的商品页面查看。",
  },
  materials: {
    eyebrow: "Materials & Technology",
    heading: "从废弃原料到实用材料",
    description:
      "被称为生物塑料的环保塑料，由取自自然的天然原料制成，而非石油。SMBEST让难以回收的原料重获新生，成为真正可用的材料。",
    items: [
      {
        title: "咖啡渣塑料",
        description: "利用被归为生活垃圾的咖啡渣制成的环保塑料材料。",
      },
      {
        title: "稻壳·木屑塑料",
        description: "利用稻谷外壳（稻壳）和木屑制成的环保塑料材料。",
      },
      {
        title: "混合线材",
        description:
          "将玉米淀粉提取的PLA与咖啡渣结合，以1.75mm均匀挤出的3D打印机线材。",
      },
    ],
    processTitle: "材料的旅程",
    process: [
      {
        title: "原料",
        description: "始于曾被丢弃的天然原料 — 咖啡渣、稻壳、木屑。",
      },
      {
        title: "材料化",
        description: "将天然原料配比混合，制成环保塑料材料。",
      },
      {
        title: "产品",
        description: "最终成为树脂、线材、厨房用品等日常产品。",
      },
    ],
  },
  storeCta: {
    heading: "进一步了解我们的产品",
    body: "SMBEST的产品系列与购买选项，请访问Naver智能商店查看。",
    button: "前往Naver智能商店",
  },
  contact: {
    eyebrow: "Contact",
    heading: "欢迎随时咨询",
    description: "产品与业务咨询请发送邮件，我们会尽快回复。",
    addressLabel: "地址",
    address: "韩国釜山广域市釜山镇区白杨循环路13",
    phoneLabel: "电话",
    phone: "+82-70-4001-0635",
    emailLabel: "邮箱",
    email: "sean1012@naver.com",
    hoursNote: "产品可直接在Naver智能商店购买。",
    mailCta: "发送邮件",
    mapCta: "在地图中查看",
  },
  about: {
    eyebrow: "About Us",
    heading: "关爱环境与人的材料企业",
    lead: "自2014年成立以来，SMBEST一直致力于开发和生产环保塑料材料与产品。",
    greetingTitle: "CEO致辞",
    greeting: [
      "您好，我是SMBEST代表安成镇。",
      "SMBEST以关爱环境与人的企业理念创立，是一家开发并生产多种环保塑料材料与产品的企业。为了以优质产品回馈客户，我们始终倾注热情于持续的研发与产品创新。",
      "我们以客户价值为先，以信赖与尊重为本，挑战全球市场，并将不懈努力，开创人人都能生活在幸福环境中的未来。",
    ],
    ceoName: "安成镇",
    ceoRole: "代表",
    visionTitle: "愿景",
    vision: "与自然同行，为人而造",
    visionBody:
      "我们在制造日常所需产品的同时关爱环境，融入创新理念，让每个人都能愉快使用。人人都生活在幸福环境中的未来 — 这就是SMBEST描绘的明天。",
    areasTitle: "业务领域",
    areas: [
      {
        title: "环保塑料材料",
        description:
          "不同于石油基塑料，我们以取自自然的天然原料开发并生产生物塑料。",
      },
      {
        title: "3D打印机用线材",
        description:
          "利用咖啡渣、稻壳等难以回收的天然原料，制造环保线材。",
      },
      {
        title: "3D打印用树脂",
        description:
          "开发并生产牙科模型用、可水洗等多种用途的3D打印UV树脂。",
      },
      {
        title: "生活用品",
        description: "开发并生产为环保塑料注入新理念的厨房与生活用品。",
      },
      {
        title: "原型制作",
        description: "利用3D打印技术，将创意制作成实物原型。",
      },
    ],
  },
  productsPage: {
    eyebrow: "Products",
    heading: "产品",
    description: "所有产品均可在Naver智能商店购买。",
    allLabel: "全部产品",
    detailNote: "各产品的价格、选项与详细规格，请在智能商店的商品页面查看。",
    categoryEyebrow: {
      resin: "Resin",
      filament: "Filament",
      kitchenware: "Kitchenware",
    },
  },
  footer: {
    description:
      "位于韩国釜山的材料企业，利用咖啡渣、稻壳等天然原料制造环保材料与产品。",
    navTitle: "菜单",
    contactTitle: "联系方式",
    companyTitle: "公司信息",
    ceoLabel: "代表",
    bizNoLabel: "营业执照号",
    rights: "All rights reserved.",
  },
  notFound: {
    title: "找不到页面",
    body: "您访问的页面不存在或已被移动。",
    backHome: "返回首页",
  },
};

export default zh;
