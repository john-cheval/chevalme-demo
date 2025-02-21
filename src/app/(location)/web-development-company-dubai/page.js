import DubaiPage from "@/pages/Location/Dubai";

export async function generateMetadata({ params }) {
  // const id = (await params).id[0];

  // const data = await fetch(
  //   `https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/full_details?ID=${id}`
  // ).then((res) => res.json());

  return {
    title:
      // data?.meta_title ||
      "Best Web Development Company in Dubai | Cheval",
    description:
      // data?.meta_description ||
      "Cheval, a leading Web Development Company in Dubai, offers custom web solutions tailored to your needs. Partner with us for innovative & effective digital experiences.",
    alternates: {
      canonical: `https://chevalme.com/web-development-company-dubai/`,
    },
  };
}
function Dubai() {
  return <DubaiPage />;
}

export default Dubai;
