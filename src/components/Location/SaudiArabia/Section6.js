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
                  How long does it take to complete a web design project?
                </AccordionTrigger>
                <AccordionContent className="paragraphSize  text-black">
                  The duration of a web design project depends on its complexity
                  and the client's specific requirements. However, on average,
                  we aim to complete a web design project within 4-6 weeks. This
                  timeframe allows us to ensure high-quality design and
                  development while meeting the client's expectations.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-2"
                className=" border-t py-3 border-[#101763] border-b-0"
              >
                <AccordionTrigger className="text-2xl text-[#101763] font-sora font-semibold ">
                  Can you provide examples of your previous web design work in
                  Saudi Arabia?
                </AccordionTrigger>
                <AccordionContent className="paragraphSize  text-black">
                  We have an extensive portfolio showcasing our previous web
                  design projects in Saudi Arabia. We can provide examples of
                  websites we have designed and developed for various
                  industries, including corporate websites, e-commerce
                  platforms, and personal blogs.
                </AccordionContent>
              </AccordionItem>{" "}
              <AccordionItem
                value="item-3"
                className=" border-t py-3 border-[#101763] border-b-0"
              >
                <AccordionTrigger className="text-2xl text-[#101763] font-sora font-semibold ">
                  Do you provide services for website maintenance and support?
                </AccordionTrigger>
                <AccordionContent className="paragraphSize  text-black">
                  Yes, we offer website maintenance and support services to
                  ensure your website remains up-to-date, secure, and optimally
                  functioning. Our team can assist with regular updates, bug
                  fixes, security patches, and any technical issues that may
                  arise.
                </AccordionContent>
              </AccordionItem>{" "}
              <AccordionItem
                value="item-4"
                className=" border-b-0 border-t py-3 border-[#101763]"
              >
                <AccordionTrigger className="text-2xl text-[#101763] font-sora font-semibold ">
                  How much do web design services in Saudi Arabia cost?
                </AccordionTrigger>
                <AccordionContent className="paragraphSize  text-black">
                  The cost of web design services in Saudi Arabia varies
                  depending on the complexity of the project, the number of
                  pages, and the specific features and functionalities required.
                  We provide customized quotes based on the client's
                  requirements and budget. Please get in touch with us to
                  receive a customized quote that caters to your requirements.
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
