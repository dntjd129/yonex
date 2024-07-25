import Header from "./components/header/Header";
import { Outlet } from "react-router-dom";
import "./assets/scss/style.scss";
import SlideCard from "./components/main/SlideCard";
import ProductBanner from "./components/main/ProductBanner";

function App() {
  return (
    <>
      <section id="page_container" className="isTopBanner">
        <Header />
        {/* 메인 swiper */}
        <SlideCard />
        {/* 메인 취급 물품 배너 */}
        <ProductBanner />
      </section>
    </>
  );
}

export default App;
