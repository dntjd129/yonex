import Header from "./components/header/Header";
import "./assets/scss/style.scss";
import SlideCard from "./components/main/SlideCard";
import ProductBanner from "./components/main/ProductBanner";
import MdPick from "./components/main/MdPick";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/main/Main";

function App() {
  return (
    <>
      {/*  */}
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
