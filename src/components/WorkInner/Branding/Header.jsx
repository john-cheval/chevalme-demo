"use client";
import React from "react";
import Image from "next/image";
import arrow_link from "../../../../public/arrow_outward.svg";
import { useRouter } from "next/navigation";
import { format } from "date-fns";

const BrandingHeader = ({ data }) => {
  const router = useRouter();
  return (
    <div className="flex items-start xl:space-y-0 space-y-4 xl:items-end xl:flex-row flex-col justify-between w-full">
      <div className="flex font-sora pl-1 text-sm items-center space-x-2">
        <span>
          {data?.post_date && format(parseISO(data?.post_date), "yyyy")}
        </span>
        <div className="w-1.5 h-1.5 rounded-full bg-[#D81100]"></div>
        <span className="hidden">{data?.post_title}</span>
      </div>
      <h1 className="capitalize font-sora tracking-tighter  xl:py-0 py-3 leading-tight text-[#101763] text-3xl sm:text-4xl md:text-5xl">
        {data?.home_title ? data?.home_title : data?.post_title}
      </h1>
      <div className="flex flex-row w-full xl:w-fit justify-between">
        {data?.duration && (
          <div className="flex flex-col space-y-2">
            <p className="font-satoshi text-[#101763]">Duration</p>
            <p className="font-semibold font-satoshi text-[#D81100] text-lg">
              {data?.duration}
            </p>
          </div>
        )}
      </div>
      {data?.projects_category && (
        <div className="flex flex-col space-y-2">
          <p className="font-satoshi text-[#101763]">Expertise</p>
          <div className="h-fit gap-1 w-fit max-w-[380px]  flex flex-wrap items-center  ">
            {data?.projects_category.map((category, index) => (
              <button
                key={index}
                className="font-sora text-[10px]  transition-colors duration-500  py-2 px-4 w-fit cursor-default   bg-[#E1E1E1] text-[#101763] rounded-3xl"
              >
                {category.name}
              </button>
            ))}{" "}
          </div>
        </div>
      )}
      {data?.live_website && (
        <div
          onClick={() => router.push(`${data?.live_website}`)}
          className="hidden group cursor-pointer xl:flex flex-row space-x-2 items-center py-2 border-b border-b-[#101763]"
        >
          <p className="font-satoshi text-[#101763]">Live Website</p>
          <Image
            src={arrow_link}
            className="w-2 group-hover:rotate-45 transition-all duration-300 object-contain"
            alt="arrow_link"
          />
        </div>
      )}
    </div>
  );
};

export default BrandingHeader;
