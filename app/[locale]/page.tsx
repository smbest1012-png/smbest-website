import { isLocale } from "@/lib/i18n/config";
import { notFound } from "next/navigation";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { HomeHero } from "@/components/home/home-hero";
import { IntroSection } from "@/components/home/intro-section";
import { CategorySection } from "@/components/home/category-section";
import { FeaturedSection } from "@/components/home/featured-section";
import { MaterialsSection } from "@/components/home/materials-section";
import { StoreCtaSection } from "@/components/home/store-cta-section";
import { ContactSection } from "@/components/home/contact-section";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale);

  return (
    <>
      <HomeHero locale={locale} hero={dict.hero} />
      <IntroSection intro={dict.intro} />
      <CategorySection locale={locale} categories={dict.categories} />
      <FeaturedSection
        locale={locale}
        dict={{
          featured: dict.featured,
          productsPage: dict.productsPage,
          a11y: dict.a11y,
        }}
      />
      <MaterialsSection materials={dict.materials} />
      <StoreCtaSection storeCta={dict.storeCta} newTabLabel={dict.a11y.newTab} />
      <ContactSection
        locale={locale}
        contact={dict.contact}
        newTabLabel={dict.a11y.newTab}
      />
    </>
  );
}
