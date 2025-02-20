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
                  Will I get my source code for my PHP development?
                </AccordionTrigger>
                <AccordionContent className="paragraphSize  text-black">
                  Yes, after the completion of the project, we will deliver the
                  client’s source code, and it's on you how to manage it as per
                  their requirement.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-2"
                className=" border-t py-3 border-[#101763] border-b-0"
              >
                <AccordionTrigger className="text-2xl text-[#101763] font-sora font-semibold ">
                  Do you develop Landing Pages for digital campaigns?
                </AccordionTrigger>
                <AccordionContent className="paragraphSize  text-black">
                  At Cheval - the web development company in Dubai, we
                  specialize in developing effective landing pages accessible to
                  users worldwide. We focus on constantly improving our web
                  design and development capabilities to provide the optimal
                  experience for our diverse clients.
                </AccordionContent>
              </AccordionItem>{" "}
              <AccordionItem
                value="item-3"
                className=" border-t py-3 border-[#101763] border-b-0"
              >
                <AccordionTrigger className="text-2xl text-[#101763] font-sora font-semibold ">
                  What services do you offer?
                </AccordionTrigger>
                <AccordionContent className="paragraphSize  text-black">
                  Besides building websites, the Cheval team also offers Search
                  Engine Optimization, Digital Marketing processes, E-commerce
                  solutions, etc., for your service/ product.
                </AccordionContent>
              </AccordionItem>{" "}
              <AccordionItem
                value="item-4"
                className=" border-b-0 border-t py-3 border-[#101763]"
              >
                <AccordionTrigger className="text-2xl text-[#101763] font-sora font-semibold ">
                  How do I connect with the team?
                </AccordionTrigger>
                <AccordionContent className="paragraphSize  text-black">
                  You can connect with the team by filling out the official
                  inquiry form on the official website or contacting
                  info@chevalme.com or +971 50 356 0927
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-5"
                className=" border-b border-t py-3 border-[#101763]"
              >
                <AccordionTrigger className="text-2xl text-[#101763] font-sora font-semibold ">
                  How long does it take to modify an existing website?
                </AccordionTrigger>
                <AccordionContent className="paragraphSize  text-black">
                  It can take anywhere from six to twenty-four weeks to build
                  and start a website with our web development team depending on
                  its size, complexity, and, most importantly, how involved the
                  client is in the process. We have developers & web designers,
                  and project management systems in place to build and create
                  the most user-friendly, accessible, and fast websites
                  available.
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
