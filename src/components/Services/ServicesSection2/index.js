/** @format */

import Image from "next/image";
import React from "react";
import service1 from "../../../../public/Services/service1.png";
import service2 from "../../../../public/Services/service2.png";
import service3 from "../../../../public/Services/service3.png";
function ServicesSection2() {
  return (
    <div className="relative w-screen h-fit bg-[#F6F6F4] overflow-x-hidden">
      <div className="w-full flex items-center flex-col justify-center  ">
        <div className="h-[100dvh] w-screen flex items-center justify-center bg-[#FFFBF8]">
          <Image src={service1} className="w-72 object-contain" />
        </div>
        <div className="h-[100dvh] w-screen flex items-center justify-center bg-[#E1FFFA]">
          <Image src={service2} className="w-[378px] object-contain" />
        </div>
        <div className="h-[100dvh] w-screen flex items-center justify-center bg-[#FFF5E1]">
          <Image src={service3} className="w-[378px] object-contain" />
        </div>
      </div>
    </div>
  );
}

export default ServicesSection2;
