"use client";

import React from "react";
function Header() {
  function Refresh() {
    window.location.reload();
  }

  return (
    <>
      <div className="w-full  shadow-lg">
        <div className="max-w-[1440px] w-full  h-[110px] mr-auto ml-auto flex items-center justify-between">
          <h1
            onClick={Refresh}
            className="text-[40px] cursor-pointer font-bold"
          >
            LOGO
          </h1>
          <div className="flex gap-[25px]">
            <h1 className="font-bold">Home</h1>
            <h1 className="font-bold">Company</h1>
            <h1 className="font-bold">Services</h1>
            <h1 className="font-bold">Contact</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
