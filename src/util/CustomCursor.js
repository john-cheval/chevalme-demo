/** @format */
"use client";
import gsap from "gsap/gsap-core";
import React, { useEffect, useRef, useState } from "react";

function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  let cursorSize = isHovered ? 80 : 20;
  const cursor = useRef();

  const mouse = { x: 0, y: 0 };
  const manageMouseMove = (e) => {
    const { clientX, clientY } = e;
    // const { left, top, width, height } =
    //   stickyElement.current.getBoundingClientRect();
    // const center = { x: left + width / 2, y: top + height / 2 };
    // const distance = { x: clientX - center.x, y: clientY - center.y };

    // if (isHovered) {
    //   gsap.to(cursor.current, {
    //     x: center.x - cursorSize / 2 + distance.x * 0.2,
    //     y: center.y - cursorSize / 2 + distance.y * 0.2,
    //   });
    // } else {
    gsap.to(cursor.current, {
      x: clientX - cursorSize / 2,
      y: clientY - cursorSize / 2,
    });
    // }
    gsap.to(cursor.current, {
      width: cursorSize,
      height: cursorSize,
    });

    // mouse.x = clientX;
    // mouse.y = clientY;
  };

  const manageMouseOver = () => {
    setIsHovered(true);
  };

  const manageMouseLeave = () => {
    setIsHovered(false);
  };
  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);
    // console.log(stickyElement.current);
    cursor.current.addEventListener("mouseover", manageMouseOver);
    cursor.current.addEventListener("mouseleave", manageMouseLeave);
    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
      cursor.current.removeEventListener("mouseover", manageMouseOver);
      cursor.current.removeEventListener("mouseleave", manageMouseLeave);
    };
  }, [isHovered]);
  return (
    <div
      style={{
        zIndex: 10000,
        height: "20px",
        width: "20px",
        background: "#efe89c",
        position: "fixed",
        borderRadius: "50%",
        pointerEvents: "none",
        mixBlendMode: "difference",
        top: 0,
      }}
      className="md:block hidden "
      //   className="fixed w-4 h-4 rounded-full bg-black"
      ref={cursor}
    ></div>
  );
}

export default CustomCursor;
