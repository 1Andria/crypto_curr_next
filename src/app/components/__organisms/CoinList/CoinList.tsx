"use client";

import { FetchData } from "@/app/services/Api";
import { useCoin, useSearchValue } from "@/app/services/zustand";
import React, { useEffect } from "react";
import CoinInfo from "../../__molecules/CoinInfo/CoinInfo";
import Input from "../../__atoms/Input/Input";

function CoinList() {
  const info = useCoin((state) => state.coin);
  useEffect(() => {
    FetchData();
  }, []);
  const Value = useSearchValue((state) => state.SearchValue);

  const filtered =
    Value !== ""
      ? info.filter((coin) =>
          coin.name.toLowerCase().includes(Value.toLowerCase())
        )
      : info;

  return (
    <>
      <div className="w-full  flex flex-col items-center mt-[60px] pb-[80px]">
        <div className="max-w-[1200px] w-full">
          <Input />
          <div className="w-full mt-[30px] max-w-[1200px]  h-[60px] rounded-t-[18px] bg-[#f2f2f2] justify-around flex items-center ">
            <h1 className="font-bold">COIN</h1>
            <h1 className="font-bold">PRICE</h1>
            <h1 className="font-bold">TOTAL VALUME</h1>
            <h1 className="font-bold">MARKET CAP</h1>
            <h1 className="font-bold">
              PRICE CHANGE
              <span className="font-normal text-[#727280]">(24h)</span>
            </h1>
          </div>
          <div className="max-w-[1200px] flex flex-col  w-full">
            {filtered.map((coin, key) => {
              return <CoinInfo key={key} coin={coin} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default CoinList;
