/** @format */
"use client";
import BlogsSection1 from "@/components/Blogs/BlogsSection1";
import NewFooter from "@/components/Footer/NewFooter";
import Header from "@/components/Header";
import NewHeader from "@/components/NewHeader/NewHeader";
import useFetch from "@/hooks/useFetch";
import LoadingAnimation from "@/util/LoadingAnimation";
import React, { useEffect, useState } from "react";
// import Footer from "@/components/Footer";

function BlogsPage() {
  const [loading, setLoading] = useState(true);

  const { data, loading: blogLoading } = useFetch(
    "https://d331b20430.nxcli.net/chevalapi/wp-json/wp/v2/posts?_embed"
  );

  console.log(data);

  useEffect(() => {
    if (!blogLoading) {
      setLoading(false);
    }
  }, [blogLoading]);
  return loading ? (
    <>
      <LoadingAnimation />
    </>
  ) : (
    <>
      {/* <Header /> */}
      <NewHeader />
      <BlogsSection1 data={data} />
      <NewFooter />
      {/* <Footer data={footer} /> */}
    </>
  );
}

export default BlogsPage;
