/** @format */

"use client";
import React, { useEffect, useRef, useState } from "react";
import demo from "../../../../public/section8demo.png";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
function CaseStudiesSection2({ data, split }) {
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
        trigger: "#CaseStudiesSection2",
        scrub: 0.25,
        start: "top bottom",
        end: "bottom top",
      },
    });
    timeline
      .to(
        firstSlider.current,
        {
          x: 0,
          duration: 2,
        },
        "start"
      )
      .to(
        secondSlider.current,
        {
          duration: 2,
          x: -700,
        },
        "start"
      )
      .to(
        textSlider.current,
        {
          duration: 2,
          x: -800,
        },
        "start"
      );
  }, []);
  return (
    <div
      id="CaseStudiesSection2"
      className="relative w-screen h-fit bg-white flex items-center justify-center overflow-x-hidden"
    >
      <div className="w-full relative sliderContainer flex items-center justify-center overflow-x-hidden space-y-8 py-24 sm:py-32 md:py-36 h-fit flex-col">
        <div ref={slider1} className="relative whitespace-nowrap">
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
                        alt="caseStudyTitle"
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
                        alt="caseStudyTitle"
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
                        alt="caseStudyTitle"
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
                        alt="caseStudyTitle"
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
                        alt="caseStudyTitle"
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
                        alt="caseStudyTitle"
                      />
                    </div>
                  )
              )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CaseStudiesSection2;
