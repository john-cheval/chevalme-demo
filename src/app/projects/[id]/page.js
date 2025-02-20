/** @format */

import WorkInnerPage from "@/app/projects/[id]/WorkInner";

export async function generateMetadata({ params }) {
  const id = (await params).id;

  const data = await fetch(
    `https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/projects_details?slug=${id}`
  ).then((res) => res.json());

  return {
    title:
      data?.meta_title ||
      "Cheval ME Digital Agency in Dubai | Digital Agency in UAE",
    description:
      data?.meta_description ||
      "About Cheval ME Digital Agency in Dubai. Our experienced team of tech and design evangelists have helped to grow their digital identities across the globe.",
    alternates: {
      canonical: `https://chevalme.com/projects/${id}/`,
    },
  };
}

async function WorkInner({ params }) {
  const parmasID = await params;

  return <WorkInnerPage innerID={parmasID} />;
}

export default WorkInner;
