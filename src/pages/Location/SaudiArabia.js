/** @format */
"use client";
// import Footer from "@/components/Footer";
import NewFooter from "@/components/Footer/NewFooter";
import Header from "@/components/Header";
import Section1 from "@/components/Location/SaudiArabia/Section1";
import Section2 from "@/components/Location/SaudiArabia/Section2";
import Section3 from "@/components/Location/SaudiArabia/Section3";
import Section4 from "@/components/Location/SaudiArabia/Section4";
import Section5 from "@/components/Location/SaudiArabia/Section5";
import Section6 from "@/components/Location/SaudiArabia/Section6";
import NewHeader from "@/components/NewHeader/NewHeader";
import LoadingAnimation from "@/util/LoadingAnimation";
import React, { useEffect, useState } from "react";

function SaudiArabiaPage() {
  const [footer, setFooter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [reviewsLoading, setReviewsLoading] = useState(true);
  const [googleReviews, setGoogleReviews] = useState(null);
  const [googleReviewsSorted, setGoogleReviewsSorted] = useState(null);
  const [footerLoading, setFooterLoading] = useState(true);
  const [blogsHomePage, setBlogsHomePage] = useState(null);
  const [blogsLoading, setBlogsLoading] = useState(true);
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(
          "https://d331b20430.nxcli.net/chevalapi/wp-json/wp/v2/posts?_embed"
        ); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setBlogsHomePage(result);
        setBlogsLoading(false);
      } catch (error) {
        console.log("error");
      }
    };

    const fetchGoogleReviews = async () => {
      try {
        const response = await fetch(
          "https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/google_reviews"
        ); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setGoogleReviews(result);
        setGoogleReviewsSorted(result.all_reviews);
        setReviewsLoading(false);
      } catch (error) {
        console.log("error");
      }
    };
    const fetchFooter = async () => {
      try {
        const response = await fetch(
          "https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/services"
        ); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setFooter(result);
        setFooterLoading(false);
      } catch (error) {
        console.log("error");
      }
    };
    fetchFooter();
    fetchGoogleReviews();
    fetchBlogs();
  }, []);

  useEffect(() => {
    if (!footerLoading && !reviewsLoading && !blogsLoading) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [footerLoading, blogsLoading, reviewsLoading]);

  return loading ? (
    <>
      <LoadingAnimation />
    </>
  ) : (
    <>
      {/* <Header /> */}
      <NewHeader />
      <Section1 />
      <Section2 />
      <Section3 data={googleReviews} sortedData={googleReviewsSorted} />
      <Section4 />
      <Section5 data={blogsHomePage} />
      <Section6 />
      <NewFooter />
      {/* <Section7 /> */}
      {/* <Footer data={footer} /> */}
    </>
  );
}

export default SaudiArabiaPage;
