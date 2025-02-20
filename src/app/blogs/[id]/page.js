/** @format */

import BlogsInnerPage from "../../../pages/BlogsInnerPage";

export async function generateMetadata({ params }) {
  const id = (await params).id[0];

  const data = await fetch(
    `https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/full_details?ID=${id}`
  ).then((res) => res.json());

  return {
    title:
      data?.meta_title ||
      "Cheval ME Digital Agency in Dubai | Digital Agency in UAE",
    description:
      data?.meta_description ||
      "About Cheval ME Digital Agency in Dubai. Our experienced team of tech and design evangelists have helped to grow their digital identities across the globe.",
    alternates: {
      canonical: `https://chevalme.com/blogs/${id}/`,
    },
  };
}

function BlogsInner({ params }) {
  return <BlogsInnerPage id={params?.id} />;
}

export default BlogsInner;
