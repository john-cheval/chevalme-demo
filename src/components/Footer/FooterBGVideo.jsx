import React from "react";

const FooterBGVideo = () => {
  return (
    <div className="absolute inset-0 z-0">
      <video
        autoPlay
        loop
        muted
        playsInline
        controlsList="nodownload"
        className="object-center object-cover w-full h-full bg-no-repeat"
      >
        <source src={"./Footer/footerBG.mp4"} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default FooterBGVideo;
