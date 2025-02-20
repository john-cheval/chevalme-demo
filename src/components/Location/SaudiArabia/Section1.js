/** @format */

import React from "react";
import image from "../../../../public/Rectangle 140.png";
import Image from "next/image";
import mall from "../../../../public/local_mall.svg";
import shipping from "../../../../public/local_shipping.svg";
import cast from "../../../../public/cast_for_education.svg";
import cinematic from "../../../../public/cinematic_blur.svg";
import shuttle from "../../../../public/airport_shuttle.svg";
import belt from "../../../../public/conveyor_belt.svg";
import balance from "../../../../public/account_balance.svg";
import agent from "../../../../public/real_estate_agent.svg";
import fastfood from "../../../../public/fastfood.svg";
import alert from "../../../../public/pulse_alert.svg";
import mitre from "../../../../public/mitre.svg";
import history from "../../../../public/manage_history.svg";
import acute from "../../../../public/acute.svg";
import card from "../../../../public/credit_card.svg";

import arrow from "../../../../public/arrow_circle_right (4).svg";

import image1 from "../../../../public/saudi/1.png";
import image2 from "../../../../public/saudi/2.jpeg";
import image3 from "../../../../public/saudi/3.jpeg";
import image4 from "../../../../public/saudi/4.png";
import image5 from "../../../../public/saudi/5.png";
import image6 from "../../../../public/saudi/6.png";
import image7 from "../../../../public/saudi/7.png";
import image8 from "../../../../public/saudi/8.png";
import image9 from "../../../../public/saudi/9.jpeg";
import image10 from "../../../../public/saudi/10.jpeg";
import Link from "next/link";
function Section1() {
  return (
    <>
      <div className="relative w-screen h-fit  space-y-12 pt-24 sm:pt-28 md:pt-36 pb-20 sm:space-y-14 md:space-y-16 flex items-center flex-col bg-white overflow-x-hidden">
        <div className="w-full h-fit  px-5 sm:px-10 md:px-12">
          <div className="flex items-start xl:space-y-0 space-y-4 xl:items-center xl:flex-row flex-col justify-between w-full">
            <div className="flex flex-col space-y-4 w-fit max-w-[760px]">
              <h1 className="capitalize font-sora font-bold  md:leading-tight sm:leading-tight leading-tight   text-[#101763] text-3xl sm:text-4xl md:text-5xl">
                Web Development Company In{" "}
                <span className="underline decoration-2 underline-offset-8">
                  Saudi Arabia
                </span>
              </h1>
              {/* <p className="font-satoshi  text-black paragraphText-Size">
                Cheval ME is a leading Web Development Company in Riyadh,
                offering innovative and professional website solutions to
                businesses of all sizes.
              </p> */}
            </div>
            <Link href={"/contact-us"}>
              <div className="flex items-center justify-between py-3 space-x-5 rounded-[50px] sm:w-fit w-full  px-8 border border-[#EE2525] bg-[#EE2525] text-white   font-sora text-center font-semibold text-base ">
                <span className="">Get started with us today! </span>
                <svg
                  className="w-4 object-contain"
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.671646 7.29248L0.0625 6.68333L5.80279 0.9375H0.584146V0.0625H7.29248V6.77083H6.41748V1.55219L0.671646 7.29248Z"
                    fill="#fff"
                  />
                </svg>
              </div>
            </Link>
          </div>
        </div>
        <div className="w-full h-fit px-5 sm:px-10 md:px-12">
          <div className=" w-full relative">
            <Image
              src={image1}
              className="h-fit  w-full object-contain object-center"
            />
          </div>
        </div>
        <div className="w-full   h-fit  px-5 sm:px-10 md:px-12">
          <p className="font-satoshi max-w-[1150px] text-[#101763] paragraphText-Size">
            At <span className="text-[#FF0C15]">Cheval</span>, we understand the
            significance of a well-designed website. As a leading Web Design
            Agency in Saudi Arabia, we strive to create visually appealing and
            user-friendly websites that leave a lasting impression. Our skilled
            designers and developers work tirelessly to ensure our client's
            online presence is professional and engaging. Trust us to elevate
            your brand and drive success in the digital world. We create
            exceptional online experiences by blending artistic flair with
            advanced technology, reflecting your brand's identity and captivate
            audiences.
          </p>
        </div>
        <div className="w-full h-fit px-5 sm:px-10 md:px-12">
          <h3
            style={{
              background:
                "linear-gradient(92.09deg, #FF0C15 0.33%, #000000 26.13%)",

              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "transparent",
            }}
            className="font-sora font-semibold text-[#101763] text-3xl max-w-[645px] leading-normal "
          >
            Types of Web Development Services We are Providing in Saudi Arabia
          </h3>
          <div className="w-full grid grid-cols-3 grid-flow-row gap-y-10 mt-10">
            <div className="h-[1px] col-span-3 w-full bg-[#C5C5C5] "></div>
            <div className="flex relative flex-col  col-span-1 border-r border-[#c5c5c5] w-full h-full justify-between">
              <div className="h-full relative flex">
                <Link href={"/projects"}>
                  <div className="flex absolute top-0 left-0 bg-[#F2F4F9]  mx-8 items-center justify-between py-2.5 text-[#27172F] space-x-2 rounded-[50px] sm:w-fit w-full z-20  px-4    font-sora text-center text-sm ">
                    <span className="">Projects </span>
                    <svg
                      className="w-3.5 object-contain"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.671646 7.29248L0.0625 6.68333L5.80279 0.9375H0.584146V0.0625H7.29248V6.77083H6.41748V1.55219L0.671646 7.29248Z"
                        fill="#27172F"
                      />
                    </svg>
                  </div>
                </Link>
                <div className="flex w-full h-full  flex-col py-8 justify-start px-10">
                  <div className="font-sora w-fit pt-10  font-semibold text-[#101763] text-3xl">
                    <h3 className="mb-4  line-clamp-2">
                      Responsive web design
                    </h3>
                    <div className="h-[1px] w-16 bg-black"></div>
                  </div>
                  <div className="flex flex-col space-y-5 pt-10">
                    <p className="font-satoshi w-full paragraphText-Size text-black">
                      We specialize in creating optimized websites for all
                      devices, ensuring a seamless user experience across
                      desktops, tablets, and mobile phones.
                    </p>
                    {/* <div className="flex items-center justify-between py-3 text-white space-x-3.5 rounded-[50px] sm:w-fit w-full  px-5 border border-white  bg-[#101763]  font-sora text-center text-sm ">
                      <span className="">Read more</span>
                      <svg
                        className="w-3 rotate-45 object-contain"
                        viewBox="0 0 8 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.671646 7.29248L0.0625 6.68333L5.80279 0.9375H0.584146V0.0625H7.29248V6.77083H6.41748V1.55219L0.671646 7.29248Z"
                          fill="#fff"
                        />
                      </svg>
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="px-5 w-full">
                <Image
                  src={image10}
                  className="w-full h-[180px] rounded-lg  object-cover object-center"
                />
              </div>
            </div>
            <div className="flex relative flex-col col-span-1  border-r border-[#c5c5c5] w-full h-full justify-between">
              <div className="h-full relative flex">
                <Link href={"/projects"}>
                  <div className="flex absolute top-0 left-0 bg-[#F2F4F9]  mx-8 items-center justify-between py-2.5 text-[#27172F] space-x-2 rounded-[50px] sm:w-fit w-full z-20  px-4    font-sora text-center text-sm ">
                    <span className="">Projects </span>
                    <svg
                      className="w-3.5 object-contain"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.671646 7.29248L0.0625 6.68333L5.80279 0.9375H0.584146V0.0625H7.29248V6.77083H6.41748V1.55219L0.671646 7.29248Z"
                        fill="#27172F"
                      />
                    </svg>
                  </div>
                </Link>
                <div className="flex w-full h-full  flex-col py-8 justify-start px-10">
                  <div className="font-sora w-fit pt-10  font-semibold text-[#101763] text-3xl">
                    <h3 className="mb-4  line-clamp-2">
                      Custom Web Development
                    </h3>
                    <div className="h-[1px] w-16 bg-black"></div>
                  </div>
                  <div className="flex flex-col space-y-5 pt-10">
                    <p className="font-satoshi w-full paragraphText-Size text-black">
                      Our team of experienced developers can create unique and
                      tailored websites that meet your specific business
                      requirements, incorporating advanced features and
                      functionalities.
                    </p>
                    {/* <div className="flex items-center justify-between py-3 text-white space-x-3.5 rounded-[50px] sm:w-fit w-full  px-5 border border-white  bg-[#101763]  font-sora text-center text-sm ">
                      <span className="">Read more</span>
                      <svg
                        className="w-3 rotate-45 object-contain"
                        viewBox="0 0 8 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.671646 7.29248L0.0625 6.68333L5.80279 0.9375H0.584146V0.0625H7.29248V6.77083H6.41748V1.55219L0.671646 7.29248Z"
                          fill="#fff"
                        />
                      </svg>
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="px-5 w-full">
                <Image
                  src={image2}
                  className="w-full h-[180px] rounded-lg  object-cover object-center"
                />
              </div>
            </div>
            <div className="flex relative col-span-1  flex-col border-[#c5c5c5] w-full h-full justify-between">
              <div className="h-full relative flex">
                <Link href={"/projects"}>
                  <div className="flex absolute top-0 left-0 bg-[#F2F4F9]  mx-8 items-center justify-between py-2.5 text-[#27172F] space-x-2 rounded-[50px] sm:w-fit w-full z-20  px-4    font-sora text-center text-sm ">
                    <span className="">Projects </span>
                    <svg
                      className="w-3.5 object-contain"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.671646 7.29248L0.0625 6.68333L5.80279 0.9375H0.584146V0.0625H7.29248V6.77083H6.41748V1.55219L0.671646 7.29248Z"
                        fill="#27172F"
                      />
                    </svg>
                  </div>
                </Link>
                <div className="flex w-full h-full  flex-col py-8 justify-start px-10">
                  <div className="font-sora w-fit pt-10  font-semibold text-[#101763] text-3xl">
                    <h3 className="mb-4  line-clamp-2">E-commerce Solutions</h3>
                    <div className="h-[1px] w-16 bg-black"></div>
                  </div>
                  <div className="flex flex-col space-y-5 pt-10">
                    <p className="font-satoshi w-full paragraphText-Size text-black">
                      We offer comprehensive e-commerce solutions, including
                      online store development, payment gateway integration, and
                      inventory management systems.
                    </p>
                    {/* <div className="flex items-center justify-between py-3 text-white space-x-3.5 rounded-[50px] sm:w-fit w-full  px-5 border border-white  bg-[#101763]  font-sora text-center text-sm ">
                      <span className="">Read more</span>
                      <svg
                        className="w-3 rotate-45 object-contain"
                        viewBox="0 0 8 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.671646 7.29248L0.0625 6.68333L5.80279 0.9375H0.584146V0.0625H7.29248V6.77083H6.41748V1.55219L0.671646 7.29248Z"
                          fill="#fff"
                        />
                      </svg>
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="px-5 w-full">
                <Image
                  src={image3}
                  className="w-full h-[180px] rounded-lg  object-cover object-center"
                />
              </div>
            </div>
            <div className="h-[1px] col-span-3 w-full bg-[#C5C5C5] "></div>
            <div className="flex relative col-span-1  flex-col border-r border-[#c5c5c5] w-full h-full justify-between">
              <div className="h-full relative flex">
                <Link href={"/projects"}>
                  <div className="flex absolute top-0 left-0 bg-[#F2F4F9]  mx-8 items-center justify-between py-2.5 text-[#27172F] space-x-2 rounded-[50px] sm:w-fit w-full z-20  px-4    font-sora text-center text-sm ">
                    <span className="">Projects </span>
                    <svg
                      className="w-3.5 object-contain"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.671646 7.29248L0.0625 6.68333L5.80279 0.9375H0.584146V0.0625H7.29248V6.77083H6.41748V1.55219L0.671646 7.29248Z"
                        fill="#27172F"
                      />
                    </svg>
                  </div>
                </Link>
                <div className="flex w-full h-full  flex-col py-8 justify-start px-10">
                  <div className="font-sora w-fit pt-10  font-semibold text-[#101763] text-3xl">
                    <h3 className="mb-4  line-clamp-2">UI/UX Design</h3>
                    <div className="h-[1px] w-16 bg-black"></div>
                  </div>
                  <div className="flex flex-col space-y-5 pt-10">
                    <p className="font-satoshi w-full paragraphText-Size text-black">
                      Our skilled designers focus on creating visually appealing
                      and user-friendly interfaces, ensuring that your website
                      looks great and provides an intuitive and engaging user
                      experience.
                    </p>
                    {/* <div className="flex items-center justify-between py-3 text-white space-x-3.5 rounded-[50px] sm:w-fit w-full  px-5 border border-white  bg-[#101763]  font-sora text-center text-sm ">
                      <span className="">Read more</span>
                      <svg
                        className="w-3 rotate-45 object-contain"
                        viewBox="0 0 8 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.671646 7.29248L0.0625 6.68333L5.80279 0.9375H0.584146V0.0625H7.29248V6.77083H6.41748V1.55219L0.671646 7.29248Z"
                          fill="#fff"
                        />
                      </svg>
                    </div> */}
                  </div>
                </div>
              </div>{" "}
              <div className="px-5 w-full">
                <Image
                  src={image4}
                  className="w-full h-[180px] rounded-lg  object-cover object-center"
                />
              </div>
            </div>
            <div className="flex relative col-span-1 flex-col border-r border-[#c5c5c5] w-full h-full justify-between">
              <div className="h-full relative flex">
                <div className="flex absolute top-0 left-0 bg-[#F2F4F9]  mx-8 items-center justify-between py-2.5 text-[#27172F] space-x-2 rounded-[50px] sm:w-fit w-full z-20  px-4    font-sora text-center text-sm ">
                  <span className="">Projects </span>
                  <svg
                    className="w-3.5 object-contain"
                    viewBox="0 0 8 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.671646 7.29248L0.0625 6.68333L5.80279 0.9375H0.584146V0.0625H7.29248V6.77083H6.41748V1.55219L0.671646 7.29248Z"
                      fill="#27172F"
                    />
                  </svg>
                </div>
                <div className="flex w-full h-full  flex-col py-8 justify-start px-10">
                  <div className="font-sora w-fit pt-10  font-semibold text-[#101763] text-3xl">
                    <h3 className="mb-4  line-clamp-2">
                      Website Maintenance and Support
                    </h3>
                    <div className="h-[1px] w-16 bg-black"></div>
                  </div>
                  <div className="flex flex-col space-y-5 pt-10">
                    <p className="font-satoshi w-full paragraphText-Size text-black">
                      Our services encompass continuous website maintenance and
                      support to guarantee that your website stays current,
                      secure, and operates at its best. We handle all technical
                      aspects, from regular backups to software updates so that
                      you can concentrate on your core business activities
                      without any worries.
                    </p>
                    {/* <div className="flex items-center justify-between py-3 text-white space-x-3.5 rounded-[50px] sm:w-fit w-full  px-5 border border-white  bg-[#101763]  font-sora text-center text-sm ">
                      <span className="">Read more</span>
                      <svg
                        className="w-3 rotate-45 object-contain"
                        viewBox="0 0 8 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.671646 7.29248L0.0625 6.68333L5.80279 0.9375H0.584146V0.0625H7.29248V6.77083H6.41748V1.55219L0.671646 7.29248Z"
                          fill="#fff"
                        />
                      </svg>
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="px-5 w-full">
                <Image
                  src={image5}
                  className="w-full h-[180px] rounded-lg  object-cover object-center"
                />
              </div>
            </div>
            <div className="flex relative col-span-1  flex-col border-[#c5c5c5] w-full h-full justify-between">
              <div className="h-full relative flex">
                <Link href={"/projects"}>
                  <div className="flex absolute top-0 left-0 bg-[#F2F4F9]  mx-8 items-center justify-between py-2.5 text-[#27172F] space-x-2 rounded-[50px] sm:w-fit w-full z-20  px-4    font-sora text-center text-sm ">
                    <span className="">Projects </span>
                    <svg
                      className="w-3.5 object-contain"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.671646 7.29248L0.0625 6.68333L5.80279 0.9375H0.584146V0.0625H7.29248V6.77083H6.41748V1.55219L0.671646 7.29248Z"
                        fill="#27172F"
                      />
                    </svg>
                  </div>
                </Link>
                <div className="flex w-full h-full  flex-col py-8 justify-start px-10">
                  <div className="font-sora w-fit pt-10  font-semibold text-[#101763] text-3xl">
                    <h3 className="mb-4  line-clamp-2">SEO Optimisation</h3>
                    <div className="h-[1px] w-16 bg-black"></div>
                  </div>
                  <div className="flex flex-col space-y-5 pt-10">
                    <p className="font-satoshi w-full paragraphText-Size text-black">
                      We acknowledge the significance of search engine
                      optimization (SEO) in generating organic traffic for your
                      website. Our web design services include implementing SEO
                      best practices to improve your website's visibility and
                      ranking on search engines.
                    </p>
                    {/* <div className="flex items-center justify-between py-3 text-white space-x-3.5 rounded-[50px] sm:w-fit w-full  px-5 border border-white  bg-[#101763]  font-sora text-center text-sm ">
                      <span className="">Read more</span>
                      <svg
                        className="w-3 rotate-45 object-contain"
                        viewBox="0 0 8 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.671646 7.29248L0.0625 6.68333L5.80279 0.9375H0.584146V0.0625H7.29248V6.77083H6.41748V1.55219L0.671646 7.29248Z"
                          fill="#fff"
                        />
                      </svg>
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="px-5 w-full">
                <Image
                  src={image6}
                  className="w-full h-[180px] rounded-lg  object-cover object-center"
                />
              </div>
            </div>
            <div className="h-[1px] col-span-3 w-full bg-[#C5C5C5]"></div>
          </div>
        </div>

        <div className="w-full px-5  sm:px-10  h-fit  md:px-12">
          <div className="w-full h-fit relative overflow-hidden  items-end justify-end flex ">
            <Image
              src={image7}
              className="object-cover w-[50%] rounded-lg absolute top-0 left-0 h-full object-left"
            />
            <div className="absolute left-0 top-0 h-full w-[100%] rounded-lg  bg-gradient-to-r from-transparent via-transparent to-[#F2F4F9] from-30% to-50% z-20"></div>
            {/* <div className="absolute -right-32 top-1/2 -translate-y-1/2 z-20 blur-[120px] rounded-full w-64 h-64 bg-[#FF0C15]"></div> */}

            <div className="flex flex-col justify-center space-y-5 py-24 text-black  z-20 relative w-[50%]  px-20 h-fit">
              <h3
                style={{
                  background:
                    "linear-gradient(92.09deg, #FF0C15 0.33%, #27172F 26.13%)",

                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "transparent",
                }}
                className="font-sora font-semibold text-[#101763] text-3xl  leading-normal "
              >
                Why is a Web Design Company important in Saudi Arabia
              </h3>
              <p className="font-satoshi w-full paragraphText-Size">
                A web design company is crucial for businesses in Saudi Arabia
                as it helps create a strong online presence. With the increasing
                internet use, having a well-designed website is essential to
                attract and engage customers. A professional web design company
                understands the local market and can tailor the website to cater
                to the preferences and needs of Saudi Arabian consumers. They
                can also optimize the website for search engines, ensuring
                higher visibility and increased traffic. Ultimately, a web
                design company helps businesses in Saudi Arabia establish
                credibility, generate leads, and drive growth.
              </p>
              {/* <div className="flex items-center justify-between py-3 space-x-5 rounded-[50px] sm:w-fit w-full  px-6 border border-[#EE2525] bg-[#EE2525] text-white   font-sora text-center  text-sm ">
                <span className="">Explore more today</span>
                <svg
                  className="w-3 object-contain rotate-45"
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.671646 7.29248L0.0625 6.68333L5.80279 0.9375H0.584146V0.0625H7.29248V6.77083H6.41748V1.55219L0.671646 7.29248Z"
                    fill="#fff"
                  />
                </svg>
              </div> */}
            </div>
          </div>
        </div>
        <div className="w-full px-5  sm:px-10  h-fit  md:px-12">
          <div className="w-full h-fit relative overflow-hidden  flex ">
            <Image
              src={image8}
              className="object-cover w-full rounded-lg absolute top-0 left-0 h-full scale-150 object-center"
            />
            <div className="absolute right-0 top-0 h-full w-[100%] rounded-lg via-transparent  bg-gradient-to-l from-transparent to-[#F2F4F9] from-30% to-50% z-20"></div>
            {/* <div className="absolute -right-32 top-1/2 -translate-y-1/2 z-20 blur-[120px] rounded-full w-64 h-64 bg-[#FF0C15]"></div> */}

            <div className="flex flex-col justify-center space-y-5 py-24 text-black  z-20 relative w-[50%]  px-20 h-fit">
              <h3
                style={{
                  background:
                    "linear-gradient(92.09deg, #FF0C15 0.33%, #27172F 26.13%)",

                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "transparent",
                }}
                className="font-sora font-semibold text-[#101763] text-3xl  leading-normal "
              >
                Need A Web Design Company In Saudi Arabia?
              </h3>
              <p className="font-satoshi w-full paragraphText-Size">
                At Cheval ME, we understand the need for a reliable and
                professional web design company in Saudi Arabia. With our
                expertise and experience, we are dedicated to providing
                top-notch web design services that cater to the unique
                requirements of businesses in Saudi Arabia. Our team of talented
                designers and developers collaborates closely with clients to
                craft visually captivating and user-friendly websites that
                embody their brand and effectively engage their desired
                audience. Trust Cheval ME to deliver exceptional web design
                solutions tailored to your specific needs in Saudi Arabia.
              </p>
              {/* <div className="flex items-center justify-between py-3 space-x-5 rounded-[50px] sm:w-fit w-full  px-6 border border-[#EE2525] bg-[#EE2525] text-white   font-sora text-center  text-sm ">
                <span className="">Explore more today</span>
                <svg
                  className="w-3 object-contain rotate-45"
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.671646 7.29248L0.0625 6.68333L5.80279 0.9375H0.584146V0.0625H7.29248V6.77083H6.41748V1.55219L0.671646 7.29248Z"
                    fill="#fff"
                  />
                </svg>
              </div> */}
            </div>
          </div>
        </div>
        <div className="w-full h-fit px-5 sm:px-10 md:px-12">
          <div className="grid w-full gap-5 grid-cols-3">
            <h3
              style={{
                background:
                  "linear-gradient(92.09deg, #FF0C15 0.33%, #000000 26.13%)",

                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                color: "transparent",
              }}
              className="font-sora font-semibold col-span-1 text-[#101763] text-3xl  leading-normal "
            >
              Why Choose Us For Web Design Company In Saudi Arabia?
            </h3>
            <div className="col-span-2 w-full flex flex-col gap-y-3">
              <div className="pr-10 pl-2 py-8 flex border-t border-t-black items-center gap-x-8">
                <Image src={mitre} className="w-[85px] h-fit object-contain" />
                <div className=" text-[#27172F] flex w-full flex-col space-y-1.5">
                  <h4 className="font-sora font-semibold text-3xl">
                    Expertise
                  </h4>
                  <p className="font-satoshi w-full paragraphText-Size ">
                    Our team of skilled web designers in Saudi Arabia have years
                    of experience creating visually appealing and user-friendly
                    websites.
                  </p>
                </div>
              </div>
              <div className="pr-10 pl-2 py-8 flex border-t border-t-black items-center gap-x-8">
                <Image
                  src={history}
                  className="w-[85px] h-fit object-contain"
                />
                <div className=" text-[#27172F] flex w-full flex-col space-y-1.5">
                  <h4 className="font-sora font-semibold text-3xl">
                    Customization
                  </h4>
                  <p className="font-satoshi w-full paragraphText-Size ">
                    Every business is unique, so we offer customized web design
                    solutions to meet your requirements.
                  </p>
                </div>
              </div>
              <div className="pr-10 pl-2 py-8 flex border-t border-t-black items-center gap-x-8">
                <Image src={acute} className="w-[85px] h-fit object-contain" />
                <div className=" text-[#27172F] flex w-full flex-col space-y-1.5">
                  <h4 className="font-sora font-semibold text-3xl">
                    Timely Delivery
                  </h4>
                  <p className="font-satoshi w-full paragraphText-Size ">
                    We value your time and ensure that your website is delivered
                    within the agreed-upon timeframe without compromising
                    quality.
                  </p>
                </div>
              </div>
              <div className="pr-10 pl-2 py-8 flex border-y border-y-black items-center gap-x-8">
                <Image src={card} className="w-[85px] h-fit object-contain" />
                <div className=" text-[#27172F] flex w-full flex-col space-y-1.5">
                  <h4 className="font-sora font-semibold text-3xl">
                    Competitive Pricing
                  </h4>
                  <p className="font-satoshi w-full paragraphText-Size ">
                    Our web design services in Saudi Arabia come at competitive
                    prices, ensuring businesses of all sizes can easily boost
                    their online presence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-screen h-fit  py-12 sm:py-14 md:py-16 space-y-12 sm:space-y-14 md:space-y-16 flex items-center flex-col bg-white overflow-x-hidden">
        <div className="w-full px-5  sm:px-10   md:px-12">
          <div className="grid grid-cols-3 gap-5 w-full h-fit">
            <div className="flex space-y-5 sm:space-y-10 sm:items-start pr-2 items-center sm:justify-start justify-center  flex-col col-span-1 h-fit">
              <h3
                style={{
                  background:
                    "linear-gradient(92.09deg, #FF0C15 0.33%, #000000 26.13%)",

                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "transparent",
                }}
                className="font-sora font-semibold  text-4xl  leading-normal "
              >
                Our Process Of Web Development
              </h3>
              <div className="my-3 ml-1 w-full max-w-40 h-[1px] bg-black"></div>
            </div>
            <div className="col-span-1 grid grid-cols-1 grid-flow-row mt-20">
              <div className="w-full relative h-fit col-span-1 rounded-lg bg-[#F2F4F9] flex flex-col text-[#27172F] space-y-4 px-10 pt-20 pb-10">
                <h1
                  style={{
                    background:
                      "linear-gradient(180deg, #27172F 0%, #FF0C15 100%)",

                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    color: "transparent",
                  }}
                  className="text-[#EE2525] absolute text-[150px] font-sora font-semibold -top-16 leading-none left-10"
                >
                  1
                </h1>
                <h3 className="font-sora font-semibold  text-3xl ">Research</h3>
                <p className="font-satoshi w-full paragraphText-Size ">
                  We thoroughly analyze the client's business, target audience,
                  and competitors to understand their needs and goals.
                </p>
              </div>
              <div className="w-full relative h-fit col-span-1 rounded-lg bg-[#F2F4F9] flex flex-col text-[#27172F] space-y-4 px-10 pt-20 pb-10">
                <h1
                  style={{
                    background:
                      "linear-gradient(180deg, #27172F 0%, #FF0C15 100%)",

                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    color: "transparent",
                  }}
                  className="text-[#EE2525] absolute text-[150px] font-sora font-semibold -top-16 leading-none left-10"
                >
                  3
                </h1>
                <h3 className="font-sora font-semibold  text-3xl ">
                  Design and Development
                </h3>
                <p className="font-satoshi w-full paragraphText-Size ">
                  Our team of skilled designers and developers bring the plan to
                  life, creating a visually appealing and user-friendly website.
                </p>
              </div>
            </div>
            <div className="col-span-1  grid grid-cols-1 grid-flow-row mt-40">
              <div className="w-full relative h-fit col-span-1 rounded-lg bg-[#F2F4F9] flex flex-col text-[#27172F] space-y-4 px-10 pt-20 pb-10">
                <h1
                  style={{
                    background:
                      "linear-gradient(180deg, #27172F 0%, #FF0C15 100%)",

                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    color: "transparent",
                  }}
                  className="text-[#EE2525] absolute text-[150px] font-sora font-semibold -top-16 leading-none left-10"
                >
                  2
                </h1>
                <h3 className="font-sora font-semibold  text-3xl ">Planning</h3>
                <p className="font-satoshi w-full paragraphText-Size ">
                  Based on the research, we create a detailed plan outlining the
                  website's structure, design elements, and functionality.
                </p>
              </div>
              <div className="w-full relative h-fit col-span-1 rounded-lg bg-[#F2F4F9] mt-24 flex flex-col text-[#27172F] space-y-4 px-10 pt-20 pb-10">
                <h1
                  style={{
                    background:
                      "linear-gradient(180deg, #27172F 0%, #FF0C15 100%)",

                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    color: "transparent",
                  }}
                  className="text-[#EE2525] absolute text-[150px] font-sora font-semibold -top-16 leading-none left-10"
                >
                  4
                </h1>
                <h3 className="font-sora font-semibold  text-3xl ">
                  Testing and Launch
                </h3>
                <p className="font-satoshi w-full paragraphText-Size ">
                  We rigorously test the website for functionality,
                  compatibility, and responsiveness across different devices
                  before launching it to ensure a seamless user experience.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-fit px-5 sm:px-10 md:px-12">
          <div className="grid w-full gap-5 grid-cols-9">
            <div className="flex space-y-5 sm:space-y-10 sm:items-start pr-2 items-center sm:justify-start justify-center  flex-col col-span-4 h-fit">
              <h3
                style={{
                  background:
                    "linear-gradient(92.09deg, #FF0C15 0.33%, #000000 26.13%)",

                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "transparent",
                }}
                className="font-sora font-semibold  text-4xl  leading-normal "
              >
                Benefits Of Hiring Our Web Design Services In Saudi Arabia
              </h3>
              <div className="my-3 ml-1 w-full max-w-40 h-[1px] bg-black"></div>
            </div>
            <p className="font-satoshi w-full paragraphText-Size col-span-5 text-[#27172F]">
              Our web design company in Saudi Arabia offers the best web design
              services. You can benefit from our expertise and experience in
              creating visually appealing and user-friendly websites by hiring
              us. Our expert web designers will collaborate closely with you to
              grasp your business objectives, crafting a website that impeccably
              showcases your brand identity.
              <br /> <br />
              We employ cutting-edge technologies and incorporate the latest
              design trends to guarantee your website distinguishes itself
              amidst the competition." With our services, you can expect
              increased online visibility, improved user engagement, and higher
              conversion rates. Trust our web design company in Saudi Arabia to
              deliver exceptional results for your business.
            </p>
          </div>
        </div>
        <div className="w-full px-5  sm:px-10  h-fit  md:px-12">
          <div className="w-full h-fit relative overflow-hidden rounded-lg flex items-end justify-end">
            <Image
              src={image9}
              className="object-cover w-1/2 absolute top-0 rounded-lg left-0 h-full object-left"
            />
            <div className="absolute right-0 top-0 h-full w-[100%] rounded-lg bg-gradient-to-r from-transparent to-black to-50% z-20"></div>
            {/* <div className="absolute -right-32 top-1/2 -translate-y-1/2 z-20 blur-[120px] rounded-full w-64 h-64 bg-[#FF0C15]"></div> */}

            <div className="flex flex-col justify-center space-y-8 py-24 text-white  z-20 relative w-[45%]  pr-5 sm:pr-10 md:pr-12 h-fit">
              <h3
                style={{
                  background:
                    "linear-gradient(90deg, #FF0C15 0%, #FFFFFF 13.42%)",

                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "transparent",
                }}
                className="font-sora font-semibold text-[#101763] text-2xl  leading-normal "
              >
                Ready To Grow Your Business?
              </h3>
              <Link href={"/contact-us"}>
                <div className="flex items-center justify-between py-3 space-x-5 rounded-[50px] sm:w-fit w-full  px-6 border border-[#EE2525] bg-[#EE2525] text-white   font-sora text-center  text-sm ">
                  <span className="">Get in touch with us!</span>
                  <svg
                    className="w-3 object-contain rotate-45"
                    viewBox="0 0 8 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.671646 7.29248L0.0625 6.68333L5.80279 0.9375H0.584146V0.0625H7.29248V6.77083H6.41748V1.55219L0.671646 7.29248Z"
                      fill="#fff"
                    />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full px-5  sm:px-10   md:px-12">
          <div className="w-full grid grid-cols-3 gap-4 grid-flow-row h-fit">
            <div className="flex space-y-5 sm:space-y-10 sm:items-start pr-2 items-center sm:justify-start justify-center  flex-col col-span-1 h-fit">
              <h3
                style={{
                  background:
                    "linear-gradient(92.09deg, #FF0C15 0.33%, #000000 26.13%)",

                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "transparent",
                }}
                className="font-sora font-semibold  text-4xl  leading-normal "
              >
                Industries We Serve
              </h3>
              <div className="my-3 ml-1 w-full max-w-40 h-[1px] bg-black"></div>
            </div>
            <div className="col-span-2 h-fit w-full grid text-[#27172F] grid-cols-2">
              <div className="col-span-2 h-[1px] w-full  bg-[#D8D8D8]"></div>
              <div className="py-6 col-span-1 text-xl font-normal flex leading-none items-center gap-x-6 px-3 uppercase">
                <Image src={mall} className="w-10 object-contain h-fit" />
                <h4>
                  <span className="font-semibold">Retail</span> and E-commerce
                </h4>
              </div>
              <div className="py-6 col-span-1 text-xl font-normal flex leading-none items-center gap-x-6 px-3 uppercase">
                <Image src={agent} className="w-10 object-contain h-fit" />
                <h4>
                  <span className="font-semibold">Real Estate</span> and
                  Property
                </h4>
              </div>
              <div className="col-span-2 h-[1px] w-full  bg-[#D8D8D8]"></div>
              <div className="py-6 col-span-1 text-xl font-normal flex leading-none items-center gap-x-6 px-3 uppercase">
                <Image src={alert} className="w-10 object-contain h-fit" />
                <h4>
                  <span className="font-semibold">Healthcare</span> and Fitness
                </h4>
              </div>
              <div className="py-6 col-span-1 text-xl font-normal flex leading-none items-center gap-x-6 px-3 uppercase">
                <Image src={fastfood} className="w-10 object-contain h-fit" />
                <h4>
                  <span className="font-semibold">Management </span>Food and
                  Beverage
                </h4>
              </div>
              <div className="col-span-2 h-[1px] w-full  bg-[#D8D8D8]"></div>
              <div className="py-6 col-span-1 text-xl font-normal flex leading-none items-center gap-x-6 px-3 uppercase">
                <Image src={balance} className="w-10 object-contain h-fit" />
                <h4>
                  <span className="font-semibold">Banking</span> and Finance
                </h4>
              </div>
              <div className="py-6 col-span-1 text-xl font-normal flex leading-none items-center gap-x-6 px-3 uppercase">
                <Image src={belt} className="w-10 object-contain h-fit" />
                <h4>
                  <span className="font-semibold">Logistics</span> and
                  Transportation
                </h4>
              </div>
              <div className="col-span-2 h-[1px] w-full  bg-[#D8D8D8]"></div>
              <div className="py-6 col-span-1 text-xl font-normal flex leading-none items-center gap-x-6 px-3 uppercase">
                <Image src={shuttle} className="w-10 object-contain h-fit" />
                <h4>
                  <span className="font-semibold">Travel </span> and Hospitality
                </h4>
              </div>
              <div className="py-6 col-span-1 text-xl font-normal flex leading-none items-center gap-x-6 px-3 uppercase">
                <Image src={cinematic} className="w-10 object-contain h-fit" />
                <h4>
                  <span className="font-semibold">Entertainment </span>
                  and Media
                </h4>
              </div>
              <div className="col-span-2 h-[1px] w-full  bg-[#D8D8D8]"></div>
              <div className="py-6 col-span-1 text-xl font-normal flex leading-none items-center gap-x-6 px-3 uppercase">
                <Image src={cast} className="w-10 object-contain h-fit" />
                <h4>
                  <span className="font-semibold">Education</span> and
                  E-learning
                </h4>
              </div>
              <div className="py-6 col-span-1 text-xl font-normal flex leading-none items-center gap-x-6 px-3 uppercase">
                <Image src={shipping} className="w-10 object-contain h-fit" />
                <h4>
                  <span className="font-semibold">Automotive </span>
                  and Transportation
                </h4>
              </div>
              <div className="col-span-2 h-[1px] w-full  bg-[#D8D8D8]"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section1;
