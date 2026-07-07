import unit01 from "../../assets/UnitplanBox/unit01.jpg";
import unit02 from "../../assets/UnitplanBox/unit02.jpg";
import unit03 from "../../assets/UnitplanBox/unit03.jpg";
import unit04 from "../../assets/UnitplanBox/unit04.jpg";
import unit05 from "../../assets/FloorPlan/FloorPlan5/unit05.jpg";
import unit06 from "../../assets/FloorPlan/FloorPlan6/unit06.jpg";

export const unitPlanData = {
  eyebrow: "UNIT PLAN",

  title: "엘리프 고덕 센트럴하이 타입안내",

  description:
    "엘리프 고덕 센트럴하이의 59㎡·84㎡ 타입별 평면을 확인할 수 있습니다. 타입별 공간 구성과 생활 동선을 비교하며 라이프스타일에 맞는 주거 공간을 살펴보세요.",

  plans: [
    {
      id: "59A",
      type: "59A",
      name: "59A㎡",
      summary:
        "59A 타입의 효율적인 공간 구성과 생활 동선을 확인해 보세요.",

      image: unit01,
      alt: "엘리프 고덕 센트럴하이 59A㎡ 평면도",

      link: "/FloorPlan/59A",
    },

    {
      id: "59B",
      type: "59B",
      name: "59B㎡",
      summary:
        "59B 타입의 실용적인 평면 구성과 공간 활용을 확인해 보세요.",

      image: unit02,
      alt: "엘리프 고덕 센트럴하이 59B㎡ 평면도",

      link: "/FloorPlan/59B",
    },

    {
      id: "84A",
      type: "84A",
      name: "84A㎡",
      summary:
        "84A 타입의 넓고 쾌적한 공간 구성과 생활 동선을 확인해 보세요.",

      image: unit03,
      alt: "엘리프 고덕 센트럴하이 84A㎡ 평면도",

      link: "/FloorPlan/84A",
    },

    {
      id: "84B",
      type: "84B",
      name: "84B㎡",
      summary:
        "84B 타입의 공간 구성과 효율적인 생활 동선을 확인해 보세요.",

      image: unit04,
      alt: "엘리프 고덕 센트럴하이 84B㎡ 평면도",

      link: "/FloorPlan/84B",
    },

    {
      id: "84C",
      type: "84C",
      name: "84C㎡",
      summary:
        "84C 타입의 특화 설계와 공간 구성을 확인해 보세요.",

      image: unit05,
      alt: "엘리프 고덕 센트럴하이 84C㎡ 평면도",

      link: "/FloorPlan/114A",
    },
  ],
};