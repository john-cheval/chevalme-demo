/** @format */
"use client";
import Header from "@/components/Header";
import Section10 from "@/components/Home/Section10";
import CaseStudiesSection1 from "@/components/CaseStudies/CaseStudiesSection1";
import CaseStudiesSection3 from "@/components/CaseStudies/CaseStudiesSection3";
import LoadingAnimation from "@/util/LoadingAnimation";
import React, { useEffect, useState } from "react";
import NewFooter from "@/components/Footer/NewFooter";
import useFetch from "@/hooks/useFetch";
import NewHeader from "@/components/NewHeader/NewHeader";
// import Footer from "@/components/Footer";
// import CaseStudiesSection2 from "@/components/CaseStudies/CaseStudiesSection2";
// import CaseStudiesSection4 from "@/components/CaseStudies/CaseStudiesSection4";

function CaseStudies() {
  // const [caseStudiesFilter, setCaseStudiesFilter] = useState("Explore All");
  // const [termId, setTermId] = useState([]);
  // const [totalCount, setTotalCount] = useState(null);
  const [split, setSplit] = useState(null);

  const [loading, setLoading] = useState(true);

  const { data, loading: dataLoading } = useFetch(
    "https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/projects?type=case_study"
  );

  // const { data: categories, loading: categoriesLoading } = useFetch(
  //   "https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/casestudy_category_list"
  // );

  const { data: gallery, loading: galleryLoading } = useFetch(
    "https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/full_details?ID=8"
  );

  const { data: clients, loading: clientLoading } = useFetch(
    "https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/all_clients"
  );

  // useEffect(() => {
  //   if (caseStudiesFilter === "Explore All") {
  //     const fetchData = async () => {
  //       try {
  //         const response = await fetch(
  //           "https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/projects"
  //         ); // Replace with your API endpoint
  //         if (!response.ok) {
  //           throw new Error("NetCaseStudies response was not ok");
  //         }
  //         const result = await response.json();
  //         setData(result);
  //         setDataLoading(false);
  //       } catch (error) {
  //         console.log("error");
  //       }
  //     };
  //     fetchData();
  //   } else {
  //     const fetchData = async () => {
  //       try {
  //         const response = await fetch(
  //           `https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/projects?catid=${termId}&type=case_study`
  //         ); // Replace with your API endpoint
  //         if (!response.ok) {
  //           throw new Error("NetCaseStudies response was not ok");
  //         }
  //         const result = await response.json();
  //         setData(result);
  //         setDataLoading(false);
  //       } catch (error) {
  //         console.log("error");
  //       }
  //     };
  //     fetchData();
  //   }
  // }, [termId, caseStudiesFilter]);

  useEffect(() => {
    if (!dataLoading && !galleryLoading && !clientLoading) {
      setSplit(gallery.show_off_gallery.length / 2);
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [dataLoading, galleryLoading, clientLoading]);

  return loading ? (
    <>
      <LoadingAnimation />
    </>
  ) : (
    <>
      {/* <Header /> */}
      <NewHeader />
      <CaseStudiesSection1 data={data} />
      <CaseStudiesSection3 />
      <Section10 data={clients} />
      <NewFooter />
      {/* <CaseStudiesSection2 data={gallery} split={split} /> */}
      {/* <CaseStudiesSection4 /> */}
      {/* <Footer data={footer} /> */}
    </>
  );
}

export default CaseStudies;
