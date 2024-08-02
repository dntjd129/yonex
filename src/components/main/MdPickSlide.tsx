import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../../assets/scss/style.scss";
import SwiperCore from "swiper";
import { Autoplay } from "swiper/modules";
import md_1 from "../../assets/img/md_pick/md_pick_1.png";

SwiperCore.use([Autoplay]);

const MdPickSlide = () => {
  const swiper_option = {
    loop: true,
    slidesPerView: 4,
    slidesPerGroup: 1,
    spaceBetween: 15,
    autoplay: {
      delay: 2600,
      disableOnInteraction: false,
    },
    breakpoints: {
      "@0.75": {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 15,
      },
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
