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
                  What services do you offer for web development in Riyadh?
                </AccordionTrigger>
                <AccordionContent className="paragraphSize  text-black">
                  We offer a wide range of web development services in Riyadh,
                  including responsive website design, e-commerce website
                  development, custom web application development, website
                  maintenance and support, and search engine optimisation (SEO)
                  services.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-2"
                className=" border-t py-3 border-[#101763] border-b-0"
              >
                <AccordionTrigger className="text-2xl text-[#101763] font-sora font-semibold ">
                  How long does it take to complete a web development project?
                </AccordionTrigger>
                <AccordionContent className="paragraphSize  text-black">
                  The duration of a web development project depends on its
                  complexity and the client's specific requirements. However, on
                  average, our team can complete a web development project
                  within an average of 8 weeks, again this is depending on the
                  scope of work and complexity of the website project. We ensure
                  timely delivery without compromising on quality.
                </AccordionContent>
              </AccordionItem>{" "}
              <AccordionItem
                value="item-3"
                className=" border-t py-3 border-[#101763] border-b-0"
              >
                <AccordionTrigger className="text-2xl text-[#101763] font-sora font-semibold ">
                  Can you provide examples of websites you have designed in
                  Riyadh?
                </AccordionTrigger>
                <AccordionContent className="paragraphSize  text-black">
                  Yes, we have an extensive portfolio of websites designed for
                  clients in Riyadh. You can visit the dedicated section of our
                  website to view some of our previous projects and see the
                  quality of our work.
                </AccordionContent>
              </AccordionItem>{" "}
              <AccordionItem
                value="item-4"
                className=" border-b-0 border-t py-3 border-[#101763]"
              >
                <AccordionTrigger className="text-2xl text-[#101763] font-sora font-semibold ">
                  Do you offer website maintenance and support services?
                </AccordionTrigger>
                <AccordionContent className="paragraphSize  text-black">
                  We provide ongoing website maintenance and support services to
                  ensure your website remains up-to-date, secure, and
                  functioning optimally. Our team can assist you with any
                  technical issues or updates you may require.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-5"
                className=" border-b border-t py-3 border-[#101763]"
              >
                <AccordionTrigger className="text-2xl text-[#101763] font-sora font-semibold ">
                  How much does web development services in Riyadh cost?
                </AccordionTrigger>
                <AccordionContent className="paragraphSize  text-black">
                  The cost of web development services in Riyadh varies
                  depending on the project's complexity and the client's
                  specific requirements. We offer competitive pricing and
                  provide customized quotes based on your needs. Contact us for
                  a free consultation and quote tailored to your web development
                  project.
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
