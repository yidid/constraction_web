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
        title="Construction RFQ and Tender Inquiry"
        subtitle="Send your project brief, tender documents, drawings, BOQ, or material schedule for review."
      />
      <ContactSection />
    </div>
  );
};

export default Contact;