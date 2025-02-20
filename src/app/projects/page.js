import React from "react";
import WorkPage from "../../pages/Work";

export async function generateMetadata(parent) {
  const data = await fetch(
    `https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/projects`
  ).then((res) => res.json());

  return {
    title:
      data?.meta_title ||
      "Best Web Developers in Dubai | Software Developers in Dubai",
    description:
      data?.meta_description ||
      "Best Web Developers in Dubai | Software Developers in Dubai",
    alternates: {
      canonical: `https://chevalme.com/projects/`,
    },
  };
}
const Work = () => {
  return <WorkPage />;
};

export default Work;
