/** @format */
"use client";
import Image from "next/image";
import React from "react";
import arrow_link from "../../../../public/arrow_outward.svg";
import { format, parseISO } from "date-fns";

function WorkInnerSection1({ data }) {
  return (
    <div className="relative w-screen h-fit bg-[#F6F6F4] overflow-x-hidden">
      <div className="w-full space-y-12 sm:space-y-14 md:space-y-16 flex items-center pt-24 sm:pt-28 pb-20 md:pt-36 h-fit flex-col px-5 sm:px-10 md:px-12">
        <div className="flex items-start xl:space-y-0 space-y-4 xl:items-end xl:flex-row flex-col justify-between w-full">
          <div className="flex font-sora pl-1 text-sm items-center space-x-2">
            <span>
              {data?.post_date && format(parseISO(data?.post_date), "yyyy")}
            </span>
            <div className="w-1.5 h-1.5 rounded-full bg-[#D81100]"></div>
            <span className="hidden">{data?.post_title}</span>
          </div>
          <h1 className="capitalize font-sora tracking-tighter  xl:py-0 py-3 leading-tight text-[#101763] text-3xl sm:text-4xl md:text-5xl">
            {data?.home_title ? data?.home_title : data?.post_title}
          </h1>
          <div className="flex flex-row w-full xl:w-fit justify-between">
            {data?.duration && (
              <div className="flex flex-col space-y-2">
                <p className="font-satoshi text-[#101763]">Duration</p>
                <p className="font-semibold font-satoshi text-[#D81100] text-lg">
                  {data?.duration}
                </p>
              </div>
            )}

            {data?.live_website && (
              <div
                onClick={() => router.push(`${data?.live_website}`)}
                className="xl:hidden group flex flex-row cursor-pointer space-x-2 items-center py-2 border-b border-b-[#101763]"
              >
                <p className="font-satoshi text-[#101763]">Live Website</p>
                <Image
                  src={arrow_link}
                  className="w-2 group-hover:rotate-45 object-contain"
                  alt="arrow_link"
                />
              </div>
            )}
          </div>
          {data?.projects_category && (
            <div className="flex flex-col space-y-2">
              <p className="font-satoshi text-[#101763]">Expertise</p>
              <div className="h-fit gap-1 w-fit max-w-[380px]  flex flex-wrap items-center  ">
                {data?.projects_category.map((category, index) => (
                  <button
                    key={index}
                    className="font-sora text-[10px]  transition-colors duration-500  py-2 px-4 w-fit   bg-[#E1E1E1] text-[#101763] rounded-3xl"
                  >
                    {category.name}
                  </button>
                ))}{" "}
              </div>
            </div>
          )}
          {data?.live_website && (
            <div
              onClick={() => router.push(`${data?.live_website}`)}
              className="hidden group cursor-pointer xl:flex flex-row space-x-2 items-center py-2 border-b border-b-[#101763]"
            >
              <p className="font-satoshi text-[#101763]">Live Website</p>
              <Image
                src={arrow_link}
                className="w-2 group-hover:rotate-45 transition-all duration-300 object-contain"
                alt="arrow_link"
              />
            </div>
          )}
        </div>
        <Image
          src={data?.banner_image}
          overrideSrc="/Work/work1.png"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }} // optional
          className="rounded-[2rem] bg-transparent"
          alt="workInner1"
        />
        {/* <div className="w-full object-cover relative object-center h-[80vw] sm:h-[80vh] rounded-[2rem]">
          <Image
            src={data?.banner_image}
            fill={true}
            objectFit="cover"
            overrideSrc="/Work/work1.png"
            className="rounded-[2rem] obje"
          />
        </div> */}

        {data?.home_description && (
          <div className="flex w-full">
            <h6
              dangerouslySetInnerHTML={{ __html: data?.home_description }}
              className="text-[#101763] w-full sm:w-[85%] font-satoshi font-medium text-xl sm:text-2xl md:text-3xl"
            >
              {/* <span className="text-[#D81100] font-semibold">
            VAO Concept Store
          </span>{" "}
          is a luxury online fashion shopping portal in the uae, providing
          high end designer brands for men and women */}
            </h6>
          </div>
        )}

        <div className="relative w-full flex flex-col gap-y-5">
          {data?.screenshot_list && (
            <div className="w-full grid-cols-3 grid-flow-row gap-5 h-fit grid">
              {data?.screenshot_list.map((img, index) =>
                img.image_type === "Half" ? (
                  <Image
                    src={img.image}
                    overrideSrc="/Work/work1.png"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }} // optional
                    className="rounded-[2rem] col-span-2 bg-transparent"
                    alt="workInner1"
                  />
                ) : img.image_type === "Quarter" ? (
                  <div className="h-full col-span-1 w-full relative">
                    <Image
                      src={img.image}
                      fill={true}
                      className="rounded-[2rem] h-full w-full object-cover"
                      alt="workInner1"
                    />
                  </div>
                ) : (
                  img.image_type === "Full" && (
                    <Image
                      src={img.image}
                      overrideSrc="/Work/work1.png"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }} // optional
                      className="rounded-[2rem] col-span-3"
                      alt="workInner1"
                    />
                  )
                )
              )}
            </div>
          )}
          {data?.screenshot_list && (
            <div className="w-full grid-cols-2 grid-flow-row gap-5 h-fit grid">
              {data?.screenshot_list.map(
                (img, index) =>
                  img.image_type === "Half-1" && (
                    <Image
                      src={img.image}
                      overrideSrc="/Work/work1.png"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }} // optional
                      className="rounded-[2rem] col-span-1 bg-transparent"
                      alt="workInner1"
                    />
                  )
              )}
            </div>
          )}
        </div>
        {/* {data?.challenge && (
        <div className="flex flex-col md:space-y-0 space-y-3 md:flex-row w-full justify-between text-[#101763]">
          <h5 className="font-sora font-semibold text-3xl sm:text-4xl md:text-5xl">
            Challenge
          </h5>
          <p
            dangerouslySetInnerHTML={{ __html: data?.challenge }}
            className="font-satoshi paragraphText-Size w-full md:w-1/2 lg:w-[65%]"
          ></p>
        </div>
      )} */}
        {/* {data?.section_list?.map((section, index) => (
        <>
          <div className="flex flex-col md:space-y-0 space-y-3 md:flex-row w-full justify-between text-[#101763]">
            <h5 className="font-sora font-semibold text-3xl sm:text-4xl md:text-5xl">
              {section?.title}
            </h5>
            <p
              dangerouslySetInnerHTML={{ __html: section?.description }}
              className="font-satoshi paragraphText-Size w-full md:w-1/2 lg:w-[65%]"
            ></p>
          </div>
          {section?.images && (
            <div className="w-full grid-cols-3 grid-flow-row gap-5 h-fit grid">
              {(section.images.length === 2 || section.images.length === 4) &&
                section.images.map((img, index) =>
                  index === 0 || index === 3 ? (
                    <div className="h-[530px] bg-white rounded-[2rem] col-span-2 w-full relative">
                      <Image
                        src={img.url}
                        fill={true}
                        objectFit="cover"
                        className="rounded-[2rem] h-full w-full scale-[.85] object-contain"
                      />
                    </div>
                  ) : (
                    <div className="h-[530px] col-span-1 w-full relative">
                      <Image
                        src={img.url}
                        fill={true}
                        objectFit="cover"
                        className="rounded-[2rem] h-full w-full object-cover"
                      />
                    </div>
                  )
                )}
              {section.images.length === 1 &&
                section.images.map((img, index) => (
                  <div className="h-[600px] bg-white rounded-[2rem] col-span-3 w-full relative">
                    <Image
                      src={img.url}
                      fill={true}
                      objectFit="cover"
                      className="rounded-[2rem] h-full w-full scale-[.85] object-contain"
                    />
                  </div>
                ))}

              {section.images.length === 3 &&
                section.images.map((img, index) =>
                  index === 0 ? (
                    <div className="h-[530px] bg-white rounded-[2rem] col-span-2 w-full relative">
                      <Image
                        src={img.url}
                        fill={true}
                        objectFit="cover"
                        className="rounded-[2rem] h-full w-full scale-[.85] object-contain"
                      />
                    </div>
                  ) : index === 1 ? (
                    <div className="h-[530px] col-span-1 w-full relative">
                      <Image
                        src={img.url}
                        fill={true}
                        objectFit="cover"
                        className="rounded-[2rem] h-full w-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="h-[600px] bg-white rounded-[2rem] col-span-3 w-full relative">
                      <Image
                        src={img.url}
                        fill={true}
                        objectFit="cover"
                        className="rounded-[2rem] h-full w-full scale-[.85] object-contain"
                      />
                    </div>
                  )
                )}
            </div>
          )}
        </>
      ))} */}
        {data?.section_list?.map((section, index) => (
          <>
            <div className="flex flex-col md:space-y-0 space-y-3 md:flex-row w-full justify-between text-[#101763]">
              <h5 className="font-sora font-semibold text-3xl sm:text-4xl md:text-5xl">
                {section?.title}
              </h5>
              <p
                dangerouslySetInnerHTML={{ __html: section?.description }}
                className="font-satoshi paragraphText-Size w-full md:w-1/2 lg:w-[65%]"
              ></p>
            </div>
            <div className="relative w-full flex flex-col gap-y-5">
              {section?.images && (
                <div className="w-full grid-cols-3 grid-flow-row gap-5 h-fit grid">
                  {section.images.map((img, index) =>
                    img.image_type === "Half" ? (
                      <Image
                        src={img.image}
                        overrideSrc="/Work/work1.png"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "auto" }} // optional
                        className="rounded-[2rem] col-span-2 bg-transparent"
                        alt="workInner1"
                      />
                    ) : img.image_type === "Quarter" ? (
                      <div className="h-full col-span-1 w-full relative">
                        <Image
                          src={img.image}
                          fill={true}
                          className="rounded-[2rem] h-full w-full object-cover"
                          alt="workInner1"
                        />
                      </div>
                    ) : (
                      img.image_type === "Full" && (
                        <Image
                          src={img.image}
                          overrideSrc="/Work/work1.png"
                          width={0}
                          height={0}
                          sizes="100vw"
                          style={{ width: "100%", height: "auto" }} // optional
                          className="rounded-[2rem] col-span-3"
                          alt="workInner1"
                        />
                      )
                    )
                  )}
                  {/* {section.images.length === 1 &&
                section.images.map((img, index) => (
                  <div className="h-[600px] bg-white rounded-[2rem] col-span-3 w-full relative">
                    <Image
                      src={img.url}
                      fill={true}
                      objectFit="cover"
                      className="rounded-[2rem] h-full w-full scale-[.85] object-contain"
                    />
                  </div>
                ))}

              {section.images.length === 3 &&
                section.images.map((img, index) =>
                  index === 0 ? (
                    <div className="h-[530px] bg-white rounded-[2rem] col-span-2 w-full relative">
                      <Image
                        src={img.url}
                        fill={true}
                        objectFit="cover"
                        className="rounded-[2rem] h-full w-full scale-[.85] object-contain"
                      />
                    </div>
                  ) : index === 1 ? (
                    <div className="h-[530px] col-span-1 w-full relative">
                      <Image
                        src={img.url}
                        fill={true}
                        objectFit="cover"
                        className="rounded-[2rem] h-full w-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="h-[600px] bg-white rounded-[2rem] col-span-3 w-full relative">
                      <Image
                        src={img.url}
                        fill={true}
                        objectFit="cover"
                        className="rounded-[2rem] h-full w-full scale-[.85] object-contain"
                      />
                    </div>
                  )
                )} */}
                </div>
              )}
              {section?.images && (
                <div className="w-full grid-cols-2 grid-flow-row gap-5 h-fit grid">
                  {section.images.map(
                    (img, index) =>
                      img.image_type === "Half-1" && (
                        <Image
                          src={img.image}
                          overrideSrc="/Work/work1.png"
                          width={0}
                          height={0}
                          sizes="100vw"
                          style={{ width: "100%", height: "auto" }} // optional
                          className="rounded-[2rem] col-span-1 bg-transparent"
                          alt="workInner1"
                        />
                      )
                  )}
                </div>
              )}
            </div>
          </>
        ))}
        {/* <div className="w-full h-[80vh] relative object-cover">
        <Image
          src={data?.screenshot_list[0]?.image}
          className=" rounded-[2rem]"
          fill={true}
          objectFit="cover"
        />
      </div> */}
        {/* {data?.screenshot_list && data?.screenshot_list[1]?.image && (
        <div className="w-full object-cover relative object-center h-[80vw] sm:h-[80vh] rounded-[2rem]">
          <Image
            src={data?.screenshot_list[1]?.image}
            fill={true}
            objectFit="cover"
            className="rounded-[2rem]"
          />
        </div>
      )}
      {data?.solution && (
        <div className="flex flex-col md:space-y-0 space-y-3 md:flex-row w-full justify-between text-[#101763]">
          <h5 className="font-sora font-semibold text-3xl sm:text-4xl md:text-5xl">
            Solution
          </h5>
          <div className="font-satoshi flex flex-col space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10  paragraphText-Size w-full md:w-1/2 lg:w-[65%]">
            <p dangerouslySetInnerHTML={{ __html: data?.solution }}></p>
          </div>
        </div>
      )}z
      {data?.screenshot_list && data?.screenshot_list[2]?.image && (
        <div className="w-full object-cover relative object-center h-[80vw] sm:h-[80vh] rounded-[2rem]">
          <Image
            src={data?.screenshot_list[2]?.image}
            fill={true}
            objectFit="cover"
            className="rounded-[2rem]"
          />
        </div>
      )}
      {data?.solution && (
        <div className="flex flex-col md:space-y-0 space-y-3 md:flex-row w-full justify-between text-[#101763]">
          <h5 className="font-sora font-semibold text-3xl sm:text-4xl md:text-5xl">
            Solution
          </h5>
          <div className="font-satoshi flex flex-col space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10  paragraphText-Size w-full md:w-1/2 lg:w-[65%]">
            <p dangerouslySetInnerHTML={{ __html: data?.solution }}></p>
          </div>
        </div>
      )}

      {data?.screenshot_list && data?.screenshot_list[3]?.image && (
        <div className="w-full object-cover relative object-center h-[80vw] sm:h-[80vh] rounded-[2rem]">
          <Image
            src={data?.screenshot_list[3]?.image}
            fill={true}
            objectFit="cover"
            className="rounded-[2rem]"
          />
        </div>
      )}
      {data?.solution && (
        <div className="flex flex-col md:space-y-0 space-y-3 md:flex-row w-full justify-between text-[#101763]">
          <h5 className="font-sora font-semibold text-3xl sm:text-4xl md:text-5xl">
            Solution
          </h5>
          <div className="font-satoshi flex flex-col space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10  paragraphText-Size w-full md:w-1/2 lg:w-[65%]">
            <p dangerouslySetInnerHTML={{ __html: data?.solution }}></p>
          </div>
        </div>
      )}
      {data?.screenshot_list &&
        data?.screenshot_list.map(
          (img, index) =>
            index > 3 && (
              <div className="w-full object-cover relative object-center h-[80vw] sm:h-[80vh] rounded-[2rem]">
                <Image
                  src={img.image}
                  fill={true}
                  objectFit="cover"
                  className="rounded-[2rem]"
                />
              </div>
            )
        )} */}
      </div>
    </div>
  );
}

export default WorkInnerSection1;
