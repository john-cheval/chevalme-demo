/** @format */

import SaudiArabiaPage from "@/pages/Location/SaudiArabia";

export async function generateMetadata({ params }) {
  // const id = (await params).id[0];

  // const data = await fetch(
  //   `https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/full_details?ID=${id}`
  // ).then((res) => res.json());

  return {
    title:
      // data?.meta_title ||
      "Best Web Design and Development Company in Saudi Arabia",
    description:
      // data?.meta_description ||
      "Cheval is a leading Web Design Company in Saudi Arabia, offering innovative and custom web design solutions. Enhance your digital footprint with our expert services.",
    alternates: {
      canonical: `https://chevalme.com/web-design-company-saudi-arabia/`,
    },
  };
}
function SaudiArabia() {
  return <SaudiArabiaPage />;
}

export default SaudiArabia;
