/** @format */
"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import forwardIcon from "../../../../public/arrow_forward.png";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import useMediaQuery from "@/util/useMediaQuery";
import { useRouter } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
function ServicesSection1({ data }) {
  const router = useRouter();

  const serviceRefs = useRef([]);

  function truncateText(text, maxLength) {
    if (!text) return "";
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  }

  const handleNavigate = (serviceId, slug) => {
    router.push(`/service/${slug}`);
  };

  return (
    <>
      <div className="relative hidden md:flex pb-16    w-screen h-fit bg-white overflow-x-hidden">
        <div
          id="serviceSection"
          className="w-full flex items-center relative overflow-hidden  flex-col"
        >
          <div className="bg-white w-full pt-14   z-30 md:px-12 sm:px-10 px-5">
            {Object.values(data)?.map((item, index) => (
              <div
                className={`service-item flex justify-between items-center  border-b border-r-0 border-l-0 border-[#808080]/30  py-5 cursor-pointer`}
                key={index + 1}
                // ref={(el) => (serviceRefs.current[index] = el)}
                onClick={() => handleNavigate(item?.ID, item?.post_name)}
              >
                <Image
                  src={item?.image}
                  overrideSrc="https://d331b20430.nxcli.net/chevalapi/wp-content/uploads/2023/03/Website-Development-Image.png"
                  width={0}
                  height={0}
                  alt="this is the image"
                  sizes="100vw"
                  className="image w-[383px] h-[213px] image-2  object-cover rounded-[15px] overflow-hidden"
                />

                <div className="flex justify-center flex-col gap-3">
                  <h2 className=" font-sora font-normal text-4xl text-black">
                    {item?.post_title}
                  </h2>
                  {/* <p className="description max-w-[521px] text-base text-[#808080] ">
                    {item?.short_description}
                  </p> */}
                  <p
                    className="description max-w-[521px] text-base text-[#808080]"
                    dangerouslySetInnerHTML={{
                      __html: truncateText(item?.short_description, 300), // Truncate to 100 characters
                    }}
                  ></p>
                </div>

                <button
                  className="border border-black h-10 w-10 flex items-center justify-center rounded-md "
                  onClick={() => handleNavigate(item?.ID, item?.post_name)}
                >
                  <ArrowUpRight />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Mobile Screen */}
      <div className="relative md:hidden  block w-screen pb-12 h-fit bg-white">
        <div className=" bg-white flex items-center justify-center w-full md:pt-0 pt-10 md:h-[30vh] z-30 md:px-12 sm:px-10 px-5">
          <h1 className="text-center font-sora py-16  font-semibold max-w-[790px] text-5xl text-[#101763]">
            How we take your business to the next level
          </h1>
        </div>
        <div className="flex items-center justify-center space-y-12 flex-col w-full md:px-12 sm:px-10 px-5">
          {data &&
            Object.keys(data)?.map((key, index) => (
              <div
                key={index}
                className="flex w-full h-fit flex-col  space-y-8 bg-white "
              >
                <div className="w-full overflow-hidden h-fit">
                  <div className="w-full h-[80vw] sm:h-[60vw] relative rounded-[2rem] object-cover object-center">
                    {/* <Image
                      src={data[key]?.image}
                      fill={true}
                      className="object-cover rounded-[2rem]"
                    /> */}
                    <video
                      autoPlay
                      muted
                      playsInline
                      loop
                      id="video"
                      className="w-full h-full object-cover"
                    >
                      <source
                        src={
                          data[key].service_video
                            ? data[key].service_video
                            : "/video.mp4"
                        }
                        type="video/mp4"
                      />
                    </video>
                  </div>
                </div>
                <div className="w-full h-fit px-2">
                  <div className="flex flex-col space-y-5 h-full justify-center ">
                    <h1 className="font-sora font-semibold text-3xl sm:text-4xl md:text-[40px] text-[#101763] leading-tight ">
                      {data[key]?.post_title}
                    </h1>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: data[key]?.short_description,
                      }}
                      className="font-satoshi paragraphText-Size line-clamp-[8] sm:line-clamp-6 lg:line-clamp-[8]  2xl:line-clamp-none   text-[#1F2C33]"
                    ></p>
                    <div
                      onClick={() => router.push(`/services/${data[key]?.ID}`)}
                      className="flex  group -space-x-8 py-2 cursor-pointer"
                    >
                      <div className="flex items-center h-12 w-40 rounded-[2rem] text-sm justify-center text-white bg-[#101763] font-sora tracking-tighter">
                        <span className="-ml-1">Read more</span>
                      </div>
                      <div className="w-12 h-12 rounded-full bg-[#D81100] flex items-center justify-center">
                        <Image
                          src={forwardIcon}
                          className="w-3.5 invert group-hover:-rotate-45 transition-all duration-300 h-3.5 object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default ServicesSection1;
