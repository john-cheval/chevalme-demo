/** @format */
"use client";
import React, { useRef } from "react";
import horses from "../../../../public/About/horses.png";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
function AboutSection2() {
  const aboutSectionCards = useRef(null);
  const aboutSectionCardsMain = useRef(null);
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#aboutSection2",
        start: "top top",
        end: "+=150%",
        scrub: 1,
        pin: true,
      },
    });
    if (!window.matchMedia("(max-width: 767px)").matches) {
      tl.to(aboutSectionCards.current.children, {
        y: window.matchMedia("(max-width: 900px)").matches ? -80 : -120,
        stagger: {
          amount: 0.4,
        },
      });
    } else {
      tl.to(aboutSectionCardsMain.current, {
        y: window.matchMedia("(max-width: 550px)").matches
          ? -0.8 * aboutSectionCards.current.children[0].clientHeight
          : window.matchMedia("(max-width: 640px)").matches
            ? -1 * aboutSectionCards.current.children[0].clientHeight
            : -1.2 * aboutSectionCards.current.children[0].clientHeight,
      })
        .to(aboutSectionCards.current.children[1], {
          y: -1 * (aboutSectionCards.current.children[1].clientHeight * 0.9),
        })
        .to(aboutSectionCards.current.children[2], {
          y:
            -1 * (aboutSectionCards.current.children[2].clientHeight * 0.9 * 2),
        });
    }
  }, []);
  return (
    <>
      <div
        id="aboutSection2"
        className="h-[100dvh] sm:pt-14 pt-32 sm:h-fit w-screen  bg-white md:bg-[#F6F6F4] px-5  overflow-hidden sm:px-10 md:px-12   flex items-center justify-center flex-col"
      >
        <div className="h-fit relative flex py-10 items-center  md:flex-row flex-col justify-center w-full">
          <Image
            src={horses}
            className="w-full md:block hidden object-contain"
            alt="horses"
          />
          <div className="relative md:absolute left-0 pt-20 md:pt-0 sm:hidden flex  z-20 md:ml-[10%] md:text-left text-center  flex-col space-y-5 max-w-[555px] text-[#101763]">
            <h2 className="font-sora font-semibold text-3xl sm:text-4xl">
              Solution
            </h2>
            <div className=" font-satoshi paragraphText-Size">
              <p>
                Taking into account the luxury brands that Vao Conecpt Store
                carries, it was important for the graphics of the e-commerce
                site to reflect the same and the flow or the journey of the
                customer is seamless. We started with wireframes of the flow for
                the entire site, followed with graphical elements to resonate
                with the brand identity.
              </p>
              <br />
              <p>
                Additional features were added that provided the customers a
                more personal experience. A module to book personal styling
                appointments was developed. Additionally, clients can book for
                alteration services.
              </p>
            </div>
          </div>
          <div className="relative sm:flex hidden md:absolute left-0 pt-20 md:pt-0  z-20 md:ml-[10%] md:text-left text-center  flex-col space-y-5 max-w-[555px] text-[#101763]">
            <h2 className="font-sora font-semibold tracking-tighter text-7xl">
              About Cheval
            </h2>
            <p className=" font-satoshi paragraphText-Size">
              Our experienced team of tech and design evangelists have helped
              SMEs, government departments and enterprises build, sustain and
              grow their digital identities across the globe. With a clear focus
              on integrating your website into your sales and marketing funnels,
              we ensure you leverage the advantages of the world wide web for
              your business.
            </p>
          </div>
          <Image
            src={horses}
            className="w-full md:hidden block  mt-10 object-contain rounded-[2rem]"
            alt="horses"
          />
        </div>
        <div
          ref={aboutSectionCardsMain}
          className="h-[300px]  overflow-y-visible sm:h-fit"
        >
          <div
            ref={aboutSectionCards}
            className="h-fit  bg-transparent overflow-y-visible md:bg-[#F6F6F4] items-center justify-center flex flex-col md:flex-row space-x-0  md:space-y-0 space-y-4 md:space-x-3 px-0 lg:px-10 xl:px-20 pb-5 w-full"
          >
            <div className=" rounded-xl bg-[#F1F1F1] flex  flex-col  h-[240px] md:h-[280px] lg:h-[240px] text-[#101763] space-y-1 justify-center px-12 w-full sm:w-[80%] md:w-1/3 ">
              <h4 className="text-5xl md:text-3xl lg:text-5xl font-sora tracking-tight font-semibold">
                100+
              </h4>
              <div className="flex flex-col space-y-3 font-satoshi">
                <h4 className=" font-semibold text-4xl ">Happy Clients</h4>
                <p className="font-normal text-xs w-full">
                  Our team has worked on various web solutions, both big and
                  small, across different industries
                </p>
              </div>
            </div>
            <div className=" rounded-xl bg-[#D81100] flex flex-col h-[240px] md:h-[280px] lg:h-[240px] text-white space-y-1 justify-center px-12 w-full sm:w-[80%] md:w-1/3">
              <h4 className="text-5xl md:text-3xl lg:text-5xl  font-sora tracking-tight font-semibold">
                30+
              </h4>
              <div className="flex flex-col space-y-3 font-satoshi">
                <h4 className=" font-semibold text-4xl ">Experienced Team</h4>
                <p className="font-normal text-xs w-full">
                  We have a highly talented team of developers, designers,
                  business analysts and account managers
                </p>
              </div>
            </div>
            <div className="  rounded-xl bg-[#101763] flex flex-col h-[240px] md:h-[280px] lg:h-[240px] text-white justify-center px-12 w-full sm:w-[80%] md:w-1/3 space-y-1">
              <div className="flex flex-col space-y-3 font-satoshi">
                {" "}
                <h4 className="text-5xl md:text-3xl lg:text-5xl font-sora tracking-tight font-semibold">
                  150+
                </h4>
                <div className="flex flex-col space-y-3 font-satoshi">
                  <h4 className=" font-semibold text-4xl ">Projects</h4>
                  <p className="font-normal text-xs w-full">
                    Over the years, we have worked on different projects and
                    evolved our solutions in line with the latest technology
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutSection2;
