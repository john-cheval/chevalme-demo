/** @format */

"use client";
import React, { useEffect, useRef } from "react";
import demo from "../../../../public/section8demo.png";
import Image from "next/image";
import gsap from "gsap";
import forwardIcon from "../../../../public/arrow_forward.png";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
function ServicesInnerSection4({ data, split }) {
  const firstSlider = useRef(null);
  const secondSlider = useRef(null);
  const textSlider = useRef(null);
  const slider1 = useRef(null);
  const slider2 = useRef(null);
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    let timeline = gsap.timeline({
      defaults: {
        ease: "none",
      },
      scrollTrigger: {
        trigger: "#ServicesInnerSection4",
        scrub: 1,
        start: "top bottom",
        end: "bottom top",
      },
    });
    timeline
      .to(
        firstSlider.current,
        {
          x: 0,
        },
        "start"
      )
      .to(
        secondSlider.current,
        {
          x: -500,
        },
        "start"
      )
      .to(
        textSlider.current,
        {
          x: -800,
        },
        "start"
      );
  }, []);
  return (
    <>
      <div
        id="ServicesInnerSection4"
        className="relative w-screen h-fit bg-white flex items-center justify-center overflow-x-hidden"
      >
        <div className="w-full relative sliderContainer flex items-center justify-center overflow-x-hidden space-y-8 py-24 sm:py-32 md:py-36 h-fit flex-col">
          <div
            ref={firstSlider}
            className=" flex   space-x-6 -translate-x-[500px] "
          >
            {data &&
              split &&
              data?.show_off_gallery?.map(
                (item, index) =>
                  index < split && (
                    <div
                      key={index}
                      className=" h-[180px] sm:h-[250px] md:h-[304px] w-[250px] sm:w-[370px] md:w-[424px] relative object-contain"
                    >
                      <Image
                        src={item.url}
                        className=" object-contain"
                        fill={true}
                      />
                    </div>
                  )
              )}
            {data &&
              split &&
              data?.show_off_gallery?.map(
                (item, index) =>
                  index < split && (
                    <div
                      key={index}
                      className=" h-[180px] sm:h-[250px] md:h-[304px] w-[250px] sm:w-[370px] md:w-[424px] relative object-contain"
                    >
                      <Image
                        src={item.url}
                        className=" object-contain"
                        fill={true}
                      />
                    </div>
                  )
              )}{" "}
            {data &&
              split &&
              data?.show_off_gallery?.map(
                (item, index) =>
                  index < split && (
                    <div
                      key={index}
                      className=" h-[180px] sm:h-[250px] md:h-[304px] w-[250px] sm:w-[370px] md:w-[424px] relative object-contain"
                    >
                      <Image
                        src={item.url}
                        className=" object-contain"
                        fill={true}
                      />
                    </div>
                  )
              )}
            {/* <Image
              src={demo}
              className=" h-[180px] sm:h-[250px] md:h-[304px] object-contain"
            />
            <Image
              src={demo}
              className=" h-[180px] sm:h-[250px] md:h-[304px] object-contain"
            />
            <Image
              src={demo}
              className=" h-[180px] sm:h-[250px] md:h-[304px] object-contain"
            />
            <Image
              src={demo}
              className=" h-[180px] sm:h-[250px] md:h-[304px] object-contain"
            />
            <Image
              src={demo}
              className=" h-[180px] sm:h-[250px] md:h-[304px] object-contain"
            /> */}
          </div>
          <div
            ref={textSlider}
            className=" whitespace-nowrap space-x-2 text-[#101763] font-sora font-semibold  text-6xl md:text-7xl lg:text-8xl tracking-tighter hidden sm:flex flex-nowrap"
          >
            <div className="px-2">Let's work together. </div>
            <div className="px-2">Let's work together. </div>
            <div className="px-2">Let's work together. </div>
            <div className="px-2">Let's work together. </div>
            <div className="px-2">Let's work together. </div>
            <div className="px-2">Let's work together. </div>
            <div className="px-2">Let's work together. </div>
            <div className="px-2">Let's work together. </div>
          </div>
          <div ref={slider2} className="relative whitespace-nowrap">
            <div ref={secondSlider} className=" flex  space-x-6 ">
              {data &&
                split &&
                data?.show_off_gallery?.map(
                  (item, index) =>
                    index > split && (
                      <div
                        key={index}
                        className=" h-[180px] sm:h-[250px] md:h-[304px] w-[250px] sm:w-[370px] md:w-[424px] relative object-contain"
                      >
                        <Image
                          src={item.url}
                          className=" object-contain"
                          fill={true}
                        />
                      </div>
                    )
                )}
              {data &&
                split &&
                data?.show_off_gallery?.map(
                  (item, index) =>
                    index > split && (
                      <div
                        key={index}
                        className=" h-[180px] sm:h-[250px] md:h-[304px] w-[250px] sm:w-[370px] md:w-[424px] relative object-contain"
                      >
                        <Image
                          src={item.url}
                          className=" object-contain"
                          fill={true}
                        />
                      </div>
                    )
                )}
              {data &&
                split &&
                data?.show_off_gallery?.map(
                  (item, index) =>
                    index > split && (
                      <div
                        key={index}
                        className=" h-[180px] sm:h-[250px] md:h-[304px] w-[250px] sm:w-[370px] md:w-[424px] relative object-contain"
                      >
                        <Image
                          src={item.url}
                          className=" object-contain"
                          fill={true}
                        />
                      </div>
                    )
                )}
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-screen h-fit bg-[#F6F6F4] py-16 sm:py-28 md:py-32 lg:py-36 overflow-x-hidden">
        <div className="w-full flex items-center space-y-2 md:space-y-3  text-[#101763] h-fit flex-col px-5 sm:px-10 md:px-12">
          <h1 className="font-sora font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tighter leading-snug text-center">
            Sexy stuff we’re <br /> working on right now
          </h1>
          <p className="font-satoshi tparagraphText-Size text-center">
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
                />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default ServicesInnerSection4;
