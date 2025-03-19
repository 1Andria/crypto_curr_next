"use client";

import { FetchData } from "@/app/services/Api";
import { Coin, useCoin } from "@/app/services/zustand";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
type newType = {
  newCoin?: Coin;
};

function SwiperComponent({ newCoin }: newType) {
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

  return (
    <div className="flex flex-col">
      <div className="w-[700px] flex justify-between border border-[1px]-black h-[150px] pl-[10px] pr-[10px] rounded-[15px] shadow-lg">
        <Swiper
          slidesPerView={5}
          spaceBetween={15}
          loop={Data.length > 5}
          speed={5000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper w-full h-full"
        >
          {Data.map((ind, key) => (
            <SwiperSlide key={key}>
              <Link
                href={`${ind.name.toLocaleLowerCase()}`}
                className="flex flex-col justify-evenly  h-full "
              >
                <div className="flex items-start gap-[5px]">
                  <Image
                    src={ind.image}
                    width={50}
                    height={50}
                    alt={ind.name}
                    className="object-contain w-[70px] h-[70px]"
                  />
                  <h3 className="text-[12px] text-[#9ca3af]">
                    #{ind.market_cap_rank}
                  </h3>
                </div>
                <h2 className=" font-semibold">{ind.id}</h2>
                <h3 className="text-[16px]">{ind.symbol}</h3>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
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
              <h1 className="text-[rgb(156,163,175)]">Price</h1>
              <h2 className="font-semibold">${formdPrice}</h2>
            </div>
            <div className="flex gap-[20px]">
              <h1 className="text-[#9ca3af]">Price Change</h1>
              {newCoin?.price_change_24h && newCoin.price_change_24h > 0 && (
                <h2 className={`font-semibold clear-start text-[#16a34a] `}>
                  +{Math.round(newCoin?.price_change_24h)}$
                </h2>
              )}
              {newCoin?.price_change_24h && newCoin.price_change_24h < 0 && (
                <h2 className={`font-semibold clear-start text-[#dc2626] `}>
                  {Math.round(newCoin?.price_change_24h)}$
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

export default SwiperComponent;
