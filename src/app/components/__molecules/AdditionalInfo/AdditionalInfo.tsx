import { Coin } from "@/app/services/zustand";
import React from "react";
type newType = {
  newCoin?: Coin;
};
function AdditionalInfo({ newCoin }: newType) {
  const options = { maximumFractionDigits: 2 };
  const formdiluted = Intl.NumberFormat("en-US", options).format(
    Number(newCoin?.fully_diluted_valuation)
  );
  const formvolume = Intl.NumberFormat("en-US", options).format(
    Number(newCoin?.total_volume)
  );
  const formcap = Intl.NumberFormat("en-US", options).format(
    Number(newCoin?.market_cap)
  );
  const formsupply = Intl.NumberFormat("en-US", options).format(
    Number(newCoin?.total_supply)
  );
  return (
    <div className="max-w-[1440px] pt-[20px] pb-[20px] pl-[20px] rounded-[20px] shadow-lg pr-[20px] flex justify-between w-full h-[190px] mt-[60px] ">
      <div className="flex flex-col h-full justify-evenly">
        <h1 className="text-[22px] font-semibold">Market Cap</h1>
        <h1 className="text-[32px]">
          <span className="text-[#9ca3af]">$</span>
          {formcap}
        </h1>
      </div>
      <div className="h-full w-[1px] bg-[#f3f4f6] "></div>
      <div className="flex flex-col h-full justify-evenly">
        <h1 className="text-[22px] font-semibold">Fully Diluted</h1>
        <h1 className="text-[32px]">
          <span className="text-[#9ca3af]">$</span>
          {formdiluted}
        </h1>
      </div>
      <div className="h-full w-[1px] bg-[#f3f4f6]"></div>
      <div className="flex flex-col h-full justify-evenly">
        <h1 className="text-[22px] font-semibold">Volume</h1>
        <h1 className="text-[32px]">
          <span className="text-[#9ca3af]">$</span>
          {formvolume}
        </h1>
      </div>
      <div className="h-full w-[1px] bg-[#f3f4f6]"></div>
      <div className="flex flex-col h-full justify-evenly">
        <h1 className="text-[22px] font-semibold">Circulating Supply</h1>
        <h1 className="text-[32px]">
          <span className="text-[#9ca3af]">$</span>
          {formsupply}
          <span className="opacity-[0.3] ml-[5px]">
            {newCoin?.symbol.toUpperCase()}
          </span>
        </h1>
      </div>
    </div>
  );
}

export default AdditionalInfo;
