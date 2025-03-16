"use client";

import BackBtn from "@/app/components/__atoms/BackBtn/BackBtn";
import AdditionalInfo from "@/app/components/__molecules/AdditionalInfo/AdditionalInfo";
import HeadInfo from "@/app/components/__molecules/HeadInfo/HeadInfo";
import Swiper from "@/app/components/__molecules/Swiper/Swiper";
import { FetchData } from "@/app/services/Api";
import { useCoin } from "@/app/services/zustand";
import React, { useEffect } from "react";
type ParamsType = {
  params: {
    id: string;
  };
};

function About({ params }: ParamsType) {
  const data = useCoin((state) => state.coin);
  const newCoin = data.find(
    (coin) => coin.name.toLowerCase().replace(/\s+/g, "-") === params.id
  );

  useEffect(() => {
    FetchData();
  }, []);

  console.log(newCoin);

  return (
    <div className="w-full flex flex-col pl-[30px]">
      <BackBtn />
      <div className="flex w-full justify-between mt-[50px] pr-[50px] pl-[50px]">
        <HeadInfo newCoin={newCoin} />
        <Swiper newCoin={newCoin} />
      </div>
      <AdditionalInfo newCoin={newCoin} />
    </div>
  );
}

export default About;
