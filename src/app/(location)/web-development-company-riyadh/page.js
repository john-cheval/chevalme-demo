/** @format */

export async function generateMetadata({ params }) {
  // const id = (await params).id[0];

  // const data = await fetch(
  //   `https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/full_details?ID=${id}`
  // ).then((res) => res.json());

  return {
    title:
      // data?.meta_title ||
      "Best Web Development Company in Riyadh, UAE | Cheval",
    description:
      // data?.meta_description ||
      "Cheval is a top Web Development Company in Riyadh, providing tailored web solutions to enhance your digital presence. Partner with us for innovative and effective web development.",
    alternates: {
      canonical: `https://chevalme.com/web-development-company-riyadh/`,
    },
  };
}
import RiyadhPage from "@/pages/Location/Riyadh";

function Riyadh() {
  return <RiyadhPage />;
}

export default Riyadh;
