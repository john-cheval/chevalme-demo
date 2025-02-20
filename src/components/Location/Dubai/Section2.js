/** @format */

import React, { useState } from "react";
import forwardIcon from "../../../../public/arrow_forward.png";
import axios from "axios";
import FormData from "form-data";
import Image from "next/image";
function Section2() {
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

      // console.log(response.data);
      if (!response) {
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="relative w-screen h-fit  py-12 sm:py-14 md:py-16 space-y-12 sm:space-y-14 md:space-y-16 flex items-center flex-col bg-[#F8F8F8] overflow-x-hidden">
      <div className="w-full px-5  sm:px-10 space-y-12 sm:space-y-14 md:space-y-16 flex flex-col  md:px-12">
        <div className="flex flex-col space-y-4">
          <h3 className="font-sora font-semibold text-[#101763] max-w-[980px] text-5xl ">
            Have a Question or Need Assistance
          </h3>
          <p className="font-satoshi w-full paragraphText-Size max-w-[720px]">
            You're just a few clicks away! Complete the contact form to reach
            out to us and let us know how we can assist you.
          </p>
        </div>
        <form
          id="contactForm"
          onSubmit={handleSubmit}
          className="flex w-full items-center h-fit space-x-0 md:space-y-0 space-y-10 md:space-x-10 lg:space-x-14 xl:space-x-20  justify-center flex-col md:flex-row"
        >
          <div className="w-full md:w-1/2 h-fit space-y-10 flex flex-col">
            <div className="flex flex-col space-y-3">
              <p className="font-satoshi font-medium text-xl text-[#101763]">
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
              <p className="font-satoshi font-medium text-xl text-[#101763]">
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
              <p className="font-satoshi font-medium text-xl text-[#101763]">
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
              <p className="font-satoshi font-medium text-xl text-[#101763]">
                Website url
              </p>
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
                I agree to move processing the information submitted in order to
                respond to your request.
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
              <p className="font-satoshi font-medium text-xl text-[#101763]">
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
            <button className="flex -space-x-8 sm:self-auto self-center py-3 group sm:py-4 md:py-6">
              <div className="flex items-center h-11 md:h-14 w-44 md:pr-0 pr-4 md:w-56 rounded-[2rem] text-xs md:text-sm justify-center text-white group-hover:text-[#101763] cursor-pointer group-hover:bg-[#c8c8c8] transition-all duration-500 bg-black font-sora tracking-tighter">
                Send a request
              </div>
              <div className="w-11 md:w-14 h-11 md:h-14 rounded-full bg-[#D81100] flex items-center justify-center">
                <Image
                  src={forwardIcon}
                  className="w-3 md:w-4 group-hover:-rotate-45 duration-300 transition-all invert h-3 md:h-4 object-contain"
                />
              </div>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Section2;
