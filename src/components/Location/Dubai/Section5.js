/** @format */
"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
// import event1 from "../../../../public/event1.png";
// import event2 from "../../../../public/event2.png";
// import event3 from "../../../../public/event3.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import arrowBackward from "../../../../public/arrow_backward_ios.svg";
import arrowForward from "../../../../public/arrow_forward_ios.svg";
import ChildrenReveal from "@/util/ChildrenReveal";
import useMediaQuery from "@/util/useMediaQuery";
import { useRouter } from "next/navigation";
import { useGSAP } from "@gsap/react";
function Section5({ data }) {
  const swiperRef = useRef();
  const router = useRouter();
  const isMobileSm = useMediaQuery("(max-width: 500px)");
  const isMobile = useMediaQuery("(max-width: 640px)");
  const isTablet = useMediaQuery("(max-width: 768px)");
  const isLarge = useMediaQuery("(max-width: 1024px)");
  const isXL = useMediaQuery("(max-width: 1280px)");

  const cardMultiplier = isMobileSm
    ? 1
    : isMobile
      ? 1
      : isTablet
        ? 2
        : isLarge
          ? 2.5
          : isXL
            ? 3
            : 3;

  useEffect(() => {
    console.log(data);
  }, [data]);
  const [windowWidth, setWindowWidth] = useState();
  useEffect(() => {
    setWindowWidth(window.innerWidth - 96);
  }, [windowWidth]);

  return (
    <div className="relative w-screen h-fit bg-white overflow-x-hidden">
      <div className="relative max-w-screen mx-auto w-full">
        <div className="w-full flex items-center py-12 sm:py-14 md:py-16 h-fit flex-col px-5 sm:px-10 md:px-12">
          <div className="flex items-center justify-center sm:justify-between w-full ">
            <ChildrenReveal
              x={0}
              y={20}
              styling="font-sora text-center sm:text-left leading-5 font-semibold leading-tight text-[#101763] text-3xl sm:text-4xl md:text-5xl lg:text-[50px]"
            >
              <span>Curious by nature, shaping new</span> <br />{" "}
              <ChildrenReveal styling="text-[#757575] leading-[1.5]">
                thoughts and ideas
              </ChildrenReveal>
            </ChildrenReveal>
            <ChildrenReveal
              x={0}
              y={20}
              styling="sm:flex hidden items-center space-x-10"
            >
              <button onClick={() => swiperRef.current?.slidePrev()}>
                <Image src={arrowBackward} className="w-6 object-contain" />
              </button>
              <button onClick={() => swiperRef.current?.slideNext()}>
                <Image src={arrowForward} className="w-6 object-contain" />
              </button>
            </ChildrenReveal>
          </div>
          <ChildrenReveal
            x={20}
            y={0}
            styling="w-full h-fit mt-8 sm:mt-16 md:mt-20 lg:mt-24 relative"
          >
            <Swiper
              slidesPerView={cardMultiplier}
              centeredSlides={false}
              spaceBetween={18}
              loop={true}
              modules={[Navigation]}
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
              grabCursor={true}
              className="w-full h-fit"
            >
              {data?.map((data, index) => (
                <SwiperSlide
                  key={index}
                  className=" swiper-slide-fit cursor-pointer"
                  onClick={() => router.push(`/blogs/${data.id}`)}
                >
                  <div
                    // style={{
                    //   width:
                    //     index % 2 !== 0
                    //       ? "calc(40vw - 30px - 12px)"
                    //       : "calc(30vw - 30px - 12px)",
                    // }}
                    // className={
                    //   index % 2 !== 0
                    //     ? "homePageBlogWidth2 flex flex-col  sm:items-start items-center sm:justify-start justify-center   h-fit space-y-4"
                    //     : "homePageBlogWidth1 flex flex-col  sm:items-start items-center sm:justify-start justify-center   h-fit space-y-4"
                    // }
                    className="flex flex-col  sm:items-start group items-center sm:justify-start justify-center   h-fit space-y-4"
                  >
                    <div
                      // className={
                      //   index % 2 !== 0
                      //     ? ` h-72 lg:h-80 w-full object-cover relative object-center `
                      //     : ` h-72 w-full object-cover relative object-center `
                      // }
                      className="h-72 w-full object-cover relative object-center"
                    >
                      <Image
                        src={data._embedded["wp:featuredmedia"][0].source_url}
                        fill={true}
                        className=" object-cover object-center "
                      />
                    </div>
                    <button className="font-sora text-[10px] uppercase py-2.5 px-6 w-fit border border-[#D81100] text-[#D81100] rounded-3xl">
                      {data.type}
                    </button>
                    <p className="font-sora text-2xl sm:text-left line-clamp-2 text-center text-[#101763] group-hover:text-[#D81100] transition-all duration-300 leading-relaxed">
                      {data.title.rendered}
                    </p>
                    <div>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: data.content.rendered,
                        }}
                        className="font-satoshi paragraphText-Size transition-all duration-300 text-[#BFBFBF] group-hover:text-[#101763] line-clamp-3 sm:text-left text-center "
                      ></p>
                      <p className="text-xs my-3 group-hover:text-[#D81100] underline underline-offset-8 transition-all duration-300 text-[#BFBFBF]">
                        Read more
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}{" "}
            </Swiper>
          </ChildrenReveal>
        </div>
      </div>
    </div>
  );
}

export default Section5;
