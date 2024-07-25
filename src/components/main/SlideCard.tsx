import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../../assets/scss/style.scss";
import SwiperCore from "swiper";
import { Autoplay } from "swiper/modules";

// Swiper에 Autoplay 모듈 추가
SwiperCore.use([Autoplay]);

const SlideCard = () => {
  const swiper_option = {
    loop: true, // 슬라이드가 반복되도록 설정
    longSwipes: true,
    longSwipesRatio: 0,
    resistance: true,
    resistanceRatio: 0,
    slidesPerView: 5,
    slidesPerGroup: 1,
    spaceBetween: 20, // 슬라이드 간의 간격 (필요에 따라 조정)
    autoplay: {
      delay: 3000, // 3초마다 자동으로 슬라이드
      disableOnInteraction: false, // 사용자 상호작용 후에도 자동 슬라이드가 멈추지 않도록 설정
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
