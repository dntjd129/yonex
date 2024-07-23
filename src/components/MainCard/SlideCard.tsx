import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../../assets/scss/style.scss";

const SlideCard = () => {
  const swiper_option = {
    longSwipes: true,
    longSwipesRatio: 0,
    resistance: true,
    resistanceRatio: 0,
    slidesPerView: "auto" as const,
  };
  return (
    <>
      <div className="wrap">
        <div className="list">
          <Swiper {...swiper_option}>
            {[1, 4].map((_) => (
              <SwiperSlide>
                <div className="card"></div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {/* min-width , 기본적으로 보이는 슬라이더 개수 정해야함 */}
    </>
  );
};

export default SlideCard;
