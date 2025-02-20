import ChildrenReveal from "@/util/ChildrenReveal";
import React from "react";
import arrowForward from "../../../public/arrow_forward.png";
import Link from "next/link";
import Image from "next/image";

const FooterContent = ({ data }) => {
  return (
    <div className="w-full flex  pb-5 sm:pb-10 md:pb-14 pt-24  flex-col px-0 md:px-5  ">
      <div className="flex items-center flex-col">
        <div className="flex sm:flex-row flex-col items-start justify-between sm:space-y-0 space-y-5 w-full ">
          <ChildrenReveal x={0} y={15} styling="flex flex-col space-y-2">
            <h3 className="font-sora  font-light text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              Get started now!
            </h3>
            <p className="font-satoshi   text-xs sm:text-sm md:text-base lg:text-xl">
              It takes less than a minute of your time.
            </p>
          </ChildrenReveal>
          <Link className="cursor-pointer" href={"/contact"}>
            <ChildrenReveal
              x={0}
              y={15}
              styling="flex items-center space-x-6 lg:space-x-8 group px-5 md:px-6 py-3 md:py-3.5 lg:py-4  transition-all duration-500 hover:bg-black border border-white  text-white hover:text-white border-black"
            >
              <p className="font-satoshi text-xs  sm:text-sm md:text-base font-semibold  ">
                Request a quote
              </p>
              <Image
                src={arrowForward}
                className="w-3 group-hover:invert  invert transition-all duration-500 object-contain "
                alt="arrowForward"
              />
            </ChildrenReveal>
          </Link>
        </div>
        <div className="hidden lg:flex items-start justify-between w-full py-10 sm:py-14 md:pt-10 pb-10">
          <div className="flex flex-col space-y-4">
            <div>
              <h6 className="font-satoshi  text-xs sm:text-sm md:text-base font-semibold  text-white">
                We Serve In
              </h6>
            </div>
            <ChildrenReveal x={0} y={15} styling="flex flex-col space-y-0">
              <Link className="cursor-pointer" href={"/location/dubai"}>
                <p className="font-satoshi text-xs border-b border-b-transparent hover:border-b-transparent hover:text-[#d81100] duration-300 transition-all sm:text-sm md:text-base text-white leading-[2.3] sm:leading-[2.2] md:leading-[2.3]">
                  Dubai
                </p>
              </Link>
              <Link className="cursor-pointer" href={"/location/abu-dhabi"}>
                <p className="font-satoshi text-xs border-b border-b-transparent hover:border-b-transparent hover:text-[#d81100] duration-300 transition-all sm:text-sm md:text-base text-white leading-[2.3] sm:leading-[2.2] md:leading-[2.3]">
                  Abu Dhabi
                </p>
              </Link>
              <Link className="cursor-pointer" href={"/location/saudi-arabia"}>
                <p className="font-satoshi text-xs border-b border-b-transparent hover:border-b-transparent hover:text-[#d81100] duration-300 transition-all sm:text-sm md:text-base text-white leading-[2.3] sm:leading-[2.2] md:leading-[2.3]">
                  Saudi Arabia
                </p>
              </Link>
              <Link className="cursor-pointer" href={"/location/riyadh"}>
                <p className="font-satoshi text-xs border-b border-b-transparent hover:border-b-transparent hover:text-[#d81100] duration-300 transition-all sm:text-sm md:text-base text-white leading-[2.3] sm:leading-[2.2] md:leading-[2.3]">
                  Riyadh
                </p>
              </Link>
              <Link className="cursor-pointer" href={"/location/dammam"}>
                <p className="font-satoshi text-xs border-b border-b-transparent hover:border-b-transparent hover:text-[#d81100] duration-300 transition-all sm:text-sm md:text-base text-white leading-[2.3] sm:leading-[2.2] md:leading-[2.3]">
                  Dammam
                </p>
              </Link>
            </ChildrenReveal>
          </div>
          <div className="flex flex-col space-y-4">
            <div>
              <h6 className="font-satoshi font-semibold text-xs sm:text-sm md:text-base text-white">
                Quick Links
              </h6>
            </div>
            <ChildrenReveal x={0} y={15} styling="flex flex-col space-y-0">
              <Link className="cursor-pointer" href={"/about"}>
                <p className="font-satoshi text-xs border-b border-b-transparent hover:border-b-transparent hover:text-[#d81100] duration-300 transition-all sm:text-sm md:text-base text-white leading-[2.3] sm:leading-[2.2] md:leading-[2.3]">
                  About
                </p>
              </Link>
              <Link className="cursor-pointer" href={"/services"}>
                <p className="font-satoshi  text-xs border-b border-b-transparent hover:border-b-transparent hover:text-[#d81100] duration-300 transition-all sm:text-sm md:text-base text-white leading-[2.3] sm:leading-[2.2] md:leading-[2.3] ">
                  Services
                </p>
              </Link>

              <Link className="cursor-pointer" href={"/projects"}>
                <p className="font-satoshi text-xs border-b border-b-transparent hover:border-b-transparent hover:text-[#d81100] duration-300 transition-all sm:text-sm md:text-base text-white leading-[2.3] sm:leading-[2.2] md:leading-[2.3]">
                  Works
                </p>
              </Link>

              <Link className="cursor-pointer" href={"/contact"}>
                <p className="font-satoshi text-xs border-b border-b-transparent hover:border-b-transparent hover:text-[#d81100] duration-300 transition-all sm:text-sm md:text-base text-white leading-[2.3] sm:leading-[2.2] md:leading-[2.3]">
                  Contact
                </p>
              </Link>
              <Link className="cursor-pointer" href={"/blogs"}>
                <p className="font-satoshi text-xs border-b border-b-transparent hover:border-b-transparent hover:text-[#d81100] duration-300 transition-all sm:text-sm md:text-base text-white leading-[2.3] sm:leading-[2.2] md:leading-[2.3]">
                  Blogs
                </p>
              </Link>
            </ChildrenReveal>
          </div>
          <div className="flex flex-col space-y-4">
            <div>
              <h6 className="font-satoshi font-semibold text-xs sm:text-sm md:text-base text-white">
                Services
              </h6>
            </div>
            {/* <ChildrenReveal x={0} y={15} styling="flex flex-col space-y-0">
              {data &&
                Object.keys(data).map((key, index) => (
                  <Link
                    className="cursor-pointer"
                    key={index}
                    href={`/services/${data[key].ID}`}
                  >
                    <p className="font-satoshi text-xs border-b border-b-transparent hover:border-b-transparent hover:text-[#d81100] duration-300 transition-all sm:text-sm md:text-base text-white leading-[2.3] sm:leading-[2.2] md:leading-[2.3]">
                      {data[key].post_title}
                    </p>
                  </Link>
                ))}
            </ChildrenReveal> */}
            <ChildrenReveal
              x={0}
              y={15}
              styling="flex flex-col gap-4 sm:flex-row space-y-0 sm:space-x-4"
            >
              {data && (
                <>
                  <div className="flex flex-col space-y-0">
                    {Object.keys(data)
                      .slice(0, 5)
                      .map((key, index) => (
                        <Link
                          className="cursor-pointer"
                          key={index}
                          href={`/services/${data[key].ID}`}
                        >
                          <p className="font-satoshi text-xs border-b border-b-transparent hover:border-b-transparent hover:text-[#d81100] duration-300 transition-all sm:text-sm md:text-base text-white leading-[2.3] sm:leading-[2.2] md:leading-[2.3]">
                            {data[key].post_title}
                          </p>
                        </Link>
                      ))}
                  </div>

                  <div className="flex flex-col space-y-0">
                    {Object.keys(data)
                      .slice(5)
                      .map((key, index) => (
                        <Link
                          className="cursor-pointer"
                          key={index}
                          href={`/services/${data[key].ID}`}
                        >
                          <p className="font-satoshi text-xs border-b border-b-transparent hover:border-b-transparent hover:text-[#d81100] duration-300 transition-all sm:text-sm md:text-base text-white leading-[2.3] sm:leading-[2.2] md:leading-[2.3]">
                            {data[key].post_title}
                          </p>
                        </Link>
                      ))}
                  </div>
                </>
              )}
            </ChildrenReveal>
          </div>

          <div className="flex flex-col space-y-4">
            <div>
              <h6 className="font-satoshi font-semibold text-xs sm:text-sm md:text-base text-white">
                Connect
              </h6>
            </div>
            <ChildrenReveal x={0} y={15} styling="flex flex-col space-y-0">
              <Link
                className="cursor-pointer"
                href={"mailto:info@chevalme.com"}
              >
                <p className="font-satoshi text-xs border-b border-b-transparent hover:border-b-transparent hover:text-[#d81100] duration-300 transition-all sm:text-sm md:text-base text-white leading-[2.3] sm:leading-[2.2] md:leading-[2.3]">
                  info@chevalme.com
                </p>
              </Link>
              <Link className="cursor-pointer" href={"tel:+971503560927"}>
                <p className="font-satoshi text-xs border-b border-b-transparent hover:border-b-transparent hover:text-[#d81100] duration-300 transition-all sm:text-sm md:text-base text-white leading-[2.3] sm:leading-[2.2] md:leading-[2.3]">
                  +971 50 356 0927
                </p>
              </Link>
              <Link className="cursor-pointer" href={"tel:+97145516085"}>
                <p className="font-satoshi text-xs border-b border-b-transparent hover:border-b-transparent hover:text-[#d81100] duration-300 transition-all sm:text-sm md:text-base text-white leading-[2.3] sm:leading-[2.2] md:leading-[2.3]">
                  +971 45 51 6085
                </p>
              </Link>
              <Link href={"https://maps.app.goo.gl/Y26or1kGZwuEGq5s6"}>
                <p className="font-satoshi text-xs border-b border-b-transparent hover:border-b-transparent hover:text-[#d81100] duration-300 transition-all sm:text-sm md:text-base text-white leading-[2.3] sm:leading-[2.2] md:leading-[2.3]">
                  Suite 1, 101, Capital Golden Tower, Business <br /> Bay,
                  Dubai, UAE
                </p>
              </Link>
            </ChildrenReveal>
          </div>
        </div>

        {/* For Mobile */}
        <div className="grid  lg:hidden grid-flow-row grid-cols-12 gap-9 sm:gap-12 md:gap-14 w-full  py-12 sm:py-16 md:py-20">
          <div className="flex flex-col col-span-5 sm:col-span-3 space-y-3 sm:space-y-4">
            <div>
              <h6 className="font-satoshi font-medium text-xs sm:text-sm md:text-base  text-[#101763]">
                We Serve In
              </h6>
            </div>
            <ChildrenReveal x={0} y={15} styling="flex flex-col space-y-0">
              <Link className="cursor-pointer" href={"/location/dubai"}>
                <p className="font-satoshi text-xs border-b border-b-transparent hover:border-b-transparent hover:text-[#d81100] duration-300 transition-all sm:text-sm md:text-base text-white leading-[2.3] sm:leading-[2.2] md:leading-[2.3]">
                  Dubai
                </p>
              </Link>
              <Link className="cursor-pointer" href={"/location/abu-dhabi"}>
                <p className="font-satoshi text-xs border-b border-b-transparent hover:border-b-transparent hover:text-[#d81100] duration-300 transition-all sm:text-sm md:text-base text-white leading-[2.3] sm:leading-[2.2] md:leading-[2.3]">
                  Abu Dhabi
                </p>
              </Link>
              <Link className="cursor-pointer" href={"/location/saudi-arabia"}>
                <p className="font-satoshi text-xs border-b border-b-transparent hover:border-b-transparent hover:text-[#d81100] duration-300 transition-all sm:text-sm md:text-base text-white leading-[2.3] sm:leading-[2.2] md:leading-[2.3]">
                  Saudi Arabia
                </p>
              </Link>
              <Link className="cursor-pointer" href={"/location/riyadh"}>
                <p className="font-satoshi text-xs border-b border-b-transparent hover:border-b-transparent hover:text-[#d81100] duration-300 transition-all sm:text-sm md:text-base text-white leading-[2.3] sm:leading-[2.2] md:leading-[2.3]">
                  Riyadh
                </p>
              </Link>
              <Link className="cursor-pointer" href={"/location/dammam"}>
                <p className="font-satoshi text-xs border-b border-b-transparent hover:border-b-transparent hover:text-[#d81100] duration-300 transition-all sm:text-sm md:text-base text-white leading-[2.3] sm:leading-[2.2] md:leading-[2.3]">
                  Dammam
                </p>
              </Link>
            </ChildrenReveal>
          </div>
          <div className="flex flex-col col-span-5 sm:col-span-3 space-y-3 sm:space-y-4">
            <div>
              <h6 className="font-satoshi font-medium text-xs sm:text-sm md:text-base text-[#101763]">
                Quick Links
              </h6>
            </div>
            <ChildrenReveal x={0} y={15} styling="flex flex-col space-y-0">
              <Link className="cursor-pointer" href={"/about"}>
                <p className="font-satoshi text-xs border-b border-b-transparent hover:border-b-transparent hover:text-[#d81100] duration-300 transition-all sm:text-sm md:text-base text-white leading-[2.3] sm:leading-[2.2] md:leading-[2.3]">
                  About
                </p>
              </Link>
              <Link className="cursor-pointer" href={"/services"}>
                <p className="font-satoshi text-xs border-b border-b-transparent hover:border-b-transparent hover:text-[#d81100] duration-300 transition-all sm:text-sm md:text-base text-white leading-[2.3] sm:leading-[2.2] md:leading-[2.3]">
                  Services
                </p>
              </Link>

              <Link className="cursor-pointer" href={"/case-studies"}>
                <p className="font-satoshi text-xs border-b border-b-transparent hover:border-b-transparent hover:text-[#d81100] duration-300 transition-all sm:text-sm md:text-base text-white leading-[2.3] sm:leading-[2.2] md:leading-[2.3]">
                  Case Studies
                </p>
              </Link>

              <Link className="cursor-pointer" href={"/projects"}>
                <p className="font-satoshi text-xs border-b border-b-transparent hover:border-b-transparent hover:text-[#d81100] duration-300 transition-all sm:text-sm md:text-base text-white leading-[2.3] sm:leading-[2.2] md:leading-[2.3]">
                  Works
                </p>
              </Link>

              <Link className="cursor-pointer" href={"/contact"}>
                <p className="font-satoshi text-xs border-b border-b-transparent hover:border-b-transparent hover:text-[#d81100] duration-300 transition-all sm:text-sm md:text-base text-white leading-[2.3] sm:leading-[2.2] md:leading-[2.3]">
                  Contact
                </p>
              </Link>
              <Link className="cursor-pointer" href={"/blogs"}>
                <p className="font-satoshi text-xs border-b border-b-transparent hover:border-b-transparent hover:text-[#d81100] duration-300 transition-all sm:text-sm md:text-base text-white leading-[2.3] sm:leading-[2.2] md:leading-[2.3]">
                  Blogs
                </p>
              </Link>
            </ChildrenReveal>
          </div>
          <div className="flex flex-col col-span-12 sm:col-span-5 space-y-3 sm:space-y-4">
            <div>
              <h6 className="font-satoshi font-medium text-xs sm:text-sm md:text-base text-[#101763]">
                Services
              </h6>
            </div>
            <ChildrenReveal x={0} y={15} styling="flex flex-col space-y-0">
              {data &&
                Object.keys(data)?.map((key, index) => (
                  <Link
                    className="cursor-pointer"
                    key={index}
                    href={`/services/${data[key].ID}`}
                  >
                    <p className="font-satoshi text-xs border-b border-b-transparent hover:border-b-transparent hover:text-[#d81100] duration-300 transition-all sm:text-sm md:text-base text-white leading-[2.3] sm:leading-[2.2] md:leading-[2.3]">
                      {data[key].post_title}
                    </p>
                  </Link>
                ))}
            </ChildrenReveal>
          </div>
          <div className="flex flex-col col-span-12 sm:col-span-5 space-y-3 sm:space-y-4">
            <div>
              <h6 className="font-satoshi font-medium text-xs sm:text-sm md:text-base text-[#101763]">
                Connect
              </h6>
            </div>
            <ChildrenReveal x={0} y={15} styling="flex flex-col space-y-0">
              <Link
                className="cursor-pointer"
                href={"mailto:info@chevalme.com"}
              >
                <p className="font-satoshi text-xs border-b border-b-transparent hover:border-b-transparent hover:text-[#d81100] duration-300 transition-all sm:text-sm md:text-base text-white leading-[2.3] sm:leading-[2.2] md:leading-[2.3]">
                  info@chevalme.com
                </p>
              </Link>
              <Link className="cursor-pointer" href={"tel:+971503560927"}>
                <p className="font-satoshi text-xs border-b border-b-transparent hover:border-b-transparent hover:text-[#d81100] duration-300 transition-all sm:text-sm md:text-base text-white leading-[2.3] sm:leading-[2.2] md:leading-[2.3]">
                  +971 50 356 0927
                </p>
              </Link>
              <Link
                className="cursor-pointer"
                href={"https://maps.app.goo.gl/Y26or1kGZwuEGq5s6"}
              >
                <p className="font-satoshi text-xs border-b border-b-transparent hover:border-b-transparent hover:text-[#d81100] duration-300 transition-all sm:text-sm md:text-base text-white leading-[2.3] sm:leading-[2.2] md:leading-[2.3]">
                  Suite 1, 101, Capital Golden Tower, Business <br /> Bay,
                  Dubai, UAE
                </p>
              </Link>
            </ChildrenReveal>
          </div>
        </div>
      </div>

      <div className="border border-[#666] w-full " />

      <div className="w-full pt-0 sm:pt-10 ">
        <ChildrenReveal
          x={0}
          y={15}
          start={"top bottom"}
          styling="flex flex-col-reverse sm:flex-row justify-between space-x-0 sm:space-y-0 space-y-3 sm:space-x-14"
        >
          <p className="font-satoshi text-xs border-b border-b-transparent hover:border-b-transparent hover:text-[#d81100] duration-300 transition-all sm:text-sm md:text-base text-white leading-[2.3] sm:leading-[2.2] md:leading-[2.3]">
            Cheval 2024 All rights reserved
          </p>
          <p className="font-satoshi text-xs border-b border-b-transparent hover:border-b-transparent hover:text-[#d81100] duration-300 transition-all sm:text-sm md:text-base text-white leading-[2.3] sm:leading-[2.2] md:leading-[2.3]">
            Privacy Policy | Terms & Conditions
          </p>
        </ChildrenReveal>
        {/* <ChildrenReveal
        x={0}
        y={15}
        start={"top bottom"}
        styling="flex flex-row space-x-1"
      >
        <Link
          className="cursor-pointer"
          href={"https://www.facebook.com/chevalmiddleeast"}
        >
          <Image src={fb} className="h-3 object-contain" alt="facebook" />
        </Link>

        <Link
          className="cursor-pointer"
          href={"https://www.instagram.com/chevalmiddleeast/"}
        >
          <Image
            src={insta}
            className="h-3 object-contain"
            alt="instagram"
          />
        </Link>

        <Link
          className="cursor-pointer"
          href={"https://www.linkedin.com/company/chevalmiddleeast/"}
        >
          <Image
            src={linkedin}
            className="h-3 object-contain"
            alt="linkedin"
          />
        </Link>
      </ChildrenReveal> */}
      </div>
    </div>
  );
};

export default FooterContent;
