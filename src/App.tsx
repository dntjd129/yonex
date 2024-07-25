import Header from "./components/header/Header";
import { Outlet } from "react-router-dom";
import "./assets/scss/style.scss";
import SlideCard from "./components/main/SlideCard";
import ProductBanner from "./components/main/ProductBanner";
import MdPick from "./components/main/MdPick";

function App() {
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
        <div></div>
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
        <div></div>
      </section>
    </>
  );
}

export default App;
