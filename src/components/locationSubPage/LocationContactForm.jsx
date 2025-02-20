"use client";
import React, { useState } from "react";

const LocationContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    textPhone: "",
    location: "",
    selectedService: "",
    textareaMsg: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newformData = new FormData();
    newformData.append("text-name", formData.firstName);
    newformData.append("last-name", formData.lastName);
    newformData.append("text-phone", formData.textPhone);
    newformData.append("email-address", formData.emailAddress);
    newformData.append("text-company", formData.location);
    newformData.append("textarea-msg", formData.textareaMsg);
    newformData.append("selected-service", formData.selectedService);
    newformData.append("_wpcf7_unit_tag", "2fcfb42");
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
        firstName: "",
        lastName: "",
        emailAddress: "",
        textPhone: "",
        location: "",
        selectedService: "",
        textareaMsg: "",
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <div className="flex flex-wrap" style={{ paddingTop: "30px" }}>
        <div className="sm:w-1/2 w-full">
          <div className="pb-[20px]">
            <span className="wpcf7-form-control-wrap" data-name="text-name">
              <input
                size="40"
                maxLength="50"
                className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required required error"
                aria-required="true"
                aria-invalid="true"
                placeholder="First Name *"
                value={formData.firstName}
                onChange={handleChange}
                type="text"
                name="text-name"
              />
            </span>
          </div>
        </div>

        <div className="sm:w-1/2 w-full">
          <div className="pb-[20px] sm:pl-2.5 ">
            <span className="wpcf7-form-control-wrap" data-name="last-name">
              <input
                size="40"
                maxLength="50"
                className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required required"
                aria-required="true"
                aria-invalid="false"
                placeholder="Last Name *"
                value={formData.lastName}
                onChange={handleChange}
                type="text"
                name="last-name"
              />
            </span>
          </div>
        </div>

        <div className="sm:w-1/2 w-full">
          <div className="pb-[20px]">
            <span className="wpcf7-form-control-wrap" data-name="email-address">
              <input
                size="40"
                maxLength="50"
                className="wpcf7-form-control wpcf7-email wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-email required email"
                aria-required="true"
                aria-invalid="false"
                placeholder="Email*"
                value={formData.emailAddress}
                onChange={handleChange}
                type="email"
                name="email-address"
              />
            </span>
          </div>
        </div>

        <div className="sm:w-1/2 w-full">
          <div className="pb-[20px] sm:pl-2.5">
            <span className="wpcf7-form-control-wrap" data-name="text-phone">
              <input
                size="40"
                maxLength="15"
                className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required required"
                aria-required="true"
                aria-invalid="false"
                placeholder="Phone Number *"
                type="number"
                value={formData.textPhone}
                onChange={handleChange}
                name="text-phone"
              />
            </span>
          </div>
        </div>

        <div className="sm:w-1/2 w-full">
          <div className="pb-[20px]">
            <span className="wpcf7-form-control-wrap" data-name="text-company">
              <input
                size="40"
                maxLength="50"
                className="wpcf7-form-control wpcf7-text"
                aria-invalid="false"
                placeholder="Location"
                value={formData.location}
                onChange={handleChange}
                type="text"
                name="text-company"
              />
            </span>
          </div>
        </div>

        <div className="sm:w-1/2 w-full">
          <div className="pb-[20px] sm:pl-2.5">
            <span className="wpcf7-form-control-wrap" data-name="text-service">
              <input
                size="40"
                maxLength="50"
                className="wpcf7-form-control wpcf7-text"
                aria-invalid="false"
                placeholder="Types Of Services"
                value={formData.selectedService}
                onChange={handleChange}
                type="text"
                name="text-service"
              />
            </span>
          </div>
        </div>

        <div className="w-full w_submit_c">
          <div className="pb-[34px]">
            <span className="wpcf7-form-control-wrap" data-name="textarea-msg">
              <textarea
                cols="40"
                rows="20"
                maxLength="250"
                style={{
                  height: "130px",
                }}
                className="wpcf7-form-control wpcf7-textarea  w-full border-b border-b-sealbrown border-b-solid text-base text-ironsidegrey placeholdertext-ironsidegrey focusborder-b-cinnabar hoverborder-b-cinnabar focus-visibleshadow-none focus-visibleoutline-none resize-none"
                aria-invalid="false"
                placeholder="Message"
                name="textarea-msg"
                value={formData.textareaMsg}
                onChange={handleChange}
              ></textarea>
            </span>
          </div>
        </div>

        <div className="buttond_outer">
          <input
            className="wpcf7-form-control wpcf7-submit has-spinner theme-btn my-5"
            type="submit"
            value="SUBMIT MESSAGE"
          />
        </div>
      </div>
    </form>
  );
};

export default LocationContactForm;
