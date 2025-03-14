"use client";

import { FetchData } from "@/app/services/Api";
import { Coin, useCoin } from "@/app/services/zustand";
import React, { useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// type SwipType = {
//   Swiper: React.JSX.Element;
// };

// import { Pagination } from "swiper/modules";
type newType = {
  newCoin?: Coin;
};

function Swiper({ newCoin }: newType) {
  const Data = useCoin((state) => state.coin);
  useEffect(() => {
    FetchData();
  }, []);

  const options = { maximumFractionDigits: 2 };
  const formdPrice = Intl.NumberFormat("en-US", options).format(
    Number(newCoin?.current_price)
  );

  const formdath = Intl.NumberFormat("en-US", options).format(
    Number(newCoin?.ath)
  );
  const formdatl = Intl.NumberFormat("en-US", options).format(
    Number(newCoin?.atl)
  );
  const formdvolume = Intl.NumberFormat("en-US", options).format(
    Number(newCoin?.total_volume)
  );

  console.log(Data);
  return (
    <div className="flex flex-col">
      <div className="w-[700px] h-[150px] rounded-[15px] shadow-lg">
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

      <div className="w-[700px] h-[130px] mt-[20px]  gap-[20px] rounded-[15px] shadow-lg flex flex-col items-center">
        <div className="flex gap-[6px] items-center">
          <img
            className="w-[30px] h-[30px]"
            src={newCoin?.image}
            alt={newCoin?.name}
          />
          <h1>Price statisticts</h1>
        </div>

        <div className=" flex w-full h-full justify-between pl-[10px] pr-[10px] ">
          <div className="flex flex-col gap-[10px]">
            <div className="flex gap-[20px]">
              <h1 className="text-[#9ca3af]">Price</h1>
              <h2 className="font-semibold">${formdPrice}</h2>
            </div>
            <div className="flex gap-[20px]">
              <h1 className="text-[#9ca3af]">Price Change</h1>
              {newCoin?.price_change_24h && newCoin.price_change_24h > 0 && (
                <h2 className={`font-semibold clear-start text-[#16a34a] `}>
                  +{newCoin?.price_change_24h}$
                </h2>
              )}
              {newCoin?.price_change_24h && newCoin.price_change_24h < 0 && (
                <h2 className={`font-semibold clear-start text-[#dc2626] `}>
                  {newCoin?.price_change_24h}$
                </h2>
              )}
            </div>
          </div>{" "}
          <div className="flex flex-col gap-[10px]">
            <div className="flex gap-[20px]">
              <h1 className="text-[#9ca3af]">All Time High</h1>
              <h2 className="font-semibold text-[#16a34a]">${formdath}</h2>
            </div>
            <div className="flex gap-[20px]">
              <h1 className="text-[#9ca3af]">All Time Low</h1>

              <h2 className={`font-semibold clear-start text-[#dc2626] `}>
                ${formdatl}
              </h2>
            </div>
          </div>{" "}
          <div className="flex flex-col gap-[10px]">
            <div className="flex gap-[20px]">
              <h1 className="text-[#9ca3af]">Volume</h1>
              <h2 className="font-semibold">${formdvolume}</h2>
            </div>
            <div className="flex gap-[20px]">
              <h1 className="text-[#9ca3af]">Rank</h1>

              <h2 className={`font-semibold clear-start  `}>
                #{newCoin?.market_cap_rank}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Swiper;
