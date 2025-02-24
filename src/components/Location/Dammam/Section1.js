/** @format */

import React from "react";
// import image from "../../../../public/Rectangle 140.png";
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
import image1 from "../../../../public/dammam/1.png";
import image2 from "../../../../public/dammam/2.png";
import image3 from "../../../../public/dammam/3.png";
import image4 from "../../../../public/dammam/8.jpeg";
import image5 from "../../../../public/dammam/9.jpeg";
import Link from "next/link";
function Section1() {
  return (
    <>
      <div className="relative w-screen h-fit  space-y-12 pt-24 sm:pt-28 md:pt-36  sm:space-y-14 md:space-y-16 flex items-center flex-col bg-white overflow-x-hidden">
        <div className="w-full h-fit  px-5 sm:px-10 md:px-12">
          <div className="flex items-start xl:space-y-0 space-y-4 xl:items-center xl:flex-row flex-col justify-between w-full">
            <div className="flex flex-col space-y-4 w-fit max-w-[760px]">
              <h1 className="capitalize font-sora font-bold  md:leading-tight sm:leading-tight leading-tight   text-[#101763] text-3xl sm:text-4xl md:text-5xl">
                Web Development Company In{" "}
                <span className="underline decoration-2 underline-offset-8">
                  Dammam
                </span>
              </h1>
              <p className="font-satoshi  text-black paragraphText-Size">
                Cheval ME is a leading web development company in Dammam. We
                offer innovative and professional web design solutions to help
                businesses thrive online.
              </p>
            </div>
            <Link href={"/contact-us"}>
              <div className="flex items-center justify-between py-3 space-x-5 rounded-[50px] sm:w-fit w-full  px-8 border border-[#EE2525] bg-[#EE2525] text-white   font-sora text-center font-semibold text-base ">
                <span className="">Contact us today! </span>
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
        <div className="w-full">
          <div className=" w-full relative">
            <Image
              src={image1}
              className="h-fit w-full object-contain object-center"
            />
            <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-transparent via-transparent flex items-end to-black to-95%">
              <p className="font-satoshi max-w-[900px] px-14 py-14 text-white paragraphText-Size">
                As a Web Development Agency in Dammam, Cheval, our expertise
                plays a crucial role in the success of businesses. Our expertise
                lies in developing visually captivating and user-friendly
                websites that attract and captivate customers. Our designs are
                tailored to reflect the unique brand identity of each client,
                helping them stand out in the competitive online market. Trust
                Cheval ME for exceptional web design services.We understand the
                importance of user experience and design, and we work closely
                with you to create a website that is both functional and
                visually appealing.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-screen h-fit  py-12 sm:py-14 md:py-16 space-y-12 sm:space-y-14 md:space-y-16 flex items-center flex-col bg-gradient-to-b from-[#f3f4f9] to-white to-95% overflow-x-hidden">
        <div className="w-full h-fit px-5 sm:px-10 md:px-12">
          <div className="w-full grid grid-cols-3 grid-flow-row gap-4">
            <div className="flex space-y-5 sm:space-y-10 sm:items-start pr-2 items-center sm:justify-start justify-center  flex-col col-span-1 h-fit">
              <h3
                style={{
                  background:
                    "linear-gradient(92.09deg, #FF0C15 0.33%, #000000 26.13%)",

                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "transparent",
                }}
                className="font-sora font-semibold text-[#101763] text-4xl  leading-normal "
              >
                Expert Web Development Solutions For All Sectors by Cheval
              </h3>
              <div className="my-3 ml-1 w-full max-w-40 h-[1px] bg-black"></div>
            </div>
            <div className="flex relative rounded-lg col-span-1 bg-white w-full h-full">
              <Link href={"/projects"}>
                <div className="flex absolute top-0 left-0 bg-[#F2F4F9] my-8 mx-8 items-center justify-between py-2.5 text-[#27172F] space-x-2 rounded-[50px] sm:w-fit w-full z-20  px-4    font-sora text-center text-sm ">
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
                <div className="font-sora w-fit my-20  font-semibold text-[#101763] text-3xl ">
                  <h3 className="mb-4">Responsive web design</h3>
                  <div className="h-[1px] w-16 bg-black"></div>
                </div>
                <div className="flex flex-col space-y-5">
                  <p className="font-satoshi w-full paragraphText-Size text-black">
                    The design services we offer ensure seamless functionality
                    and appearance across all devices, including desktops,
                    tablets, and mobile phones. As a result, the user experience
                    is enhanced and engagement is increased.
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
            <div className="flex relative rounded-lg col-span-1 bg-white w-full h-full">
              <Link href={"/projects"}>
                <div className="flex absolute top-0 left-0 bg-[#F2F4F9] my-8 mx-8 items-center justify-between py-2.5 text-[#27172F] space-x-2 rounded-[50px] sm:w-fit w-full z-20  px-4    font-sora text-center text-sm ">
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
                <div className="font-sora w-fit my-20  font-semibold text-[#101763] text-3xl ">
                  <h3 className="mb-4">Custom Web Development</h3>
                  <div className="h-[1px] w-16 bg-black"></div>
                </div>
                <div className="flex flex-col space-y-5">
                  <p className="font-satoshi w-full paragraphText-Size text-black">
                    Our skilled developers can create custom websites tailored
                    to your business needs. We use the latest technologies and
                    frameworks to build robust and scalable websites that are
                    easy to manage and update.
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
            <div className="flex relative rounded-lg col-span-1 bg-white w-full h-full">
              <Link href={"/projects"}>
                <div className="flex absolute top-0 left-0 bg-[#F2F4F9] my-8 mx-8 items-center justify-between py-2.5 text-[#27172F] space-x-2 rounded-[50px] sm:w-fit w-full z-20  px-4    font-sora text-center text-sm ">
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
                <div className="font-sora w-fit my-20  font-semibold text-[#101763] text-3xl ">
                  <h3 className="mb-4">E-commerce Solutions</h3>
                  <div className="h-[1px] w-16 bg-black"></div>
                </div>
                <div className="flex flex-col space-y-5">
                  <p className="font-satoshi w-full paragraphText-Size text-black">
                    We specialize in developing e-commerce websites that are
                    user-friendly, secure, and optimized for conversions. Our
                    e-commerce solutions include features such as product
                    catalogs, shopping carts, payment gateways, and inventory
                    management.
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
            <div className="col-span-1"></div>
            <div className="flex relative rounded-lg col-span-1 bg-white w-full h-full">
              <Link href={"/projects"}>
                <div className="flex absolute top-0 left-0 bg-[#F2F4F9] my-8 mx-8 items-center justify-between py-2.5 text-[#27172F] space-x-2 rounded-[50px] sm:w-fit w-full z-20  px-4    font-sora text-center text-sm ">
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
                <div className="font-sora w-fit my-20  font-semibold text-[#101763] text-3xl ">
                  <h3 className="mb-4">UI/UX Design</h3>
                  <div className="h-[1px] w-16 bg-black"></div>
                </div>
                <div className="flex flex-col space-y-5">
                  <p className="font-satoshi w-full paragraphText-Size text-black">
                    We develop visually captivating user interfaces that enhance
                    the user experience. Our UI/UX design services include
                    wireframing, prototyping, and conducting user testing to
                    ensure seamless navigation of your website and visually
                    appealing.
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
            <div className="flex relative rounded-lg col-span-1 bg-white w-full h-full">
              <Link href={"/projects"}>
                <div className="flex absolute top-0 left-0 bg-[#F2F4F9] my-8 mx-8 items-center justify-between py-2.5 text-[#27172F] space-x-2 rounded-[50px] sm:w-fit w-full z-20  px-4    font-sora text-center text-sm ">
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
                <div className="font-sora w-fit my-20  font-semibold text-[#101763] text-3xl ">
                  <h3 className="mb-4">SEO Optimisation</h3>
                  <div className="h-[1px] w-16 bg-black"></div>
                </div>
                <div className="flex flex-col space-y-5">
                  <p className="font-satoshi w-full paragraphText-Size text-black">
                    We understand the importance of search engine optimisation
                    (SEO) in driving organic traffic to your website. Our web
                    design services include on-page optimisation, keyword
                    research, and content optimisation to improve your website's
                    visibility in search engine results.
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
            <div className="flex relative rounded-lg col-span-1 bg-white w-full h-full">
              <Link href={"/projects"}>
                <div className="flex absolute top-0 left-0 bg-[#F2F4F9] my-8 mx-8 items-center justify-between py-2.5 text-[#27172F] space-x-2 rounded-[50px] sm:w-fit w-full z-20  px-4    font-sora text-center text-sm ">
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
                <div className="font-sora w-fit my-20  font-semibold text-[#101763] text-3xl ">
                  <h3 className="mb-4">Website Maintenance and Support</h3>
                  <div className="h-[1px] w-16 bg-black"></div>
                </div>
                <div className="flex flex-col space-y-5">
                  <p className="font-satoshi w-full paragraphText-Size text-black">
                    We offer ongoing website maintenance and support services to
                    ensure that your website is always up-to-date, secure, and
                    performing optimally. Our team can assist with any technical
                    issues, updates, or enhancements you may require.
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
              Why is a Web Design Company important in Dammam?
            </h3>
            <p className="font-satoshi w-full paragraphText-Size col-span-5 text-[#27172F]">
              A web design company in Dammam is crucial for your business as it
              helps create a strong online presence. We have the expertise to
              design a visually appealing, user-friendly website that attracts
              potential customers. A professional web design company ensures
              your website is responsive, optimized for search engines, and
              compatible with different devices. They also provide ongoing
              support and maintenance to keep your website up-to-date. With
              their services, you can effectively showcase your products or
              services, increase brand visibility, and drive more traffic and
              conversions to your business.
            </p>
          </div>
        </div>
        <div className="w-full px-5 sm:px-10  h-fit  md:px-12">
          <div className="w-full h-fit relative overflow-hidden  flex ">
            <Image
              src={image2}
              className="object-cover w-[50%] rounded-lg absolute top-0 right-0 h-full object-right"
            />
            <div className="absolute right-0 top-0 h-full w-[100%] rounded-lg  bg-gradient-to-l from-transparent to-[#F2F4F9] to-50% z-20"></div>
            {/* <div className="absolute -right-32 top-1/2 -translate-y-1/2 z-20 blur-[120px] rounded-full w-64 h-64 bg-[#FF0C15]"></div> */}

            <div className="flex flex-col justify-center space-y-5 py-24 text-black  z-20 relative w-[55%]  px-20 h-fit">
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
                Need A Web Design Company In Dammam?
              </h3>
              <p className="font-satoshi w-full paragraphText-Size">
                At Cheval ME, we understand the need for a reliable web design
                company in Dammam. We are dedicated to delivering top-notch web
                design. We tailor our services to suit the distinct requirements
                of businesses in the region. Our skilled designers and
                developers work closely with clients to create visually
                appealing, user-friendly websites that communicate their brand
                message. With our expertise, businesses in Dammam can enhance
                their online presence and attract more customers.
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
      </div>

      <div className="relative w-screen h-fit  py-12 sm:py-14 md:py-16 space-y-12 sm:space-y-14 md:space-y-16 flex items-center flex-col bg-white overflow-x-hidden">
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
              Why Choose Us For Web Design Company In Dammam
            </h3>
            <div className="col-span-2 w-full flex flex-col gap-y-3">
              <div className="px-10 py-8 flex bg-[#F8F8F8]  rounded-lg items-center gap-x-8">
                <Image src={mitre} className="w-[85px] h-fit object-contain" />
                <div className=" text-[#27172F] flex w-full flex-col space-y-1.5">
                  <h4 className="font-sora font-semibold text-3xl">
                    Expertise
                  </h4>
                  <p className="font-satoshi w-full paragraphText-Size ">
                    Our team of skilled web designers and developers in Dammam
                    have years of experience creating visually appealing and
                    user-friendly websites.
                  </p>
                </div>
              </div>
              <div className="px-10 py-8 flex bg-[#F8F8F8]  rounded-lg items-center gap-x-8">
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
              <div className="px-10 py-8 flex bg-[#F8F8F8]  rounded-lg items-center gap-x-8">
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
              <div className="px-10 py-8 flex bg-[#F8F8F8]  rounded-lg items-center gap-x-8">
                <Image src={card} className="w-[85px] h-fit object-contain" />
                <div className=" text-[#27172F] flex w-full flex-col space-y-1.5">
                  <h4 className="font-sora font-semibold text-3xl">
                    Competitive Pricing
                  </h4>
                  <p className="font-satoshi w-full paragraphText-Size ">
                    Our web design services in Dammam are competitively priced,
                    offering you excellent value for money without compromising
                    on quality.
                  </p>
                </div>
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
                    ǎOur team at Cheval ME is dedicated to creating unique and
                    innovative web designs that stand out from the competition.
                    We believe in pushing boundaries and thinking outside the
                    box to deliver exceptional client results.
                  </p>
                </div>
                <div className="py-2 flex  gap-x-4">
                  <Image
                    src={arrow}
                    className="w-6 mt-1 h-fit object-contain"
                  />
                  <p className="font-satoshi w-full paragraphText-Size ">
                    Unlike other web design companies in Dammam, we prioritize
                    the user experience and ensure that Our websites are
                    aesthetically pleasing and user-friendly, making navigation
                    effortless and useful. We recognise the significance of
                    crafting a seamless and delightful online experience for
                    visitors.
                  </p>
                </div>{" "}
                <div className="py-2 flex  gap-x-4">
                  <Image
                    src={arrow}
                    className="w-6 mt-1 h-fit object-contain"
                  />
                  <p className="font-satoshi w-full paragraphText-Size ">
                    At Cheval ME, we take a personalized approach to web design.
                    We collaborate closely with our clients, understanding their
                    needs and goals and customizing our designs to meet those
                    requirements. We focus on creating websites that reflect our
                    client's brand identity and message.
                  </p>
                </div>{" "}
                <div className="py-2 flex  gap-x-4">
                  <Image
                    src={arrow}
                    className="w-6 mt-1 h-fit object-contain"
                  />
                  <p className="font-satoshi w-full paragraphText-Size ">
                    We pride ourselves on delivering high-quality web designs
                    within the agreed-upon timeframe. Our experienced designers
                    and developers work efficiently to ensure that our client's
                    websites are launched on schedule without compromising
                    quality.
                  </p>
                </div>
              </div>
            </div>
            <Image
              src={image4}
              className="object-cover col-span-1 w-full top-0 rounded-lg  h-full object-center"
            />
          </div>
        </div>
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
        <div className="w-full px-5  sm:px-10  h-fit  md:px-12">
          <div className="w-full h-fit relative overflow-hidden  flex ">
            <Image
              src={image3}
              className="object-cover w-1/2 rounded-lg absolute top-0 right-0 h-full object-right"
            />
            <div className="absolute right-0 top-0 h-full w-[100%] rounded-lg  bg-gradient-to-l from-transparent to-[#F2F4F9] to-50% z-20"></div>
            {/* <div className="absolute -right-32 top-1/2 -translate-y-1/2 z-20 blur-[120px] rounded-full w-64 h-64 bg-[#FF0C15]"></div> */}

            <div className="flex flex-col justify-center space-y-5 py-24 text-black  z-20 relative w-[55%]  px-20 h-fit">
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
                Benefits Of Hiring Our Web Design Services In Dammam
              </h3>
              <p className="font-satoshi w-full paragraphText-Size">
                Our web design company in Dammam offers the best web design
                services in the area, providing numerous benefits to businesses.
                With our expertise, we create visually appealing We create
                user-friendly websites that effectively portray your brand and
                allure potential customers. Our skilled designers and developers
                ensure your website is responsive, optimized for search engines,
                and compatible with all devices. By engaging our services, you
                can save valuable time and effort as we handle all aspects of
                web design, from concept to implementation. Additionally, our
                services are cost-effective, delivering high-quality results
                within your budget. Trust our web design company in Dammam to
                elevate your online presence and foster business growth.
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
          <div className="w-full h-fit relative overflow-hidden rounded-lg flex items-end justify-end">
            <Image
              src={image5}
              className="object-cover w-1/2 absolute top-0 rounded-lg left-0 h-full object-left"
            />
            <div className="absolute right-0 top-0 h-full w-[100%] rounded-lg bg-gradient-to-r from-transparent to-black to-50% z-20"></div>
            {/* <div className="absolute -right-32 top-1/2 -translate-y-1/2 z-20 blur-[120px] rounded-full w-64 h-64 bg-[#FF0C15]"></div> */}

            <div className="flex flex-col justify-center space-y-8 py-24 text-white  z-20 relative w-[55%]  pr-5 sm:pr-10 md:pr-12 h-fit">
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
                Transform Your Web Design Into a Fully Functional Website With
                Our Top-Notch Web Development Services!
              </h3>
              <Link href={"/contact-us"}>
                <div className="flex items-center justify-between py-3 space-x-5 rounded-[50px] sm:w-fit w-full  px-6 border border-[#EE2525] bg-[#EE2525] text-white   font-sora text-center  text-sm ">
                  <span className="">Contact Us</span>
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
