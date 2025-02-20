"use client";
import { MaskText } from "@/util/MaskText";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const MobileServieList = ({ data }) => {
  const router = useRouter();

  return (
    <div
      className="bg-white py-5 sm:py-10 md:py-12 px-5 sm:px-10 md:px-12 
"
    >
      <div className=" flex flex-col gap-y-4 ">
        {data &&
          Object.keys(data)?.map((key, index) => (
            <div
              className="flex flex-col gap-4 border-b-[1px] border-b-[#d9d9d9] pb-6"
              key={index}
            >
              <div className="relative block  transition-all duration-700  h-[195px]   sm:w-[363px] object-cover object-center sm:object-contain  ">
                <Image
                  src={data[key]?.home_page_image}
                  className="rounded-[10px] group-hover:scale-y-110 sm:object-cover object-cover  transition-all duration-700 "
                  fill={true}
                  height={0}
                  width={0}
                  sizes="100vw"
                  alt={data?.[key]?.post_title || "image"}
                />
              </div>
              <div className="flex flex-col space-y-2 items-center justify-center  ">
                <MaskText
                  text={data[key]?.post_title}
                  styling="capitalize font-sora transition-all duration-700 text-lg sm:text-2xl font-normal leading-[140%] group-hover:text-[3xl] group-hover:font-bold group-hover:text-[#101763]"
                />

                <MaskText
                  text={data[key]?.home_page_short_description}
                  styling="font-satoshi text-[#101763] line-clamp-2 text-center  paragraphText-Size text-base md:group-hover:text-lg  sm:w-full "
                />
              </div>
              <button
                onClick={() => router.push(`/service/${data[key]?.post_name}`)}
                className="text-[#101763] text-center font-sora text-sm font-semibold leading-[121%] capitalize border border-[#101763] rounded-[4px] py-5 w-full mt-1"
              >
                View Case study
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MobileServieList;
