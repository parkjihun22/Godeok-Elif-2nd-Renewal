import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import styles from './BusinessGuide.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import page1 from "../../assets/BusinessGuide/BusinessGuide1/page1.jpg";
import tableImage from "../../assets/BusinessGuide/BusinessGuide1/tableImage.jpg";



const projectData = [
  {
    label: "현장명",
    value: "엘리프 고덕 센트럴하이",
  },

  {
    label: "사업명",
    value: "엘리프 고덕 센트럴하이",
  },

  {
    label: "대지위치",
    value: "경기도 평택시 고덕국제화지구 Aab-13BL",
  },

  {
    label: "규모",
    value: "총 996세대 / 지하 2층 ~ 지상 25층",
  },

  {
    label: "주택형",
    value: "전용 59㎡ · 84㎡",
  },

  {
    label: "시행",
    value: "한국토지주택공사(LH)",
  },

  {
    label: "시공",
    value: "계룡건설산업 · 중흥건설 · 호반건설",
  },
];
const BusinessGuide1 = () => {
  const menuContents = [
    { title: "사업안내", url: "/BusinessGuide/intro" },
    { title: "분양일정", url: "/BusinessGuide/plan" },
  ];

  const [isScroll, setIsScroll] = useState(false);
  const { pathname } = useLocation();
  const isMobile = useMediaQuery({ query: '(max-width: 900px)' });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.container}>
<Header isChanged={isScroll} />
<FixIcon />

<Bener title="사업개요" />

<MenuBar contents={menuContents} />
<div className={styles.textBox}>
  <div>삼성 평택캠퍼스와 함께하는 고덕국제신도시 프리미엄</div>
  <div>엘리프 고덕 센트럴하이에서 라이프스타일</div>
</div>

<img className={styles.img3} src={page1} alt="엘리프 고덕 센트럴하이 사업개요 이미지"/>

			<div className={styles.tableContainer}>
				{!isMobile && (
					<img
						className={styles.tableImg}
						src={tableImage}
						alt="엘리프 고덕 센트럴하이 사업개요 표 이미지"
					/>
				)}
				<table className={styles.projectTable}>
					<tbody>
						{projectData.map((item, index) => (
							<tr key={index}>
								<td className={styles.label}>{item.label}</td>
								<td className={styles.contents}>{item.value}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			 <div className={styles.commonBox}>
				<div className={styles.notice}>
					※ 본 홈페이지에 표기된 내용은 하기의 내용을 근거로 한 내용이며, 추후 계획의 변동 등은 당사와 무관합니다.
				</div>
				
			</div> 


			<Footer />
		</div>
	)
}

export default BusinessGuide1;
