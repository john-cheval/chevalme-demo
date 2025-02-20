/** @format */

import React from "react";
import forwardIcon from "../../../../public/arrow_forward.png";
import Image from "next/image";
import Link from "next/link";
function CaseStudiesInnerSection3() {
  return (
    <div className="relative w-screen h-fit bg-[#F6F6F4] pb-12 sm:pb-20 overflow-x-hidden">
      <div className="w-full flex items-center space-y-2 md:space-y-3  text-[#101763] h-fit flex-col px-5 sm:px-10 md:px-12">
        <h1 className="font-sora font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tighter leading-snug text-center">
          Sexy stuff we’re <br /> working on right now
        </h1>
        <p className="font-satoshi text-sm sm:text-base md:text-lg lg:text-xl text-center">
          Shhhh... sneak previews, don’t tell anyone
        </p>
        <Link href={"/contact-us"}>
          <div className="flex -space-x-8 py-3 group sm:py-4 md:py-6">
            <div className="flex items-center h-11 md:h-14 w-44 md:pr-0 pr-4 md:w-56 rounded-[2rem] text-xs md:text-sm justify-center text-white group-hover:text-[#101763] cursor-pointer group-hover:bg-[#EBEBEB] transition-all duration-500 bg-black font-sora tracking-tighter">
              Start your project
            </div>
            <div className="w-11 md:w-14 h-11 md:h-14 rounded-full bg-[#D81100] flex items-center justify-center">
              <Image
                src={forwardIcon}
                className="w-3 md:w-4 group-hover:-rotate-45 duration-300 transition-all invert h-3 md:h-4 object-contain"
                alt="forwardIcon"
              />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default CaseStudiesInnerSection3;
