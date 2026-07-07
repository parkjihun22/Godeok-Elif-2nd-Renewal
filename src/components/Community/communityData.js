import bgImage from "../../assets/ComplexGuide/ComplexGuide1/bg-section.jpg";
import bannerImage from "../../assets/ComplexGuide/ComplexGuide1/complex-1024x573.jpg";
import layoutImage from "../../assets/ComplexGuide/ComplexGuide1/page1.webp";
import designImage from "../../assets/ComplexGuide/ComplexGuide2/page1.webp";
import communityImage from "../../assets/ComplexGuide/ComplexGuide3/page1.jpg";

export const communityData = {
  eyebrow: "COMMUNITY",

  title: "프리미엄 라이프를 완성하는 특화 커뮤니티",

  description:
    "엘리프 고덕 센트럴하이는 총 996세대 규모의 브랜드 아파트로, 쾌적한 단지 배치와 풍부한 녹지 공간, 다양한 커뮤니티 시설을 통해 일상에 여유와 품격을 더하는 프리미엄 주거환경을 제공합니다.",

  backgroundImage: bgImage,

  banner: {
    image: bannerImage,
    alt: "엘리프 고덕 센트럴하이 단지 전경",
  },

  items: [
    {
      id: "complex-layout",
      label: "단지 배치도",

      title: "쾌적한 일상을 위한 단지 설계",

      description:
        "채광과 통풍을 고려한 동 배치와 효율적인 보행 동선, 넉넉한 조경 공간을 계획하여 더욱 쾌적하고 편안한 주거환경을 제공합니다.",

      image: layoutImage,
      alt: "엘리프 고덕 센트럴하이 단지 배치도",
    },

    {
      id: "complex-design",
      label: "단지 특화설계",

      title: "라이프스타일을 고려한 특화 설계",

      description:
        "입주민의 생활 편의를 높이는 다양한 특화 설계와 휴게 공간, 자연을 담은 조경 계획으로 품격 있는 주거 가치를 완성합니다.",

      image: designImage,
      alt: "엘리프 고덕 센트럴하이 특화설계",
    },

    {
      id: "community-space",
      label: "커뮤니티",

      title: "일상의 만족을 높이는 커뮤니티",

      description:
        "피트니스, 주민공동시설 등 입주민의 건강과 여가, 소통을 위한 다양한 커뮤니티 공간을 마련하여 더욱 풍요로운 프리미엄 라이프를 제공합니다.",

      image: communityImage,
      alt: "엘리프 고덕 센트럴하이 커뮤니티",
    },
  ],
};