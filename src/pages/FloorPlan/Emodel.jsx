import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./FloorPlan.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import EmodelInline from "../../components/EmodelInline/EmodelInline";

const menuContents = [
  { title: "84B", url: "/FloorPlan/59A" },
  { title: "84D", url: "/FloorPlan/59B" },
  { title: "94A", url: "/FloorPlan/84A" },
  { title: "101A", url: "/FloorPlan/84B" },
  // { title: "84A", url: "/FloorPlan/114A" },
  // { title: "84B", url: "/FloorPlan/114B" },
  { title: "E-모델하우스", url: "/FloorPlan/Emodel" },
];

const Emodel = () => {
  const [isScroll, setIsScroll] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => setIsScroll(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.container}>
      <Header isChanged={isScroll} />
      <FixIcon />

      <Bener title="E-모델하우스" />
      <MenuBar contents={menuContents} />

      <div className={styles.textBox}>
      <div>59㎡·84㎡ 타입의 공간을 직접 경험하세요</div>
      <div>엘리프 고덕 센트럴하이 E-모델하우스</div>
    </div>

      <EmodelInline />

      <Footer />
    </div>
  );
};

export default Emodel;
