// "use client";
// import Image from "next/image";
// import React, { useEffect, useRef, useState } from "react";
// import Play from "../../../../public/About/play.svg";
// import Logo from "../../../../public/About/logo.svg";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/dist/ScrollTrigger";

// const AboutBanner = ({ bannerData, videoUrl }) => {
//   const [playVideo, setPlayVideo] = useState(false);
//   const aboutSectionCards = useRef(null);
//   const aboutSectionCardsMain = useRef(null);
//   // const [cursorVisible, setCursorVisible] = useState(false);
//   // const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

//   const handleMouseEnter = () => {
//     setPlayVideo(true);
//   };

//   const handleMouseLeave = () => {
//     setPlayVideo(false);
//   };

//   // useGSAP(() => {
//   //   gsap.registerPlugin(ScrollTrigger);

//   //   ScrollTrigger.create({
//   //     trigger: "#video",
//   //     start: "top center",
//   //     end: "bottom center",
//   //     onEnter: () => setCursorVisible(false),
//   //     onLeave: () => setCursorVisible(false),
//   //     onEnterBack: () => setCursorVisible(false),
//   //     onLeaveBack: () => setCursorVisible(false),
//   //   });
//   // }, []);

//   // useEffect(() => {
//   //   const handleMouseMove = (e) => {
//   //     setCursorPosition({ x: e.clientX, y: e.clientY });
//   //   };

//   //   const handleMouseEnter = () => {
//   //     setCursorVisible(true);
//   //     setPlayVideo(true);
//   //   };

//   //   const handleMouseLeave = () => {
//   //     setCursorVisible(false);
//   //     setPlayVideo(false);
//   //   };

//   //   const section = document.getElementById("video");

//   //   if (section) {
//   //     section.addEventListener("mousemove", handleMouseMove);
//   //     section.addEventListener("mouseenter", handleMouseEnter);
//   //     section.addEventListener("mouseleave", handleMouseLeave);
//   //   }

//   //   return () => {
//   //     if (section) {
//   //       section.removeEventListener("mousemove", handleMouseMove);
//   //       section.removeEventListener("mouseenter", handleMouseEnter);
//   //       section.removeEventListener("mouseleave", handleMouseLeave);
//   //     }
//   //   };
//   // }, []);

//   useGSAP(() => {
//     gsap.registerPlugin(ScrollTrigger);
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: "#aboutSection2",
//         start: "top top",
//         end: "+=150%",
//         scrub: 1,
//         pin: true,
//       },
//     });
//     if (!window.matchMedia("(max-width: 767px)").matches) {
//       tl.to(aboutSectionCards.current.children, {
//         y: window.matchMedia("(max-width: 900px)").matches ? -80 : -120,
//         stagger: {
//           amount: 0.4,
//         },
//       });
//     } else {
//       tl.to(aboutSectionCardsMain.current, {
//         y: window.matchMedia("(max-width: 550px)").matches
//           ? -0.8 * aboutSectionCards.current.children[0].clientHeight
//           : window.matchMedia("(max-width: 640px)").matches
//             ? -1 * aboutSectionCards.current.children[0].clientHeight
//             : -1.2 * aboutSectionCards.current.children[0].clientHeight,
//       })
//         .to(aboutSectionCards.current.children[1], {
//           y: -1 * (aboutSectionCards.current.children[1].clientHeight * 0.9),
//         })
//         .to(aboutSectionCards.current.children[2], {
//           y:
//             -1 * (aboutSectionCards.current.children[2].clientHeight * 0.9 * 2),
//         });
//     }
//   }, []);

//   return (
//     <div className="w-screen relative mb-20">
//       {/* Background Video */}
//       <div className="relative h-[578px] w-screen hidden sm:block">
//         <div className="absolute inset-0 z-0">
//           <video
//             id="video"
//             key={videoUrl}
//             autoPlay
//             loop
//             muted
//             playsInline
//             controlsList="nodownload"
//             className="object-center object-cover w-full h-full bg-no-repeat"
//           >
//             <source
//               src={videoUrl || "./About/bannerVideo.mp4"}
//               type="video/mp4"
//             />
//             Your browser does not support the video tag.
//           </video>
//         </div>

//         {/* {cursorVisible && (
//           <div
//             className="hidden sm:flex items-center justify-center h-fit w-24 sm:w-28 xl:w-32 fixed z-20 pointer-events-none"
//             style={{
//               left: `${cursorPosition.x - 25}px`,
//               top: `${cursorPosition.y - 25}px`,
//               transform: "translate(-50%, -50%)",
//             }}
//           >
//             <Image
//               src={Play}
//               alt="Play"
//               className="w-full h-full animate-spin-slow"
//             />
//             <div className="absolute z-50">
//               <Image src={Logo} alt="Logo" className="w-full h-full" />
//             </div>
//           </div>
//         )} */}

//         <div
//           className=" hidden sm:flex items-center justify-center  h-fit w-24  sm:w-28 z-20  xl:w-32 bottom-[52px]  right-[52px] cursor-pointer absolute "
//           onMouseEnter={handleMouseEnter}
//           onMouseLeave={handleMouseLeave}
//         >
//           <Image
//             src={Play}
//             alt="Play"
//             className="w-full h-full"
//             style={{ animation: "rotate 10s linear infinite" }}
//           />
//           <div className="z-50 absolute ">
//             <Image src={Logo} alt="Logo" className="w-full h-full" />
//           </div>
//         </div>
//       </div>

//       {playVideo && (
//         <div
//           className={`sm:h-[300px] md:h-[500px] xl:h-[600px] 2xl:h-[655px] sm:w-[450px] md:w-[700px] xl:w-[1000px] 2xl:w-[1200px] absolute right-[180px] sm:top-[150px] md:-top-[10px] xl:-top-[50px] rounded-[2rem] sm:block overflow-hidden transition-all duration-300 ease-in-out`}
//         >
//           <video
//             autoPlay
//             loop
//             muted
//             playsInline
//             controlsList="nodownload"
//             className="object-center object-cover w-full h-full bg-no-repeat"
//           >
//             <source src={"./About/bannerPopupVideo.mp4"} type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//         </div>
//       )}

//       <div
//         ref={aboutSectionCardsMain}
//         className="h-[300px]  overflow-y-visible sm:h-fit"
//       >
//         <div
//           ref={aboutSectionCards}
//           className="h-fit  bg-transparent overflow-y-visible md:bg-[#F6F6F4] items-center justify-center flex flex-col md:flex-row space-x-0  md:space-y-0 space-y-4 md:space-x-3 px-0 lg:px-10 xl:px-20 pb-5 w-full"
//         >
//           <div className=" rounded-xl bg-[#F1F1F1] flex  flex-col  h-[240px] md:h-[280px] lg:h-[240px] text-[#101763] space-y-1 justify-center px-12 w-full sm:w-[80%] md:w-1/3 ">
//             <h4 className="text-5xl md:text-3xl lg:text-5xl font-sora tracking-tight font-semibold">
//               100+
//             </h4>
//             <div className="flex flex-col space-y-3 font-satoshi">
//               <h4 className=" font-semibold text-4xl ">Happy Clients</h4>
//               <p className="font-normal text-xs w-full">
//                 Our team has worked on various web solutions, both big and
//                 small, across different industries
//               </p>
//             </div>
//           </div>
//           <div className=" rounded-xl bg-[#D81100] flex flex-col h-[240px] md:h-[280px] lg:h-[240px] text-white space-y-1 justify-center px-12 w-full sm:w-[80%] md:w-1/3">
//             <h4 className="text-5xl md:text-3xl lg:text-5xl  font-sora tracking-tight font-semibold">
//               30+
//             </h4>
//             <div className="flex flex-col space-y-3 font-satoshi">
//               <h4 className=" font-semibold text-4xl ">Experienced Team</h4>
//               <p className="font-normal text-xs w-full">
//                 We have a highly talented team of developers, designers,
//                 business analysts and account managers
//               </p>
//             </div>
//           </div>
//           <div className="  rounded-xl bg-[#101763] flex flex-col h-[240px] md:h-[280px] lg:h-[240px] text-white justify-center px-12 w-full sm:w-[80%] md:w-1/3 space-y-1">
//             <div className="flex flex-col space-y-3 font-satoshi">
//               {" "}
//               <h4 className="text-5xl md:text-3xl lg:text-5xl font-sora tracking-tight font-semibold">
//                 150+
//               </h4>
//               <div className="flex flex-col space-y-3 font-satoshi">
//                 <h4 className=" font-semibold text-4xl ">Projects</h4>
//                 <p className="font-normal text-xs w-full">
//                   Over the years, we have worked on different projects and
//                   evolved our solutions in line with the latest technology
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutBanner;
