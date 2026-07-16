import React from "react";
import usePageTitle from "../hooks/usePageTitle";
import PageHeader from "../components/common/PageHeader";
import ContactSection from "../components/contact/ContactSection";

const Contact = () => {
  usePageTitle(
    "Contact Us",
    "Get in touch with Elite Construction for quotes, inquiries, and project consultations."
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