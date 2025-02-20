/** @format */

import React from "react";

function Section7() {
  return (
    <div className="relative w-screen h-fit  py-12 sm:py-14 md:py-16 text-[#101763] bg-white overflow-x-hidden">
      <div className="relative max-w-screen px-5 sm:px-10 md:px-12 sm:py-0 py-10 w-full">
        <div className="grid w-full gap-5 grid-cols-9">
          <div className="flex space-y-5 sm:space-y-10 sm:items-start pr-2 items-center sm:justify-start justify-center  flex-col col-span-4 h-fit">
            <h3
              style={{
                background:
                  "linear-gradient(92.09deg, #FF0C15 0.33%, #000000 26.13%)",

                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                color: "transparent",
              }}
              className="font-sora font-semibold  text-4xl  leading-normal "
            >
              Transforming your online presence with innovative web design. Are
              you tired of having a dull and outdated website?
            </h3>
            {/* <div className="my-3 ml-1 w-full max-w-40 h-[1px] bg-black"></div> */}
          </div>
          <div className=" col-span-5 flex flex-col space-y-6 w-full">
            <p className="font-satoshi w-full paragraphText-Size text-[#27172F]">
              Embrace a remarkable transformation for your online presence by
              leveraging our cutting-edge web design services. Our skilled
              professionals will craft a visually captivating and user-friendly
              website that enthralls your audience and boosts traffic to your
              business".Distinguish yourself from the competition and leave a
              memorable impact with our innovative designs. Elevate your online
              presence now!
            </p>
            <div className="flex items-center justify-between py-3 space-x-5 rounded-[50px] sm:w-fit w-full  px-6 border border-[#EE2525] bg-[#EE2525] text-white   font-sora text-center  text-sm ">
              <span className="">Contact Us</span>
              <svg
                className="w-3 object-contain rotate-45"
                viewBox="0 0 8 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.671646 7.29248L0.0625 6.68333L5.80279 0.9375H0.584146V0.0625H7.29248V6.77083H6.41748V1.55219L0.671646 7.29248Z"
                  fill="#fff"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section7;
