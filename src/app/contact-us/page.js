import ContactPage from "@/pages/ContactPage";
import React from "react";

export async function generateMetadata(parent) {
  const data = await fetch(
    `https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/homepage_details?ID=8`
  ).then((res) => res.json());

  return {
    title:
      data?.meta_title ||
      "Best Web Developers in Dubai | Software Developers in Dubai",
    description:
      data?.meta_description ||
      "Partner with top Web Developers in Dubai at Cheval . We Specialize in Mobile App and Software Development, delivering cutting-edge tailored digital solutions.",
    alternates: {
      canonical: `https://chevalme.com/contact-us/`,
    },
  };
}
const Contact = () => {
  return <ContactPage />;
};

export default Contact;
