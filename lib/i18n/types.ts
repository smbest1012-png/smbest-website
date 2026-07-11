import type { ProductCategory } from "@/lib/products/types";

export interface CategoryCopy {
  name: string;
  tagline: string;
  description: string;
  cta: string;
}

export interface HistoryEntry {
  date: string;
  event: string;
}

export interface Dictionary {
  meta: {
    title: string;
    description: string;
    aboutTitle: string;
    aboutDescription: string;
    productsTitle: string;
    productsDescription: string;
    contactTitle: string;
    contactDescription: string;
  };
  nav: {
    home: string;
    about: string;
    products: string;
    contact: string;
    smartstore: string;
  };
  a11y: {
    skipToContent: string;
    openMenu: string;
    closeMenu: string;
    selectLanguage: string;
    newTab: string;
    mainNavigation: string;
    homeLink: string;
  };
  hero: {
    tagline: string;
    headline: [string, string];
    description: string;
    ctaProducts: string;
    ctaStore: string;
    scroll: string;
  };
  intro: {
    eyebrow: string;
    heading: string;
    body: string[];
    values: { title: string; description: string }[];
  };
  categories: {
    eyebrow: string;
    heading: string;
    description: string;
    items: Record<ProductCategory, CategoryCopy>;
  };
  featured: {
    eyebrow: string;
    heading: string;
    description: string;
    buy: string;
    storeNote: string;
  };
  materials: {
    eyebrow: string;
    heading: string;
    description: string;
    items: { title: string; description: string }[];
    processTitle: string;
    process: { title: string; description: string }[];
  };
  storeCta: {
    heading: string;
    body: string;
    button: string;
  };
  contact: {
    eyebrow: string;
    heading: string;
    description: string;
    addressLabel: string;
    address: string;
    phoneLabel: string;
    phone: string;
    faxLabel: string;
    fax: string;
    emailLabel: string;
    email: string;
    hoursNote: string;
    mailCta: string;
    mapCta: string;
  };
  about: {
    eyebrow: string;
    heading: string;
    lead: string;
    greetingTitle: string;
    greeting: string[];
    ceoName: string;
    ceoRole: string;
    visionTitle: string;
    vision: string;
    visionBody: string;
    historyTitle: string;
    history: HistoryEntry[];
    areasTitle: string;
    areas: { title: string; description: string }[];
  };
  productsPage: {
    eyebrow: string;
    heading: string;
    description: string;
    allLabel: string;
    detailNote: string;
    categoryEyebrow: Record<ProductCategory, string>;
  };
  footer: {
    description: string;
    navTitle: string;
    contactTitle: string;
    companyTitle: string;
    ceoLabel: string;
    bizNoLabel: string;
    rights: string;
  };
  notFound: {
    title: string;
    body: string;
    backHome: string;
  };
}
