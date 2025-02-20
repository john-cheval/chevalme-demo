import React, { useEffect, useRef, useState } from "react";

const OurValuesNEw = () => {
  const [activeStep, setActiveStep] = useState(0);
  const timeline2 = useRef(null);
  const timeline3 = useRef(null);
  const circle1 = useRef(null);
  const circle2 = useRef(null);
  const circle3 = useRef(null);

  const backgrounds = [
    "./About/horse1.png", // 1st image
    "black", // 2nd background (black)
    "./About/horse3.png", // 3rd image
  ];

  useEffect(() => {
    if (typeof window === "undefined") return; // Prevents running on the server

    if (!("IntersectionObserver" in window)) {
      console.warn(
        "IntersectionObserver is not supported in this environment."
      );
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === circle1.current) {
              setActiveStep(1);
            } else if (entry.target === circle2.current) {
              setActiveStep(2);
            } else if (entry.target === circle3.current) {
              setActiveStep(3);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    if (circle1.current) observer.observe(circle1.current);
    if (circle2.current) observer.observe(circle2.current);
    if (circle3.current) observer.observe(circle3.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`h-[649px] w-full rounded-[30px] z-20 relative transition-all duration-500 flex flex-col items-center justify-center`}
      style={{
        backgroundImage:
          activeStep === 1
            ? `url(${backgrounds[0]})`
            : activeStep === 3
              ? `url(${backgrounds[2]})`
              : backgrounds[1],
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col items-center gap-6">
        {/* Circle 1 */}
        <div className="flex flex-col items-center">
          <div
            ref={circle1}
            className={`w-12 h-12 flex items-center justify-center text-white font-bold rounded-full transition-all duration-500
              ${activeStep >= 1 ? "bg-[#101764]" : "bg-black"}
            `}
          >
            1
          </div>
        </div>

        {/* Timeline 1-2 */}
        <div
          ref={timeline2}
          className={`w-1 h-20 transition-all duration-500 ${
            activeStep >= 2 ? "bg-white" : "bg-black"
          }`}
        />

        {/* Circle 2 */}
        <div className="flex flex-col items-center">
          <div
            ref={circle2}
            className={`w-12 h-12 flex items-center justify-center font-bold rounded-full transition-all duration-500
              ${activeStep >= 2 ? "bg-white text-black" : "bg-black text-white"}
            `}
          >
            2
          </div>
        </div>

        {/* Timeline 2-3 */}
        <div
          ref={timeline3}
          className={`w-1 h-20 transition-all duration-500 ${
            activeStep === 3 ? "bg-black" : "bg-white"
          }`}
        />

        {/* Circle 3 */}
        <div className="flex flex-col items-center">
          <div
            ref={circle3}
            className={`w-12 h-12 flex items-center justify-center text-white font-bold rounded-full transition-all duration-500
              ${activeStep === 3 ? "bg-[#101764]" : "bg-black"}
            `}
          >
            3
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurValuesNEw;
