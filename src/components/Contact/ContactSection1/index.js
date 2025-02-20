/** @format */
"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import contact from "../../../../public/Contact/contact.png";
import forwardIcon from "../../../../public/arrow_forward.png";
import arrow from "../../../../public/arrow_outward.svg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
import axios from "axios";
import FormData from "form-data";
import { ArrowRight } from "lucide-react";
function ContactSection1() {
  const [formData, setFormData] = useState({
    textName: "",
    textPhone: "",
    emailAddress: "",
    textCompany: "",
    textareaMsg: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // console.log(formData);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    // console.log(formData);
    const newformData = new FormData();
    newformData.append("text-name", formData.textName);
    newformData.append("text-phone", formData.textPhone);
    newformData.append("email-address", formData.emailAddress);
    newformData.append("text-company", formData.textCompany);
    newformData.append("textarea-msg", formData.textareaMsg);
    newformData.append("_wpcf7_unit_tag", "2fcfb42");
    // const options = {
    //   method: "POST",
    //   url: "https://d331b20430.nxcli.net/chevalapi/wp-json/contact-form-7/v1/contact-forms/5/feedback",
    //   headers: {},
    // };
    try {
      const response = await axios({
        method: "POST",
        url: "https://d331b20430.nxcli.net/chevalapi/wp-json/contact-form-7/v1/contact-forms/5/feedback",
        data: newformData,
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (!response) {
        throw new Error("Network response was not ok");
      }
      setFormData({
        textName: "",
        textPhone: "",
        emailAddress: "",
        textCompany: "",
        textareaMsg: "",
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  useGSAP(() => {
    gsap.registerPlugin(ScrollToPlugin);
    function gotoForm() {
      gsap.to(window, { duration: 1, scrollTo: "#contactForm" });
    }
    document.querySelectorAll(".contactBtns").forEach((contact) => {
      contact.addEventListener("click", gotoForm);
    });
  }, []);

  return (
    <div className="relative w-screen h-fit pt-28 sm:pt-36 md:pt-40 lg:pt-44 bg-[#F6F6F4] overflow-x-hidden">
      <div className="relative flex-col space-y-14 flex h-fit w-full px-5 sm:px-10 md:px-12 text-[#101763]">
        <div className="w-full flex items-start lg:items-center h-fit space-x-0 md:space-y-0 space-y-10 md:space-x-10 lg:space-x-14 xl:space-x-20 justify-center flex-col md:flex-row ">
          <div className="w-full md:w-1/2 h-fit space-y-6 md:space-y-10 md:items-start items-center md:justify-start justify-center flex flex-col">
            <div className="flex flex-col md:space-y-2 space-y-1 sm:space-y-3">
              <h3 className="font-sora md:text-left text-center text-3xl sm:text-[44px] tracking-tighter">
                Contact Us
              </h3>
              <p className="font-satoshi md:text-left text-center paragraphText-Size pl-1">
                Contact us and start project!
              </p>
            </div>
            <Image
              src={contact}
              className="w-full h-[480px] object-center object-cover rounded-3xl"
              alt="contact"
            />
          </div>
          <div className="w-full md:w-1/2 h-fit flex flex-col sm:items-start items-center sm:justify-start justify-center space-y-12 sm:space-y-20 md:space-y-32 lg:space-y-40">
            <div className="flex flex-col space-y-5">
              <h4 className="font-sora max-w-[520px] text-2xl sm:text-[33px] leading-normal sm:leading-normal sm:text-left text-center font-semibold ">
                Let’s create something great together.
              </h4>
              <div className="w-full hidden sm:grid grid-flow-row lg:grid-rows-1 gap-x-2 lg:gap-y-0 gap-y-2 lg:gap-x-4 grid-cols-9 md:grid-cols-10 lg:grid-cols-9 xl:grid-cols-10 ">
                <div className="contactBtns col-span-3 md:col-span-5 lg:col-span-3 py-3 rounded-[50px] px-2 bg-[#D81100] font-sora border-2 border-[#D81100] text-center font-semibold text-xs text-white">
                  New Business
                </div>
                <div className="contactBtns col-span-3 md:col-span-5 lg:col-span-3 py-3 rounded-[50px] px-2 bg-[#101763] font-sora text-center border-2 border-[#101763] font-semibold text-[10px] lg:text-xs text-white">
                  General Inquries
                </div>
                <div className="contactBtns col-span-3 md:col-span-5 lg:col-span-3 py-3 rounded-[50px] px-2 text-[#101763] border-2 border-[#101763] font-sora text-center font-semibold text-xs ">
                  Careers
                </div>
              </div>
            </div>
            <div className="max-w-[328px] sm:items-start items-center sm:justify-start justify-center md:text-left text-center flex flex-col space-y-6">
              <span className="font-satoshi font-semibold text-xl text-[#D81100]">
                Cheval
              </span>
              <p className="font-satoshi text-base sm:text-xl pr-1">
                Suite 1, 101, Capital Golden Tower,
                <br /> Business Bay, Dubai, UAE
              </p>
              <h4 className="font-satoshi text-xl">+971 50 356 0927</h4>
              <h4 className="font-satoshi text-xl">+971 45 516 085</h4>
              <div className="flex items-center justify-between py-3 space-x-5 rounded-[50px] sm:w-fit w-full  px-6 text-[#101763] bg-white  font-sora text-center font-semibold text-xs ">
                <span className="">info@chevalme.com</span>
                <svg
                  className="w-3 object-contain"
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.671646 7.29248L0.0625 6.68333L5.80279 0.9375H0.584146V0.0625H7.29248V6.77083H6.41748V1.55219L0.671646 7.29248Z"
                    fill="#101763"
                  />
                </svg>
              </div>
              <div className="h-[1px] sm:block hidden w-14 bg-black rounded-md"></div>
            </div>
          </div>
        </div>
        <form
          id="contactForm"
          onSubmit={handleSubmit}
          className="flex w-full items-center h-fit space-x-0 md:space-y-0 space-y-10 md:space-x-10 lg:space-x-14 xl:space-x-20 pt-10 sm:pt-16 md:pt-24 pb-16 justify-center flex-col md:flex-row"
        >
          <div className="w-full md:w-1/2 h-fit space-y-10 flex flex-col">
            <div className="flex flex-col space-y-3">
              <p className="font-satoshi font-medium text-xl">
                What’s your name? <span className="text-[#D81100]">*</span>
              </p>
              <input
                className="focus:ring-0 focus:outline-none border-b px-0.5 border-[#C4C4C4] text-[#757575] font-satoshi font-medium text-sm py-5 bg-transparent w-full active:ring-0 active:ring-offset-0 focus:ring-offset-0"
                type="text"
                id="textName"
                name="textName"
                placeholder="Your full name"
                value={formData.textName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col space-y-3">
              <p className="font-satoshi font-medium text-xl">
                Your email address <span className="text-[#D81100]">*</span>
              </p>
              <input
                className="border-b px-0.5 focus:outline-none border-[#C4C4C4] text-[#757575] font-satoshi font-medium text-sm py-5 bg-transparent w-full focus:ring-0 focus:ring-offset-0"
                type="email"
                id="emailAddress"
                name="emailAddress"
                value={formData.emailAddress}
                onChange={handleChange}
                required
                placeholder="E-mail address"
              />
            </div>
            <div className="flex flex-col space-y-3">
              <p className="font-satoshi font-medium text-xl">
                Your phone number <span className="text-[#D81100]">*</span>
              </p>
              <input
                className="border-b px-0.5 focus:outline-none border-[#C4C4C4] text-[#757575] font-satoshi font-medium text-sm py-5 bg-transparent w-full focus:ring-0 focus:ring-offset-0"
                type="text"
                id="textPhone"
                name="textPhone"
                value={formData.textPhone}
                onChange={handleChange}
                // required
                placeholder="Phone number"
              />
            </div>
            <div className="flex flex-col space-y-3">
              <p className="font-satoshi font-medium text-xl">Website url</p>
              <input
                className="border-b px-0.5 focus:outline-none border-[#C4C4C4] text-[#757575] font-satoshi font-medium text-sm py-5 bg-transparent w-full focus:ring-0 focus:ring-offset-0"
                type="text"
                id="textCompany"
                name="textCompany"
                value={formData.textCompany}
                onChange={handleChange}
                required
                placeholder="www.domine.com"
              />
            </div>
            <div className=" hidden md:inline-flex items-center">
              <label
                className="relative flex items-center pr-3 rounded-full cursor-pointer"
                htmlFor="check"
              >
                <input
                  type="checkbox"
                  className=" peer relative h-6 w-6 cursor-pointer rounded-none  appearance-none  border border-[#C4C4C4] transition-all  checked:border-[#101763] checked:bg-[#101763] checked:before:bg-[#101763] "
                  id="check"
                />
                <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-[35%] -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-width="1"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
              </label>
              <label
                className="font-satoshi max-w-[344px] text-sm cursor-pointer select-none text-[#757575]"
                htmlFor="check"
              >
                I agree processing the information submitted in order to respond
                to your request.
              </label>
            </div>
            <div className="hidden md:inline-flex items-center">
              <label
                className="relative flex items-center pr-3 rounded-full cursor-pointer"
                htmlFor="check"
              >
                <input
                  type="checkbox"
                  className=" peer relative h-6 w-6 cursor-pointer rounded-none  appearance-none  border border-[#C4C4C4] transition-all  checked:border-[#101763] checked:bg-[#101763] checked:before:bg-[#101763] "
                  id="check2"
                />
                <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-[35%] -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-width="1"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
              </label>
              <label
                className="font-satoshi text-sm cursor-pointer select-none text-[#757575]"
                htmlFor="check2"
              >
                Sign up to receive our monthly newsletter.
              </label>
            </div>
          </div>
          <div className="w-full md:w-1/2 h-fit space-y-10 flex flex-col">
            <div className="flex flex-col space-y-3">
              <p className="font-satoshi font-medium text-xl">
                Describe your project <span className="text-[#D81100]">*</span>
              </p>
              <textarea
                placeholder="Write here..."
                id="textareaMsg"
                name="textareaMsg"
                value={formData.textareaMsg}
                onChange={handleChange}
                required
                className="border p-3 h-80 focus:outline-none border-[#C4C4C4] text-[#757575] font-satoshi font-medium text-sm py-5 bg-transparent w-full focus:ring-0 focus:ring-offset-0"
              ></textarea>
            </div>
            <div className=" md:hidden inline-flex items-center">
              <label
                className="relative flex items-center pr-3 rounded-full cursor-pointer"
                htmlFor="check"
              >
                <input
                  type="checkbox"
                  className=" peer relative h-6 w-6 cursor-pointer rounded-none  appearance-none  border border-[#C4C4C4] transition-all  checked:border-[#101763] checked:bg-[#101763] checked:before:bg-[#101763] "
                  id="check"
                />
                <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-[35%] -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-width="1"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
              </label>
              <label
                className="font-satoshi max-w-[344px] text-sm cursor-pointer select-none text-[#757575]"
                htmlFor="check"
              >
                I agree to move processing the information submitted in order to
                respond to your request.
              </label>
            </div>
            <div className="md:hidden inline-flex items-center">
              <label
                className="relative flex items-center pr-3 rounded-full cursor-pointer"
                htmlFor="check"
              >
                <input
                  type="checkbox"
                  className=" peer relative h-6 w-6 cursor-pointer rounded-none  appearance-none  border border-[#C4C4C4] transition-all  checked:border-[#101763] checked:bg-[#101763] checked:before:bg-[#101763] "
                  id="check2"
                />
                <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-[35%] -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-width="1"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
              </label>
              <label
                className="font-satoshi text-sm cursor-pointer select-none text-[#757575]"
                htmlFor="check2"
              >
                Sign up to receive our monthly newsletter.
              </label>
            </div>
            {/* <button className="flex -space-x-8 sm:self-auto self-center py-3 group sm:py-4 md:py-6">
              <div className="flex items-center h-11 md:h-14 w-44 md:pr-0 pr-4 md:w-56 rounded-[2rem] text-xs md:text-sm justify-center text-white group-hover:text-[#101763] cursor-pointer group-hover:bg-[#c8c8c8] transition-all duration-500 bg-black font-sora tracking-tighter">
                Send a request
              </div>
              <div className="w-11 md:w-14 h-11 md:h-14 rounded-full bg-[#D81100] flex items-center justify-center">
                <Image
                  src={forwardIcon}
                  className="w-3 md:w-4 group-hover:-rotate-45 duration-300 transition-all invert h-3 md:h-4 object-contain"
                  alt="Forward Icon"
                />
              </div>
            </button> */}
            <button className="bg-[#D81100] text-white font-satoshi text-base leading-[154%] w-[175px] h-[59px] rounded-[10px] flex items-center justify-center gap-1 group hover:bg-[#101763] transition-all duration-500 ">
              Send a request{" "}
              <ArrowRight className="group-hover:translate-x-3 transition-all" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactSection1;
