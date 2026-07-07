// src/components/MobileOverviewSection/MobileOverviewSection.jsx

import React, { useState, useEffect, useRef } from "react";
import styles from "./MobileOverviewSection.module.scss";

// 1) 모바일 메인 히어로 이미지
import heroImage from "../../assets/Main/heroImage.jpg";
// 2) 입지환경 지도
import mobileMap from "../../assets/LocationEnvironment/LocationEnvironment1/page1.jpg";
import mobileMap2 from "../../assets/LocationEnvironment/LocationEnvironment2/page2.jpg";
// 3) 프리미엄 슬라이드 이미지들
import slide1 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-1.jpg";
import slide2 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-2.jpg";
import slide3 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-3.jpg";
import slide4 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-4.jpg";
import slide5 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-5.jpg";
import slide6 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-6.jpg";

const items = [
  {
    key: "overview",
    label: "사업개요",
    content: (
      <ul className={styles.detailList}>
        <li>
          <strong>사업명</strong>
          <span>엘리프 고덕 센트럴하이</span>
        </li>

        <li>
          <strong>대지위치</strong>
          <span>경기도 평택시 고덕국제화지구 Aab-13BL</span>
        </li>

        <li>
          <strong>규모</strong>
          <span>전용 59㎡ · 84㎡ / 총 996세대</span>
        </li>

        <li>
          <strong>시행</strong>
          <span>한국토지주택공사(LH)</span>
        </li>

        <li>
          <strong>시공</strong>
          <span>계룡건설산업 · 중흥건설 · 호반건설</span>
        </li>
      </ul>
    ),
  },

{
  key: "location",
  label: "입지환경",
  content: (
    <div className={styles.mapGrid}>
      <img
        src={mobileMap}
        className={styles.mapImage}
        alt="엘리프 고덕 센트럴하이 입지환경"
      />
      <img
        src={mobileMap2}
        className={styles.mapImage}
        alt="엘리프 고덕 센트럴하이 생활권"
      />
    </div>
  ),
},
{
  key: "premium",
  label: "프리미엄",
  content: (
    <>
      {/* 프리미엄 섹션 상단 문단 */}
      <div className={styles.premiumIntro}>
        <h3 className={styles.premiumTitle}>GREAT PREMIUM</h3>
        <p className={styles.premiumSubtitle}>
          고덕국제신도시의 미래가치를 담은<br />
          엘리프 고덕 센트럴하이 프리미엄 라이프
        </p>
      </div>

      {/* 슬라이더 */}
      <PremiumSlider />
    </>
  ),
},
];

function PremiumSlider() {
  const slides = [
    {
      img: slide1,
      title: "고덕국제신도시 중심 입지",
      desc:
        "경기도 평택시 고덕국제화지구 Aab-13BL<br/>삼성 평택캠퍼스와 가까운 직주근접 프리미엄<br/>미래가치를 갖춘 브랜드 주거단지",
    },
    {
      img: slide2,
      title: "59㎡ · 84㎡ 실속형 평면",
      desc:
        "선호도 높은 전용 59㎡·84㎡ 구성<br/>실용성과 공간 활용을 높인 특화 설계<br/>라이프스타일을 고려한 다양한 평면",
    },
    {
      img: slide3,
      title: "총 996세대 브랜드 대단지",
      desc:
        "총 996세대 규모의 브랜드 아파트<br/>쾌적한 단지 설계와 효율적인 공간 배치<br/>품격 있는 주거환경을 제공합니다.",
    },
    {
      img: slide4,
      title: "교통과 생활을 모두 누리는 입지",
      desc:
        "고덕국제신도시 생활권의 다양한 인프라<br/>삼성 평택캠퍼스 직주근접과 광역교통망<br/>편리한 생활환경을 누릴 수 있습니다.",
    },
    {
      img: slide5,
      title: "브랜드 특화설계",
      desc:
        "입주민 중심의 특화설계와 다양한 커뮤니티<br/>쾌적한 조경과 편리한 생활 동선<br/>프리미엄 주거가치를 완성합니다.",
    },
    {
      img: slide6,
      title: "미래가치를 품은 선택",
      desc:
        "고덕국제신도시의 지속적인 개발 비전<br/>실거주와 미래가치를 모두 만족시키는 입지<br/>엘리프 고덕 센트럴하이",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(id);
  }, [slides.length]);

  const nextSlide = () =>
    setCurrent((c) => (c + 1 + slides.length) % slides.length);
  const prevSlide = () =>
    setCurrent((c) => (c - 1 + slides.length) % slides.length);

  const handleTouchStart = (e) => setTouchStartX(e.touches[0].clientX);
  const handleTouchMove = (e) => setTouchEndX(e.touches[0].clientX);
  const handleTouchEnd = () => {
    if (touchStartX == null || touchEndX == null) return;
    const dist = touchStartX - touchEndX;
    if (dist > 50) nextSlide();
    else if (dist < -50) prevSlide();
    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <div
      className={styles.premiumSlider}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className={styles.slide}>
        <img src={slides[current].img} alt="" />
        <div className={styles.caption}>
          <h4
            dangerouslySetInnerHTML={{ __html: slides[current].title.replace(/\n/g, "<br/>") }}
          />
          <p
            dangerouslySetInnerHTML={{ __html: slides[current].desc }}
          />
        </div>
      </div>
      <div className={styles.dots}>
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={idx === current ? styles.dotActive : styles.dot}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </div>
  );
}

export default function MobileOverviewSection() {
  const [openKey, setOpenKey] = useState(null);
  const itemRefs = useRef({});

  const toggle = (key) => {
    setOpenKey((prevKey) => (prevKey === key ? null : key));

    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        const targetItem = itemRefs.current[key];
        if (!targetItem) return;

        const fixedHeaderOffset = 96;
        const targetTop =
          window.scrollY + targetItem.getBoundingClientRect().top - fixedHeaderOffset;

        window.scrollTo({
          top: Math.max(targetTop, 0),
          behavior: "auto",
        });
      });
    });
  };

  return (
    <section className={styles.overviewSection}>
      {/* ─── 헤더 영역 ─── */}
      <header className={styles.overviewHeader}>
      <div className={styles.preTitle}>엘리프 고덕 센트럴하이</div>
        <div className={styles.line} />
        <h2 className={styles.mainTitle}>사업안내</h2>
      </header>

      <img src={heroImage} className={styles.heroImage} alt="엘리프 고덕 센트럴하이 히어로 메인사진" />

      {/* ─── 아코디언 항목 ─── */}
      {items.map(({ key, label, content }) => (
        <div
          key={key}
          className={styles.accordionItem}
          ref={(node) => {
            itemRefs.current[key] = node;
          }}
        >
          <button
            type="button"
            className={`${styles.accordionHeader} ${openKey === key ? styles.active : ""}`}
            onClick={() => toggle(key)}
            aria-expanded={openKey === key}
          >
            <span className={styles.label}>{label}</span>
            <span className={`${styles.arrow} ${openKey === key ? styles.up : styles.down}`} />
          </button>
          {openKey === key && <div className={styles.accordionContent}>{content}</div>}
        </div>
      ))}
    </section>
  );
}
