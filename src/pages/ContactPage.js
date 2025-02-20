/** @format */
"use client";

import ContactForm from "@/components/Contact/NewContact/ContactForm";
import ContactMiddleSection from "@/components/Contact/NewContact/ContactMiddleSection";
import ContactTopSection from "@/components/Contact/NewContact/ContactTopSection";

import MapSection from "@/components/Contact/NewContact/MapSection";
import NewFooter from "@/components/Footer/NewFooter";
import NewHeader from "@/components/NewHeader/NewHeader";
import useFetch from "@/hooks/useFetch";
import LoadingAnimation from "@/util/LoadingAnimation";

function ContactPage() {
  const { data: services, loading } = useFetch(
    "https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/services"
  );

  return loading ? (
    <>
      <LoadingAnimation />
    </>
  ) : (
    <>
      <div className="bg-white m-0 p-0">
        <NewHeader />
        <ContactTopSection />
        <ContactMiddleSection />
        {/* <MapSection /> */}
        <ContactForm services={services} />
        <NewFooter />
      </div>
    </>
  );
}

export default ContactPage;
