import { Coin } from "@/app/services/zustand";
import React from "react";

type newType = {
  newCoin?: Coin;
};

function HeadInfo({ newCoin }: newType) {
  const options = { maximumFractionDigits: 2 };
  const formprice = Intl.NumberFormat("en-US", options).format(
    Number(newCoin?.current_price)
  );
  //////////////////////////////////////////////////////
  const priceChange = Math.round(Number(newCoin?.price_change_24h));
  return (
    <div>
      <div className="flex gap-[20px] items-center">
        <img
          className="w-[130px] h-[130px]"
          src={newCoin?.image}
          alt={"image of" + newCoin?.name}
        />
        <div className="flex flex-col ">
          <div className="flex items-start gap-[5px]">
            <h1 className="text-[22px] font-semibold ">{newCoin?.name}</h1>
            <h4 className="text-[grey] text-[12px]">
              #{newCoin?.market_cap_rank}
            </h4>
          </div>
          <div className="flex flex-col items-end">
            {newCoin?.price_change_24h && newCoin?.price_change_24h > 0 && (
              <h4 className="text-[#16a34a] mr-[-30px] font-semibold">
                +{priceChange}$
              </h4>
            )}
            {newCoin?.price_change_24h && newCoin?.price_change_24h < 0 && (
              <h4 className="text-[#dc2626] mr-[-30px] font-semibold">
                {priceChange}$
              </h4>
            )}
            <h1 className="text-[30px] font-semibold">${formprice}</h1>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[20px] mt-[70px]">
        <div className="w-[220px] rounded-[5px] h-[40px] flex justify-center items-center bg-[#e5e7eb]">
          <h1>Smart Contract Platform</h1>
        </div>
        <div className="w-[120px] rounded-[5px] h-[40px] flex justify-center items-center bg-[#e5e7eb]">
          <h1>Layer 1 (L1)</h1>
        </div>
      </div>
    </div>
  );
}

export default HeadInfo;
