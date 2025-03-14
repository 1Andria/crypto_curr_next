"use client";

import { FetchData } from "@/app/services/Api";
import { useCoin } from "@/app/services/zustand";
import React, { useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// type SwipType = {
//   Swiper: React.JSX.Element;
// };

// import { Pagination } from "swiper/modules";

function Swiper() {
  const Data = useCoin((state) => state.coin);
  useEffect(() => {
    FetchData();
  }, []);

  console.log(Data);
  return (
    <div className="w-[700px] h-[200px] rounded-[15px] shadow-lg">
      {/* <Swiper
        slidesPerView={5}
        spaceBetween={15}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper> */}
    </div>
  );
}

export default Swiper;
