import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../../assets/scss/style.scss";
import SwiperCore from "swiper";
import { Autoplay } from "swiper/modules";
import md_1 from "../../assets/img/md_pick/md_pick_1.png";
import md_1_hover from "../../assets/img/md_pick/md_pick_1_hover.png";

SwiperCore.use([Autoplay]);

const MdPickSlide = () => {
  const swiper_option = {
    loop: true, // 반복
    longSwipes: true,
    longSwipesRatio: 0,
    resistance: true,
    resistanceRatio: 0,
    slidesPerView: 5,
    slidesPerGroup: 1,
    spaceBetween: 20, // 슬라이드 간의 간격
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  };

  return (
    <div className="wrap">
      <div className="md-list">
        <Swiper {...swiper_option}>
          {Array.from({ length: 10 }).map((_, index) => (
            <SwiperSlide key={index}>
              <div className="md-card">
                <div className="md-card-item">
                  <a href="#">
                    <img src={md_1} alt="" />
                  </a>
                </div>
                <div className="item-name">item-name</div>
                <div className="price-info">권장 소비자가 대비</div>
                <div className="item-price">item-price</div>
                <div className="item-color">item-color</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default MdPickSlide;
