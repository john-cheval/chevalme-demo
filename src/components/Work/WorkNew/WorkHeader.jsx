import Image from "next/image";
import React from "react";
import workHeader2Image from "../../../../public/Work/workHead2.svg";
import WorkOverlay from "../../../../public/Work/overlay.png";

const WorkHeader = ({ data }) => {
  return (
    <div className="relative w-screen h-[367px] md:h-[427px]   overflow-hidden flex items-center justify-center">
      <video
        playsInline
        autoPlay
        muted
        loop
        controlsList="nodownload"
        id="video"
        className="absolute inset-0 w-full h-full object-cover opacity-80 -z-10"
      >
        <source src={data?.banner_video} type="video/mp4" />
      </video>

      <div className="text-white text-center font-sora text-3xl sm:text-5xl md:text-[60px] font-semibold leading-[135%] tracking-[-0.6px] w-full flex items-center justify-center space-x-4 md:space-x-5 ">
        {" "}
        <div className="absolute inset-0 -z-[5] h-full w-full">
          <Image
            src={WorkOverlay}
            alt="Work Overlay"
            // layout=""
            className="object-cover"
            priority
          />
        </div>
        <span>Concept </span>
        <Image
          src={workHeader2Image}
          alt="arrow"
          width={0}
          height={0}
          sizes="100vw"
          className="md:w-[63px] md:h-[111px] sm:w-[38px] sm:h-[67px] w-[25px] h-[50px] "
        />
        <span>Create</span>
      </div>
    </div>
  );
};

export default WorkHeader;
