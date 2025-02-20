import { MaskText } from "@/util/MaskText";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import MobileServieList from "./MobileServieList";
// import { useRouter } from "next/navigation";
import Link from "next/link";

const ServiceList = ({ data }) => {
  // const router = useRouter();
  return (
    <>
      <div className="relative hidden md:block px-5 sm:px-10 md:px-12 -mt-[85px]  w-screen h-fit bg-white rounded-tr-[30px] rounded-tl-[30px]  overflow-x-hidden sm:pb-14  pb-8">
        <div className="relative  mx-auto w-full">
          <div className="w-full flex items-center     flex-col px-5 ">
            <div className="flex flex-col w-full h-fit py-4 sm:py-12 md:py-14  items-center justify-center    ">
              {data &&
                Object.keys(data)?.map((key, index) => (
                  <div
                    key={index}
                    className={`w-full flex border ${index === 0 ? "border-t-1" : "border-t-0"} border-r-0 border-l-0   sm:space-y-0 space-y-1 group justify-between  items-center h-fit flex-row  border-b border-[#d9d9d9] border-opacity-50 py-7 hover:py-10 transition-all duration-700 text-[#101763] pointer-events-auto space-x-9`}
                  >
                    <div className="relative hidden xl:block   transition-all duration-700 h-fit  lg:h-40   w-[383px] object-cover object-center sm:object-contain">
                      <Image
                        src={data[key]?.home_page_image}
                        className="rounded-[10px] group-hover:scale-y-110 sm:object-cover object-cover  transition-all duration-700 "
                        fill={true}
                        sizes="100vw"
                        alt={data[key]?.post_title}
                      />
                    </div>

                    <div className="flex flex-col space-y-3 justify-center group-hover:space-y-4 lg:max-w-[600px]  xl:max-w-[700px] ">
                      <div className="relative inline-block group space-y-2">
                        <MaskText
                          text={data[key]?.post_title}
                          styling="capitalise font-sora transition-all duration-700 text-xl text-black md:text-2xl lg:text-3xl font-normal leading-[140%] group-hover:text-[2xl] md:group-hover:text-[3xl] lg:group-hover:text-4xl group-hover:font-bold group-hover:text-[#101763]"
                        />
                      </div>

                      <MaskText
                        text={data[key]?.home_page_short_description}
                        className="font-satoshi line-clamp-2 sm:text-left  paragraphText-Size text-base md:group-hover:text-lg lg:group-hover:text-xl w-[250px] sm:w-full "
                      />
                      <p
                        dangerouslySetInnerHTML={{
                          __html: data[key]?.short_description,
                        }}
                        className="text-[#808080] font-satoshi text-base font-normal leading-[154%] 
             opacity-0 max-h-0 overflow-hidden transition-all duration-700 ease-in-out 
             group-hover:max-h-[200px] group-hover:opacity-100"
                      ></p>
                    </div>

                    <div className="w-[50px]  pl-5 sm:w-fit h-fit relative flex group-hover:my-5 my-0 sm:my-0   transition-all duration-700 ">
                      <Link
                        href={`/service/${data[key]?.post_name}`}
                        // onClick={() =>
                        //   router.push(`/service/${data[key]?.post_name}`)
                        // }
                        className="cursor-pointer px-2 py-2 sm:px-3 sm:py-3 md:px-5 md:py-5 border border-[#101764] rounded-[8px]  lg:rounded-[6px]  transition-all duration-700 sm:bottom-auto  bg-white group-hover:border-none group-hover:text-white text-sm  group-hover:bg-[#D81100] flex items-center justify-center"
                      >
                        <ArrowUpRight />
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>

      <div className="md:hidden">
        <MobileServieList data={data} />
      </div>
    </>
  );
};

export default ServiceList;
