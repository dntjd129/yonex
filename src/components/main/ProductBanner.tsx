import React from "react";
import "../../assets/scss/style.scss";
import badminton from "../../assets/img/banner_box/banner_badminton.png";
import bag_acc from "../../assets/img/banner_box/banner_bag_acc.png";
import golf from "../../assets/img/banner_box/banner_golf.png";
import tennis from "../../assets/img/banner_box/banner_tennis.png";
import wears from "../../assets/img/banner_box/banner_wears.png";
import korea_team from "../../assets/img/banner_box/icon_korea_team.jpg";

const ProductBanner = () => {
  const bannerImg = [badminton, tennis, golf, wears, bag_acc];

  const bannerText = ["BADMINTON", "TENNIS", "GOLF", "TENNIS", "WEARS"];

  return (
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
        {bannerImg.map((imgSrc, index) => (
          <div className="banner-box" key={index}>
            <div className="banner-item">
              <a href="#">
                <img src={imgSrc} alt={bannerText[index]} />
                <div>{/* <p>{bannerText[index]}</p> */}</div>
              </a>
            </div>
          </div>
        ))}
        <div className="banner-box-korea">
          <a href="">
            <img src={korea_team} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductBanner;
