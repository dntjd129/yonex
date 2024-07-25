import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../../assets/scss/style.scss";
import SwiperCore from "swiper";
import { Autoplay } from "swiper/modules";

SwiperCore.use([Autoplay]);

const SlideCard = () => {
  const swiper_option = {
    loop: true,
    longSwipes: true,
    longSwipesRatio: 0,
    resistance: true,
    resistanceRatio: 0,
    slidesPerView: 5,
    slidesPerGroup: 1,
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      768: {
        slidesPerView: 1,
        spaceBetween: 10,
        centeredSlides: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
      },
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
