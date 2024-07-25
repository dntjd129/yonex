import React from "react";
import "../../assets/scss/style.scss";
import Logo from "../../assets/img/logo.jpg";

const Header = () => {
  return (
    <>
      <article id="header" className="active">
        <div className="top_banner">
          <a href="#">
            <span color="yellow">YONEX TENNIS COLLECTION</span>
          </a>
        </div>
        <div id="header_sub" className="header_sub">
          <div id="yonex_logo">
            <a href="/" title="YONEX KOREA">
              <img src={Logo} alt="yonex" />
            </a>
          </div>
          <div id="top_1" className="sub_header">
            <ul className="yonex_menu">
              <li>
                <a href="#none">
                  <span>STORE</span>
                </a>
              </li>
              <li>
                <a href="#none">
                  <span>BRAND</span>
                </a>
              </li>
              <li>
                <a href="#none">
                  <span>EVENT</span>
                </a>
              </li>
              <li>
                <a href="#none">
                  <span>CUSTOMER</span>
                </a>
              </li>
              <li>
                <a href="#none">
                  <span>E_CATALOGUE</span>
                </a>
              </li>
              <li>
                <a href="#none">
                  <span>OUTLET</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="yonex_status_mobile">
            <div className="yonex_search_mobile">search</div>
            <div className="yonex_menu_mobile">menu</div>
          </div>
        </div>
      </article>
    </>
  );
};

export default Header;
