/** @format */

"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import work4 from "../../../../public/Work/work4.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import arrowBackward from "../../../../public/arrow_backward_ios.svg";
import arrowForward from "../../../../public/arrow_forward_ios.svg";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useRouter } from "next/navigation";
function ServicesInnerSection3({ data }) {
  const swiperRef = useRef();
  const router = useRouter();

  return (
    <div className="relative w-screen h-fit py-20 bg-[#F6F6F4] overflow-x-hidden">
      <div className="w-full flex items-center h-fit flex-col">
        {/* <div className="flex items-end justify-between w-full  px-5 sm:px-10 md:px-12 ">
          <div className="">
            <div className="flex font-sora text-sm my-2 items-center space-x-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#D81100]"></div>
              <span>More good stuff</span>
            </div>
            <h3 className="font-sora font-semibold leading-none text-[#101763] text-3xl sm:text-4xl md:text-[50px]">
              What next?
            </h3>
          </div>
          <p className="font-satoshi text-xs sm:text-sm md:text-base mb-1 underline underline-offset-8 text-black ">
            View All Works
          </p>
        </div> */}
        <div className="flex items-end justify-between w-full px-5 sm:px-10 md:px-12">
          <div className="">
            <div className="flex font-sora text-sm my-2 items-center space-x-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#D81100]"></div>
              <span>More good stuff</span>
            </div>
            <h3 className="font-sora font-semibold leading-none text-[#101763] text-3xl sm:text-4xl md:text-5xl lg:text-[50px]">
              Services
            </h3>
          </div>
          <div className="flex items-center space-x-8 sm:space-x-10">
            <button onClick={() => swiperRef.current?.slidePrev()}>
              <Image
                src={arrowBackward}
                className="w-5 sm:w-6 object-contain"
              />
            </button>
            <button onClick={() => swiperRef.current?.slideNext()}>
              <Image src={arrowForward} className="w-5 sm:w-6 object-contain" />
            </button>
          </div>
        </div>
        <div className="w-full h-fit mt-8 relative pl-5 sm:pl-10 md:pl-12">
          <Swiper
            slidesPerView="auto"
            centeredSlides={false}
            spaceBetween={12}
            loop={true}
            modules={[Navigation]}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            grabCursor={true}
            className="w-full h-fit"
          >
            <style jsx global>{`
              .swiper-slide-fit {
                width: fit-content;
              }
            `}</style>

            {data &&
              Object.keys(data).map((key, index) => (
                <SwiperSlide
                  key={index}
                  className="swiper-slide-fit cursor-pointer"
                  onClick={() => router.push(`/services/${data[key].ID}`)}
                >
                  <div className="flex flex-col w-[75vw] sm:w-[55vw] md:w-[55vw] lg:w-[35vw] xl:w-[25vw] px-10 sm:px-12 md:px-14  py-7 sm:py-8 md:py-9 border border-[#101763] rounded-[2rem]">
                    <h1 className="font-semibold font-sora text-lg text-[#D81100] uppercase">
                      {data[key].post_title}
                    </h1>
                    <p className="font-satoshi line-clamp-1 paragraphText-Size text-[#101763]">
                      {data[key].short_description}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default ServicesInnerSection3;
