// import React from "react";
// import serviceInnerOverlay from "../../../../public/ServiceInner/HeaderBgGradient.svg";
// import backward from "../../../../public/ServicesInner/forward.svg";
// import Image from "next/image";

// const ServiceInnerHeader = ({ title, description }) => {
//   const handleBack = () => {
//     window.history.back();
//   };
//   return (
//     <div className="relative w-screen h-fit mb-14 overflow-hidden">
//       <video
//         playsInline
//         autoPlay
//         muted
//         loop
//         controlsList="nodownload"
//         className="absolute top-0 left-0 w-full h-full object-cover -z-20"
//       >
//         <source src="/ServiceInner/serviceBg.mp4" type="video/mp4" />
//       </video>

//       <div className="absolute inset-0 z-[5]">
//         <Image
//           src={serviceInnerOverlay}
//           className="h-full w-full object-cover"
//           alt="serviceOverlay"
//         />
//       </div>

//       <div className="absolute top-[90px] left-[30px] z-[1111]">
//         <Image
//           src={backward}
//           className="h-full w-[42px] object-cover cursor-pointer"
//           alt="serviceOverlay"
//           onClick={handleBack}
//         />
//       </div>

//       <div className="relative z-10 flex justify-center items-center lg:items-start lg:flex-row flex-col  lg:justify-between h-full px-5 sm:px-10 md:px-12 pt-24 sm:pt-28 md:pt-36 space-y-3 lg-space-y-0">
//         <h1 className="text-[#101763] font-sora  text-xl md:text-start md:text-3xl lg:text-4xl font-normal leading-[135%] w-[80%] lg:w-[576px] tracking-[-0.4px]">
//           {title}
//         </h1>
//         <p
//           dangerouslySetInnerHTML={{ __html: description }}
//           className="text-[#464646] font-sora text-sm md:text-base font-normal leading-[187%] w-[80%]  lg:w-[528px]"
//         />
//       </div>
//     </div>
//   );
// };

// export default ServiceInnerHeader;
