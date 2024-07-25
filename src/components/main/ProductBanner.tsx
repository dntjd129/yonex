import React from "react";
import "../../assets/scss/style.scss";

const ProductBanner = () => {
  return (
    <>
      <div className="section">
        <div className="section_wrap">
          <div className="section_title">
            <h2 className="title">
              <span className="title">YONEX KOREA</span>
            </h2>
            <div className="divider"></div>
            <p className="title__sub">요넥스의 다양한 상품들을 만나보세요.</p>
          </div>
        </div>
        <div className="section_wrap">
          <div className="banner-box">
            <a href="">
              <img src="" alt="" />
              <div>
                <p>BADMINTON</p>
              </div>
            </a>
          </div>
          <div className="banner-box">
            <a href="">
              <img src="" alt="" />
              <div>
                <p>TENNIS</p>
              </div>
            </a>
          </div>
          <div className="banner-box">
            <a href="">
              <img src="" alt="" />
              <div>
                <p>GOLF</p>
              </div>
            </a>
          </div>
          <div className="banner-box">
            <a href="">
              <img src="" alt="" />
              <div>
                <p>WEARS</p>
              </div>
            </a>
          </div>
          <div className="banner-box">
            <a href="">
              <img src="" alt="" />
              <div>
                <p>BADMINTON</p>
              </div>
            </a>
          </div>
          <div className="banner-box">
            <a href="">
              <img src="" alt="" />
              <div>
                <p>BADMINTON</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductBanner;
