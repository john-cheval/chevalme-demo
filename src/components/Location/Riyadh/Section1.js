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
import image1 from "../../../../public/riyadh/1.png";
import image2 from "../../../../public/riyadh/2.png";
import image3 from "../../../../public/riyadh/3.png";
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
                  Riyadh
                </span>
              </h1>
              <p className="font-satoshi  text-black paragraphText-Size">
                Cheval ME is a leading Web Development Company in Riyadh,
                offering innovative and professional website solutions to
                businesses of all sizes.
              </p>
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
              className="h-[580px] w-full object-cover object-center"
            />
          </div>
        </div>
        <div className="w-full   h-fit  px-5 sm:px-10 md:px-12">
          <p className="font-satoshi max-w-[1050px] text-[#101763] paragraphText-Size">
            At Cheval ME, we understand the significance of a well-designed
            website. Our Web Development Agency in Riyadh is dedicated to
            creating visually appealing and user-friendly websites that leave a
            lasting impression. Leveraging our extensive web development and
            design proficiency, we empower businesses to create a robust digital
            footprint and allure potential customers. Trust us to elevate your
            brand and drive success. We offer a wide range of web development
            services, including responsive web design, custom web development,
            and e-commerce website design. We work with businesses of all sizes,
            from startups to enterprises. We are committed to helping our
            clients create websites that are both visually appealing and
            functional.
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
            Types of Web Development Services We are Providing in Riyadh
          </h3>
          <div className="w-full grid h-fit grid-cols-3 grid-flow-row gap-y-8 mt-10">
            <div className="h-[1px] col-span-3 w-full bg-[#C5C5C5] "></div>
            <div className="flex relative  col-span-1 border-r border-[#c5c5c5]  w-full h-full">
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
              <div className="flex w-full h-full  flex-col py-8 justify-between px-10">
                <div className="font-sora w-fit pt-10  font-semibold text-[#101763] text-3xl">
                  <h3 className="mb-4  line-clamp-2">Responsive web design</h3>
                  <div className="h-[1px] w-16 bg-black"></div>
                </div>
                <div className="flex flex-col space-y-5 h-full mt-10">
                  <p className="font-satoshi w-full paragraphText-Size text-black ">
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
            <div className="flex relative col-span-1  border-r border-[#c5c5c5]  w-full h-full">
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
              <div className="flex w-full h-full  flex-col py-8 justify-between px-10">
                <div className="font-sora w-fit pt-10  font-semibold text-[#101763] text-3xl">
                  <h3 className="mb-4  line-clamp-2">Custom Web Development</h3>
                  <div className="h-[1px] w-16 bg-black"></div>
                </div>
                <div className="flex flex-col space-y-5 h-full mt-10">
                  <p className="font-satoshi w-full paragraphText-Size text-black ">
                    Our team of experienced developers can create unique and
                    tailored websites that meet your specific business needs and
                    goals.
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
            <div className="flex relative col-span-1  border-[#c5c5c5]  w-full h-full">
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
              <div className="flex w-full h-full  flex-col py-8 justify-between px-10">
                <div className="font-sora w-fit pt-10  font-semibold text-[#101763] text-3xl">
                  <h3 className="mb-4  line-clamp-2">E-commerce Solutions</h3>
                  <div className="h-[1px] w-16 bg-black"></div>
                </div>
                <div className="flex flex-col space-y-5 h-full mt-10">
                  <p className="font-satoshi w-full paragraphText-Size text-black ">
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
            <div className="h-[1px] col-span-3 w-full bg-[#C5C5C5] "></div>
            <div className="flex relative col-span-1  border-r border-[#c5c5c5]  w-full h-full">
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
              <div className="flex w-full h-full  flex-col py-8 justify-between px-10">
                <div className="font-sora w-fit pt-10  font-semibold text-[#101763] text-3xl">
                  <h3 className="mb-4  line-clamp-2">UI/UX Design</h3>
                  <div className="h-[1px] w-16 bg-black"></div>
                </div>
                <div className="flex flex-col space-y-5 h-full mt-10">
                  <p className="font-satoshi w-full paragraphText-Size text-black ">
                    Our primary focus is crafting visually captivating and
                    user-friendly interfaces that elevate the overall user
                    experience, leading to heightened engagement and improved
                    conversion rates.
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
            <div className="flex relative col-span-1  border-r border-[#c5c5c5]  w-full h-full">
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
              <div className="flex w-full h-full  flex-col py-8 justify-between px-10">
                <div className="font-sora w-fit pt-10  font-semibold text-[#101763] text-3xl">
                  <h3 className="mb-4  line-clamp-2">
                    Website Maintenance and Support
                  </h3>
                  <div className="h-[1px] w-16 bg-black"></div>
                </div>
                <div className="flex flex-col space-y-5 h-full mt-10">
                  <p className="font-satoshi w-full paragraphText-Size text-black ">
                    We provide ongoing website maintenance and support services
                    to ensure your website is always up-to-date, secure, and
                    functioning optimally.
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
            <div className="flex relative col-span-1   border-[#c5c5c5]  w-full h-full">
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
              <div className="flex w-full h-full  flex-col py-8 justify-between px-10">
                <div className="font-sora w-fit pt-10  font-semibold text-[#101763] text-3xl">
                  <h3 className="mb-4  line-clamp-2">SEO Optimisation</h3>
                  <div className="h-[1px] w-16 bg-black"></div>
                </div>
                <div className="flex flex-col space-y-5 h-full mt-10">
                  <p className="font-satoshi w-full paragraphText-Size text-black ">
                    Our web development services include implementing SEO best
                    practices to improve your website's visibility and ranking
                    on search engines, driving organic traffic and increasing
                    your online presence.
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
            <div className="h-[1px] col-span-3 w-full bg-[#C5C5C5] "></div>
          </div>
        </div>
        <div className="w-full h-fit px-5 sm:px-10 md:px-12">
          <div className="grid w-full gap-5 grid-cols-9">
            <h3
              style={{
                background:
                  "linear-gradient(92.09deg, #FF0C15 0.33%, #000000 26.13%)",

                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                color: "transparent",
              }}
              className="font-sora font-semibold col-span-4 text-[#101763] text-3xl  leading-normal "
            >
              Why is working with a Web Development Company important in Riyadh?
            </h3>
            <p className="font-satoshi w-full paragraphText-Size col-span-5 text-[#27172F]">
              A Web Development Company in Riyadh is crucial for businesses as
              it helps create a strong online presence. With the increasing
              internet use, having a well-designed website is essential to
              attract and engage customers. A professional Web Development
              Company understands the latest trends and technologies, ensuring
              your website is visually appealing, user-friendly, and optimized
              for search engines. They also provide ongoing support and
              maintenance, ensuring that your website remains up-to-date and
              functional. By investing in a Web Development Company, you can
              effectively showcase your products or services, increase brand
              visibility, and ultimately drive more traffic and conversions.
            </p>
          </div>
        </div>
        <div className="w-full px-5  sm:px-10  h-fit  md:px-12">
          <div className="w-full h-fit relative overflow-hidden  flex ">
            <Image
              src={image2}
              className="object-cover w-1/2 rounded-lg absolute top-0 right-0 h-full object-right"
            />
            <div className="absolute right-0 top-0 h-full w-[100%] rounded-lg  bg-gradient-to-l from-transparent to-[#F2F4F9] from-30% to-50% z-20"></div>
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
                Need a Web Development Company in Riyadh?
              </h3>
              <p className="font-satoshi w-full paragraphText-Size">
                At Cheval , we understand the need for a reliable Web
                Development Company in Riyadh. We are committed to providing
                top-notch web development services that cater to the unique
                requirements of businesses in Riyadh. Our skilled designers and
                developers work closely with clients to create visually
                appealing, user-friendly websites that communicate their brand
                message. Utilizing our expertise, we assist businesses in Riyadh
                to establish a commanding online presence and draw in a larger
                customer base.
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
          <h3
            style={{
              background:
                "linear-gradient(92.09deg, #FF0C15 0.33%, #000000 26.13%)",

              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "transparent",
            }}
            className="font-sora mb-5 font-semibold col-span-1 text-[#101763] text-3xl  leading-normal "
          >
            Why Choose Us For Web Design Company In Riyadh?
          </h3>
          <div className="grid w-full gap-5 grid-cols-4">
            <div className="px-10 py-8 col-span-1 flex flex-col bg-[#F8F8F8]  rounded-lg  gap-y-6">
              <Image src={mitre} className="w-[85px] h-fit object-contain" />
              <div className=" text-[#27172F] flex w-full flex-col space-y-1.5">
                <h4 className="font-sora font-semibold text-3xl">Expertise</h4>
                <p className="font-satoshi w-full paragraphText-Size ">
                  Our team of skilled web designers and developers in Dammam
                  have years of experience creating visually appealing and
                  user-friendly websites.
                </p>
              </div>
            </div>
            <div className="px-10 py-8 col-span-1 flex flex-col bg-[#F8F8F8]  rounded-lg  gap-y-6">
              <Image src={history} className="w-[85px] h-fit object-contain" />
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
            <div className="px-10 py-8 col-span-1 flex flex-col  bg-[#F8F8F8]  rounded-lg  gap-y-6">
              <Image src={acute} className="w-[85px] h-fit object-contain" />
              <div className=" text-[#27172F] flex w-full flex-col space-y-1.5">
                <h4 className="font-sora font-semibold text-3xl">
                  Timely Delivery
                </h4>
                <p className="font-satoshi w-full paragraphText-Size ">
                  We value your time and ensure that your website is delivered
                  within the agreed-upon timeframe without compromising quality.
                </p>
              </div>
            </div>
            <div className="px-10 py-8 col-span-1 flex flex-col bg-[#F8F8F8]  rounded-lg  gap-y-6">
              <Image src={card} className="w-[85px] h-fit object-contain" />
              <div className=" text-[#27172F] flex w-full flex-col space-y-1.5">
                <h4 className="font-sora font-semibold text-3xl">
                  Competitive Pricing
                </h4>
                <p className="font-satoshi w-full paragraphText-Size ">
                  Our web design services in Dammam are competitively priced,
                  offering you excellent value for money without compromising on
                  quality.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-fit px-5 sm:px-10 md:px-12">
          <div className="w-full relative grid grid-cols-2  h-fit gap-5">
            <div className="col-span-1 flex-col w-full flex items-end justify-end relative h-fit">
              <div className="flex w-full  h-fit text-black rounded-b-lg flex-col pb-14 space-y-4  z-20 pr-14">
                <h3
                  style={{
                    background:
                      "linear-gradient(92.09deg, #FF0C15 0.33%, #000000 26.13%)",

                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    color: "transparent",
                  }}
                  className="font-sora font-semibold text-white text-4xl  leading-normal "
                >
                  How We Are Different From Other Web Design Companies In Dammam
                </h3>
                <div className="py-2 flex  gap-x-4">
                  <Image
                    src={arrow}
                    className="w-6 mt-1 h-fit object-contain"
                  />
                  <p className="font-satoshi w-full paragraphText-Size ">
                    <span className="font-semibold">
                      Expertise in Customized Solutions:
                    </span>{" "}
                    Unlike other web development companies in Riyadh, we
                    specialize in creating tailor-made websites that perfectly
                    align with our client's unique business needs and goals.
                  </p>
                </div>
                <div className="py-2 flex  gap-x-4">
                  <Image
                    src={arrow}
                    className="w-6 mt-1 h-fit object-contain"
                  />
                  <p className="font-satoshi w-full paragraphText-Size ">
                    <span className="font-semibold">
                      Emphasis on User Experience:
                    </span>{" "}
                    Our team of skilled designers and developers prioritize user
                    experience, ensuring that every website we create is
                    intuitive, visually appealing, and optimized for seamless
                    navigation.
                  </p>
                </div>{" "}
                <div className="py-2 flex  gap-x-4">
                  <Image
                    src={arrow}
                    className="w-6 mt-1 h-fit object-contain"
                  />
                  <p className="font-satoshi w-full paragraphText-Size ">
                    <span className="font-semibold">
                      Cutting-Edge Technology:
                    </span>{" "}
                    We stay ahead by utilizing the latest web development
                    technologies and tools. This enables us to deliver websites
                    that are visually stunning, highly functional, and
                    responsive across all devices.
                  </p>
                </div>{" "}
                <div className="py-2 flex  gap-x-4">
                  <Image
                    src={arrow}
                    className="w-6 mt-1 h-fit object-contain"
                  />
                  <p className="font-satoshi w-full paragraphText-Size ">
                    <span className="font-semibold">
                      Comprehensive Digital Strategy:
                    </span>{" "}
                    Our approach goes beyond just designing websites. We offer a
                    comprehensive digital strategy that includes SEO, content
                    marketing, and social media integration, helping our clients
                    maximize their online presence and drive business growth.
                  </p>
                </div>
              </div>
            </div>
            <Image
              src={image3}
              className="object-cover col-span-1 w-full top-0 rounded-lg  h-full object-center"
            />
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
            <h3
              style={{
                background:
                  "linear-gradient(92.09deg, #FF0C15 0.33%, #000000 26.13%)",

                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                color: "transparent",
              }}
              className="font-sora font-semibold col-span-4 text-[#101763] text-3xl  leading-normal "
            >
              Benefits Of Hiring Our Web Development Services in Riyadh
            </h3>
            <p className="font-satoshi w-full paragraphText-Size col-span-5 text-[#27172F]">
              Our Web Development Company in Riyadh offers the best web
              development services in the industry. You can benefit from our
              expertise and experience in creating visually appealing and
              user-friendly websites by hiring us. Our skilled web designers
              will work closely with you to understand your business goals and
              create a website that reflects your brand identity. We use the
              latest web development techniques and technologies to ensure your
              website is responsive, fast, and optimized for search engines.
              With our services, you can attract more visitors, increase
              conversions, and stay ahead of your competitors. Trust our Web
              Development Company in Riyadh to deliver exceptional results for
              your online presence.
            </p>
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
