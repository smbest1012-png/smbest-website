import type { Dictionary } from "@/lib/i18n/types";

/**
 * English — working translation.
 * Based on the Korean source dictionary and the English copy of the
 * previous smbest.kr site. Replace with reviewed official copy as needed.
 */
const en: Dictionary = {
  meta: {
    title: "SMBEST | Sustainable Materials and 3D Printing Products",
    description:
      "SMBEST is a Busan-based materials company turning natural raw materials such as spent coffee grounds and rice husks into eco-friendly plastics, 3D printing resins and filaments, and kitchenware.",
    aboutTitle: "About | SMBEST",
    aboutDescription:
      "Founded in 2014 on the philosophy of working for the environment and people, SMBEST develops eco-friendly plastic materials and products.",
    productsTitle: "Products | SMBEST",
    productsDescription:
      "Resins and filaments for 3D printing, plus eco-friendly kitchenware — explore SMBEST products.",
    contactTitle: "Contact | SMBEST",
    contactDescription:
      "Product and business inquiries for SMBEST. 13 Baegyangsunhwan-ro, Busanjin-gu, Busan, Korea.",
  },
  nav: {
    home: "Home",
    about: "About",
    products: "Products",
    contact: "Contact",
    smartstore: "Smart Store",
  },
  a11y: {
    skipToContent: "Skip to content",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    selectLanguage: "Select language",
    newTab: "Opens in a new tab",
    mainNavigation: "Main navigation",
    homeLink: "Go to SMBEST home",
  },
  hero: {
    tagline: "Materials · 3D Printing · Prototyping",
    headline: ["From material to production,", "turning ideas into reality"],
    description:
      "SMBEST develops and manufactures eco-friendly 3D printer materials and provides 3D printing and prototype production services.",
    ctaContact: "Request printing & prototyping",
    ctaProducts: "Explore products",
    scroll: "Scroll",
  },
  intro: {
    eyebrow: "About SMBEST",
    heading: "We connect the potential of materials to real products",
    body: [
      "SMBEST is an eco-materials company founded in Busan, Korea in 2014. Built on the philosophy of working for the environment and people, we develop and produce eco-friendly plastic materials and products.",
      "Coffee grounds discarded as household waste; rice husks and sawdust thrown away without a second thought — we find material potential in them, and keep asking how manufacturing can be more sustainable and products more pleasant to use.",
    ],
    values: [
      {
        title: "Sustainable Materials",
        description:
          "We develop bioplastics from natural raw materials instead of petroleum.",
      },
      {
        title: "Practical Innovation",
        description:
          "From resins and filaments to kitchenware, our materials become products people actually use.",
      },
      {
        title: "Better Manufacturing",
        description:
          "Continuous R&D and product innovation set our standard for sustainable manufacturing.",
      },
    ],
  },
  categories: {
    eyebrow: "Products",
    heading: "Three product areas",
    description:
      "From 3D printing materials to everyday goods — the three directions our material technology takes.",
    items: {
      resin: {
        name: "Resin",
        tagline: "Resins for 3D printing",
        description:
          "A range of resins for precise 3D printing. Detailed specifications for each use case are available on our Smart Store.",
        cta: "View resin products",
      },
      filament: {
        name: "Filament",
        tagline: "Filaments for 3D printers",
        description:
          "Eco-friendly 3D printing materials, including our hybrid filament combining PLA with coffee grounds.",
        cta: "View filament products",
      },
      kitchenware: {
        name: "Kitchenware",
        tagline: "Everyday products, material know-how",
        description:
          "Kitchen and household products that bring our eco-material technology into daily life.",
        cta: "View kitchenware",
      },
    },
  },
  featured: {
    eyebrow: "Featured",
    heading: "Featured products",
    description: "A closer look at what SMBEST makes.",
    buy: "Buy on Naver",
    storeNote:
      "Prices and full details are available on each Naver Smart Store product page.",
  },
  materials: {
    eyebrow: "Materials & Technology",
    heading: "From discarded raw material to working material",
    description:
      "Eco-friendly plastic — bioplastic — is made from natural ingredients rather than petroleum. SMBEST revives raw materials that are hard to recycle and turns them into materials that work.",
    items: [
      {
        title: "Coffee-ground plastic",
        description:
          "An eco-friendly plastic made from spent coffee grounds otherwise classified as household waste.",
      },
      {
        title: "Rice-husk & sawdust plastic",
        description:
          "An eco-friendly plastic made from rice husks — the outer shell of the grain — and sawdust.",
      },
      {
        title: "Hybrid filament",
        description:
          "A 3D printer filament combining corn-starch PLA with coffee grounds, extruded to a consistent 1.75 mm.",
      },
    ],
    processTitle: "The journey of a material",
    process: [
      {
        title: "Raw material",
        description:
          "It starts with natural raw materials that used to be thrown away — coffee grounds, rice husks, sawdust.",
      },
      {
        title: "Compounding",
        description:
          "Natural ingredients are blended into eco-friendly plastic materials.",
      },
      {
        title: "Product",
        description:
          "The material becomes everyday products: resins, filaments, kitchenware.",
      },
    ],
  },
  storeCta: {
    heading: "Take a closer look at our products",
    body: "SMBEST's full product range and purchase options are available on our Naver Smart Store.",
    button: "Visit Naver Smart Store",
  },
  contact: {
    eyebrow: "Contact",
    heading: "We're happy to hear from you",
    description:
      "Send product or business inquiries by email and we will get back to you.",
    addressLabel: "Address",
    address: "13 Baegyangsunhwan-ro, Busanjin-gu, Busan, Republic of Korea",
    phoneLabel: "Phone",
    phone: "+82-70-4001-0635",
    emailLabel: "Email",
    email: "sean1012@naver.com",
    hoursNote: "Products can be purchased directly on our Naver Smart Store.",
    mailCta: "Send an email",
    mapCta: "View on map",
  },
  about: {
    eyebrow: "About Us",
    heading: "A materials company for the environment and people",
    lead: "Since its founding in 2014, SMBEST has developed and produced eco-friendly plastic materials and products.",
    greetingTitle: "A message from the CEO",
    greeting: [
      "Hello, I am Sung-Jin Ahn, CEO of SMBEST.",
      "Founded on the philosophy of working for the environment and people, SMBEST develops and produces a range of eco-friendly plastic materials and products. To satisfy our customers with quality products, we have poured our passion into ceaseless R&D and product innovation.",
      "Putting customer value first, we take on the global market with trust and respect — working toward a future where everyone can live in a happy environment.",
    ],
    ceoName: "Sung-Jin Ahn",
    ceoRole: "CEO",
    visionTitle: "Vision",
    vision: "With nature, for people",
    visionBody:
      "We make the everyday products people need while thinking about the environment, adding innovative ideas so that anyone can enjoy using them. A future where everyone lives in a happy environment — that is the tomorrow SMBEST is working toward.",
    areasTitle: "Business areas",
    areas: [
      {
        title: "Eco-friendly plastic materials",
        description:
          "Unlike petroleum-based plastic, our bioplastics are developed and produced from natural raw materials.",
      },
      {
        title: "Filaments for 3D printers",
        description:
          "Eco-friendly filaments made from hard-to-recycle natural raw materials such as coffee grounds and rice husks.",
      },
      {
        title: "Resins for 3D printing",
        description:
          "UV resins for 3D printing, tailored to their use — from dental models to water-washable formulas.",
      },
      {
        title: "Household goods",
        description:
          "Kitchen and household products that add new ideas to eco-friendly plastics.",
      },
      {
        title: "Prototyping",
        description:
          "We turn ideas into physical prototypes with 3D printing technology.",
      },
    ],
  },
  productsPage: {
    eyebrow: "Products",
    heading: "Products",
    description: "Every product can be purchased on our Naver Smart Store.",
    allLabel: "All products",
    detailNote:
      "Prices, options and full specifications are listed on each Smart Store product page.",
    categoryEyebrow: {
      resin: "Resin",
      filament: "Filament",
      kitchenware: "Kitchenware",
    },
  },
  footer: {
    description:
      "A Busan-based materials company making eco-friendly materials and products from natural raw materials such as coffee grounds and rice husks.",
    navTitle: "Menu",
    contactTitle: "Contact",
    companyTitle: "Company",
    ceoLabel: "CEO",
    bizNoLabel: "Business registration no.",
    rights: "All rights reserved.",
  },
  notFound: {
    title: "Page not found",
    body: "The page you requested does not exist or has been moved.",
    backHome: "Back to home",
  },
};

export default en;
