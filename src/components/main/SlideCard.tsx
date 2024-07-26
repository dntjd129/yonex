import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../../assets/scss/style.scss";
import SwiperCore from "swiper";
import { Autoplay } from "swiper/modules";

SwiperCore.use([Autoplay]);

const SlideCard = () => {
  const swiper_option = {
    loop: true,
    loopFillGroupWithBlank: true,
    spaceBetween: 8, // 슬라이드 간격
    slidesPerView: 1.5,
    slidesPerGroup: 1,
    centeredSlides: true, // 양쪽 미리보기
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  };

  return (
    <div className="wrap">
      <div className="list">
        <Swiper {...swiper_option}>
          {Array.from({ length: 10 }).map((_, index) => (
            <SwiperSlide key={index}>
              <div className="card">Slide {index + 1}</div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SlideCard;
