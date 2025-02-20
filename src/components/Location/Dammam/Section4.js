/** @format */

import React from "react";
import tablet from "../../../../public/aod_tablet.svg";
import out_home from "../../../../public/digital_out_of_home.svg";
import mall from "../../../../public/local_mall copy.svg";
import palette from "../../../../public/palette.svg";
import ad from "../../../../public/ad_group.svg";
import action from "../../../../public/call_to_action.svg";
import Image from "next/image";
import Link from "next/link";
function Section4() {
  return (
    <div className="relative w-screen h-fit  py-12 sm:py-14 md:py-16 bg-white overflow-x-hidden">
      <div className="relative max-w-screen px-5 sm:px-10 md:px-12 sm:py-0 py-10 w-full">
        <div className="grid grid-cols-3 gap-5 w-full h-fit">
          <div className="col-span-1 pr-[20%]">
            <h3
              style={{}}
              className="font-sora font-semibold text-[#101763]  text-4xl  leading-normal "
            >
              <span
                style={{
                  background:
                    "linear-gradient(92.09deg, #FF0C15 0.33%, #000000 26.13%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "transparent",
                }}
              >
                We
              </span>{" "}
              also provide various services across Dubai
            </h3>
            <div className="my-5 ml-1 w-full max-w-32 h-[1px] bg-black"></div>
          </div>
          <div className="col-span-2 grid grid-cols-3 gap-2.5 grid-flow-row h-fit">
            <Link
              href={"/mobile-app-development-company-dammam"}
              className="col-span-1 flex flex-col justify-between bg-[#F8F8F8] w-full h-[20vw] py-10 px-10"
            >
              <Image src={tablet} className="w-20 mt-3 object-contain h-fit" />
              <h3
                style={{
                  background:
                    "linear-gradient(92.09deg, #FF0C15 0.33%, #101763 26.13%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "transparent",
                }}
                className="font-sora font-semibold text-[#101763] text-xl leading-tight "
              >
                Mobile App Development Dubai
              </h3>
            </Link>
            <Link
              href={"/digital-marketing-company-dammam"}
              className="col-span-1 flex flex-col justify-between bg-[#F8F8F8] w-full h-[20vw] py-10 px-10"
            >
              <Image
                src={out_home}
                className="w-20 mt-3 object-contain h-fit"
              />
              <h3
                style={{
                  background:
                    "linear-gradient(92.09deg, #FF0C15 0.33%, #101763 26.13%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "transparent",
                }}
                className="font-sora font-semibold text-[#101763] text-xl leading-tight "
              >
                Digital Marketing Service Dubai
              </h3>
            </Link>
            <Link
              href={"/ecommerce-company-dammam"}
              className="col-span-1 flex flex-col justify-between bg-[#F8F8F8] w-full h-[20vw] py-10 px-10"
            >
              <Image src={mall} className="w-20 mt-3 object-contain h-fit" />
              <h3
                style={{
                  background:
                    "linear-gradient(92.09deg, #FF0C15 0.33%, #101763 26.13%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "transparent",
                }}
                className="font-sora font-semibold text-[#101763] text-xl leading-tight "
              >
                E-commerce Web Design Dubai
              </h3>
            </Link>
            <Link
              href={"/graphic-design-company-dammam"}
              className="col-span-1 flex flex-col justify-between bg-[#F8F8F8] w-full h-[20vw] py-10 px-10"
            >
              <Image src={palette} className="w-20 mt-3 object-contain h-fit" />
              <h3
                style={{
                  background:
                    "linear-gradient(92.09deg, #FF0C15 0.33%, #101763 26.13%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "transparent",
                }}
                className="font-sora font-semibold text-[#101763] text-xl leading-tight "
              >
                Graphic Design Service Dubai
              </h3>
            </Link>
            <Link
              href={"/seo-company-dammam"}
              className="col-span-1 flex flex-col justify-between bg-[#F8F8F8] w-full h-[20vw] py-10 px-10"
            >
              <Image src={ad} className="w-20 mt-3 object-contain h-fit" />
              <h3
                style={{
                  background:
                    "linear-gradient(92.09deg, #FF0C15 0.33%, #101763 26.13%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "transparent",
                }}
                className="font-sora font-semibold text-[#101763] text-xl leading-tight "
              >
                Seo Services Dubai
              </h3>
            </Link>
            <Link
              href={"/custom-web-design-company-dammam"}
              className="col-span-1 flex flex-col justify-between bg-[#F8F8F8] w-full h-[20vw] py-10 px-10"
            >
              <Image src={action} className="w-20 mt-3 object-contain h-fit" />
              <h3
                style={{
                  background:
                    "linear-gradient(92.09deg, #FF0C15 0.33%, #101763 26.13%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "transparent",
                }}
                className="font-sora font-semibold text-[#101763] text-xl leading-tight "
              >
                Custom Web Solution In Dubai
              </h3>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section4;
