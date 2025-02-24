/** @format */
"use client";
// import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Section10 from "@/components/Home/Section10";
import CaseStudiesInnerSection1 from "@/components/CaseStudiesInner/CaseStudiesInnerSection1";
import CaseStudiesInnerSection2 from "@/components/CaseStudiesInner/CaseStudiesInnerSection2";
import CaseStudiesInnerSection3 from "@/components/CaseStudiesInner/CaseStudiesInnerSection3";
import CaseStudiesInnerSection4 from "@/components/CaseStudiesInner/CaseStudiesInnerSection4";
import LoadingAnimation from "@/util/LoadingAnimation";
import { useEffect, useState } from "react";
import NewFooter from "@/components/Footer/NewFooter";
import NewHeader from "@/components/NewHeader/NewHeader";

function CaseStudiesInner({ params }) {
  const [data2, setData2] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [data2Loading, setData2Loading] = useState(true);
  const [dataLoading, setDataLoading] = useState(true);
  const [clients, setClients] = useState(null);
  const [clientLoading, setClientLoading] = useState(true);
  const [footer, setFooter] = useState(null);
  const [footerLoading, setFooterLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/full_details?ID=${params.id}`
        ); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error("NetCaseStudies response was not ok");
        }
        const result = await response.json();
        setData(result);
        setDataLoading(false);
      } catch (error) {
        console.log("error");
      }
    };
    const fetchData2 = async () => {
      try {
        const response = await fetch(
          "https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/projects?type=case_study"
        ); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error("NetCaseStudies response was not ok");
        }
        const result = await response.json();
        setData2(result);
        setData2Loading(false);
      } catch (error) {
        console.log("error");
      }
    };
    const fetchClients = async () => {
      try {
        const response = await fetch(
          "https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/all_clients"
        ); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error("NetCaseStudies response was not ok");
        }
        const result = await response.json();
        setClients(result);
        setClientLoading(false);
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
    fetchClients();
    fetchData2();
    fetchData();
  }, []);
  useEffect(() => {
    if (!dataLoading && !data2Loading && !footerLoading && !clientLoading) {
      setLoading(false);
    }
  }, [dataLoading, footerLoading, data2Loading, clientLoading]);
  return loading ? (
    <>
      <LoadingAnimation />
    </>
  ) : (
    <>
      {/* <Header /> */}
      <NewHeader />
      <CaseStudiesInnerSection1 data={data} />
      {/* <CaseStudiesInnerSection12 /> */}
      <CaseStudiesInnerSection2 data={data2} />
      <CaseStudiesInnerSection3 />
      {/* <CaseStudiesInnerSection4 /> */}
      <Section10 data={clients} />
      <NewFooter />
      {/* <Footer data={footer} /> */}
    </>
  );
}

export default CaseStudiesInner;
