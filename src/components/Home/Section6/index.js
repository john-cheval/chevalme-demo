/** @format */

import Image from "next/image";
import React, { useEffect, useState } from "react";
// import caseimg1 from "../../../../public/caseimg1.png";
// import caseimg2 from "../../../../public/caseimg2.png";
// import caseimg3 from "../../../../public/caseimg3.png";
// import caseimg4 from "../../../../public/caseimg4.png";
// import caseimg5 from "../../../../public/caseimg5.png";
// import caseimg6 from "../../../../public/caseimg6.png";
import ChildrenReveal from "@/util/ChildrenReveal";
import { MaskText } from "@/util/MaskText";
import Link from "next/link";
import { useRouter } from "next/navigation";
function Section6({ data }) {
  const router = useRouter();
  const [cardInnerWidth, setCardInnerWidth] = useState(null);
  useEffect(() => {
    let cardWidth = document.getElementById("cardInnerWidth").clientWidth;
    setCardInnerWidth(cardWidth);
  }, []);
  useEffect(() => {
    console.log();
  }, [data]);

  return (
    <div className="relative w-screen h-fit bg-[#F6F6F4] overflow-x-hidden">
      <div className="relative max-w-screen mx-auto mt-0 sm:mt-10 w-full">
        <div className="w-full flex items-center py-10 sm:py-20 h-fit flex-col px-5 sm:px-10 md:px-12">
          <ChildrenReveal
            x={0}
            y={20}
            styling="flex  items-center justify-center sm:justify-between w-full "
          >
            <h3 className="font-sora font-semibold text-[#101763] text-3xl sm:text-5xl lg:text-[50px]">
              Case Studies
            </h3>
            <Link href={"/case-studies"}>
              <p className="font-satoshi sm:block hidden cursor-pointer hover:decoration-[#D81100] transition-all duration-300 hover:text-[#D81100] text-xs sm:text-sm  md:text-base underline underline-offset-4 sm:underline-offset-8  text-black ">
                View All
              </p>
            </Link>
          </ChildrenReveal>
          <ChildrenReveal
            x={0}
            y={20}
            styling={
              data && Object.keys(data).length > 2
                ? `grid mt-6 md:mt-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-6 sm:gap-8 md:gap-10 lg:gap-12`
                : `grid mt-6 md:mt-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 grid-flow-row gap-6 sm:gap-8 md:gap-10 lg:gap-12`
            }
          >
            {data &&
              Object.keys(data)?.map((key, index) => (
                <div
                  key={index}
                  onClick={() => router.push(`/work/${data[key].ID}`)}
                  className="w-full flex flex-col group h-fit space-y-1 cursor-pointer sm:space-y-2 md:space-y-4"
                >
                  <div
                    id="cardInnerWidth"
                    className="w-full group relative mb-3.5 sm:mb-2"
                  >
                    <div
                      style={{
                        height: cardInnerWidth,
                      }}
                      className="w-full relative opacity-100 group-hover:opacity-0 object-cover object-center transition-opacity  duration-300"
                    >
                      {" "}
                      <Image
                        src={data[key].home_image}
                        fill={true}
                        alt="case-study"
                        className="object-cover"
                      />
                    </div>

                    <div className="opacity-0 group-hover:opacity-100  transition-opacity  duration-300">
                      <video
                        autoPlay
                        muted
                        loop
                        id="video"
                        playsInline
                        className="w-full object-cover  absolute top-0 object-center  h-full"
                      >
                        <source src="/video.mp4" type="video/mp4" />
                      </video>
                    </div>
                  </div>
                  <MaskText
                    text={data[key].post_title}
                    styling={"font-sora capitalize text-sm"}
                  />
                  <MaskText
                    text={`${data[key].home_title}: ${data[key].home_description}`}
                    styling="font-satoshi paragraphText-Size text-[#101763] group-hover:text-[#D81100] transition-all duration-300  line-clamp-3 "
                  />
                </div>
              ))}
            {/* <div className="w-full flex flex-col h-fit space-y-1 sm:space-y-2 md:space-y-4">
              <div className="w-full group relative mb-3.5 sm:mb-2">
                <Image
                  src={caseimg1}
                  className="w-full object-contain h-96  opacity-100 group-hover:opacity-0 transition-opacity  duration-300"
                />
                <div className="opacity-0 group-hover:opacity-100  transition-opacity  duration-300">
                  <video
                    autoPlay
                    muted
                    loop
                    id="video"
                    className="w-full object-cover absolute top-0 object-center  h-full"
                  >
                    <source src="/video.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
              <MaskText text={"Retail"} styling={"font-sora text-sm"} />
              <MaskText
                text={
                  " The Bowery Company : In publishing and graphic design, Lorem ipsum is a placeholder text commonly used"
                }
                styling="font-satoshi text-sm sm:text-base md:text-lg leading-relaxed"
              />
            </div> */}
            {/*  <div className="w-full flex flex-col h-fit space-y-1 sm:space-y-2 md:space-y-4">
              <div className="w-full group relative mb-3.5 sm:mb-2">
                <Image
                  src={caseimg1}
                  className="w-full object-contain  opacity-100 group-hover:opacity-0 transition-opacity  duration-300"
                />
                <div className="opacity-0 group-hover:opacity-100  transition-opacity  duration-300">
                  <video
                    autoPlay
                    muted
                    loop
                    id="video"
                    className="w-full object-cover absolute top-0 object-center  h-full"
                  >
                    <source src="/video.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
              <MaskText text={"Retail"} styling={"font-sora text-sm"} />
              <MaskText
                text={
                  " The Bowery Company : In publishing and graphic design, Lorem ipsum is a placeholder text commonly used"
                }
                styling="font-satoshi text-sm sm:text-base md:text-lg leading-relaxed"
              />
            </div>
            <div className="w-full flex flex-col h-fit space-y-1 sm:space-y-2 md:space-y-4">
              <div className="w-full group relative mb-3.5 sm:mb-2">
                <Image
                  src={caseimg1}
                  className="w-full object-contain  opacity-100 group-hover:opacity-0 transition-opacity  duration-300"
                />
                <div className="opacity-0 group-hover:opacity-100  transition-opacity  duration-300">
                  <video
                    autoPlay
                    muted
                    loop
                    id="video"
                    className="w-full object-cover absolute top-0 object-center  h-full"
                  >
                    <source src="/video.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
              <MaskText text={"Retail"} styling={"font-sora text-sm"} />
              <MaskText
                text={
                  " The Bowery Company : In publishing and graphic design, Lorem ipsum is a placeholder text commonly used"
                }
                styling="font-satoshi text-sm sm:text-base md:text-lg leading-relaxed"
              />
            </div>
            <div className="w-full flex flex-col h-fit space-y-1 sm:space-y-2 md:space-y-4">
              <div className="w-full group relative mb-3.5 sm:mb-2">
                <Image
                  src={caseimg1}
                  className="w-full object-contain  opacity-100 group-hover:opacity-0 transition-opacity  duration-300"
                />
                <div className="opacity-0 group-hover:opacity-100  transition-opacity  duration-300">
                  <video
                    autoPlay
                    muted
                    loop
                    id="video"
                    className="w-full object-cover absolute top-0 object-center  h-full"
                  >
                    <source src="/video.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
              <MaskText text={"Retail"} styling={"font-sora text-sm"} />
              <MaskText
                text={
                  " The Bowery Company : In publishing and graphic design, Lorem ipsum is a placeholder text commonly used"
                }
                styling="font-satoshi text-sm sm:text-base md:text-lg leading-relaxed"
              />
            </div>
            <div className="w-full flex flex-col h-fit space-y-1 sm:space-y-2 md:space-y-4">
              <div className="w-full group relative mb-3.5 sm:mb-2">
                <Image
                  src={caseimg1}
                  className="w-full object-contain  opacity-100 group-hover:opacity-0 transition-opacity  duration-300"
                />
                <div className="opacity-0 group-hover:opacity-100  transition-opacity  duration-300">
                  <video
                    autoPlay
                    muted
                    loop
                    id="video"
                    className="w-full object-cover absolute top-0 object-center  h-full"
                  >
                    <source src="/video.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
              <MaskText text={"Retail"} styling={"font-sora text-sm"} />
              <MaskText
                text={
                  " The Bowery Company : In publishing and graphic design, Lorem ipsum is a placeholder text commonly used"
                }
                styling="font-satoshi text-sm sm:text-base md:text-lg leading-relaxed"
              />
            </div>
            <div className="w-full flex flex-col h-fit space-y-1 sm:space-y-2 md:space-y-4">
              <div className="w-full group relative mb-3.5 sm:mb-2">
                <Image
                  src={caseimg1}
                  className="w-full object-contain  opacity-100 group-hover:opacity-0 transition-opacity  duration-300"
                />
                <div className="opacity-0 group-hover:opacity-100  transition-opacity  duration-300">
                  <video
                    autoPlay
                    muted
                    loop
                    id="video"
                    className="w-full object-cover absolute top-0 object-center  h-full"
                  >
                    <source src="/video.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
              <MaskText text={"Retail"} styling={"font-sora text-sm"} />
              <MaskText
                text={
                  " The Bowery Company : In publishing and graphic design, Lorem ipsum is a placeholder text commonly used"
                }
                styling="font-satoshi text-sm sm:text-base md:text-lg leading-relaxed"
              />
            </div> */}
          </ChildrenReveal>
          <ChildrenReveal
            x={0}
            y={20}
            styling="sm:hidden pt-10 flex  items-center  justify-center w-full "
          >
            <Link href={"/case-studies"}>
              <p className="font-satoshi text-xs sm:text-sm md:text-base cursor-pointer underline underline-offset-4 sm:underline-offset-8  text-black ">
                View All
              </p>
            </Link>
          </ChildrenReveal>
        </div>
      </div>
    </div>
  );
}

export default Section6;
