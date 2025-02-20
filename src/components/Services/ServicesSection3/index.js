/** @format */
"use client";
import React, { useEffect, useState } from "react";
import forwardIcon from "../../../../public/arrow_forward.png";
import work4 from "../../../../public/Work/work4.png";
import Image from "next/image";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useRouter } from "next/navigation";
function ServicesSection3() {
  const router = useRouter();
  const [data, setData] = useState(null);

  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/services"
        ); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result);

        ScrollTrigger.refresh();
        animationService3();
      } catch (error) {
        console.log("error");
      }
    };

    fetchData();
    function animationService3() {
      ScrollTrigger.create({
        trigger: "#serviceSection",
        start: "top top",
        pin: "#textPin",
        end: "bottom bottom",
      });
      gsap.utils.toArray(".sectionPin2").forEach((container, i) => {
        i -= document.querySelectorAll(".sectionPin2").length - 1;
        i = -1 * i;
        ScrollTrigger.create({
          trigger: container,
          start: "bottom bottom",
          pin: container,
          scrub: 1,
          end: `+=${i}00%`,
          pinSpacing: false,
        });
      });
    }
  }, []);
  useEffect(() => {
    console.log();
  }, [data]);

  return (
    <>
      <div className="relative w-screen h-fit bg-white overflow-x-hidden">
        <div
          id="serviceSection"
          className="w-full flex items-center  flex-col "
        >
          <div
            id="textPin"
            className=" bg-white flex items-center justify-center w-full md:pt-0 pt-10 md:h-[30vh] z-30 md:px-12 sm:px-10 px-5"
          >
            <h1 className="text-center font-sora py-16  font-semibold max-w-[790px] text-5xl text-[#101763]">
              How we take your business to the next level
            </h1>
          </div>
          <div
            id="serviceSection-inner"
            className="hidden md:flex flex-col w-screen h-fit overflow-hidden items-center justify-center"
          >
            {data &&
              Object.keys(data)?.map((key, index) => (
                <div
                  key={index}
                  className="flex w-full h-[70vh] sectionPin2 flex-row  bg-white "
                >
                  <div className="w-1/2 relative overflow-hidden h-full">
                    <Image
                      src={data[key].image}
                      fill={true}
                      objectPosition="center center"
                      className="scale-105 object-cover"
                    />
                  </div>
                  <div className="w-1/2 h-full px-12 md:px-16 lg:px-20 ">
                    <div className="flex flex-col space-y-5 h-full justify-center max-w-[484px]">
                      <h1 className="font-sora font-semibold text-3xl sm:text-4xl md:text-[40px] text-[#101763] leading-tight ">
                        {data[key].post_title}
                      </h1>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: data[key].short_description,
                        }}
                        className="font-satoshi text-xs line-clamp-[8]  lg:line-clamp-none sm:text-sm  leading-relaxed text-[#1F2C33]"
                      ></p>
                      <div
                        onClick={() => router.push(`/services/${data[key].ID}`)}
                        className="flex  group -space-x-8 py-2"
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
      </div>
      <div className="relative md:hidden block w-screen pb-12 h-fit bg-white">
        <div className="flex items-center justify-center space-y-12 flex-col w-full md:px-12 sm:px-10 px-5">
          {data &&
            Object.keys(data)?.map((key, index) => (
              <div
                key={index}
                className="flex w-full h-fit flex-col  space-y-8 bg-white "
              >
                <div className="w-full overflow-hidden h-fit">
                  <div className="w-full h-[80vw] sm:h-[60vw] relative rounded-[2rem] object-cover object-center">
                    <Image
                      src={data[key].image}
                      fill={true}
                      className="object-cover rounded-[2rem]"
                    />
                  </div>
                </div>
                <div className="w-full h-fit px-2">
                  <div className="flex flex-col space-y-5 h-full justify-center ">
                    <h1 className="font-sora font-semibold text-3xl sm:text-4xl md:text-[40px] text-[#101763] leading-tight ">
                      {data[key].post_title}
                    </h1>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: data[key].short_description,
                      }}
                      className="font-satoshi text-xs line-clamp-[8]  lg:line-clamp-none sm:text-sm  leading-relaxed text-[#1F2C33]"
                    ></p>
                    <div
                      className="flex -space-x-8 py-2"
                      onClick={() => router.push(`/services/${data[key].ID}`)}
                    >
                      <div className="flex items-center h-12 w-40 rounded-[2rem] text-sm justify-center text-white bg-[#101763] font-sora tracking-tighter">
                        <span className="-ml-1">Read more</span>
                      </div>
                      <div className="w-12 h-12 rounded-full bg-[#D81100] flex items-center justify-center">
                        <Image
                          src={forwardIcon}
                          className="w-3.5 invert h-3.5 object-contain"
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

export default ServicesSection3;
