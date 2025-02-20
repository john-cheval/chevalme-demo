/** @format */
"use client";
import Image from "next/image";
import React, { useRef } from "react";
import arrowBackward from "../../../../public/arrow_backward_ios.svg";
import arrowForward from "../../../../public/arrow_forward_ios.svg";
import { MaskText } from "@/util/MaskText";
import ChildrenReveal from "@/util/ChildrenReveal";
function AboutSection3New({ data }) {
  const swiperRef = useRef();
  return (
    <div className="relative w-screen h-fit bg-white overflow-x-hidden">
      <div className="relative max-w-screen mx-auto w-full">
        <div className="w-full flex items-center py-5 sm:py-24  md:py-32 h-fit flex-col ">
          <div className="flex items-center justify-center  sm:justify-between w-full px-5 sm:px-10 md:px-12 ">
            <MaskText
              text={"Clients"}
              styling="font-sora text-center sm:text-left font-semibold leading-tight text-[#101763] text-3xl sm:text-4xl md:text-5xl lg:text-[50px]"
            />
            <ChildrenReveal
              x={0}
              y={20}
              styling="hidden items-center space-x-10"
            >
              <button onClick={() => swiperRef.current?.slidePrev()}>
                <Image
                  src={arrowBackward}
                  className="w-6 object-contain"
                  alt="left_arrow"
                />
              </button>
              <button onClick={() => swiperRef.current?.slideNext()}>
                <Image
                  src={arrowForward}
                  className="w-6 object-contain"
                  alt="right_arrow"
                />
              </button>
            </ChildrenReveal>
          </div>
          <ChildrenReveal
            x={0}
            y={10}
            styling="relative grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 items-center justify-center  place-items-center gap-4 py-12  grid-flow-row  w-full"
          >
            {data?.map((item, index) => (
              <div className="h-14 md:h-20 lg:h-28 w-[12rem] relative">
                <Image
                  src={item.image}
                  className="w-full h-full object-contain"
                  fill={true}
                  alt="about_client"
                />
              </div>
            ))}
          </ChildrenReveal>
        </div>
      </div>
    </div>
  );
}

export default AboutSection3New;
