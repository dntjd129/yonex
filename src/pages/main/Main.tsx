import React from "react";
import "../../assets/scss/style.scss";
import Header from "../../components/header/Header";
import SlideCard from "../../components/main/SlideCard";
import ProductBanner from "../../components/main/ProductBanner";
import MdPick from "../../components/main/MdPick";
import Notice from "../../components/main/Notice";
import Footer from "../../components/main/Footer";

const Main = () => {
  return (
    <>
      <section id="page_container" className="isTopBanner">
        {/* navbar */}
        <Header />
        {/* 메인 swiper */}
        <SlideCard />
        {/* 메인 취급 물품 배너 */}
        <ProductBanner />
        {/* MD's Pick */}
        <MdPick />
        {/* 회원 전용 혜택 */}
        {/* <Notice /> */}
        {/* 요넥스 소식 */}
        <div></div>
        {/* SNS */}
        <div></div>
        {/* 바로가기 */}
        <div></div>
        {/* notice */}
        <div></div>
        {/* notice-panel */}
        <div></div>
        {/* footer */}
        <Footer />
        <div></div>
      </section>
    </>
  );
};

export default Main;
