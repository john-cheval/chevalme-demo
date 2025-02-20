/** @format */
"use client";
import React, { useEffect, useRef, useState } from "react";
import ratingStar from "../../../../public/ratingStar.png";
import ratingStarFilled from "../../../../public/ratingStarFilled.png";
import googlelogo from "../../../../public/googlelogo.png";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import arrowBackward from "../../../../public/arrow_backward_ios.svg";
import arrowForward from "../../../../public/arrow_forward_ios.svg";
import ChildrenReveal from "@/util/ChildrenReveal";
import useMediaQuery from "@/util/useMediaQuery";
import Link from "next/link";
import TimeAgoComponent from "@/util/TimeAgoComponent";
function Section3({ data, sortedData }) {
  const [totalNoofReviews, setTotalNoofReviews] = useState(null);
  const [avgStars, setAvgStars] = useState(null);

  useEffect(() => {
    // let avgRating = 0;
    if (data) {
      setTotalNoofReviews(data.main_places[0].review_count);
      setAvgStars(data.main_places[0].rating);
    }
  }, [data, totalNoofReviews]);
  const swiperRef = useRef();

  const isMobileSm = useMediaQuery("(max-width: 500px)");
  const isMobile = useMediaQuery("(max-width: 640px)");
  const isTablet = useMediaQuery("(max-width: 768px)");
  const isLarge = useMediaQuery("(max-width: 1024px)");
  const isXL = useMediaQuery("(max-width: 1280px)");
  const sortedDataExact = [...sortedData].sort((a, b) => b.time - a.time);

  const cardMultiplier = isMobileSm
    ? 1.2
    : isMobile
      ? 1.5
      : isTablet
        ? 2
        : isLarge
          ? 2.5
          : isXL
            ? 3
            : 3;

  return (
    <div className="relative w-screen h-fit bg-white overflow-x-hidden">
      <div className="relative max-w-screen mx-auto  sm:min-h-[100dvh] w-full">
        <div className="w-full flex items-center py-20 sm:py-36 md:py-40 lg:py-48 h-fit flex-col">
          <div className="flex items-end justify-between pl-7 sm:pl-12 md:pl-14 pr-5 sm:pr-10 md:pr-12 w-full h-fit">
            <ChildrenReveal
              x={0}
              y={20}
              styling="flex flex-start sm:items-end space-x-0 sm:space-x-3 space-y-5 flex-col sm:flex-row sm:space-y-0 md:space-x-20 lg:space-x-32 justify-start sm:justify-center"
            >
              <div className="flex flex-col space-y-2">
                <div className="flex space-x-3 items-end">
                  <Image
                    src={googlelogo}
                    className="w-40 sm:w-48 md:w-52 object-contain"
                    alt="googlelogo"
                  />
                  <span className="font-sans pb-3.5  font-light paragraphText-Size">
                    Rating
                  </span>
                </div>
                <div className="flex space-x-3 items-end">
                  <span className="font-sans font-bold text-base leading-none">
                    {avgStars}
                  </span>
                  <div className="flex items-center justify-center space-x-2">
                    <Image
                      className="w-4 object-contain"
                      src={avgStars >= 1 ? ratingStarFilled : ratingStar}
                      alt="ratingStar"
                    />
                    <Image
                      className="w-4 object-contain"
                      src={avgStars >= 2 ? ratingStarFilled : ratingStar}
                      alt="ratingStar"
                    />
                    <Image
                      className="w-4 object-contain"
                      src={avgStars >= 3 ? ratingStarFilled : ratingStar}
                      alt="ratingStar"
                    />
                    <Image
                      className="w-4 object-contain"
                      src={avgStars >= 4 ? ratingStarFilled : ratingStar}
                      alt="ratingStar"
                    />
                    <Image
                      className="w-4 object-contain"
                      src={avgStars >= 5 ? ratingStarFilled : ratingStar}
                      alt="ratingStar"
                    />
                  </div>
                  <span className="font-sans text-xs leading-none text-[#828282]">
                    {totalNoofReviews} reviews
                  </span>
                </div>
              </div>
              <Link href={`https://maps.google.com/?cid=14174328648982396753`}>
                <button className="font-sora text-xs py-2.5 md:py-3 px-5 md:px-7 rounded-3xl w-fit bg-[#1A7BFF] text-white ">
                  Write a review
                </button>
              </Link>
            </ChildrenReveal>
            <ChildrenReveal
              x={0}
              y={20}
              styling="hidden sm:flex items-center space-x-10"
            >
              <button onClick={() => swiperRef.current?.slidePrev()}>
                <Image
                  src={arrowBackward}
                  className="w-6 object-contain"
                  alt="arrow backward"
                />
              </button>
              <button onClick={() => swiperRef.current?.slideNext()}>
                <Image
                  src={arrowForward}
                  className="w-6 object-contain"
                  alt="arroe forward"
                />
              </button>
            </ChildrenReveal>
          </div>
          <ChildrenReveal
            x={20}
            y={0}
            styling="relative w-full pl-5 pr-0  sm:pr-10  sm:pl-10 md:pl-12 md:pr-0 lg:pr-12 h-fit "
          >
            <Swiper
              slidesPerView={cardMultiplier}
              spaceBetween={30}
              loop={true}
              modules={[Navigation]}
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
              grabCursor={true}
              className="mt-8 sm:mt-12 md:mt-16 h-96 w-full  "
            >
              {sortedDataExact?.map((ratingCard, index) => (
                <SwiperSlide
                  key={index}
                  className="rounded-[30px] h-full px-10 py-14 flex flex-col  bg-[#F3F3F3] "
                >
                  <div className="flex space-x-3.5">
                    <Image
                      className="w-10 rounded-full h-10 "
                      src={ratingCard.profile_photo_url}
                      width={40}
                      height={40}
                      alt="profile photo"
                    />
                    <div className="flex flex-col space-y-1.5">
                      <Link
                        href={ratingCard.author_url}
                        className=""
                        target="_blank"
                      >
                        <h6 className="font-bold font-sans text-base hover:underline leading-none">
                          {ratingCard.author_name}
                        </h6>
                      </Link>
                      <p className="text-[#828282] text-xs">
                        {" "}
                        <TimeAgoComponent timestamp={ratingCard.time} />
                      </p>
                      <div className="flex items-center justify-center space-x-2">
                        <Image
                          className="w-4 object-contain"
                          src={
                            ratingCard.rating >= 1
                              ? ratingStarFilled
                              : ratingStar
                          }
                          alt="ratingStar"
                        />
                        <Image
                          className="w-4 object-contain"
                          src={
                            ratingCard.rating >= 2
                              ? ratingStarFilled
                              : ratingStar
                          }
                          alt="ratingStar"
                        />
                        <Image
                          className="w-4 object-contain"
                          src={
                            ratingCard.rating >= 3
                              ? ratingStarFilled
                              : ratingStar
                          }
                          alt="ratingStar"
                        />
                        <Image
                          className="w-4 object-contain"
                          src={
                            ratingCard.rating >= 4
                              ? ratingStarFilled
                              : ratingStar
                          }
                          alt="ratingStar"
                        />
                        <Image
                          className="w-4 object-contain"
                          src={
                            ratingCard.rating >= 5
                              ? ratingStarFilled
                              : ratingStar
                          }
                          alt="ratingStar"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-6">
                    <p className="font-satoshi paragraphText-Size line-clamp-6 text-[#1F2C33]">
                      {ratingCard.text}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </ChildrenReveal>
        </div>
      </div>
    </div>
  );
}

export default Section3;
