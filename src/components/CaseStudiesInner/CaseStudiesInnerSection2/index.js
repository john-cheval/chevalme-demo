/** @format */

"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { format } from "date-fns";
function CaseStudiesInnerSection2({ data }) {
  const router = useRouter();

  return (
    <div className="relative w-screen h-fit py-20 bg-[#F6F6F4] overflow-x-hidden">
      <div className="w-full flex items-center h-fit flex-col">
        <div className="flex items-end justify-between w-full  px-5 sm:px-10 md:px-12 ">
          <div className="">
            <div className="flex font-sora text-sm my-2 items-center space-x-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#D81100]"></div>
              <span>More good stuff</span>
            </div>
            <h3 className="font-sora font-semibold leading-none text-[#101763] text-3xl sm:text-4xl md:text-[50px]">
              What next?
            </h3>
          </div>
          <Link href={"/work"}>
            <p className="font-satoshi text-xs sm:text-sm md:text-base mb-1 underline underline-offset-8 text-black ">
              View All Works
            </p>
          </Link>
        </div>
        <div className="w-full h-fit mt-8 relative pl-5 sm:pl-10 md:pl-12">
          <Swiper
            slidesPerView="auto"
            centeredSlides={false}
            spaceBetween={12}
            loop={true}
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
                  onClick={() => router.push(`/work/${data[key].ID}`)}
                  className=" swiper-slide-fit group"
                >
                  <div className="flex flex-col relative w-[75vw] sm:w-[55vw] md:w-[55vw] lg:w-[35vw] ">
                    <div className="h-[55vw] sm:h-[40vw] md:h-[40vw] lg:h-[25vw] w-full object-cover relative  object-center">
                      <Image
                        src={data[key].home_image}
                        fill={true}
                        overrideSrc="/Work/work1.png"
                        className="rounded-[2rem] object-cover"
                        alt={data[key].post_title}
                      />
                    </div>
                    <div className="flex mt-6 mb-2.5 font-sora pl-1 text-[10px] sm:text-xs md:text-sm w-full items-center space-x-2">
                      <span>
                        {data[key]?.post_date &&
                          format(parseISO(data[key]?.post_date), "yyyy")}
                      </span>

                      <div className="w-1.5 h-1.5 rounded-full bg-[#D81100]"></div>
                      <span>{data[key].post_title}</span>
                    </div>
                    <div className="font-satoshi pl-1 font-medium line-clamp-2 group-hover:text-[#D81100] duration-500 transition-colors text-base sm:text-lg md:text-xl lg:text-2xl text-[#101763]">
                      {data[key].home_description}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            {/* <SwiperSlide className=" swiper-slide-fit">
              <div className="flex flex-col w-[75vw] sm:w-[55vw] md:w-[55vw] lg:w-[35vw] ">
                <Image
                  src={work4}
                  className="h-[55vw] sm:h-[40vw] md:h-[40vw] lg:h-[25vw] w-full object-cover rounded-[2rem] object-center"
                />
                <div className="flex mt-6 mb-2.5 font-sora pl-1 text-[10px] sm:text-xs md:text-sm w-full items-center space-x-2">
                  <span>2024</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-[#D81100]"></div>
                  <span>VAO Concept Store</span>
                </div>
                <div className="font-satoshi pl-1 font-medium text-base sm:text-lg md:text-xl lg:text-2xl text-[#101763]">
                  In publishing and graphic design, Lorem ipsum is a placeholder
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className=" swiper-slide-fit">
              <div className="flex flex-col w-[75vw] sm:w-[55vw] md:w-[55vw] lg:w-[35vw] ">
                <Image
                  src={work4}
                  className="h-[55vw] sm:h-[40vw] md:h-[40vw] lg:h-[25vw] w-full object-cover rounded-[2rem] object-center"
                />
                <div className="flex mt-6 mb-2.5 font-sora pl-1 text-[10px] sm:text-xs md:text-sm w-full items-center space-x-2">
                  <span>2024</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-[#D81100]"></div>
                  <span>VAO Concept Store</span>
                </div>
                <div className="font-satoshi pl-1 font-medium text-base sm:text-lg md:text-xl lg:text-2xl text-[#101763]">
                  In publishing and graphic design, Lorem ipsum is a placeholder
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className=" swiper-slide-fit">
              <div className="flex flex-col w-[75vw] sm:w-[55vw] md:w-[55vw] lg:w-[35vw] ">
                <Image
                  src={work4}
                  className="h-[55vw] sm:h-[40vw] md:h-[40vw] lg:h-[25vw] w-full object-cover rounded-[2rem] object-center"
                />
                <div className="flex mt-6 mb-2.5 font-sora pl-1 text-[10px] sm:text-xs md:text-sm w-full items-center space-x-2">
                  <span>2024</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-[#D81100]"></div>
                  <span>VAO Concept Store</span>
                </div>
                <div className="font-satoshi pl-1 font-medium text-base sm:text-lg md:text-xl lg:text-2xl text-[#101763]">
                  In publishing and graphic design, Lorem ipsum is a placeholder
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className=" swiper-slide-fit">
              <div className="flex flex-col w-[75vw] sm:w-[55vw] md:w-[55vw] lg:w-[35vw] ">
                <Image
                  src={work4}
                  className="h-[55vw] sm:h-[40vw] md:h-[40vw] lg:h-[25vw] w-full object-cover rounded-[2rem] object-center"
                />
                <div className="flex mt-6 mb-2.5 font-sora pl-1 text-[10px] sm:text-xs md:text-sm w-full items-center space-x-2">
                  <span>2024</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-[#D81100]"></div>
                  <span>VAO Concept Store</span>
                </div>
                <div className="font-satoshi pl-1 font-medium text-base sm:text-lg md:text-xl lg:text-2xl text-[#101763]">
                  In publishing and graphic design, Lorem ipsum is a placeholder
                </div>
              </div>
            </SwiperSlide> */}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default CaseStudiesInnerSection2;
