/** @format */
"use client";
import NewFooter from "@/components/Footer/NewFooter";
import NewHeader from "@/components/NewHeader/NewHeader";
import ServiceAccordion from "@/components/ServicesInner/NewServiceInner/ServiceAccordion";
import ServiceInnerContent from "@/components/ServicesInner/NewServiceInner/ServiceInnerContent";
import ServiceInnerCTA from "@/components/ServicesInner/NewServiceInner/ServiceInnerCTA";
import ServiceInnerSwipper from "@/components/ServicesInner/NewServiceInner/ServiceInnerSwipper";
import ServiceInnerTechStack from "@/components/ServicesInner/NewServiceInner/ServiceInnerTechStack";
import ServiceSectionTwo from "@/components/ServicesInner/NewServiceInner/ServiceSectionTwo";
import useFetch from "@/hooks/useFetch";
import LoadingAnimation from "@/util/LoadingAnimation";
import React, { useEffect, useState } from "react";

function ServicesInnerPage({ serviceId }) {
  const [split, setSplit] = useState(null);
  const [gallery, setGallery] = useState(null);
  const [galleryLoading, setGalleryLoading] = useState(true);

  const [loading, setLoading] = useState(true);

  const { data, loading: dataLoading } = useFetch(
    `https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/full_details?slug=${serviceId}`
  );

  const { data: data2, loading: data2Loading } = useFetch(
    "https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/services"
  );
  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const response = await fetch(
          "https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/full_details?ID=8"
        ); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setGallery(result);
        setGalleryLoading(false);
      } catch (error) {
        console.log("error");
      }
    };
    fetchGallery();
  }, []);

  useEffect(() => {
    if (!dataLoading && !data2Loading && !galleryLoading) {
      setSplit(gallery.show_off_gallery.length / 2);
      setLoading(false);
    }
  }, [dataLoading, data2Loading, galleryLoading]);
  return loading ? (
    <>
      <LoadingAnimation />
    </>
  ) : (
    <>
      <NewHeader />
      {data?.services_slider && (
        <ServiceInnerSwipper slides={data?.services_slider} />
      )}
      <ServiceSectionTwo
        title={data?.small_sub_heading}
        description={data?.short_description}
        heading={data?.streamline_heading}
        fullDescription={data?.streamline_left_area}
      />

      {data?.service_list && (
        <ServiceInnerContent
          services={data?.service_list}
          serviceHeading={data?.web_development_heading}
        />
      )}

      {data?.web_development_process_list && (
        <ServiceAccordion
          title={data?.web_development_process_heading}
          image={data?.web_development_process_image}
          accoridion={data?.web_development_process_list}
        />
      )}

      {data?.web_development_technology_list && (
        <ServiceInnerTechStack
          title={data?.web_development_technology_heading}
          stacks={data?.web_development_technology_list}
        />
      )}

      {data && (
        <ServiceInnerCTA
          title={data?.lets_work_together_heading}
          videoUrl={data?.lets_work_together_image}
          link={data?.lets_work_together_link}
        />
      )}

      <NewFooter />
    </>
  );
}

export default ServicesInnerPage;
