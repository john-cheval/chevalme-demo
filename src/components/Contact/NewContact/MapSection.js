import React from "react";
import Image from "next/image";
import mapTopGradient from "../../../../public/Contact/grad/map_t_grad.svg";
import mapBottomGradient from "../../../../public/Contact/grad/map_b_grad.svg";
// import MapSectionTwo from "./MapSectionTwo";

const MapSection = () => {
  return (
    <div className="relative w-full h-[500px] lg:h-[639px] pt-11 md:pt-10 lg:pt-20">
      <div className="relative w-full h-full">
        {/* Map */}

        <iframe
          src="https://snazzymaps.com/embed/679147"
          width="100%"
          height="100%"
          className="absolute top-0 left-0 w-full h-full"
          style={{ border: "none" }}
        ></iframe>

        {/* <MapSectionTwo /> */}

        {/* Clickable Pin Overlay */}
        <a
          href="https://www.google.com/maps/place/Cheval+-+Website+Design+%7C+App+Development+Agency+Dubai+UAE/@25.1780082,55.268966,17z/data=!3m1!4b1!4m6!3m5!1s0x3e5f699813fd9451:0xc4b554ceb43cff51!8m2!3d25.1780034!4d55.2738369!16s%2Fg%2F11txt0bwbq?entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute"
          style={{
            top: "50%",
            left: "50%",
            width: "30px",
            height: "30px",
            transform: "translate(-50%, -50%)",
            background: "transparent",
            zIndex: 10,
          }}
        ></a>

        {/* Gradients */}
        <div className="absolute top-0 left-0 w-full h-[175px] pointer-events-none">
          <Image
            src={mapTopGradient}
            alt="mapTopGradient"
            layout="fill"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute bottom-0 left-0 w-full h-[175px] pointer-events-none">
          <Image
            src={mapBottomGradient}
            alt="mapBottomGradient"
            layout="fill"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default MapSection;
