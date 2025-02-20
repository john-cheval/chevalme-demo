/** @format */

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function Section6() {
  return (
    <div className="relative w-screen h-fit  py-12 sm:py-14 md:py-16 text-[#101763] bg-white overflow-x-hidden">
      <div className="relative max-w-screen px-5 sm:px-10 md:px-12 sm:py-0 py-10 w-full">
        <div className="relative flex flex-col space-y-10 h-fit w-full gap-x-14">
          <div className="w-full">
            <h3
              style={{}}
              className="font-sora font-semibold text-[#101763]  text-4xl  leading-normal "
            >
              <span
                style={{
                  background:
                    "linear-gradient(92.09deg, #FF0C15 0.33%, #101763 26.13%)",

                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "transparent",
                }}
              >
                FAQs
              </span>
            </h3>
          </div>

          <div className="w-full">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem
                value="item-1"
                className=" border-t py-3 border-[#101763] border-b-0"
              >
                <AccordionTrigger className="text-2xl text-[#101763] font-sora font-semibold ">
                  What is included in the WordPress development support plans?
                </AccordionTrigger>
                <AccordionContent className="paragraphSize  text-black">
                  Cheval’s website development company in Abu Dhabi takes care
                  of all necessary aspects of WordPress website management, like
                  software and plugin updates, regular backups, and security
                  monitoring.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-2"
                className=" border-t py-3 border-[#101763] border-b-0"
              >
                <AccordionTrigger className="text-2xl text-[#101763] font-sora font-semibold ">
                  What features can I expect on a web developed by Cheval with
                  PHP?
                </AccordionTrigger>
                <AccordionContent className="paragraphSize  text-black">
                  Cheval specializes in creating websites with a powerful
                  backend and a seamless front end, ensuring a highly functional
                  and user-friendly webpage for clients.
                </AccordionContent>
              </AccordionItem>{" "}
              <AccordionItem
                value="item-3"
                className=" border-t py-3 border-[#101763] border-b-0"
              >
                <AccordionTrigger className="text-2xl text-[#101763] font-sora font-semibold ">
                  How does Cheval ensure the maintenance and unique content for
                  Joomla websites?
                </AccordionTrigger>
                <AccordionContent className="paragraphSize  text-black">
                  Cheval's team of professionals is committed to delivering
                  outstanding results by utilizing essential SEO tools and
                  integrating vital plugins through Joomla maintenance services.
                </AccordionContent>
              </AccordionItem>{" "}
              <AccordionItem
                value="item-4"
                className=" border-b-0 border-t py-3 border-[#101763]"
              >
                <AccordionTrigger className="text-2xl text-[#101763] font-sora font-semibold ">
                  What programming languages does your team use to develop
                  website development?
                </AccordionTrigger>
                <AccordionContent className="paragraphSize  text-black">
                  The website development team of Cheval web design company may
                  utilize a range of programming languages, depending on the
                  project requirements. This can include languages such as:
                  HTML, CSS, JavaScript, PHP, and more.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-5"
                className=" border-b border-t py-3 border-[#101763]"
              >
                <AccordionTrigger className="text-2xl text-[#101763] font-sora font-semibold ">
                  How do I connect with the Cheval team?
                </AccordionTrigger>
                <AccordionContent className="paragraphSize  text-black">
                  You can contact the team by contacting us at 971 50 356 0927
                  or send your inquiries to: info@chevalme.com Further, you can
                  also fill up the inquiry form, which helps understand the
                  client’s requirements.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section6;
