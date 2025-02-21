/** @format */

import DammamPage from "@/pages/Location/Dammam";

export async function generateMetadata({ params }) {
  // const id = (await params).id[0];

  // const data = await fetch(
  //   `https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/full_details?ID=${id}`
  // ).then((res) => res.json());

  return {
    title:
      // data?.meta_title ||
      "Top Web Development Companies in Dammam, UAE | Cheval",
    description:
      // data?.meta_description ||
      "Cheval offers premier Web Development services in Dammam. Our expert team delivers custom solutions to boost your online presence with innovative web technologies.",
    alternates: {
      canonical: `https://chevalme.com/web-development-company-dammam/`,
    },
  };
}

function Dammam() {
  return <DammamPage />;
}

export default Dammam;
