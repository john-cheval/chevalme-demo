/** @format */

import React from "react";
import arrowForward from "../../../../public/arrow_forward.png";
import Image from "next/image";
import { MaskText } from "@/util/MaskText";
import ChildrenReveal from "@/util/ChildrenReveal";
import { useRouter } from "next/navigation";
function Section7({ data, title }) {
  const router = useRouter();

  return (
    <div className="relative w-screen h-fit bg-[#F6F6F4] overflow-x-hidden">
      <div className="relative  mx-auto w-full">
        <div className="w-full flex items-center py-16 sm:pt-36 sm:pb-14 h-fit  flex-col px-5   ">
          <MaskText
            text={title}
            styling="text-center font-sora font-semibold w-[80%] md:max-w-[800px]  text-3xl sm:text-4xl md:text-5xl text-[#101763]"
          />
          <ChildrenReveal
            x={0}
            y={20}
            styling="flex flex-col w-full h-fit py-2 sm:py-12 md:py-14  items-center justify-center"
          >
            {data &&
              Object.keys(data)?.map((key, index) => (
                <div
                  key={index}
                  className="w-full flex items-center sm:space-y-0 space-y-1 group justify-between h-fit sm:flex-row flex-col border-b border-[#101763] border-opacity-50 py-7 transition-all duration-700 text-[#101763] hover:max-w-[1032px] max-w-[790px] "
                >
                  <MaskText
                    text={data[key].post_title}
                    styling="uppercase font-sora lg:whitespace-nowrap md:group-hover:text-2xl md:group-hover:font-bold md:group-hover:max-w-[196px] md:group-hover:whitespace-normal md:group-hover:break-words transition-all duration-700 text-base sm:text-lg font-semibold "
                  />

                  <div className="w-full  px-5 sm:w-fit h-fit relative flex group-hover:my-5 my-0 sm:my-0  transition-all duration-700 items-center justify-center">
                    <div className="relative  transition-all duration-700  group-hover:h-32 h-0 w-0  group-hover:w-full sm:group-hover:w-60 object-cover object-center sm:object-contain">
                      <Image
                        src={data[key].home_page_image}
                        className="rounded-[2rem] sm:object-cover object-cover group-hover:scale-100 transition-all duration-700 scale-0 "
                        fill={true}
                        alt={data[key]?.post_title}
                      />
                    </div>
                    <div
                      onClick={() => router.push(`/services/${data[key].ID}`)}
                      className="w-8 cursor-pointer sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 absolute rounded-full group-hover:scale-100 scale-0 transition-all duration-700 sm:bottom-auto bottom-4  right-8 sm:right-0 lg:-right-1  bg-[#D81100] flex items-center justify-center"
                    >
                      <Image
                        src={arrowForward}
                        className="w-3 sm:w-3.5 lg:w-4 object-contain invert"
                        alt="arrowForward"
                      />
                    </div>
                  </div>
                  <MaskText
                    text={data[key].short_description}
                    styling="font-satoshi line-clamp-2 sm:text-left text-center paragraphText-Size w-[80%] sm:w-[180px] md:w-[250px] "
                  />
                </div>
              ))}
          </ChildrenReveal>
        </div>
      </div>
    </div>
  );
}

export default Section7;
