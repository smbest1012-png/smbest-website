import { site } from "@/lib/constants/site";

/**
 * Organization structured data — confirmed company facts only
 * (2024 견적서 + 기존 공식 사이트 기준). Unverified claims stay out.
 */
export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.nameEn,
    alternateName: site.nameKo,
    url: site.url,
    logo: `${site.url}/icon.svg`,
    email: site.email,
    telephone: site.phoneIntl,
    foundingDate: "2014-06",
    address: {
      "@type": "PostalAddress",
      streetAddress: "13 Baegyangsunhwan-ro",
      addressLocality: "Busanjin-gu",
      addressRegion: "Busan",
      addressCountry: "KR",
    },
    sameAs: [site.smartStoreUrl],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
