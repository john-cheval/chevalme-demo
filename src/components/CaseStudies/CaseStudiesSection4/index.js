/** @format */
"use client";
import Image from "next/image";
import React, { useRef } from "react";
import client1 from "../../../../public/client1.png";
import client2 from "../../../../public/client2.png";
import client3 from "../../../../public/client3.png";
import client4 from "../../../../public/client4.png";
import client5 from "../../../../public/client5.png";
import client6 from "../../../../public/client6.png";
import client7 from "../../../../public/client7.png";

import arrowBackward from "../../../../public/arrow_backward_ios.svg";
import arrowForward from "../../../../public/arrow_forward_ios.svg";
import { MaskText } from "@/util/MaskText";
import ChildrenReveal from "@/util/ChildrenReveal";
function CaseStudiesSection4() {
  const swiperRef = useRef();

  return (
    <div className="relative w-screen h-fit bg-white overflow-x-hidden">
      <div className="relative max-w-screen mx-auto w-full">
        <div className="w-full flex items-center pb-10 sm:pb-20 h-fit flex-col ">
          <div className="flex items-center justify-center sm:justify-between w-full px-5 sm:px-10 md:px-12 ">
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
                  alt="arrowBackward"
                />
              </button>
              <button onClick={() => swiperRef.current?.slideNext()}>
                <Image
                  src={arrowForward}
                  className="w-6 object-contain"
                  alt="arrowForward"
                />
              </button>
            </ChildrenReveal>
          </div>
          <ChildrenReveal x={20} y={0} styling="relative  w-full">
            <div className="overflow-hidden pt-6 sm:pt-10 md:pt-12 w-full">
              <div
                style={{
                  animation: "ticker-kf-clients 10s linear infinite",
                }}
                className="flex ml-[-1rem] mr-[-1rem]"
              >
                <Image
                  src={client1}
                  className="w-[12rem] flex-none max-w-full  self-center object-center object-contain"
                  style={{
                    margin: "0 2rem 0 2rem",
                  }}
                  alt="client1"
                />
                <Image
                  src={client2}
                  className="w-[12rem] flex-none max-w-full  self-center object-center object-contain"
                  style={{
                    margin: "0 2rem 0 2rem",
                  }}
                  alt="client2"
                />
                <Image
                  src={client3}
                  className="w-[12rem] flex-none max-w-full  self-center object-center object-contain"
                  style={{
                    margin: "0 2rem 0 2rem",
                  }}
                  alt="client3"
                />
                <Image
                  src={client4}
                  className="w-[12rem] flex-none max-w-full  self-center object-center object-contain"
                  style={{
                    margin: "0 2rem 0 2rem",
                  }}
                  alt="client4"
                />
                <Image
                  src={client5}
                  className="w-[12rem] flex-none max-w-full  self-center object-center object-contain"
                  style={{
                    margin: "0 2rem 0 2rem",
                  }}
                  alt="client5"
                />
                <Image
                  src={client6}
                  className="w-[12rem] flex-none max-w-full  self-center object-center object-contain"
                  style={{
                    margin: "0 2rem 0 2rem",
                  }}
                  alt="client6"
                />
                <Image
                  src={client7}
                  className="w-[12rem] flex-none max-w-full  self-center object-center object-contain"
                  style={{
                    margin: "0 2rem 0 2rem",
                  }}
                  alt="client6"
                />
                <Image
                  src={client1}
                  className="w-[12rem] flex-none max-w-full  self-center object-center object-contain"
                  style={{
                    margin: "0 2rem 0 2rem",
                  }}
                  alt="client1"
                />
                <Image
                  src={client2}
                  className="w-[12rem] flex-none max-w-full  self-center object-center object-contain"
                  style={{
                    margin: "0 2rem 0 2rem",
                  }}
                  alt="client2"
                />
                <Image
                  src={client3}
                  className="w-[12rem] flex-none max-w-full  self-center object-center object-contain"
                  style={{
                    margin: "0 2rem 0 2rem",
                  }}
                  alt="client3"
                />
                <Image
                  src={client4}
                  className="w-[12rem] flex-none max-w-full  self-center object-center object-contain"
                  style={{
                    margin: "0 2rem 0 2rem",
                  }}
                  alt="client4"
                />
                <Image
                  src={client5}
                  className="w-[12rem] flex-none max-w-full  self-center object-center object-contain"
                  style={{
                    margin: "0 2rem 0 2rem",
                  }}
                  alt="client5"
                />
                <Image
                  src={client6}
                  className="w-[12rem] flex-none max-w-full  self-center object-center object-contain"
                  style={{
                    margin: "0 2rem 0 2rem",
                  }}
                  alt="client6"
                />
                <Image
                  src={client7}
                  className="w-[12rem] flex-none max-w-full  self-center object-center object-contain"
                  style={{
                    margin: "0 2rem 0 2rem",
                  }}
                  alt="client7"
                />
                <Image
                  src={client1}
                  className="w-[12rem] flex-none max-w-full  self-center object-center object-contain"
                  style={{
                    margin: "0 2rem 0 2rem",
                  }}
                  alt="client1"
                />
                <Image
                  src={client2}
                  className="w-[12rem] flex-none max-w-full  self-center object-center object-contain"
                  style={{
                    margin: "0 2rem 0 2rem",
                  }}
                  alt="client2"
                />
                <Image
                  src={client3}
                  className="w-[12rem] flex-none max-w-full  self-center object-center object-contain"
                  style={{
                    margin: "0 2rem 0 2rem",
                  }}
                  alt="client3"
                />
                <Image
                  src={client4}
                  className="w-[12rem] flex-none max-w-full  self-center object-center object-contain"
                  style={{
                    margin: "0 2rem 0 2rem",
                  }}
                  alt="client4"
                />
                <Image
                  src={client5}
                  className="w-[12rem] flex-none max-w-full  self-center object-center object-contain"
                  style={{
                    margin: "0 2rem 0 2rem",
                  }}
                  alt="client5"
                />
                <Image
                  src={client6}
                  className="w-[12rem] flex-none max-w-full  self-center object-center object-contain"
                  style={{
                    margin: "0 2rem 0 2rem",
                  }}
                  alt="client6"
                />
                <Image
                  src={client7}
                  className="w-[12rem] flex-none max-w-full  self-center object-center object-contain"
                  style={{
                    margin: "0 2rem 0 2rem",
                  }}
                  alt="client7"
                />
              </div>
            </div>
          </ChildrenReveal>
        </div>
      </div>
    </div>
  );
}

export default CaseStudiesSection4;
