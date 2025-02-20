/** @format */
"use client";
import Image from "next/image";
import React from "react";
import about1 from "../../../../public/About/paper.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import useMediaQuery from "@/util/useMediaQuery";
import experience from "../../../../public/About/experience.svg";
// import service1 from '../../../../public/About/service1.png'
function AboutSection1() {
  const isMobile = useMediaQuery("(max-width: 639px)");
  const isTablet = useMediaQuery("(max-width: 767px)");

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray(".sectionPin").forEach((container, i) => {
      i -= document.querySelectorAll(".sectionPin").length - 1;
      i = -1 * i;
      ScrollTrigger.create({
        trigger: container,
        start: "top top",
        pin: true,
        end: `+=${i}00%`,
        scrub: 1,
        pinSpacing: false,
      });
    });
  }, []);
  return (
    <div className="relative w-screen h-fit  overflow-x-hidden">
      <div className="flex w-full flex-col items-center justify-center">
        <div className="w-screen h-[100dvh] bg-[#f6f6f4]"></div>
        <div className="w-screen h-[100dvh] bg-[#f6f6f4]"></div>
      </div>
      <div className="w-full flex absolute left-0 top-0 flex-col items-center justify-center">
        <div className="w-full flex  items-center flex-col justify-center  ">
          <div className="relative w-screen h-[100dvh] sectionPin overflow-hidden">
            <div
              style={{
                maskImage: isTablet
                  ? "url(/AboutChevalMbl.svg)"
                  : "url(/AboutCheval.svg)",
                maskPosition: isMobile
                  ? "50% 55%"
                  : isTablet
                    ? "50% 52%"
                    : "50% 52%",
                maskRepeat: "no-repeat",
                maskSize: isMobile ? "68%" : isTablet ? "50%" : "66%",
              }}
              id="maskImage"
              className="absolute top-0 heroSectionBigText  left-0 w-screen h-[100dvh] flex items-center justify-center z-50 "
            >
              <video
                autoPlay
                muted
                playsInline
                loop
                id="video"
                className="w-screen opacity-80 object-cover h-[100dvh]"
              >
                <source src="/aboutVideo.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="flex flex-col pt-[18vh]  items-center justify-center px-5 sm:px-10 md:px-12 h-[100dvh] space-y-8 w-full ">
              <div className="relative">
                <h1 className="tracking-tight opacity-0 text-[#DBDBDB] leading-[.9] sm:leading-none font-sora font-semibold text-center text-[21vw] sm:text-[15vw] md:text-[10vw]">
                  About Cheval
                </h1>{" "}
                {/* <Image src={circle} className="w-32 " alt="circle" /> */}
                <div className="absolute right-16 md:right-10 -top-20 w-fit h-fit self-end">
                  <div className="flex items-center justify-center  h-fit w-24 relative sm:w-28 xl:w-32 ">
                    <Image
                      src={experience}
                      style={{ animation: "rotate 10s linear infinite" }}
                      className="w-full  object-contain"
                      alt="experience"
                    />
                    <h1 className="text-4xl sm:text-5xl xl:text-6xl tracking-tighter  text-[#D81100] leading-none absolute font-sora font-bold">
                      10
                    </h1>
                  </div>
                </div>
              </div>
              <p className="font-satoshi max-w-[540px] md:pl-0 pl-2 paragraphText-Size text-center text-[#101763]">
                With more than 15 years of experience, we understand local
                business environments and realities, helping us deliver
                effective, customized online solutions to our clients.
              </p>
            </div>
          </div>
        </div>
        <div className="h-[100dvh] w-screen flex  sectionPin items-center justify-center ">
          <Image
            src={about1}
            className="w-80 sm:w-96 md:w-[430px] pt-[5vh] object-contain"
            alt="aboutCheval"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutSection1;
