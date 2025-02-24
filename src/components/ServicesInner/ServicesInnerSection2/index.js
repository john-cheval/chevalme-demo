// /** @format */
// "use client";
// import React, { useEffect, useState } from "react";
// import Image from "next/image";

// import person from "../../../../public/ServicesInner/person.svg";
// import calendar from "../../../../public/ServicesInner/calendar.svg";
// import store from "../../../../public/ServicesInner/store.svg";
// import book from "../../../../public/ServicesInner/book.svg";
// function ServicesInnerSection2({ data }) {
//   return (
//     <div className="relative w-screen h-fit pt-14 bg-[#F6F6F4] overflow-x-hidden">
//       <div className="relative flex-col space-y-14 flex h-fit w-full px-5 sm:px-10 md:px-12 text-[#101763]">
//         {data?.service_countdown && (
//           <div className="grid grid-cols-2 grid-flow-row lg:flex w-full gap-1 sm:gap-2 md:gap-3 justify-between flex-row">
//             <div className="w-full lg:w-[21vw] h-[40vw] sm:h-[30vw]  lg:h-[23vw] xl:h-[19vw] bg-white rounded-[2rem] flex justify-center sm:items-start items-center  sm:justify-between gap-y-3 sm:gap-y-0 flex-col">
//               <div className="m-3 sm:m-5 xl:m-7 pb-2 w-fit border-b-2 border-b-black">
//                 <Image
//                   src={calendar}
//                   className="w-7 md:w-8 lg:w-10 object-contain"
//                 />
//               </div>
//               <div className="sm:self-end flex items-center justify-center flex-col self-auto mr-0 sm:mr-7 lg:mr-9 xl:mr-11 mb-0 sm:mb-5 md:mb-7 lg:mb-9 w-fit">
//                 <h1 className="font-sora text-[#D81100] font-bold leading-none tracking-tighter text-3xl md:text-4xl lg:text-5xl xl:text-[64px]">
//                   {data?.service_countdown[0].total_count}
//                 </h1>
//                 <p className="font-satoshi text-[#101763] text-xs sm:text-sm md:text-base">
//                   {data?.service_countdown[0].title}
//                 </p>
//               </div>
//             </div>
//             <div className="w-full lg:w-[21vw] h-[40vw] sm:h-[30vw]  lg:h-[23vw] xl:h-[19vw] bg-white rounded-[2rem] flex justify-center sm:items-start items-center  sm:justify-between gap-y-3 sm:gap-y-0 flex-col">
//               <div className="m-3 sm:m-5 xl:m-7 pb-2 w-fit border-b-2 border-b-black">
//                 <Image
//                   src={book}
//                   className="w-7 md:w-8 lg:w-10 object-contain"
//                 />
//               </div>
//               <div className="sm:self-end flex items-center justify-center flex-col self-auto mr-0 sm:mr-7 lg:mr-9 xl:mr-11 mb-0 sm:mb-5 md:mb-7 lg:mb-9 w-fit">
//                 <h1 className="font-sora text-[#D81100] font-bold leading-none tracking-tighter text-3xl md:text-4xl lg:text-5xl xl:text-[64px]">
//                   {data?.service_countdown[1].total_count}
//                 </h1>
//                 <p className="font-satoshi text-[#101763] text-xs sm:text-sm md:text-base">
//                   {data?.service_countdown[1].title}
//                 </p>
//               </div>
//             </div>
//             <div className="w-full lg:w-[21vw] h-[40vw] sm:h-[30vw]  lg:h-[23vw] xl:h-[19vw] bg-white rounded-[2rem] flex justify-center sm:items-start items-center  sm:justify-between gap-y-3 sm:gap-y-0 flex-col">
//               <div className="m-3 sm:m-5 xl:m-7 pb-2 w-fit border-b-2 border-b-black">
//                 <Image
//                   src={person}
//                   className="w-7 md:w-8 lg:w-10 object-contain"
//                 />
//               </div>
//               <div className="sm:self-end flex items-center justify-center flex-col self-auto mr-0 sm:mr-7 lg:mr-9 xl:mr-11 mb-0 sm:mb-5 md:mb-7 lg:mb-9 w-fit">
//                 <h1 className="font-sora text-[#D81100] font-bold leading-none tracking-tighter text-3xl md:text-4xl lg:text-5xl xl:text-[64px]">
//                   {data?.service_countdown[2].total_count}
//                 </h1>
//                 <p className="font-satoshi text-[#101763] text-xs sm:text-sm md:text-base">
//                   {data?.service_countdown[2].title}
//                 </p>
//               </div>
//             </div>
//             <div className="w-full lg:w-[21vw] h-[40vw] sm:h-[30vw]  lg:h-[23vw] xl:h-[19vw] bg-white rounded-[2rem] flex justify-center sm:items-start items-center  sm:justify-between gap-y-3 sm:gap-y-0 flex-col">
//               <div className="m-3 sm:m-5 xl:m-7 pb-2 w-fit border-b-2 border-b-black">
//                 <Image
//                   src={store}
//                   className="w-7 md:w-8 lg:w-10 object-contain"
//                 />
//               </div>
//               <div className="sm:self-end flex items-center md:items-end justify-center flex-col self-auto mr-0 sm:mr-7 lg:mr-9 xl:mr-11 mb-0 sm:mb-5 md:mb-7 lg:mb-9 w-fit">
//                 <h1 className="font-sora text-[#D81100]  font-bold leading-none tracking-tighter text-3xl md:text-4xl lg:text-5xl xl:text-[64px]">
//                   {data?.service_countdown[3].total_count}
//                 </h1>
//                 <p className="font-satoshi text-[#101763] sm:px-0 px-2 lg:w-[90%] sm:text-right text-center text-xs sm:text-sm md:text-base">
//                   {data?.service_countdown[3].title}
//                 </p>
//               </div>
//             </div>
//           </div>
//         )}
//         {data?.service_list && (
//           <div className="w-full flex items-start h-fit space-x-0 md:space-x-14 lg:space-x-16 xl:space-x-20 md:space-y-0 space-y-3 justify-center flex-col md:flex-row ">
//             <h1 className="font-sora md:pr-0 pr-0 sm:pr-10 capitalize text-3xl sm:text-4xl md:text-5xl tracking-tighter w-full md:w-2/3 lg:w-1/2 xl:min-w-[510px] leading-tight sm:leading-tight md:leading-tight">
//               {data?.service_list[0].title}
//             </h1>
//             <p
//               dangerouslySetInnerHTML={{
//                 __html: data?.service_list[0].description,
//               }}
//               className="font-satoshi paragraphText-Size w-full md:w-1/2 xl:w-fit"
//             ></p>
//           </div>
//         )}
//         {data?.section_list && (
//           <div className="grid w-full gap-1 sm:gap-3 md:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
//             {data?.section_list.map((section, index) => (
//               <div className="px-6 sm:px-8 md:px-10 py-5 sm:py-8 col-span-1 flex flex-col bg-white  rounded-lg  gap-y-6">
//                 <div className="  flex w-full flex-col space-y-1.5">
//                   <h4 className="font-sora font-semibold text-lg sm:text-2xl md:text-3xl">
//                     {section.title}
//                   </h4>
//                   <p
//                     dangerouslySetInnerHTML={{ __html: section.description }}
//                     className="font-satoshi w-full paragraphText-Size"
//                   ></p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default ServicesInnerSection2;
