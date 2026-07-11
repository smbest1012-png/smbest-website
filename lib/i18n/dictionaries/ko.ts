import type { Dictionary } from "@/lib/i18n/types";

/**
 * 한국어 — 원본 사전.
 * 회사 소개·연혁·소재 설명은 기존 smbest.kr 공식 원고와
 * 2024년 견적서(사업자 정보)를 기반으로 작성했습니다.
 */
const ko: Dictionary = {
  meta: {
    title: "SMBEST | 친환경 소재 및 3D 프린팅 제품",
    description:
      "커피박·왕겨 같은 천연 원료로 친환경 플라스틱 소재와 3D 프린팅 레진·필라멘트, 주방용품을 만드는 부산의 소재 기업 에스엠베스트입니다.",
    aboutTitle: "회사소개 | SMBEST",
    aboutDescription:
      "환경과 사람을 생각하는 기업 이념으로 2014년 설립된 친환경 소재 기업 에스엠베스트를 소개합니다.",
    productsTitle: "제품 | SMBEST",
    productsDescription:
      "3D 프린팅용 레진과 필라멘트, 친환경 주방용품 — SMBEST의 제품을 소개합니다.",
    contactTitle: "문의 | SMBEST",
    contactDescription:
      "에스엠베스트 제품·거래 문의. 부산광역시 부산진구 백양순환로 13.",
  },
  nav: {
    home: "홈",
    about: "회사소개",
    products: "제품",
    contact: "문의",
    smartstore: "스마트스토어",
  },
  a11y: {
    skipToContent: "본문으로 건너뛰기",
    openMenu: "메뉴 열기",
    closeMenu: "메뉴 닫기",
    selectLanguage: "언어 선택",
    newTab: "새 탭에서 열림",
    mainNavigation: "주 메뉴",
    homeLink: "SMBEST 홈으로 이동",
  },
  hero: {
    tagline: "Sustainable Material Innovation",
    headline: ["소재의 가능성을", "더 나은 제품으로"],
    description:
      "SMBEST는 버려지던 커피박과 왕겨를 소재로 되살려 3D 프린팅 재료와 일상의 제품을 만듭니다.",
    ctaProducts: "제품 살펴보기",
    ctaStore: "네이버 스마트스토어",
    scroll: "스크롤",
  },
  intro: {
    eyebrow: "About SMBEST",
    heading: "소재가 가진 가능성을 제품으로 연결합니다",
    body: [
      "에스엠베스트는 2014년 부산에서 설립된 친환경 소재 기업입니다. 환경과 사람을 생각하는 기업 이념을 바탕으로 다양한 친환경 플라스틱 소재와 제품을 개발·생산합니다.",
      "생활쓰레기로 버려지는 커피찌꺼기, 쉽게 버려지는 왕겨와 톱밥 — 우리는 이런 원료에서 소재의 가능성을 발견하고, 지속 가능한 제조와 더 나은 사용 경험을 고민합니다.",
    ],
    values: [
      {
        title: "Sustainable Materials",
        description:
          "석유 대신 자연에서 얻은 천연 원료로 바이오플라스틱 소재를 개발합니다.",
      },
      {
        title: "Practical Innovation",
        description:
          "레진과 필라멘트부터 주방용품까지, 일상에서 쓰이는 제품으로 소재를 완성합니다.",
      },
      {
        title: "Better Manufacturing",
        description:
          "지속적인 연구개발과 제품 혁신으로 지속 가능한 제조의 기준을 만들어 갑니다.",
      },
    ],
  },
  categories: {
    eyebrow: "Products",
    heading: "세 가지 제품 영역",
    description:
      "3D 프린팅 소재부터 생활 제품까지, 소재 기술이 향하는 세 갈래입니다.",
    items: {
      resin: {
        name: "레진",
        tagline: "3D 프린팅용 레진",
        description:
          "정밀한 출력을 위한 3D 프린팅용 레진 제품군입니다. 용도별 상세 사양은 스마트스토어에서 확인할 수 있습니다.",
        cta: "레진 제품 보기",
      },
      filament: {
        name: "필라멘트",
        tagline: "3D 프린터용 필라멘트",
        description:
          "PLA와 커피박을 조합한 하이브리드 필라멘트 등 친환경 3D 프린터 소재를 개발·생산합니다.",
        cta: "필라멘트 제품 보기",
      },
      kitchenware: {
        name: "주방용품",
        tagline: "소재 기술이 담긴 생활 제품",
        description:
          "친환경 소재 기술을 일상으로 가져온 주방·생활 제품입니다.",
        cta: "주방용품 보기",
      },
    },
  },
  featured: {
    eyebrow: "Featured",
    heading: "대표 제품",
    description: "SMBEST가 만드는 제품을 만나보세요.",
    buy: "네이버에서 구매하기",
    storeNote:
      "가격과 상세 정보는 네이버 스마트스토어 상품 페이지에서 확인할 수 있습니다.",
  },
  materials: {
    eyebrow: "Materials & Technology",
    heading: "버려지던 원료가 소재가 되기까지",
    description:
      "바이오플라스틱으로 불리는 친환경 플라스틱은 석유가 아닌 자연에서 얻은 천연 원료로 만들어집니다. SMBEST는 재활용이 어려운 원료를 소재로 되살립니다.",
    items: [
      {
        title: "커피박 플라스틱",
        description:
          "생활쓰레기로 분류되는 커피찌꺼기를 활용한 친환경 플라스틱 소재입니다.",
      },
      {
        title: "왕겨·톱밥 플라스틱",
        description:
          "벼의 겉껍질인 왕겨, 그리고 톱밥을 활용한 친환경 플라스틱 소재입니다.",
      },
      {
        title: "하이브리드 필라멘트",
        description:
          "옥수수 전분에서 추출한 PLA와 커피박을 조합해 1.75mm로 균일하게 압출한 3D 프린터용 필라멘트입니다.",
      },
    ],
    processTitle: "소재의 여정",
    process: [
      {
        title: "원료",
        description:
          "커피찌꺼기·왕겨·톱밥처럼 버려지던 천연 원료에서 시작합니다.",
      },
      {
        title: "소재화",
        description: "천연 원료를 배합해 친환경 플라스틱 소재로 만듭니다.",
      },
      {
        title: "제품",
        description:
          "레진·필라멘트·주방용품 등 일상의 제품으로 완성합니다.",
      },
    ],
  },
  storeCta: {
    heading: "제품을 더 자세히 확인해보세요",
    body: "SMBEST의 다양한 제품과 구매 옵션은 네이버 스마트스토어에서 확인할 수 있습니다.",
    button: "네이버 스마트스토어 바로가기",
  },
  contact: {
    eyebrow: "Contact",
    heading: "무엇이든 문의해 주세요",
    description:
      "제품·거래 관련 문의를 이메일로 보내주시면 확인 후 회신드립니다.",
    addressLabel: "주소",
    address: "부산광역시 부산진구 백양순환로 13",
    phoneLabel: "전화",
    phone: "070-4001-0635",
    faxLabel: "팩스",
    fax: "051-611-0635",
    emailLabel: "이메일",
    email: "smbest1012@gmail.com",
    hoursNote: "제품 구매는 네이버 스마트스토어에서 바로 가능합니다.",
    mailCta: "이메일 보내기",
    mapCta: "지도에서 보기",
  },
  about: {
    eyebrow: "About Us",
    heading: "환경과 사람을 생각하는 소재 기업",
    lead: "에스엠베스트는 2014년 설립 이후 친환경 플라스틱 소재와 제품을 개발·생산해 왔습니다.",
    greetingTitle: "CEO 인사말",
    greeting: [
      "안녕하십니까, 에스엠베스트 대표 안성진입니다.",
      "환경과 사람을 생각하는 기업 이념을 바탕으로 설립된 에스엠베스트는 다양한 친환경 플라스틱 소재와 친환경 제품을 개발·생산하는 기업입니다. 항상 우수한 제품으로 고객을 만족시켜 드리고자 지속적인 연구개발과 제품 혁신에 열정을 쏟아 왔습니다.",
      "고객의 가치를 최우선으로 하고 신뢰와 존중을 바탕으로 세계 시장에 도전하며, 모두가 행복한 환경에서 살 수 있는 미래를 열어가기 위해 언제나 노력하겠습니다.",
    ],
    ceoName: "안성진",
    ceoRole: "대표",
    visionTitle: "비전",
    vision: "자연과 함께, 사람을 위해",
    visionBody:
      "일상에 필요한 제품을 만들면서도 환경을 생각하고, 혁신적인 아이디어를 더해 누구나 즐겁게 쓸 수 있는 제품을 만듭니다. 모두가 행복한 환경에서 살아가는 미래 — SMBEST가 그리는 내일입니다.",
    historyTitle: "걸어온 길",
    history: [
      { date: "2014. 06", event: "회사 설립, 친환경 3D 프린터 필라멘트 개발 착수" },
      { date: "2014. 07", event: "KOTRA 수출 첫걸음(Export Gateway) 참여기업 선정" },
      { date: "2014. 11", event: "캐나다·독일·싱가포르에 청소용품 수출" },
      { date: "2014. 12", event: "원산지증명 수출업체 인증 취득" },
      { date: "2015. 01", event: "커피박 플라스틱 청소용품 출시, 상표 DIRT BYE 등록" },
      { date: "2015. 02", event: "iF 디자인 어워드 수상 (DIRT BYE)" },
      { date: "2015. 05", event: "신라대학교 패밀리기업 협약, 부산글로벌포럼 가입" },
      { date: "2015. 06", event: "중국 지난 우수상품전 참가, 호주·중국 수출" },
    ],
    areasTitle: "사업 영역",
    areas: [
      {
        title: "친환경 플라스틱 소재",
        description:
          "석유 기반 플라스틱과 달리 자연에서 얻은 천연 원료로 바이오플라스틱을 개발·생산합니다.",
      },
      {
        title: "3D 프린터용 필라멘트",
        description:
          "재활용이 어려운 커피찌꺼기, 왕겨 같은 천연 원료를 활용한 친환경 필라멘트를 만듭니다.",
      },
      {
        title: "생활용품",
        description:
          "친환경 플라스틱에 새로운 개념을 더한 주방·생활용품을 개발·생산합니다.",
      },
      {
        title: "교육용 완구",
        description:
          "아이들의 사고력과 창의력을 키우는 친환경 교육 완구를 개발합니다.",
      },
    ],
  },
  productsPage: {
    eyebrow: "Products",
    heading: "제품",
    description: "모든 제품은 네이버 스마트스토어에서 구매할 수 있습니다.",
    allLabel: "전체 제품",
    detailNote:
      "각 제품의 가격·옵션·상세 사양은 스마트스토어 상품 페이지에서 확인해 주세요.",
    categoryEyebrow: {
      resin: "Resin",
      filament: "Filament",
      kitchenware: "Kitchenware",
    },
  },
  footer: {
    description:
      "커피박·왕겨 같은 천연 원료로 친환경 소재와 제품을 만드는 부산의 소재 기업입니다.",
    navTitle: "메뉴",
    contactTitle: "연락처",
    companyTitle: "회사 정보",
    ceoLabel: "대표",
    bizNoLabel: "사업자등록번호",
    rights: "All rights reserved.",
  },
  notFound: {
    title: "페이지를 찾을 수 없습니다",
    body: "요청하신 페이지가 존재하지 않거나 이동되었습니다.",
    backHome: "홈으로 돌아가기",
  },
};

export default ko;
