import React from "react";
import SwipeableCarousel from "./SwipeableCarousel";
function MainSwiper() {
  return (
    <div className="container-swiper">
      <h3 className="title-swiper">رشد</h3>
      <SwipeableCarousel />
      <h3 className="title-swiper">آموزش</h3>
      <SwipeableCarousel />
      <h3 className="title-swiper">تربیت</h3>
      <SwipeableCarousel />
    </div>
  );
}

export default MainSwiper;
