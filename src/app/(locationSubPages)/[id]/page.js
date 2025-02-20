import { notFound } from "next/navigation";
import LocalInnerPage from "./LocalInnerPage";

async function fetchData(id) {
  const res = await fetch(
    `https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/full_details?slug=${id}&meta_type=page`
  );
  if (!res.ok) return undefined;
  return res.json();
}

export async function generateMetadata({ params }) {
  const id = (await params).id;

  const data = await fetch(
    `https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/full_details?slug=${params.id}&meta_type=page`
  ).then((res) => res.json());

  return {
    title:
      data?.meta_title ||
      "Cheval ME Digital Agency in Dubai | Digital Agency in UAE",
    description:
      data?.meta_description ||
      "About Cheval ME Digital Agency in Dubai. Our experienced team of tech and design evangelists have helped to grow their digital identities across the globe.",
    alternates: {
      canonical: `https://chevalme.com/${id}/`,
    },
  };
}

const LocationSubPage = async ({ params }) => {
  const data = await fetchData((await params).id);

  if (!data) {
    notFound();
  }

  return (
    <>
      <LocalInnerPage pageData={data?.page_template_name} />
    </>
  );
};

export default LocationSubPage;
