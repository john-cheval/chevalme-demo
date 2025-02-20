import React from "react";
import arrowForwrd from "../../../../public/ServicesInner/arrow_outward.png";
import Image from "next/image";
import Link from "next/link";

const ServiceInnerCTA = ({ title, videoUrl, link }) => {
  const isVideo = videoUrl?.includes(".mp4");
  return (
    <div className="px-5 sm:px-10 md:px-12 my-6 md:my-10 lg:my-12">
      <div className="relative w-full h-[300px] md:h-[400px] lg:h-[550px] rounded-[30px] overflow-hidden ">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            src={isVideo ? videoUrl : "/ServicesInner/ctaVideo.mp4"}
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-serviceinner-cta-bg-overlay" />

        <div className="absolute inset-0  mt-20 ml-14 lg:ml-28  px-8 sm:px-12 lg:px-16 text-white">
          <h2 className="lg:w-[541px] w-[80%] font-sora text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold leading-[135%] tracking-[-0.8px]">
            {title}
          </h2>
        </div>

        <Link href={"/contact-us"} className=" block group">
          <Image
            src={arrowForwrd}
            alt="Arrow"
            className="absolute bottom-10 right-9 w-12 h-12 lg:w-[160px]  lg:h-auto transition-transform duration-300 ease-in-out group-hover:translate-x-3"
          />
        </Link>
      </div>
    </div>
  );
};

export default ServiceInnerCTA;
