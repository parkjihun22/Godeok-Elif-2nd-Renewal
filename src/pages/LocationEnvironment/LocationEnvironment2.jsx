import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./LocationEnvironment.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import page1 from "../../assets/LocationEnvironment/LocationEnvironment2/page1.jpg";

const locationMenu = [
  { title: "입지안내", url: "/LocationEnvironment/intro" },
  { title: "프리미엄", url: "/LocationEnvironment/primium" },
];

const LocationEnvironment2 = () => {
  const [isScroll, setIsScroll] = useState(false);
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

  return (
    <div className={styles.container}>
      <Header isChanged={isScroll} />
      <FixIcon />

      <Bener title="프리미엄" />
      <MenuBar contents={locationMenu} />

      <div className={styles.textBox}>
      <div>고덕의 중심, 새로운 기준</div>
      <div>삼성 평택캠퍼스를 품은 프리미엄</div>
      <div>엘리프 고덕 센트럴하이</div>
    </div>

      <figure className={styles.locationMapFrame}>
        <img
          src={page1}
          className={styles.image3}
          alt="엘리프 고덕 센트럴하이 프리미엄 및 지북동 주거가치 이미지"
        />
      </figure>

      <Footer />
    </div>
  );
};

export default LocationEnvironment2;
