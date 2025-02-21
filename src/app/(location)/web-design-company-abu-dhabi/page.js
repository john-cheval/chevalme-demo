/** @format */

import AbuDhabiPage from "@/pages/Location/Abudhabi";

export async function generateMetadata({ params }) {
  // const id = (await params).id[0];

  // const data = await fetch(
  //   `https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/full_details?ID=${id}`
  // ).then((res) => res.json());

  return {
    title:
      // data?.meta_title ||
      "Best Web Design Company in Abu Dhabi, UAE | Cheval",
    description:
      // data?.meta_description ||
      "Looking for best Web Design Company in Abu Dhabi? Partner with Cheval, the #1 website design agency. Elevate your digital presence with our visually stunning and user-friendly designs.",
    alternates: {
      canonical: `https://chevalme.com/web-design-company-abu-dhabi/`,
    },
  };
}

function AbuDhabi() {
  return <AbuDhabiPage />;
}

export default AbuDhabi;
