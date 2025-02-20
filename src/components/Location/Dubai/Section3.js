/** @format */
"use client";
import React, { useEffect, useRef, useState } from "react";
import ratingStar from "../../../../public/ratingStar.png";
import ratingStarFilled from "../../../../public/ratingStarFilled.png";
import googlelogo from "../../../../public/googlelogo.png";
import Image from "next/image";
import play from "../../../../public/play_circle.svg";
import quotation from "../../../../public/quotation.png";
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
    <>
      <div className="relative w-screen h-fit  py-12 sm:py-14 md:py-16 bg-white overflow-x-hidden">
        <div className="relative max-w-screen px-5 sm:px-10 md:px-12 sm:py-0 py-10 w-full">
          <div className="w-full grid h-fit grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-4 grid-flow-row">
            <div className="flex space-y-5 sm:space-y-10 sm:items-start items-center sm:justify-start justify-center  flex-col col-span-1 h-fit">
              <h3 className="font-sora font-semibold text-[#101763] text-3xl sm:text-5xl lg:text-[50px]">
                Our Success Stories
              </h3>

              <div className="flex flex-col space-y-2">
                <div className="flex space-x-3 items-end">
                  <Image
                    src={googlelogo}
                    className="w-40 sm:w-48 md:w-52 object-contain"
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
                    />
                    <Image
                      className="w-4 object-contain"
                      src={avgStars >= 2 ? ratingStarFilled : ratingStar}
                    />
                    <Image
                      className="w-4 object-contain"
                      src={avgStars >= 3 ? ratingStarFilled : ratingStar}
                    />
                    <Image
                      className="w-4 object-contain"
                      src={avgStars >= 4 ? ratingStarFilled : ratingStar}
                    />
                    <Image
                      className="w-4 object-contain"
                      src={avgStars >= 5 ? ratingStarFilled : ratingStar}
                    />
                  </div>
                  <span className="font-sans text-xs leading-none text-[#828282]">
                    {totalNoofReviews} reviews
                  </span>
                </div>
              </div>
            </div>
            {data.testimonials && (
              <>
                {data?.testimonials?.map(
                  (testi, index) =>
                    index === 0 && (
                      <>
                        {testi.video_url && (
                          <div className="hidden sm:flex  col-span-1 items-end lg:mt-24 font-satoshi text-white h-[400px] relative   rounded-3xl">
                            <video
                              autoPlay
                              muted
                              playsInline
                              loop
                              id="video"
                              className="w-full h-full absolute   rounded-3xl object-cover"
                            >
                              <source src={testi.video_url} type="video/mp4" />
                            </video>
                            <div className="flex z-10 flex-col py-10 px-12">
                              <Image
                                src={play}
                                className="w-10 my-2 object-contain"
                              />

                              <p className="text-base">{testi.author_name}</p>
                              <p className="text-base">
                                {" "}
                                {testi.author_position}
                              </p>
                            </div>
                          </div>
                        )}
                      </>
                    )
                )}
                {sortedDataExact?.map(
                  (data, index) =>
                    index === 0 && (
                      <>
                        <div className="flex relative col-span-1 mt-12 sm:-mt-14 lg:mt-10 overflow-y-visible justify-end flex-col  font-satoshi text-white h-fit sm:h-[400px] bg-[#101763]  rounded-3xl">
                          <div className="pb-8 pt-14 px-12 ">
                            <h3 className="text-lg sm:text-2xl leading-relaxed font-medium line-clamp-6">
                              {data.text}
                            </h3>
                          </div>
                          <div className="flex flex-col pb-10  px-12">
                            <p className="text-base">{data.author_name}</p>
                            <p className="text-base">
                              <TimeAgoComponent timestamp={data.time} />
                            </p>
                          </div>
                          <Image
                            className="absolute -top-8 h-16 object-contain z-50 "
                            src={quotation}
                          />
                        </div>
                      </>
                    )
                )}
                {data?.testimonials?.map(
                  (testi, index) =>
                    index === 0 && (
                      <>
                        {testi.video_url && (
                          <div className="sm:hidden flex  col-span-1 items-end lg:mt-24 font-satoshi text-white h-[400px] relative   rounded-3xl">
                            <video
                              autoPlay
                              muted
                              playsInline
                              loop
                              id="video"
                              className="w-full h-full absolute   rounded-3xl object-cover"
                            >
                              <source src={testi.video_url} type="video/mp4" />
                            </video>
                            <div className="flex z-10 flex-col py-10 px-12">
                              <Image
                                src={play}
                                className="w-10 my-2 object-contain"
                              />

                              <p className="text-base">{testi.author_name}</p>
                              <p className="text-base">
                                {" "}
                                {testi.author_position}
                              </p>
                            </div>
                          </div>
                        )}
                      </>
                    )
                )}
                {data?.testimonials?.map(
                  (testi, index) =>
                    index === 2 && (
                      <>
                        {testi.video_url && (
                          <div className="hidden sm:flex  col-span-1 items-end  font-satoshi text-white h-[600px] lg:h-[500px] lg:-mt-44 relative   rounded-3xl">
                            <video
                              autoPlay
                              muted
                              playsInline
                              loop
                              id="video"
                              className="w-full h-full absolute   rounded-3xl object-cover"
                            >
                              <source src={testi.video_url} type="video/mp4" />
                            </video>
                            <div className="flex z-10 flex-col py-10 px-12">
                              <Image
                                src={play}
                                className="w-10 my-2 object-contain"
                              />
                              <p className="text-base">{testi.author_name}</p>
                              <p className="text-base">
                                {" "}
                                {testi.author_position}
                              </p>
                            </div>
                          </div>
                        )}
                      </>
                    )
                )}
                {sortedDataExact?.map(
                  (data, index) =>
                    index === 1 && (
                      <>
                        {/* {testi.video_url ? (
                        <div className="flex  col-span-1 items-end  font-satoshi text-white h-[400px] relative   rounded-3xl">
                          <video
                            autoPlay
                            muted
                            playsInline
                            loop
                            id="video"
                            className="w-full h-full absolute   rounded-3xl object-cover"
                          >
                            <source src={testi.video_url} type="video/mp4" />
                          </video>
                          <div className="flex z-10 flex-col py-10 px-12">
                            <Image
                              src={play}
                              className="w-10 my-2 object-contain"
                            />
                            <p className="text-base">{testi.author_name}</p>
                            <p className="text-base">
                              {" "}
                              {testi.author_position}
                            </p>
                          </div>
                        </div>
                      ) : ( */}
                        <div className="flex relative col-span-1 mt-8 sm:-mt-44 lg:mt-14 overflow-y-visible justify-end flex-col  font-satoshi text-black h-fit sm:h-[400px] border border-black   rounded-3xl">
                          <div className="pb-8 pt-14 px-12 text-[#101763] ">
                            <h3 className="text-lg sm:text-2xl leading-relaxed font-medium line-clamp-6">
                              {data.text}
                            </h3>
                          </div>
                          <div className="flex flex-col pb-10  px-12">
                            <p className="text-base">{data.author_name}</p>
                            <p className="text-base">
                              <TimeAgoComponent timestamp={data.time} />
                            </p>
                          </div>
                          <Image
                            className="absolute -top-8 h-16 object-contain z-50 "
                            src={quotation}
                          />
                        </div>
                      </>
                    )
                )}
                {data?.testimonials?.map(
                  (testi, index) =>
                    index === 2 && (
                      <>
                        {testi.video_url && (
                          <div className="hidden lg:flex  col-span-1 items-end  -mt-10 font-satoshi text-white h-[500px] relative   rounded-3xl">
                            <video
                              autoPlay
                              muted
                              playsInline
                              loop
                              id="video"
                              className="w-full h-full absolute   rounded-3xl object-cover"
                            >
                              <source src={testi.video_url} type="video/mp4" />
                            </video>
                            <div className="flex z-10 flex-col py-10 px-12">
                              <Image
                                src={play}
                                className="w-10 my-2 object-contain"
                              />
                              <p className="text-base">{testi.author_name}</p>
                              <p className="text-base">
                                {" "}
                                {testi.author_position}
                              </p>
                            </div>
                          </div>
                        )}
                      </>
                    )
                )}
                {/* <div className="flex  col-span-1 items-end font-satoshi -mt-10 text-white h-[500px] bg-black   rounded-3xl">
                <div className="flex flex-col py-10 px-12">
                  <p className="text-base">John Doe</p>
                  <p className="text-base">Finance Class</p>
                </div>
              </div> */}
              </>
            )}
          </div>
        </div>
        <div className="absolute  h-40 sm:h-60 bg-gradient-to-b from-transparent  to-90% to-white z-50 bottom-0  w-full"></div>
      </div>
    </>
  );
}

export default Section3;
