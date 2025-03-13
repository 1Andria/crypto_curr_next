import React from "react";
import MoreBtn from "../../__atoms/MoreBtn/MoreBtn";
function ScreenInfo() {
  return (
    <div className="w-full h-[calc(100vh-210px)] mt-[100px] flex flex-col justify-center bg-[#ededed] ">
      <div className="flex flex-col gap-[20px] items-center">
        <h1 className="text-center text-[40px] ">
          Middle East Leadger <br /> in Market and OTC <br /> transactions
        </h1>
        <p className="text-center">
          Track your favputite CryptoCoins on the go all <br />
          at one place with a wide variety of exachanges
        </p>
        <MoreBtn />
      </div>
      <div className="w-full h-[130px] mt-[20px] bg-white flex justify-center items-center gap-[200px]">
        <div className="flex w-full justify-between  max-w-[1000px]">
          <div className="flex flex-col ">
            <h1 className="font-bold text-[30px]">10K+</h1>
            <h3>
              Total <br />
              Digital Assets
            </h3>
          </div>
          <div className="flex flex-col">
            <h1 className="font-bold text-[30px]">150+</h1>
            <h3>
              International Exchanges <br />
              All Over The World
            </h3>
          </div>
          <div className="flex flex-col">
            <h1 className="font-bold text-[30px]">$5B+</h1>
            <h3>
              Total Number Of Funds <br />
              Secured With Us
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScreenInfo;
