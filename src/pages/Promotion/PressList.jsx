import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Promotion.module.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { pressArticles } from "./pressArticles";

function PressList() {
  const navigate = useNavigate();
  const samplePress = pressArticles;

  return (
    <>
      <Header />
      <div className={styles.pressListContainer}>
        <div className={styles.pressListHeader}>
          <h2 className={styles.title}>언론보도</h2>
          <button
            className={styles.writeButton}
            onClick={() => navigate("/Promotion/PressWrite")}
          >
            글쓰기
          </button>
        </div>
        {samplePress.map((item) => (
          <div
            key={item.id}
            className={styles.pressItem}
            style={{ cursor: "pointer" }}
            onClick={() => navigate(`/Promotion/Press/${item.slug || item.id}`)}
          >
            <img src={item.image} alt={item.title} className={styles.pressImg} />
            <div>
              <div style={{ fontWeight: "bold" }}>{item.title}</div>
              <div style={{ color: "#888", fontSize: 14 }}>{item.date}</div>
              <div>{item.summary}</div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}
export default PressList;
