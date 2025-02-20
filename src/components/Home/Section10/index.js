/** @format */
"use client";
import Image from "next/image";
import React, { useRef } from "react";
import arrowBackward from "../../../../public/arrow_backward_ios.svg";
import arrowForward from "../../../../public/arrow_forward_ios.svg";
import { MaskText } from "@/util/MaskText";
import ChildrenReveal from "@/util/ChildrenReveal";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { usePathname } from "next/navigation";
function Section10({ data }) {
  const pathname = usePathname();
  const duplicatedData = [...data, ...data];
  const swiperRef = useRef();
  useGSAP(() => {
    gsap
      .timeline({
        repeat: -1,
        defaults: {
          ease: "none",
        },
      })
      .fromTo(
        "#clientAnimation",
        {
          x: 0,
        },

        {
          duration: 1.5 * data.length,
          x: `${
            window.matchMedia("(max-width: 640px)").matches
              ? -1 * (10 * data.length)
              : -1 * (16 * data.length)
          }rem`,
        }
      );
  }, []);
  return (
    <div className="relative w-screen h-fit bg-white overflow-x-hidden md:pb-14">
      <div className="relative max-w-screen mx-auto w-full">
        <div
          className={`w-full flex items-center pb-6 ${pathname.includes("/projects") ? " md:pt-12 pt-8" : ""}  h-fit flex-col`}
        >
          <div className="flex items-center justify-center sm:justify-between w-full px-5 sm:px-10 md:px-12 ">
            <MaskText
              text={"Clients"}
              styling="font-sora text-center sm:text-left font-semibold leading-tight text-[#101763] text-3xl sm:text-4xl lg:text-5xl "
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
                  alt="arrow Forward"
                />
              </button>
            </ChildrenReveal>
          </div>
          <ChildrenReveal x={20} y={0} styling="relative  w-full">
            <div className="overflow-hidden md:pt-12 w-full">
              <div
                // style={{
                // animation: "ticker-kf-clients 10s linear infinite",
                // }}
                id="clientAnimation"
                className="flex ml-[-1rem] mr-[-1rem]"
              >
                {duplicatedData?.map((item, index) => (
                  <div
                    // style={{
                    //   margin: "0 2rem 0 2rem",
                    // }}
                    key={index}
                    className="w-[10rem] sm:w-[13rem] ml-[0.4rem] sm:ml-[2rem] mr-[0.4rem] sm:mr-[1.5rem] flex-none h-28 max-w-full relative  self-center object-center object-contain"
                  >
                    <Image
                      src={item.image}
                      fill={true}
                      // objectFit="contain"
                      className="object-contain"
                      alt="image"
                    />
                  </div>
                ))}
              </div>
            </div>
          </ChildrenReveal>
        </div>
      </div>
    </div>
  );
}

export default Section10;
