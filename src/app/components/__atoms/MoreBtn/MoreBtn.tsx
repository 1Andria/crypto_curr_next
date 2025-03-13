"use client";

import React from "react";

function MoreBtn() {
  function Scroll() {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  }
  return (
    <button
      onClick={Scroll}
      className="w-[150px] mt-[20px] h-[50px] rounded-[5px] bg-black text-white"
    >
      Learn More
    </button>
  );
}

export default MoreBtn;
