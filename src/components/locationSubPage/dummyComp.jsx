"use client";
import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
// import LocationContactForm from "./locationContactForm";
import "./lp.css";

function DummyComp({ page }) {
  const [htmlContent, setHtmlContent] = useState("");
  // console.log(page, "adfhsfgkjjdf");

  var settings = {
    // dots: true,
    arrow: false,
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const settings2 = {
    dots: true,
    arrow: false,
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    let filePath = "/htmltemplate/" + page + ".html";

    // 🔹 Switch case to decide which HTML file to load
    /*  switch (page) {
      case "home":
        filePath = "/page1.html";
        break;
      case "about":
        filePath = "/page2.html";
        break;
      case "contact":
        filePath = "/page3.html";
        break;
      default:
        filePath = "/default.html"; // Fallback file
    }*/

    // Fetch the selected HTML file
    fetch(filePath)
      .then((response) => response.text())
      .then((data) => setHtmlContent(data))
      .catch((error) => console.error("Error loading HTML:", error));
  }, [page]);

  return (
    <div
      className="pt-20 md:pt-28"
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
}

export default DummyComp;
