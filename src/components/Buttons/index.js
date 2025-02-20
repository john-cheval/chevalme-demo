"use client";
import gsap from "gsap";
import Link from "next/link";
import React, { useEffect } from "react";

const Buttons = ({ link, color, text }) => {
  useEffect(() => {
    const buttons = gsap.utils.toArray(".animated-button");
    buttons.forEach((item) => {
      let span = item.querySelector("span");
      let tl = gsap.timeline({ paused: true });

      tl.to(span, { duration: 0.2, yPercent: -150, ease: "power2.in" });
      tl.set(span, { yPercent: 150 });
      tl.to(span, { duration: 0.2, yPercent: 0 });

      item.addEventListener("mouseenter", () => tl.play(0));
    });
  }, []);
  return (
    <Link
      href={link}
      className={`animated-button  flex items-center font-satoshi justify-center text-base md:text-lg font-medium text-white border rounded-[4px]  border-[#fff]   mt-5  w-[180px] lg:w-[201px] h-[52px] md:h-[61px] transition-all duration-300 overflow-hidden relative`}
    >
      <span className="absolute w-full h-full flex items-center justify-center">
        {text}
      </span>
    </Link>
  );
};

export default Buttons;
