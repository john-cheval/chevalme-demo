export async function genreateMetaData() {
  const res = await fetch(
    "https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/homepage_details?ID=8"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch home page meta data");
  }
  const data = await res.json();

  return {
    title: data?.meta_title || "Home Page",
    description:
      data?.meta_description ||
      "est Web Developers in Dubai | Software Developers in Dubai",
    keywords:
      data?.meta_keywords || "web development, Dubai, software development",
  };
}
