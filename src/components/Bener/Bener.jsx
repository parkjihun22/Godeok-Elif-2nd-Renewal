import React, { useEffect, useState } from "react";
import styles from "./Bener.module.scss";
import img from "../../assets/Bener/bener.jpg";

const Bener = ({ title = "엘리프 고덕 센트럴하이" }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    // 이미지가 로드된 후 애니메이션 시작
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true); // 이미지 로딩 후 애니메이션을 시작
        }, 100); // 0.1초 후에 애니메이션을 시작

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={styles.container}>
            {/* 배너 이미지 */}
            <img
                className={`${styles.benerImage} ${isLoaded ? styles.showImage : ''}`}
                src={img}
                alt="엘리프 고덕 센트럴하이 배너이미지"
            />
            <div className={styles.overlay}></div>
            <div
                className={`${styles.contents} ${isLoaded ? styles.showContents : ''}`}
            >
                <h1
                    className={`${styles.title} ${isLoaded ? styles.showTitle : ''}`}
                >
                    {title}
                </h1>
                {contents(title, isLoaded)}
            </div>
        </div>
    );
};

export default Bener;

const contents = (text, isLoaded) => {
  const normalizedText = text.replace(/\s/g, "");

  const brandTitles = ["홍보영상", "브랜드소개", "엘리프고덕센트럴하이"];

  const businessTitles = [
    "사업개요",
    "사업안내",
    "분양일정",
    "분양안내",
    "입주자모집공고",
    "공급안내",
    "계약서류안내",
  ];

  const locationTitles = ["입지환경", "입지안내", "프리미엄"];

  const complexTitles = [
    "단지안내",
    "단지배치도",
    "호수배치도",
    "커뮤니티",
  ];

  const unitTitles = [
    "세대안내",
    "세대안내영상",
    "타입안내",
    "59㎡평면도",
    "84㎡평면도",
    "114㎡평면도",
    "59A㎡평면도",
    "59B㎡평면도",
    "84A㎡평면도",
    "84B㎡평면도",
    "E-모델하우스",
  ];

  const promotionTitles = [
    "홍보센터",
    "언론보도",
    "관심고객등록",
    "방문예약등록",
  ];

  if (brandTitles.includes(normalizedText)) {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          엘리프 고덕 센트럴하이가 선보이는 고덕국제신도시의 새로운 주거 가치를 만나보세요.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          ELIF 브랜드의 감각적인 설계와 평택 고덕 생활권의 미래가치를 확인하실 수 있습니다.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          엘리프 고덕 센트럴하이의 사업안내부터 공급정보까지 한눈에 확인하세요.
        </div>
      </>
    );
  } else if (
    businessTitles.includes(normalizedText) ||
    unitTitles.includes(normalizedText) ||
    normalizedText.includes("인테리어")
  ) {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          엘리프 고덕 센트럴하이의 사업개요와 분양 정보를 안내합니다.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          고덕국제화지구 Aab-13BL, 총 996세대 규모의 공급정보를 확인해 보세요.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          전용 59㎡ · 84㎡ · 114㎡ 타입 구성과 평면 정보를 한곳에서 확인할 수 있습니다.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          엘리프 고덕 센트럴하이
        </div>
      </>
    );
  } else if (locationTitles.includes(normalizedText)) {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          엘리프 고덕 센트럴하이의 입지환경과 고덕국제신도시 생활 인프라를 확인해 보세요.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          삼성 평택캠퍼스 직주근접성과 고덕 생활권의 교통·교육·생활 인프라를 안내합니다.
        </div>
      </>
    );
  } else if (complexTitles.includes(normalizedText)) {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          총 996세대 규모의 쾌적한 단지 설계와 커뮤니티 공간을 갖춘 엘리프 고덕 센트럴하이.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          단지배치도와 호수배치도, 커뮤니티 시설과 공간 구성을 자세히 확인해 보세요.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          엘리프 고덕 센트럴하이가 제안하는 새로운 주거 가치를 경험해 보세요.
        </div>
      </>
    );
  } else if (promotionTitles.includes(normalizedText)) {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          엘리프 고덕 센트럴하이의 분양 소식과 모델하우스 방문예약을 안내합니다.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          관심고객등록을 통해 공급정보, 분양가, 청약 일정을 빠르게 받아보실 수 있습니다.
        </div>
      </>
    );
  }

  return (
    <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
      엘리프 고덕 센트럴하이 홈페이지에서 다양한 분양 정보를 확인하세요.
    </div>
  );
};
