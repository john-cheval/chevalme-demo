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
                  What web design services do you provide in Dammam?
                </AccordionTrigger>
                <AccordionContent className="paragraphSize  text-black">
                  We provide an extensive array of web design services, in
                  Dammam, including responsive website design, e-commerce
                  website development, website maintenance and updates, graphic
                  design, and search engine optimisation (SEO) services.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-2"
                className=" border-t py-3 border-[#101763] border-b-0"
              >
                <AccordionTrigger className="text-2xl text-[#101763] font-sora font-semibold ">
                  How long does it take to complete a web design project?
                </AccordionTrigger>
                <AccordionContent className="paragraphSize  text-black">
                  The time required to complete a web design project depends on
                  its complexity and the client's specific requirements.
                  However, on average, we aim to deliver a fully functional
                  website within a minimum of 8 weeks.
                </AccordionContent>
              </AccordionItem>{" "}
              <AccordionItem
                value="item-3"
                className=" border-t py-3 border-[#101763] border-b-0"
              >
                <AccordionTrigger className="text-2xl text-[#101763] font-sora font-semibold ">
                  Can you help with website content creation?
                </AccordionTrigger>
                <AccordionContent className="paragraphSize  text-black">
                  Yes, we have a team of experienced content writers who can
                  assist you in creating engaging and SEO-friendly content for
                  your website. We comprehend the significance of high-quality
                  content in enticing and retaining visitors.
                </AccordionContent>
              </AccordionItem>{" "}
              <AccordionItem
                value="item-4"
                className=" border-b-0 border-t py-3 border-[#101763]"
              >
                <AccordionTrigger className="text-2xl text-[#101763] font-sora font-semibold ">
                  Do you provide ongoing support after the website is launched?
                </AccordionTrigger>
                <AccordionContent className="paragraphSize  text-black">
                  Certainly, we provide ongoing support and maintenance services
                  to ensure your website remains up-to-date and functions
                  smoothly. We also provide regular backups and security updates
                  to protect your website from threats.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-5"
                className=" border-b border-t py-3 border-[#101763]"
              >
                <AccordionTrigger className="text-2xl text-[#101763] font-sora font-semibold ">
                  How much does web design services in Dammam cost?
                </AccordionTrigger>
                <AccordionContent className="paragraphSize  text-black">
                  The pricing of web design services The duration may fluctuate
                  based on the scope and complexity of the project. Scope and
                  the client's specific requirements. We provide competitive
                  pricing and customize our services to suit your budget. Feel
                  free to contact us and reach out to us for a personalized
                  quote that aligns with your specific requirements.
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
