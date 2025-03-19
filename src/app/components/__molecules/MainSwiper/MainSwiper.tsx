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

function MainSwiper({ newCoin }: newType) {
  const Data = useCoin((state) => state.coin);
  useEffect(() => {
    FetchData();
  }, []);

  const options = { maximumFractionDigits: 2 };
  const formdPrice = Intl.NumberFormat("en-US", options).format(
    Number(newCoin?.current_price)
  );

  const formdvolume = Intl.NumberFormat("en-US", options).format(
    Number(newCoin?.total_volume)
  );

  return (
    <div className="flex flex-col">
      <div className="w-full h-[500px] flex justify-between  pl-[10px] pr-[10px] rounded-[15px] mb-[30px]">
        <Swiper
          slidesPerView={4}
          spaceBetween={15}
          loop={Data.length > 4}
          speed={5000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper w-full h-full"
        >
          {Data.map((ind, key) => {
            const formdath = Intl.NumberFormat("en-US", options).format(
              Number(ind.ath)
            );
            const formdatl = Intl.NumberFormat("en-US", options).format(
              Number(ind.atl)
            );
            const formdvolume = Intl.NumberFormat("en-US", options).format(
              Number(ind.total_volume)
            );
            const formdPrice = Intl.NumberFormat("en-US", options).format(
              Number(ind.current_price)
            );

            return (
              <SwiperSlide key={key}>
                <Link
                  href={`about/${ind.name.toLowerCase().replace(/\s+/g, "-")}`}
                  className="flex flex-col justify-evenly h-full"
                >
                  <div className="flex items-start gap-[10px]">
                    <Image
                      src={ind.image}
                      width={50}
                      height={50}
                      alt={ind.name}
                      className="object-contain w-[120px] h-[120px]"
                    />
                    <h3 className="text-[12px] text-[#9ca3af]">
                      #{ind.market_cap_rank}
                    </h3>
                  </div>
                  <h2 className="font-semibold text-[20px]">{ind.id}</h2>
                  <h3 className="text-[16px]">{ind.symbol}</h3>

                  <div className="flex gap-[10px] ">
                    <h1 className="text-[rgb(156,163,175)]">Price</h1>
                    <h2 className="font-semibold">${formdPrice}</h2>
                  </div>

                  <div className="flex gap-[10px]">
                    <h1 className="text-[#9ca3af]">Price Change</h1>
                    {ind.price_change_24h > 0 ? (
                      <h2 className="font-semibold text-[#16a34a]">
                        +{Math.round(ind.price_change_24h)}$
                      </h2>
                    ) : (
                      <h2 className="font-semibold text-[#dc2626]">
                        {Math.round(ind.price_change_24h)}$
                      </h2>
                    )}
                  </div>

                  <div className="flex gap-[10px]">
                    <h1 className="text-[#9ca3af]">All Time High</h1>
                    <h2 className="font-semibold text-[#16a34a]">
                      ${formdath}
                    </h2>
                  </div>
                  <div className="flex gap-[10px] ">
                    <h1 className="text-[#9ca3af]">All Time Low</h1>
                    <h2 className="font-semibold text-[#dc2626]">
                      ${formdatl}
                    </h2>
                  </div>

                  <div className="flex gap-[10px]">
                    <h1 className="text-[#9ca3af]">Volume</h1>
                    <h2 className="font-semibold">${formdvolume}</h2>
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default MainSwiper;
