import React from "react";
import Container from "../ui/Container";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import ContactMap from "./ContactMap";

/**
 * Full Contact page main section: form + info side-by-side, with the
 * map spanning below both. Reflects a fuller feature set than the
 * Home page's minimal ContactPreview.
 */
const ContactSection = () => {
  return (
    <section className="py-20 bg-light">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
          <div className="lg:col-span-2">
            <ContactInfo />
          </div>
        </div>

        <div className="mt-12">
          <ContactMap />
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;