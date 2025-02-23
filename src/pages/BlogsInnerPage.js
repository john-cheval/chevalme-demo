/** @format */
"use client";
import BlogsInnerSection1 from "@/components/BlogsInner/BlogsInnerSection1";
import BlogsInnerSection2 from "@/components/BlogsInner/BlogsInnerSection2";
import NewFooter from "@/components/Footer/NewFooter";
import Header from "@/components/Header";
import NewHeader from "@/components/NewHeader/NewHeader";
import useFetch from "@/hooks/useFetch";
import LoadingAnimation from "@/util/LoadingAnimation";
import React, { useEffect, useState } from "react";
// import Footer from "@/components/Footer";

function BlogsInnerPage({ id }) {
  const [loading, setLoading] = useState(true);

  const { data, loading: dataLoading } = useFetch(
    `https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/full_details?slug=${id}`
  );

  const { data: data2, loading: data2Loading } = useFetch(
    "https://d331b20430.nxcli.net/chevalapi/wp-json/wp/v2/posts?_embed"
  );

  useEffect(() => {
    if (!dataLoading && !data2Loading) {
      setLoading(false);
    }
  }, [dataLoading, data2Loading]);
  return loading ? (
    <>
      <LoadingAnimation />
    </>
  ) : (
    <>
      {/* <Header /> */}
      <NewHeader />
      <BlogsInnerSection1 data={data} />
      <BlogsInnerSection2 data={data2} blogID={id} />
      <NewFooter />
      {/* <Footer data={footer} /> */}
    </>
  );
}

export default BlogsInnerPage;
