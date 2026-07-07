const SITE_URL = "https://www.elifgodeok-central.co.kr";

export const siteSeo = {
  siteName: "엘리프 고덕 센트럴하이",
  siteUrl: SITE_URL,
  phone: "1533-8848",
  ogImage: "/img/og/main.jpg",
  locale: "ko_KR",
  organizationId: `${SITE_URL}/#organization`,
  websiteId: `${SITE_URL}/#website`,

  defaultDescription:
    "엘리프 고덕 센트럴하이 홈페이지입니다. 경기도 평택시 고덕국제화지구 Aab-13BL에 조성되는 총 996세대 규모의 고덕 신축 아파트로, 59㎡·84㎡ 중심 타입, 사업안내, 입지환경, 공급정보, 청약정보, 견본주택과 모델하우스 방문예약 정보를 확인하세요.",

  project: {
    addressCountry: "KR",
    addressRegion: "경기도",
    addressLocality: "평택시",
    streetAddress: "고덕국제화지구 Aab-13BL",
    brands: ["엘리프 고덕 센트럴하이", "ELIF", "계룡건설"],
    navigationSchemaName: "엘리프 고덕 센트럴하이 주요 메뉴",
  },

  keywords: [
    "엘리프 고덕 센트럴하이",
    "평택 고덕 엘리프 센트럴하이",
    ,
  ],
};

export const seoNavigation = [
  {
    name: "브랜드소개",
    path: "/Brand/intro",
    children: [
      { name: "브랜드소개", path: "/Brand/intro" },
      { name: "홍보영상", path: "/Brand/video" },
    ],
  },
  {
    name: "사업안내",
    path: "/BusinessGuide/intro",
    children: [
      { name: "사업안내", path: "/BusinessGuide/intro" },
      { name: "분양일정", path: "/BusinessGuide/plan" },
    ],
  },
  {
    name: "입지환경",
    path: "/LocationEnvironment/intro",
    children: [
      { name: "입지안내", path: "/LocationEnvironment/intro" },
      { name: "프리미엄", path: "/LocationEnvironment/primium" },
    ],
  },
  {
    name: "단지안내",
    path: "/ComplexGuide/intro",
    children: [
      { name: "단지배치도", path: "/ComplexGuide/intro" },
      { name: "호수배치도", path: "/ComplexGuide/detailintro" },
      { name: "커뮤니티", path: "/ComplexGuide/community" },
    ],
  },
  {
    name: "분양안내",
    path: "/BusinessGuide/documents",
    children: [
      { name: "공급안내", path: "/BusinessGuide/documents" },
      { name: "입주자 모집공고", path: "/SalesInfo/announcement" },
      { name: "계약서류안내", path: "/SalesInfo/guide" },
    ],
  },
  {
    name: "타입안내",
    path: "/FloorPlan/59A",
    children: [
      { name: "59A", path: "/FloorPlan/59A" },
      { name: "59B", path: "/FloorPlan/59B" },
      { name: "84A", path: "/FloorPlan/84A" },
      { name: "84B", path: "/FloorPlan/84B" },
      { name: "84C", path: "/FloorPlan/114A" },
      { name: "E-모델하우스", path: "/FloorPlan/Emodel" },
    ],
  },
  {
    name: "홍보센터",
    path: "/Promotion/Customer",
    children: [{ name: "관심고객등록", path: "/Promotion/Customer" }],
  },
];

const page = ({
  path,
  title,
  description,
  menu,
  image = siteSeo.ogImage,
  priority = 0.8,
  changefreq = "weekly",
  robots = "index, follow, max-snippet:-1, max-image-preview:large",
}) => ({
  path,
  title,
  description,
  menu,
  image,
  priority,
  changefreq,
  robots,
});

export const seoPages = {
  home: page({
    path: "/",
    title: "엘리프 고덕 센트럴하이",
    description: siteSeo.defaultDescription,
    menu: "홈",
    priority: 1,
    changefreq: "daily",
  }),

  brandIntro: page({
    path: "/Brand/intro",
    title: "브랜드소개 | 엘리프 고덕 센트럴하이",
    description:
      "엘리프 고덕 센트럴하이 브랜드소개 페이지입니다. 고덕국제화지구 Aab-13BL에서 만나는 ELIF 브랜드의 주거 가치와 단지 콘셉트를 확인하세요.",
    menu: "브랜드소개",
  }),

  brandVideo: page({
    path: "/Brand/video",
    title: "홍보영상 | 엘리프 고덕 센트럴하이",
    description:
      "엘리프 고덕 센트럴하이 홍보영상 페이지입니다. 단지의 입지, 상품성, 브랜드 가치와 고덕 생활권의 미래 주거 가치를 영상으로 확인하세요.",
    menu: "브랜드소개",
  }),

  businessIntro: page({
    path: "/BusinessGuide/intro",
    title: "사업안내 | 엘리프 고덕 센트럴하이",
    description:
      "엘리프 고덕 센트럴하이 사업안내 페이지입니다. 경기도 평택시 고덕국제화지구 Aab-13BL, 총 996세대 규모의 고덕 신축 아파트 정보를 확인하세요.",
    menu: "사업안내",
    image: "/img/og/business.jpg",
    priority: 0.9,
  }),

  businessPlan: page({
    path: "/BusinessGuide/plan",
    title: "분양일정 | 엘리프 고덕 센트럴하이",
    description:
      "엘리프 고덕 센트럴하이 분양일정 안내입니다. 특별공급, 일반공급, 당첨자 발표, 서류접수와 정당계약 등 주요 청약 일정을 확인하세요.",
    menu: "사업안내",
  }),

  salesGuide: page({
    path: "/BusinessGuide/documents",
    title: "공급안내 | 엘리프 고덕 센트럴하이",
    description:
      "엘리프 고덕 센트럴하이 공급안내 페이지입니다. 공급 규모, 타입 구성, 청약 전 확인해야 할 주요 분양 정보와 상담 전 준비사항을 안내합니다.",
    menu: "분양안내",
  }),

  announcement: page({
    path: "/SalesInfo/announcement",
    title: "입주자 모집공고 | 엘리프 고덕 센트럴하이",
    description:
      "엘리프 고덕 센트럴하이 입주자 모집공고 안내 페이지입니다. 청약 일정, 공급 조건, 계약 조건 등 분양 전 확인해야 할 공고 정보를 제공합니다.",
    menu: "분양안내",
  }),

  salesInfoGuide: page({
    path: "/SalesInfo/guide",
    title: "계약서류안내 | 엘리프 고덕 센트럴하이",
    description:
      "엘리프 고덕 센트럴하이 계약서류안내 페이지입니다. 청약, 계약, 자격 확인, 제출서류와 상담 전 준비해야 할 주요 내용을 확인하세요.",
    menu: "분양안내",
  }),

  locationIntro: page({
    path: "/LocationEnvironment/intro",
    title: "입지환경 | 엘리프 고덕 센트럴하이",
    description:
      "엘리프 고덕 센트럴하이 입지환경 안내입니다. 고덕국제신도시 생활권, 삼성 평택캠퍼스 직주근접, 교통망과 생활 인프라를 확인하세요.",
    menu: "입지환경",
    image: "/img/og/location.jpg",
    priority: 0.9,
  }),

  locationPremium: page({
    path: "/LocationEnvironment/primium",
    title: "프리미엄 | 엘리프 고덕 센트럴하이",
    description:
      "엘리프 고덕 센트럴하이 프리미엄 안내입니다. 고덕국제화지구의 입지 가치, 생활 인프라, 직주근접성, 브랜드 설계와 주거 프리미엄을 소개합니다.",
    menu: "입지환경",
    image: "/img/og/location.jpg",
  }),

  complexIntro: page({
    path: "/ComplexGuide/intro",
    title: "단지배치도 | 엘리프 고덕 센트럴하이",
    description:
      "엘리프 고덕 센트럴하이 단지배치도 안내입니다. 동선, 조망, 생활 편의와 쾌적성을 고려한 단지 구성을 확인하세요.",
    menu: "단지안내",
    image: "/img/og/complex.jpg",
    priority: 0.9,
  }),

  complexDetail: page({
    path: "/ComplexGuide/detailintro",
    title: "호수배치도 | 엘리프 고덕 센트럴하이",
    description:
      "엘리프 고덕 센트럴하이 호수배치도 안내입니다. 동·호수 구성과 단지 내 위치 정보를 통해 세대별 배치 흐름을 확인하세요.",
    menu: "단지안내",
    image: "/img/og/complex.jpg",
  }),

  complexCommunity: page({
    path: "/ComplexGuide/community",
    title: "커뮤니티 | 엘리프 고덕 센트럴하이",
    description:
      "엘리프 고덕 센트럴하이 커뮤니티 안내입니다. 입주민의 일상 편의와 여가를 고려한 커뮤니티 시설과 단지 생활 가치를 확인하세요.",
    menu: "단지안내",
    image: "/img/og/complex.jpg",
  }),

  floorPlan59A: page({
    path: "/FloorPlan/59A",
    title: "59A 타입 평면도 | 엘리프 고덕 센트럴하이",
    description:
      "엘리프 고덕 센트럴하이 59A 타입 평면도 안내입니다. 실속형 주거 수요에 적합한 공간 구성과 생활 동선을 확인하세요.",
    menu: "타입안내",
  }),

  floorPlan59B: page({
    path: "/FloorPlan/59B",
    title: "59B 타입 평면도 | 엘리프 고덕 센트럴하이",
    description:
      "엘리프 고덕 센트럴하이 59B 타입 평면도 안내입니다. 59㎡ 타입의 공간 활용, 수납, 주거 동선과 세대 구성을 확인하세요.",
    menu: "타입안내",
  }),

  floorPlan84A: page({
    path: "/FloorPlan/84A",
    title: "84A 타입 평면도 | 엘리프 고덕 센트럴하이",
    description:
      "엘리프 고덕 센트럴하이 84A 타입 평면도 안내입니다. 선호도 높은 84㎡ 타입의 공간 구성과 생활 동선을 확인하세요.",
    menu: "타입안내",
  }),

  floorPlan84B: page({
    path: "/FloorPlan/84B",
    title: "84B 타입 평면도 | 엘리프 고덕 센트럴하이",
    description:
      "엘리프 고덕 센트럴하이 84B 타입 평면도 안내입니다. 84㎡ 타입의 세대 구성, 공간 활용과 주거 동선을 확인하세요.",
    menu: "타입안내",
  }),

  floorPlan84C: page({
    path: "/FloorPlan/114A",
    title: "84C 타입 평면도 | 엘리프 고덕 센트럴하이",
    description:
      "엘리프 고덕 센트럴하이 114A 타입 평면도 안내입니다. 여유로운 공간 구성과 프리미엄 생활 동선을 확인하세요.",
    menu: "타입안내",
  }),


  emodel: page({
    path: "/FloorPlan/Emodel",
    title: "E-모델하우스 | 엘리프 고덕 센트럴하이",
    description:
      "엘리프 고덕 센트럴하이 E-모델하우스입니다. 타입별 실내 구조, 공간 구성과 주거 동선을 온라인으로 확인하세요.",
    menu: "타입안내",
    image: "/img/og/emodel.jpg",
    priority: 0.9,
  }),

  customer: page({
    path: "/Promotion/Customer",
    title: "관심고객등록 | 엘리프 고덕 센트럴하이",
    description:
      "엘리프 고덕 센트럴하이 관심고객등록 페이지입니다. 분양 일정, 모델하우스 방문예약, 청약 정보와 주요 안내를 빠르게 받아보세요.",
    menu: "홍보센터",
    image: "/img/og/customer.jpg",
    priority: 0.9,
    changefreq: "daily",
  }),

  notFound: page({
    path: "/404",
    title: "페이지를 찾을 수 없습니다 | 엘리프 고덕 센트럴하이",
    description:
      "요청하신 페이지를 찾을 수 없습니다. 엘리프 고덕 센트럴하이 홈페이지의 사업안내, 입지환경, 타입안내, E-모델하우스와 관심고객등록 메뉴를 이용해 주세요.",
    menu: "오류",
    priority: 0,
    changefreq: "yearly",
    robots: "noindex, follow",
  }),
};

export const seoPathMap = Object.fromEntries(
  Object.entries(seoPages).map(([key, value]) => [value.path.toLowerCase(), key])
);

export const getAbsoluteUrl = (path = "/") => {
  if (/^https?:\/\//.test(path)) return path;
  return `${siteSeo.siteUrl}${path}`;
};

export const getSeoPageByPath = (pathname = "/") => {
  const decodedPath = decodeURI(pathname).replace(/\/$/, "") || "/";
  const normalizedPath = decodedPath.toLowerCase();
  const exactKey = seoPathMap[normalizedPath];

  if (exactKey) return seoPages[exactKey];

  if (normalizedPath.endsWith("/customer")) return seoPages.customer;

  return seoPages.notFound;
};