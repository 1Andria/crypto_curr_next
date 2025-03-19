import React from "react";
import { Star } from "../../Icons/Star";
import { Coin, useSearchValue } from "@/app/services/zustand";
import Increasing from "../../Icons/Increasing";
import Decreasing from "../../Icons/Decreasing";
import Link from "next/link";
import Image from "next/image";

type CoinInfoType = {
  coin: object & Coin;
};

function CoinInfo({ coin }: CoinInfoType) {
  const options = { maximumFractionDigits: 2 };
  const formprice = Intl.NumberFormat("en-US", options).format(
    coin.current_price
  );
  const formvolume = Intl.NumberFormat("en-US", options).format(
    coin.total_volume
  );
  const formcap = Intl.NumberFormat("en-US", options).format(coin.market_cap);

  const formName = coin.name.toLowerCase().replace(/\s+/g, "-");
  const clear = useSearchValue((state) => state.emptyValue);

  return (
    <>
      <Link
        onClick={clear}
        href={`about/${formName}`}
        className="w-full gap-[40px] flex bg-white items-center h-[90px] border-b-[1px] border-b-[#f2f2f2] shadow-lg pl-[5px]"
      >
        <Star />
        <div className="flex w-full items-center justify-between pr-[100px]">
          <div className="flex items-center w-[200px] ">
            <Image
              className="w-[60px] mr-[5px] h-[60px]"
              src={coin.image}
              alt={coin.name}
            />
            <h1 className="font-semibold">{coin.name}</h1>
          </div>
          <div className="flex w-full justify-between pl-[40px] ">
            <div className="w-[150px] ">
              <h1 className="font-semibold">${formprice}</h1>
            </div>
            <div className="w-[170px] ">
              <h1 className="font-semibold">{formvolume}</h1>
            </div>
            <div className="w-[240px] pl-[20px] ">
              <h1 className="text-[#727280] font-semibold">${formcap}</h1>
            </div>
            <div className="flex items-center gap-[5px]">
              {coin.price_change_percentage_24h > 0 && <Increasing />}
              {coin.price_change_percentage_24h < 0 && <Decreasing />}
              <h1
                className={`${
                  coin.price_change_percentage_24h > 0
                    ? "text-[#16a34a]"
                    : "text-[#dc2626]"
                } font-semibold`}
              >
                {coin.price_change_percentage_24h}%
              </h1>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default CoinInfo;
