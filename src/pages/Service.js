/** @format */
"use client";
import NewFooter from "@/components/Footer/NewFooter";
import NewHeader from "@/components/NewHeader/NewHeader";
import ServiceListNew from "@/components/Services/NewService/ServiceListNew";
import ServiceHeader from "@/components/Services/ServiceHeader";
import useFetch from "@/hooks/useFetch";
import LoadingAnimation from "@/util/LoadingAnimation";
import { useEffect, useState } from "react";

function ServicePage() {
  const [loading, setLoading] = useState(true);

  const { data, loading: dataLoading } = useFetch(
    "https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/services"
  );

  const { data: serviceHeader, loading: serviceLoading } = useFetch(
    "https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/full_details?ID=98"
  );

  useEffect(() => {
    if (!dataLoading && !serviceLoading) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [dataLoading, , serviceLoading]);

  return loading ? (
    <>
      <LoadingAnimation />
    </>
  ) : (
    <>
      <NewHeader />
      <ServiceHeader data={serviceHeader} />
      <ServiceListNew data={data} />
      <NewFooter />
    </>
  );
}

export default ServicePage;
