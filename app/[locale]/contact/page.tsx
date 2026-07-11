import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { localeAlternates } from "@/lib/seo";
import { PageHeader } from "@/components/shared/page-header";
import { ContactSection } from "@/components/home/contact-section";
import { StoreCtaSection } from "@/components/home/store-cta-section";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale);
  return {
    title: dict.meta.contactTitle,
    description: dict.meta.contactDescription,
    alternates: localeAlternates(locale, "/contact"),
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale);

  return (
    <>
      <PageHeader
        eyebrow={dict.contact.eyebrow}
        title={dict.contact.heading}
        lead={dict.contact.description}
      />
      <ContactSection
        locale={locale}
        contact={dict.contact}
        newTabLabel={dict.a11y.newTab}
        showHeading={false}
      />
      <StoreCtaSection
        storeCta={dict.storeCta}
        newTabLabel={dict.a11y.newTab}
      />
    </>
  );
}
