/** @format */
import AboutPage from "../../pages/About";

export async function generateMetadata() {
  const data = await fetch(
    `https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/full_details?ID=100`
  ).then((res) => res.json());

  return {
    title:
      data?.meta_title ||
      "Cheval ME Digital Agency in Dubai | Digital Agency in UAE",
    description:
      data?.meta_description ||
      "About Cheval ME Digital Agency in Dubai. Our experienced team of tech and design evangelists have helped to grow their digital identities across the globe.",
    alternates: {
      canonical: `https://chevalme.com/about/`,
    },
  };
}

function About() {
  return <AboutPage />;
}

export default About;
