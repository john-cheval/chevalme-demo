async function generateMetadataData(id, path, slug = false) {
  const data = await fetch(
    `https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/full_details_meta?${slug ? "slug" : "ID"}=${id}`
  ).then((res) => res.json());

  const title =
    data?.meta_title ||
    "Best Web Developers in Dubai | Software Developers in Dubai";
  const description =
    data?.meta_description ||
    "Partner with top Web Developers in Dubai at Cheval . We Specialize in Mobile App and Software Development, delivering cutting-edge tailored digital solutions.";
  const image =
    data?.meta_image ||
    "https://bunny-wp-pullzone-1uo9uvm3si.b-cdn.net/wp-content/uploads/2025/02/che.jpg";
  return {
    title,
    description,
    alternates: {
      canonical: `https://chevalme.com/${path}`,
    },
    openGraph: {
      title,
      description,
      url: `https://chevalme.com/${path}`,
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export default generateMetadataData;
