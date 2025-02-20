/** @format */
"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import demo from "../../../../public/ServicesInner/demo.png";
import person from "../../../../public/ServicesInner/person.svg";
import calendar from "../../../../public/ServicesInner/calendar.svg";
import store from "../../../../public/ServicesInner/store.svg";
import book from "../../../../public/ServicesInner/book.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import arrowBackward from "../../../../public/arrow_backward_ios.svg";
import arrowForward from "../../../../public/arrow_forward_ios.svg";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function ServicesInnerSection1({ data }) {
  return (
    <div className="relative w-screen h-fit pt-32 bg-[#F6F6F4] overflow-x-hidden">
      <div className="relative flex-col space-y-14 flex h-fit w-full text-[#101763]">
        <div className="h-fit w-full px-5 sm:px-10 md:px-12">
          <div className="w-full flex items-start h-fit space-x-0 md:space-x-14 lg:space-x-16 xl:space-x-20 md:space-y-0 space-y-3 justify-center flex-col md:flex-row ">
            <video
              playsInline
              autoPlay
              muted
              loop
              controlsList="nodownload"
              id="video"
              className="w-screen opacity-80 -z-10 object-cover absolute h-[100dvh]"
            >
              <source src="/Services/serviceBG3.mp4" type="video/mp4" />
            </video>
            <h1 className="font-sora md:pr-0 pr-0 sm:pr-10 text-3xl sm:text-4xl md:text-5xl tracking-tighter w-full md:w-2/3 lg:w-1/2 xl:min-w-[510px] leading-tight sm:leading-tight md:leading-tight">
              {data?.sub_heading}
            </h1>
            <p
              dangerouslySetInnerHTML={{ __html: data?.short_description }}
              className="font-satoshi paragraphText-Size w-full md:w-1/2 xl:w-fit"
            ></p>
          </div>
        </div>
        <div className="w-full flex-col flex h-fit">
          <Swiper
            slidesPerView="auto"
            centeredSlides={false}
            // spaceBetween={}
            loop={true}
            grabCursor={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            className="w-full h-fit"
            modules={[Autoplay, Pagination, Navigation]}
          >
            <style jsx global>{`
              .swiper-slide-fit {
                width: fit-content;
              }
            `}</style>
            {data?.services_slider &&
              data?.services_slider?.map((img, index) => (
                <SwiperSlide key={index} className=" swiper-slide-fit">
                  <div className="w-screen">
                    <div className="h-fit w-full px-5 sm:px-10 md:px-12">
                      <div>
                        <div className="w-full sm:h-[80vh] h-[85vw] object-cover object-center relative ">
                          <Image
                            src={img.image}
                            fill={true}
                            className=" rounded-[2rem] object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default ServicesInnerSection1;
