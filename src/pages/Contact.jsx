import React from "react";
import usePageTitle from "../hooks/usePageTitle";
import PageHeader from "../components/common/PageHeader";
import ContactSection from "../components/contact/ContactSection";

const Contact = () => {
  usePageTitle(
    "Contact a Construction Company in Addis Ababa",
    "Contact NAF Construction and Trading in Addis Ababa for building, renovation, structural, road construction, landscaping, and project consultations."
  );

  return (
    <div>
      <PageHeader
        title="Contact Us"
        subtitle="Let's discuss your next project."
      />
      <ContactSection />
    </div>
  );
};

export default Contact;