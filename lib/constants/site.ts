/**
 * SMBEST company constants — single source of truth.
 *
 * Sources: 2024 공식 견적서(사업자 정보) + 기존 smbest.kr 공식 원고.
 * ⚠ 확인 필요: 주소는 2024년 견적서 기준입니다. 이전 대비 변경되었을 수
 * 있으니 고객사 확인 후 필요 시 이 파일만 수정하면 됩니다.
 */
export const site = {
  nameKo: "에스엠베스트",
  nameEn: "SMBEST",
  legalNameEn: "SMBEST Pvt. Ltd.",
  ceoKo: "안성진",
  ceoEn: "Sung-Jin Ahn",
  bizRegistrationNo: "605-26-89310",
  foundedYear: 2014,
  addressKo: "부산광역시 부산진구 백양순환로 13",
  addressEn: "13 Baegyangsunhwan-ro, Busanjin-gu, Busan, Republic of Korea",
  phone: "070-4001-0635",
  phoneIntl: "+82-70-4001-0635",
  fax: "051-611-0635",
  email: "smbest1012@gmail.com",
  /** 배포 도메인 확정 시 교체 (canonical / OG / sitemap 기준 URL) */
  url: "https://smbest.kr",
  smartStoreUrl: "https://smartstore.naver.com/mog/profile",
  /** 네이버 지도 검색 링크 — 주소 기반 */
  mapUrl:
    "https://map.naver.com/p/search/" +
    encodeURIComponent("부산광역시 부산진구 백양순환로 13"),
} as const;
