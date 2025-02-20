/** @format */

"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import useMediaQuery from "@/util/useMediaQuery";
import { useState } from "react";
import { format, parseISO } from "date-fns";

function WorkSection1({
  data,
  categories,
  termId,
  setTermId,
  workFilter,
  setWorkFilter,
  totalCount,
  setDataLoading,
}) {
  const router = useRouter();
  const isMobile = useMediaQuery("(max-width: 639px)");
  const [visibleCount, setVisibleCount] = useState(6);
  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 6);
  };

  return (
    <div className="relative w-screen h-fit bg-[#F6F6F4] overflow-x-hidden  ">
      <div className="w-full flex items-center pt-5  sm:pt-8 md:pt-14 h-fit flex-col px-5 sm:px-10 md:px-12 ">
        {/* <div className="sm:hidden flex items-end pb-1 self-start my-5 space-x-1.5">
          <div className="w-1.5 h-1.5 mb-0.5 rounded-full bg-[#101763]"></div>
          <span className="font-satoshi  text-base leading-none">Our Work</span>
        </div> */}
        <div className="flex flex-row  whitespace-nowrap h-fit  w-full flex-nowrap overflow-x-scroll sm:overflow-x-hidden sm:flex-wrap  gap-3 gap-y-5 sm:gap-y-6 md:gap-y-11 items-start sm:items-end justify-start  pb-5">
          <div
            onClick={() => {
              if (workFilter !== "Explore All") {
                setDataLoading(true);
                setWorkFilter("Explore All");
              }
            }}
            className={
              workFilter === "Explore All"
                ? `text-[#d81100] hover:text-[#d81100] duration-300 transition-all cursor-pointer font-satoshi  border border-[#c9c9c9] rounded-[30px]  flex items-center justify-center gap-1  px-9 py-2  sm:text-xs md:text-lg leading-[140%] h-[50px]`
                : `text-[#101763] hover:text-[#d81100] duration-300 transition-all  cursor-pointer font-normal  leading-[140%] font-satoshi px-9 py-2 hover:border-[#d81100]   sm:text-xs md:text-lg border border-[#c9c9c9] rounded-[30px]  flex items-center justify-center gap-1 group h-[50px]`
            }
          >
            Explore All
            <span className="font-satoshi text-[#d81100] group-hover:text-[#101763] duration-300 transition-all  cursor-pointer  tracking-normal font-normal text-[8px] sm:text-[12px] mt-3">
              {totalCount}
            </span>
          </div>
          {categories?.map((work, index) => (
            <div
              key={index}
              onClick={() => {
                setDataLoading(true);

                setWorkFilter(work.name);
                setTermId(work.term_id);
              }}
              className={
                workFilter === work.name
                  ? `text-[#d81100] hover:text-[#d81100] duration-300 transition-all cursor-pointer font-satoshi    rounded-[30px]  flex items-center justify-center gap-1  px-9 py-2  sm:text-xs md:text-lg leading-[140%] h-[50px] border border-[#d81100]`
                  : `text-[#101763] hover:text-[#d81100] duration-300 transition-all  cursor-pointer font-normal  leading-[140%] font-satoshi px-9 py-2 hover:border-[#d81100]   sm:text-xs md:text-lg border border-[#c9c9c9] rounded-[30px]  flex items-center justify-center gap-1 group h-[50px]`
              }
            >
              {work.name}{" "}
              <span className="font-satoshi text-[#d81100] group-hover:text-[#101763] duration-300 transition-all  cursor-pointer  tracking-normal font-normal text-[8px] sm:text-[12px] mt-3 ">
                {work.count}
              </span>
            </div>
          ))}
        </div>

        <div className="w-full flex  sm:pt-8 pt-7 md:pt-10 flex-col items-center pb-[71px]">
          <div className=" w-full grid grid-flow-row grid-cols-1 sm:grid-cols-2 gap-y-8 sm:gap-y-14 md:gap-y-20 gap-x-4 md:gap-x-6 lg:gap-x-8  lg:gap-y-24 mb-10 ">
            {workFilter === "Explore All" &&
              data &&
              Object.keys(data)
                ?.slice(0, visibleCount)
                ?.map((key, index) => (
                  <div
                    key={index}
                    onClick={() =>
                      router.push(
                        `/work/${data[key].ID}/${data[key]?.post_name}`
                      )
                    }
                    className={
                      !isMobile &&
                      (index === 0
                        ? `flex w-full flex-col cursor-pointer  group`
                        : index === 1
                          ? `flex w-full flex-col mt-28 cursor-pointer  group`
                          : index % 2 !== 0
                            ? `flex w-full flex-col cursor-pointer  group`
                            : `flex flex-col w-full -mt-28 cursor-pointer  group`)
                    }
                  >
                    <div className="relative overflow-x-hidden">
                      <div className="w-full  h-[350px] sm:h-[280px] relative md:h-[360px] lg:h-[480px] object-cover rounded-[2rem] object-center">
                        {/* <div className=" h-[350px] sm:h-[280px] relative md:h-[360px] lg:h-[480px]  rounded-[2rem] overflow-hidden"> */}
                        <Image
                          src={data[key]?.home_image}
                          fill={true}
                          overrideSrc="/Work/work1.png"
                          // objectFit="cover"
                          className=" object-cover object-center rounded-[2rem]"
                          alt="work"
                          sizes="100vw"
                        />
                      </div>

                      {data[key]?.projects_category?.length && (
                        <div className="absolute group-hover:scale-y-100 -translate-y-12 group-hover:translate-y-0 scale-y-0  transition-all duration-500  -top-2 rounded-bl-2xl -right-2  px-2 space-x-1.5 h-[50px] flex items-center bg-[#F6F6F4]">
                          {" "}
                          {!isMobile &&
                            data[key]?.projects_category?.map(
                              (category, index) =>
                                index < 3 ? (
                                  <button
                                    key={index}
                                    className="font-sora scale-0 group-hover:scale-100 transition-all duration-700 text-[10px] uppercase py-2 px-4 w-fit border border-white bg-white text-[#101763] hover:text-white hover:bg-[#D81100] hover:border-[#D81100]  rounded-3xl"
                                  >
                                    {category.name}
                                  </button>
                                ) : (
                                  index < 4 && (
                                    <button className="font-sora scale-0 group-hover:scale-100 transition-all duration-700 text-[10px] uppercase py-2 px-4 w-fit border border-white bg-white text-[#101763] hover:text-white hover:bg-[#D81100] hover:border-[#D81100]  rounded-3xl">
                                      {isMobile
                                        ? `+ ${
                                            data[key].projects_category.length -
                                            2
                                          } more`
                                        : `+ ${
                                            data[key].projects_category.length -
                                            3
                                          } more`}
                                    </button>
                                  )
                                )
                            )}
                          {isMobile &&
                            data[key]?.projects_category?.map(
                              (category, index) =>
                                index < 2 ? (
                                  <button
                                    key={index}
                                    className="font-sora scale-0 group-hover:scale-100 transition-all duration-700 text-[10px] uppercase py-2 px-4 w-fit border border-white bg-white text-[#101763] hover:text-white hover:bg-[#D81100] hover:border-[#D81100]  rounded-3xl"
                                  >
                                    {category.name}
                                  </button>
                                ) : (
                                  index < 3 && (
                                    <button className="font-sora scale-0 group-hover:scale-100 transition-all duration-700 text-[10px] uppercase py-2 px-4 w-fit border border-white bg-white text-[#101763] hover:text-white hover:bg-[#D81100] hover:border-[#D81100]  rounded-3xl">
                                      {isMobile
                                        ? `+ ${
                                            data[key].projects_category.length -
                                            2
                                          } more`
                                        : `+ ${
                                            data[key].projects_category.length -
                                            2
                                          } more`}
                                    </button>
                                  )
                                )
                            )}
                          {/* <button className="font-sora scale-0 group-hover:scale-100 transition-all duration-700 text-[10px] uppercase py-2 px-4 w-fit border border-white bg-white text-[#101763] hover:text-white hover:bg-[#D81100] hover:border-[#D81100]  rounded-3xl">
                              Ecommerce
                            </button>
                            <button className="font-sora  scale-0 group-hover:scale-100 transition-all duration-700 text-[10px] uppercase py-2 px-4 w-fit border border-white bg-white text-[#101763] hover:text-white hover:bg-[#D81100] hover:border-[#D81100]  rounded-3xl">
                              Website
                            </button>{" "}
                            <button className="font-sora  scale-0 group-hover:scale-100 transition-all duration-700 text-[10px] uppercase py-2 px-4 w-fit border border-white bg-white text-[#101763] hover:text-white hover:bg-[#D81100] hover:border-[#D81100]  rounded-3xl">
                              Website
                            </button> */}
                          <svg
                            id="Layer_1"
                            class="w-10 h-10 text-black fill-[#F6F6F4] absolute -left-[45.5px] top-[7.5px]  z-30 "
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            x="0"
                            y="0"
                            viewBox="0 0 100 100"
                            xmlSpace="preserve"
                          >
                            <path d="M98.1 0h1.9v51.9h-1.9c0-27.6-22.4-50-50-50V0h50z"></path>
                          </svg>
                          <svg
                            id="Layer_1"
                            class="w-10 h-10  text-black fill-[#F6F6F4] absolute right-[7.5px] -bottom-[39.5px]  z-30"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            x="0"
                            y="0"
                            viewBox="0 0 100 100"
                            xmlSpace="preserve"
                          >
                            <path d="M98.1 0h1.9v51.9h-1.9c0-27.6-22.4-50-50-50V0h50z"></path>
                          </svg>
                        </div>
                      )}

                      {/*  */}
                    </div>
                    <div className="flex mt-3 sm:mt-4 md:mt-5 lg:mt-6 mb-1 sm:mb-1.5 md:mb-2 lg:mb-2.5 font-sora pl-1 text-[10px] sm:text-[11px] md:text-xs lg:text-sm w-full items-center space-x-2">
                      <span>
                        {data[key]?.post_date &&
                          format(parseISO(data[key]?.post_date), "yyyy")}
                      </span>
                      <div className="w-1.5 h-1.5 rounded-full  bg-[#D81100]"></div>
                      <span>{data[key].post_title}</span>
                    </div>
                    {data[key]?.home_description && (
                      <div className="font-satoshi mt-2    pl-1 font-medium text-base md:text-xl lg:text-2xl group-hover:text-[#D81100] duration-500 transition-colors text-[#101763]">
                        {data[key].home_description?.split(/[,\.]/, 1)}.
                      </div>
                    )}
                  </div>
                ))}
            {workFilter !== "Explore All" &&
              data &&
              Object.keys(data)
                ?.slice(0, visibleCount)
                ?.map((key, index) => (
                  <div
                    onClick={() => router.push(`/work/${data[key].ID}`)}
                    key={index}
                    className={
                      !isMobile &&
                      (index === 0
                        ? `flex w-full flex-col cursor-pointer  group`
                        : index === 1
                          ? `flex w-full flex-col mt-28 cursor-pointer  group`
                          : index % 2 !== 0
                            ? `flex w-full flex-col cursor-pointer  group`
                            : `flex flex-col w-full -mt-28 cursor-pointer  group`)
                    }
                  >
                    <div className="relative overflow-x-hidden">
                      <div className="w-full  h-[350px] sm:h-[280px] relative md:h-[360px] lg:h-[480px] object-cover rounded-[2rem] object-center">
                        <Image
                          src={data[key].home_image}
                          overrideSrc="/Work/work1.png"
                          fill={true}
                          alt="work image"
                          className="rounded-[2rem] object-cover"
                        />
                      </div>
                      <div className="absolute group-hover:scale-y-100 -translate-y-12 group-hover:translate-y-0 scale-y-0  transition-all duration-500  -top-2 rounded-bl-2xl -right-2  px-2 space-x-1.5 h-[50px] flex items-center bg-[#F6F6F4]">
                        {" "}
                        {!isMobile &&
                          data[key]?.projects_category?.map(
                            (category, index) =>
                              index < 3 ? (
                                <button
                                  key={index}
                                  className="font-sora scale-0 group-hover:scale-100 transition-all duration-700 text-[10px] uppercase py-2 px-4 w-fit border border-white bg-white text-[#101763] hover:text-white hover:bg-[#D81100] hover:border-[#D81100]  rounded-3xl"
                                >
                                  {category.name}
                                </button>
                              ) : (
                                index < 4 && (
                                  <button className="font-sora scale-0 group-hover:scale-100 transition-all duration-700 text-[10px] uppercase py-2 px-4 w-fit border border-white bg-white text-[#101763] hover:text-white hover:bg-[#D81100] hover:border-[#D81100]  rounded-3xl">
                                    {isMobile
                                      ? `+ ${
                                          data[key].projects_category.length - 2
                                        } more`
                                      : `+ ${
                                          data[key].projects_category.length - 2
                                        } more`}
                                  </button>
                                )
                              )
                          )}
                        {isMobile &&
                          data[key]?.projects_category?.map(
                            (category, index) =>
                              index < 2 ? (
                                <button
                                  key={index}
                                  className="font-sora scale-0 group-hover:scale-100 transition-all duration-700 text-[10px] uppercase py-2 px-4 w-fit border border-white bg-white text-[#101763] hover:text-white hover:bg-[#D81100] hover:border-[#D81100]  rounded-3xl"
                                >
                                  {category.name}
                                </button>
                              ) : (
                                index < 3 && (
                                  <button className="font-sora scale-0 group-hover:scale-100 transition-all duration-700 text-[10px] uppercase py-2 px-4 w-fit border border-white bg-white text-[#101763] hover:text-white hover:bg-[#D81100] hover:border-[#D81100]  rounded-3xl">
                                    {isMobile
                                      ? `+ ${
                                          data[key].projects_category.length - 2
                                        } more`
                                      : `+ ${
                                          data[key].projects_category.length - 2
                                        } more`}
                                  </button>
                                )
                              )
                          )}
                        {/* <button className="font-sora scale-0 group-hover:scale-100 transition-all duration-700 text-[10px] uppercase py-2 px-4 w-fit border border-white bg-white text-[#101763] hover:text-white hover:bg-[#D81100] hover:border-[#D81100]  rounded-3xl">
                              Ecommerce
                            </button>
                            <button className="font-sora  scale-0 group-hover:scale-100 transition-all duration-700 text-[10px] uppercase py-2 px-4 w-fit border border-white bg-white text-[#101763] hover:text-white hover:bg-[#D81100] hover:border-[#D81100]  rounded-3xl">
                              Website
                            </button>{" "}
                            <button className="font-sora  scale-0 group-hover:scale-100 transition-all duration-700 text-[10px] uppercase py-2 px-4 w-fit border border-white bg-white text-[#101763] hover:text-white hover:bg-[#D81100] hover:border-[#D81100]  rounded-3xl">
                              Website
                            </button> */}
                        <svg
                          id="Layer_1"
                          class="w-10 h-10 text-black fill-[#F6F6F4] absolute -left-[45.5px] top-[7.5px]  z-30 "
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          x="0"
                          y="0"
                          viewBox="0 0 100 100"
                          xmlSpace="preserve"
                        >
                          <path d="M98.1 0h1.9v51.9h-1.9c0-27.6-22.4-50-50-50V0h50z"></path>
                        </svg>
                        <svg
                          id="Layer_1"
                          class="w-10 h-10  text-black fill-[#F6F6F4] absolute right-[7.5px] -bottom-[39.5px]  z-30"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          x="0"
                          y="0"
                          viewBox="0 0 100 100"
                          xmlSpace="preserve"
                        >
                          <path d="M98.1 0h1.9v51.9h-1.9c0-27.6-22.4-50-50-50V0h50z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="flex mt-3 sm:mt-4 md:mt-5 lg:mt-6 mb-1 sm:mb-1.5 md:mb-2 lg:mb-2.5 font-sora pl-1 text-[10px] sm:text-[11px] md:text-xs lg:text-sm w-full items-center space-x-2">
                      <span>2024</span>
                      <div className="w-1.5 h-1.5 rounded-full bg-[#D81100]"></div>
                      <span>VAO Concept Store</span>
                    </div>
                    <div className="font-satoshi pl-1 font-medium text-base group-hover:text-[#D81100] duration-500 transition-colors  md:text-xl lg:text-2xl text-[#101763]">
                      {data[key].post_title}
                    </div>
                  </div>
                ))}
          </div>
          {data && visibleCount < Object.keys(data).length && (
            <button
              className="h-[71px] rounded-[50px] border border-[#d5d5d5] bg-white font-sora lg:text-sm  text-xs font-semibold leading-[121%] tracking-[-0.56px] capitalize px-[74px] py-[23px] hover:bg-[#d81100] hover:text-white transition-all duration-300  hover:border-[#fff] "
              onClick={loadMore}
            >
              Load More
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default WorkSection1;

// "use client";
// import Image from "next/image";
// import React, { useEffect, useState } from "react";
// import work1 from "../../../../public/Work/work1.png";
// import work2 from "../../../../public/Work/work2.png";
// import work3 from "../../../../public/Work/work3.png";
// import work4 from "../../../../public/Work/work4.png";
// function WorkSection1() {
//   const [workFilter, setWorkFilter] = useState("Explore All");
//   const [names, setWork] = useState([]);
//   const [data, setData] = useState(null);
//   const [categories, setCategories] = useState(null);
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           "https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/projects"
//         ); // Replace with your API endpoint
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         const result = await response.json();
//         setData(result);
//       } catch (error) {
//         console.log("error");
//       }
//     };

//     fetchData();
//   }, []);
//   useEffect(() => {
//     const nameCounts = {};
//     let totalCategoryItems = 0;
//     data &&
//       Object.keys(data).map((key, index) => {
//         totalCategoryItems = Object.keys(data).length;
//         data[key].projects_category.map((cateogry) => {
//           const name = cateogry.name;
//           if (nameCounts[name]) {
//             nameCounts[name]++;
//           } else {
//             nameCounts[name] = 1;
//           }
//         });
//       });
//     const combinedResults = [];
//     console.log(totalCategoryItems);
//     combinedResults.push({ name: "Explore All", count: totalCategoryItems });
//     for (const name in nameCounts) {
//       combinedResults.push({ name: name, count: nameCounts[name] });
//     }
//     setCategories(combinedResults);
//   }, [data]);
//   // useEffect(() => {
//   //   console.log(categories);
//   // }, [categories]);

//   function checkIfWorkFilter(key) {
//     let isTrue = false;
//     data[key].projects_category.map((category, index) => {
//       if (workFilter === category.name) {
//         isTrue = true;
//       }
//     });
//     return isTrue;
//   }

//   return (
//     <div className="relative w-screen h-fit bg-[#F6F6F4] overflow-x-hidden">
//       <div className="w-full flex items-center pt-24 sm:pt-28 md:pt-36 h-fit flex-col px-5 sm:px-10 md:px-12">
//         <div className="sm:hidden flex items-end pb-1 self-start my-5 space-x-1.5">
//           <div className="w-1.5 h-1.5 mb-0.5 rounded-full bg-[#101763]"></div>
//           <span className="font-satoshi  text-base leading-none">Our Work</span>
//         </div>
//         <div className="flex flex-row  whitespace-nowrap w-full flex-nowrap overflow-x-scroll sm:flex-wrap h-fit gap-x-10 sm:gap-x-12 md:gap-x-14 gap-y-5 sm:gap-y-6 md:gap-y-8 items-start sm:items-end justify-start  pb-5">
//           <div className="hidden sm:flex items-end pb-1 space-x-1.5">
//             <div className="w-1.5 h-1.5 mb-0.5 rounded-full bg-[#101763]"></div>
//             <span className="font-satoshi  text-base leading-none">
//               Our Work
//             </span>
//           </div>
//           {/* <div className="text-[#d81100] font-semibold leading-none font-sora tracking-tighter text-2xl sm:text-3xl md:text-4xl">
//             Explore all{" "}
//             <span className="font-satoshi tracking-normal font-normal text-xs">
//               38
//             </span>
//           </div> */}
//           {categories?.map((work, index) => (
//             <div
//               key={index}
//               onClick={() => setWorkFilter(work.name)}
//               className={
//                 workFilter === work.name
//                   ? `text-[#d81100] hover:text-[#d81100] font-semibold  leading-none font-sora tracking-tighter text-2xl sm:text-3xl md:text-4xl`
//                   : `text-[#c8c8c8] hover:text-[#d81100] font-semibold  leading-none font-sora tracking-tighter text-2xl sm:text-3xl md:text-4xl`
//               }
//             >
//               {work.name}{" "}
//               <span className="font-satoshi tracking-normal font-normal text-[10px] sm:text-xs">
//                 {work.count}
//               </span>
//             </div>
//           ))}
//         </div>

//         <div className="w-full flex  sm:py-14 py-12 md:py-16 flex-row">
//           <div className=" w-full grid grid-flow-row grid-cols-2 gap-y-14 md:gap-y-20 gap-x-4 md:gap-x-6 lg:gap-x-8  lg:gap-y-24">
//             {workFilter === "Explore All" &&
//               data &&
//               Object.keys(data).map((key, index) => (
//                 <div
//                   key={index}
//                   className={
//                     index === 0
//                       ? `flex w-full flex-col `
//                       : index === 1
//                       ? `flex w-full flex-col mt-28`
//                       : index % 2 !== 0
//                       ? `flex w-full flex-col `
//                       : `flex flex-col w-full -mt-28`
//                   }
//                 >
//                   <div className="relative group overflow-x-hidden">
//                     <div className="w-full  h-[350px] sm:h-[280px] relative md:h-[360px] lg:h-[480px] object-cover rounded-[2rem] object-center">
//                       <Image
//                         src={data[key].home_image}
//                         fill={true}
//                         objectFit="cover"
//                         className="rounded-[2rem] object-center"
//                       />
//                     </div>
//                     <div className="absolute group-hover:scale-y-100 -translate-y-12 group-hover:translate-y-0 scale-y-0  transition-all duration-500  -top-2 rounded-bl-2xl -right-2  px-2 space-x-1.5 h-[50px] flex items-center bg-[#F6F6F4]">
//                       {" "}
//                       {data[key].projects_category.map((category, index) =>
//                         index < 3 ? (
//                           <button
//                             key={index}
//                             className="font-sora scale-0 group-hover:scale-100 transition-all duration-700 text-[10px] uppercase py-2 px-4 w-fit border border-white bg-white text-[#101763] hover:text-white hover:bg-[#D81100] hover:border-[#D81100]  rounded-3xl"
//                           >
//                             {category.name}
//                           </button>
//                         ) : (
//                           index < 4 && (
//                             <button className="font-sora scale-0 group-hover:scale-100 transition-all duration-700 text-[10px] uppercase py-2 px-4 w-fit border border-white bg-white text-[#101763] hover:text-white hover:bg-[#D81100] hover:border-[#D81100]  rounded-3xl">
//                               + {data[key].projects_category.length - 3} more
//                             </button>
//                           )
//                         )
//                       )}
//                       {/* <button className="font-sora scale-0 group-hover:scale-100 transition-all duration-700 text-[10px] uppercase py-2 px-4 w-fit border border-white bg-white text-[#101763] hover:text-white hover:bg-[#D81100] hover:border-[#D81100]  rounded-3xl">
//                               Ecommerce
//                             </button>
//                             <button className="font-sora  scale-0 group-hover:scale-100 transition-all duration-700 text-[10px] uppercase py-2 px-4 w-fit border border-white bg-white text-[#101763] hover:text-white hover:bg-[#D81100] hover:border-[#D81100]  rounded-3xl">
//                               Website
//                             </button>{" "}
//                             <button className="font-sora  scale-0 group-hover:scale-100 transition-all duration-700 text-[10px] uppercase py-2 px-4 w-fit border border-white bg-white text-[#101763] hover:text-white hover:bg-[#D81100] hover:border-[#D81100]  rounded-3xl">
//                               Website
//                             </button> */}
//                       <svg
//                         id="Layer_1"
//                         class="w-10 h-10 text-black fill-[#F6F6F4] absolute -left-[45.5px] top-[7.5px]  z-30 "
//                         version="1.1"
//                         xmlns="http://www.w3.org/2000/svg"
//                         x="0"
//                         y="0"
//                         viewBox="0 0 100 100"
//                         xmlSpace="preserve"
//                       >
//                         <path d="M98.1 0h1.9v51.9h-1.9c0-27.6-22.4-50-50-50V0h50z"></path>
//                       </svg>
//                       <svg
//                         id="Layer_1"
//                         class="w-10 h-10  text-black fill-[#F6F6F4] absolute right-[7.5px] -bottom-[39.5px]  z-30"
//                         version="1.1"
//                         xmlns="http://www.w3.org/2000/svg"
//                         x="0"
//                         y="0"
//                         viewBox="0 0 100 100"
//                         xmlSpace="preserve"
//                       >
//                         <path d="M98.1 0h1.9v51.9h-1.9c0-27.6-22.4-50-50-50V0h50z"></path>
//                       </svg>
//                     </div>
//                   </div>
//                   <div className="flex mt-3 sm:mt-4 md:mt-5 lg:mt-6 mb-1 sm:mb-1.5 md:mb-2 lg:mb-2.5 font-sora pl-1 text-[10px] sm:text-[11px] md:text-xs lg:text-sm w-full items-center space-x-2">
//                     <span>2024</span>
//                     <div className="w-1.5 h-1.5 rounded-full bg-[#D81100]"></div>
//                     <span>VAO Concept Store</span>
//                   </div>
//                   <div className="font-satoshi pl-1 font-medium text-base md:text-xl lg:text-2xl text-[#101763]">
//                     {data[key].post_title}
//                   </div>
//                 </div>
//               ))}
//             {workFilter !== "Explore All" &&
//               data &&
//               Object.keys(data).map(
//                 (key, index) =>
//                   checkIfWorkFilter(key) && (
//                     <div
//                       key={index}
//                       className={
//                         index === 0
//                           ? `flex w-full flex-col `
//                           : index === 1
//                           ? `flex w-full flex-col mt-28`
//                           : index % 2 !== 0
//                           ? `flex w-full flex-col `
//                           : `flex flex-col w-full -mt-28`
//                       }
//                     >
//                       <div className="relative group overflow-x-hidden">
//                         <div className="w-full  h-[350px] sm:h-[280px] relative md:h-[360px] lg:h-[480px] object-cover rounded-[2rem] object-center">
//                           <Image
//                             src={data[key].home_image}
//                             fill={true}
//                             objectFit="cover"
//                             className="rounded-[2rem] object-center"
//                           />
//                         </div>
//                         <div className="absolute group-hover:scale-y-100 -translate-y-12 group-hover:translate-y-0 scale-y-0  transition-all duration-500  -top-2 rounded-bl-2xl -right-2  px-2 space-x-1.5 h-[50px] flex items-center bg-[#F6F6F4]">
//                           {" "}
//                           {data[key].projects_category.map((category, index) =>
//                             index < 3 ? (
//                               <button
//                                 key={index}
//                                 className="font-sora scale-0 group-hover:scale-100 transition-all duration-700 text-[10px] uppercase py-2 px-4 w-fit border border-white bg-white text-[#101763] hover:text-white hover:bg-[#D81100] hover:border-[#D81100]  rounded-3xl"
//                               >
//                                 {category.name}
//                               </button>
//                             ) : (
//                               index < 4 && (
//                                 <button className="font-sora scale-0 group-hover:scale-100 transition-all duration-700 text-[10px] uppercase py-2 px-4 w-fit border border-white bg-white text-[#101763] hover:text-white hover:bg-[#D81100] hover:border-[#D81100]  rounded-3xl">
//                                   + {data[key].projects_category.length - 3}{" "}
//                                   more
//                                 </button>
//                               )
//                             )
//                           )}
//                           {/* <button className="font-sora scale-0 group-hover:scale-100 transition-all duration-700 text-[10px] uppercase py-2 px-4 w-fit border border-white bg-white text-[#101763] hover:text-white hover:bg-[#D81100] hover:border-[#D81100]  rounded-3xl">
//                                               Ecommerce
//                                             </button>
//                                             <button className="font-sora  scale-0 group-hover:scale-100 transition-all duration-700 text-[10px] uppercase py-2 px-4 w-fit border border-white bg-white text-[#101763] hover:text-white hover:bg-[#D81100] hover:border-[#D81100]  rounded-3xl">
//                                               Website
//                                             </button>{" "}
//                                             <button className="font-sora  scale-0 group-hover:scale-100 transition-all duration-700 text-[10px] uppercase py-2 px-4 w-fit border border-white bg-white text-[#101763] hover:text-white hover:bg-[#D81100] hover:border-[#D81100]  rounded-3xl">
//                                               Website
//                                             </button> */}
//                           <svg
//                             id="Layer_1"
//                             class="w-10 h-10 text-black fill-[#F6F6F4] absolute -left-[45.5px] top-[7.5px]  z-30 "
//                             version="1.1"
//                             xmlns="http://www.w3.org/2000/svg"
//                             x="0"
//                             y="0"
//                             viewBox="0 0 100 100"
//                             xmlSpace="preserve"
//                           >
//                             <path d="M98.1 0h1.9v51.9h-1.9c0-27.6-22.4-50-50-50V0h50z"></path>
//                           </svg>
//                           <svg
//                             id="Layer_1"
//                             class="w-10 h-10  text-black fill-[#F6F6F4] absolute right-[7.5px] -bottom-[39.5px]  z-30"
//                             version="1.1"
//                             xmlns="http://www.w3.org/2000/svg"
//                             x="0"
//                             y="0"
//                             viewBox="0 0 100 100"
//                             xmlSpace="preserve"
//                           >
//                             <path d="M98.1 0h1.9v51.9h-1.9c0-27.6-22.4-50-50-50V0h50z"></path>
//                           </svg>
//                         </div>
//                       </div>
//                       <div className="flex mt-3 sm:mt-4 md:mt-5 lg:mt-6 mb-1 sm:mb-1.5 md:mb-2 lg:mb-2.5 font-sora pl-1 text-[10px] sm:text-[11px] md:text-xs lg:text-sm w-full items-center space-x-2">
//                         <span>2024</span>
//                         <div className="w-1.5 h-1.5 rounded-full bg-[#D81100]"></div>
//                         <span>VAO Concept Store</span>
//                       </div>
//                       <div className="font-satoshi pl-1 font-medium text-base md:text-xl lg:text-2xl text-[#101763]">
//                         {data[key].post_title}
//                       </div>
//                     </div>
//                   )
//               )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default WorkSection1;
