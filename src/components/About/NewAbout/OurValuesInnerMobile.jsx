import React from "react";
import horse1 from "../../../../public/About/horse1.png";
import horse2 from "../../../../public/About/horse2.png";
import horse3 from "../../../../public/About/horse3.png";
import Image from "next/image";

const OurValuesInnerMobile = () => {
  return (
    <div>
      <div className="space-y-4">
        <div className="flex flex-col gap-y-4">
          <div className="h-auto w-full">
            <Image
              src={horse1}
              alt="Horse"
              height={0}
              width={0}
              className="h-full w-full"
            />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl text-center font-semibold text-[#101763] font-sora leading-[133%]">
              Speed
            </h2>
            <p className="text-center  mt-2 ml-6 text-black   font-satoshi text-sm leading-[155%]">
              We deliver solutions efficiently, ensuring that our clients' goals
              are met on time without compromising quality.
            </p>
          </div>

          <div className="flex flex-col h-[100px] items-center">
            <div className="h-4 w-4 rounded-full bg-black" />
            <div className="h-[80px] w-[1px] rounded-full bg-black" />
            <div className="h-4 w-4 rounded-full bg-black" />
          </div>
        </div>
        <div className="flex flex-col gap-y-4">
          <div className="h-auto w-full">
            <Image
              src={horse2}
              alt="Horse"
              height={0}
              width={0}
              className="h-full w-full"
            />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl text-center font-semibold text-[#101763] font-sora leading-[133%]">
              Vision
            </h2>
            <p className="text-center  mt-2 ml-6 text-black   font-satoshi text-sm leading-[155%]">
              We deliver solutions efficiently, ensuring that our clients' goals
              are met on time without compromising quality.
            </p>
          </div>

          <div className="flex flex-col h-[100px] items-center">
            <div className="h-4 w-4 rounded-full bg-black" />
            <div className="h-[80px] w-[1px] rounded-full bg-black" />
            <div className="h-4 w-4 rounded-full bg-black" />
          </div>
        </div>

        <div className="flex flex-col gap-y-4">
          <div className="h-auto w-full">
            <Image
              src={horse3}
              alt="Horse"
              height={0}
              width={0}
              className="h-full w-full"
            />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl text-center font-semibold text-[#101763] font-sora leading-[133%]">
              Loyalty
            </h2>
            <p className="text-center  mt-2 ml-6 text-black   font-satoshi text-sm leading-[155%]">
              We deliver solutions efficiently, ensuring that our clients' goals
              are met on time without compromising quality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurValuesInnerMobile;
