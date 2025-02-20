import React from "react";
import Phone from "../../../../public/Contact/call.svg";
import email from "../../../../public/Contact/mail.svg";
import location from "../../../../public/Contact/location.svg";
import facebook from "../../../../public/Contact/fbs.png";
import instagram from "../../../../public/Contact/ins.png";
import linkedin from "../../../../public/Contact/lns.png";
import arrow from "../../../../public/Contact/arrow.png";
import Image from "next/image";
import Link from "next/link";

const ContactMiddleSction = () => {
  return (
    <div className="px-5 sm:px-10 md:px-12 border mt-[86px]  ">
      <div className=" border border-t border-r-0 border-l-0 pt-16 pb-8 flex spce-x-[117px] ">
        <div className=" flex flex-col justify-between ">
          <div className="space-y-5">
            <h2 className="text-[#101763] font-sora text-[40px] font-normal leading-[140%] w-[80%] lg:w-[551px] ">
              Let’s create something great together.
            </h2>
            <div className="bg-[#d81100] w-[76px] h-[6px]" />
          </div>
          <Image
            src={arrow}
            alt="arrow"
            className="w-[71px] h-[71px] ml-auto mr-[31px]"
          />
        </div>
        <span className="h-[511px] w-[1px] bg-[#ccc] mr-[75px]"></span>
        <div className="ml-[139px]">
          <h3 className="text-[#101763] font-sora text-[40px] leading-[140%]">
            Contact
          </h3>
          <div className="space-y-4 mt-7">
            <div className="flex  space-x-3 ">
              <Image
                src={Phone}
                alt="phone"
                height={0}
                width={0}
                sizes="100vw"
                className="h-[15px] w-[15px] mt-2 "
              />
              <div className="flex flex-col space-y-2">
                <Link
                  href={"tel:  +971 50 356 0927   "}
                  className="text-[#101763] font-satoshi text-xl font-medium leading-[154%]"
                >
                  +971 50 356 0927
                </Link>
                <Link
                  href={"tel:  +971 50 356 0927   "}
                  className="text-[#101763] font-satoshi text-xl font-medium leading-[154%]"
                >
                  +971 4 551 6085
                </Link>
              </div>
            </div>

            <div className="flex  space-x-3 ">
              <Image
                src={location}
                alt="location"
                height={0}
                width={0}
                sizes="100vw"
                className="h-[15px] w-[15px] mt-2 "
              />
              <div className="flex flex-col space-y-2">
                <Link
                  href={"mailto:info@chevalme.com"}
                  className="text-[#101763] font-satoshi text-xl font-medium leading-[154%]"
                >
                  Suite 1, 101, Capital Golden Tower,
                  <br />
                  Business Bay, Dubai, UAE
                </Link>
              </div>
            </div>
            <div className="flex space-x-3">
              <Link href={""}>
                <Image
                  src={facebook}
                  alt="facebook"
                  height={0}
                  width={0}
                  sizes="100vw"
                  className="h-12 w-12"
                />
              </Link>

              <Link href={"#"}>
                <Image
                  src={instagram}
                  alt="instagram"
                  height={0}
                  width={0}
                  sizes="100vw"
                  className="h-12 w-12"
                />
              </Link>

              <Link href={"#"}>
                <Image
                  src={linkedin}
                  alt="facebook"
                  height={0}
                  width={0}
                  sizes="100vw"
                  className="h-12 w-12"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMiddleSction;
