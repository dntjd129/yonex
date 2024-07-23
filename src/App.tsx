import Header from "./components/header/Header";
import "./assets/scss/style.scss";
import SlideCard from "./components/MainCard/SlideCard";

function App() {
  return (
    <section id="page_container" className="isTopBanner">
      <Header />
      <SlideCard />
    </section>
  );
}

export default App;
