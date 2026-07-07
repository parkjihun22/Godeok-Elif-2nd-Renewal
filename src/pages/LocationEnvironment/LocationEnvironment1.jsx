import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FiSearch, FiX } from "react-icons/fi";

import styles from "./LocationEnvironment.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import LocationSectionBox from "../../components/LocationSectionBox/LocationSectionBox";
import page1 from "../../assets/LocationEnvironment/LocationEnvironment1/page1.jpg";
import section2Image1 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-1.jpg";
import section2Image2 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-2.jpg";
import section2Image3 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-3.jpg";
import section2Image4 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-4.jpg";
import section2Image5 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-5.jpg";
import section2Image6 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-6.jpg";

const locationMenu = [
  { title: "입지안내", url: "/LocationEnvironment/intro" },
  { title: "프리미엄", url: "/LocationEnvironment/primium" },
];

const locationSections = [
  {
    img: section2Image1,
    titleText: "고덕국제신도시 중심 입지<br />프리미엄 라이프의 시작",
    contentText:
      "고덕국제화지구 Aab-13BL의 핵심 입지<br />평택의 미래가치를 품은 새로운 브랜드 주거공간",
  },
  {
    img: section2Image2,
    titleText: "삼성 평택캠퍼스<br />직주근접 프리미엄",
    contentText:
      "삼성 평택캠퍼스를 가까이 누리는 우수한 입지<br />직주근접이 선사하는 편리한 생활과 미래가치",
  },
  {
    img: section2Image3,
    titleText: "광역교통망으로 이어지는<br />편리한 이동 환경",
    contentText:
      "평택 주요 도로망과 광역교통 접근성이 뛰어난 입지<br />빠르고 편리한 이동이 가능한 교통 프리미엄",
  },
  {
    img: section2Image4,
    titleText: "교육·생활·자연이 함께하는<br />고덕국제신도시",
    contentText:
      "생활편의시설과 교육환경, 공원을 가까이 누리는 입지<br />가족 모두가 만족하는 쾌적한 주거환경을 제공합니다.",
  },
  {
    img: section2Image5,
    titleText: "브랜드 특화설계로 완성하는<br />프리미엄 라이프",
    contentText:
      "차별화된 특화설계와 다양한 커뮤니티 시설<br />엘리프 고덕 센트럴하이만의 품격 있는 주거가치",
  },
  {
    img: section2Image6,
    titleText: "미래가치를 품은<br />새로운 랜드마크",
    contentText:
      "고덕국제신도시의 성장과 함께하는 미래가치<br />실거주와 미래가치를 모두 만족시키는 브랜드 아파트",
  },
];
const LocationEnvironment1 = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [zoomImage, setZoomImage] = useState(null);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!zoomImage) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setZoomImage(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [zoomImage]);

  const openZoom = (src, alt) => {
    setZoomImage({ src, alt });
  };

  return (
    <div className={styles.container}>
      <Header isChanged={isScroll} />
      <FixIcon />

      <Bener title="입지환경" />
      <MenuBar contents={locationMenu} />

      <div className={styles.textBox}>
  <div>삼성 평택캠퍼스와 함께 성장하는</div>
  <div>고덕국제신도시 프리미엄 라이프</div>
  <div>엘리프 고덕 센트럴하이가 새로운 주거 가치를 완성합니다.</div>
</div>
      <figure className={styles.locationMapFrame}>
        <img
          src={page1}
          className={styles.image2}
          alt="엘리프 고덕 센트럴하이 입지환경과 지북동 생활권 안내 이미지"
        />
        <button
          type="button"
          className={styles.zoomButton}
          onClick={() =>
            openZoom(
              page1,
              "엘리프 고덕 센트럴하이 입지환경과 지북동 생활권 안내 이미지"
            )
          }
          aria-label="입지환경 이미지 크게 보기"
        >
          <FiSearch />
          <span>크게 보기</span>
        </button>
      </figure>

      <div className={styles.section2}>
        {locationSections.map((value) => (
          <LocationSectionBox
            key={value.titleText}
            image={value.img}
            title={value.titleText}
            text={value.contentText}
            onZoom={() =>
              openZoom(
                value.img,
                `엘리프 고덕 센트럴하이 ${value.titleText.replace(/<[^>]*>/g, " ")} 이미지`
              )
            }
          />
        ))}
      </div>

      <div className={styles.commonBox}>
        <div className={styles.notice}>
          본 홍보물의 내용과 이미지는 소비자의 이해를 돕기 위한 것으로, 개발 예정 및 교통,
          학교 계획 등에 관한 사항은 해당 기관의 자료를 토대로 제작되었습니다. 사업계획 및
          일정은 관계 기관과 사업 주체의 사정에 따라 변경될 수 있으며, 자세한 내용은
          입주자모집공고와 관계 기관의 최종 고시를 확인하시기 바랍니다.
        </div>
      </div>

      {zoomImage && (
        <div
          className={styles.zoomModal}
          role="dialog"
          aria-modal="true"
          aria-label="이미지 확대 보기"
          onClick={() => setZoomImage(null)}
        >
          <div className={styles.zoomModalInner} onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className={styles.zoomClose}
              onClick={() => setZoomImage(null)}
              aria-label="확대 이미지 닫기"
            >
              <FiX />
            </button>
            <img src={zoomImage.src} alt={zoomImage.alt} />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default LocationEnvironment1;
