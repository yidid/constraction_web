import React from "react";
import usePageTitle from "../hooks/usePageTitle";
import PageHeader from "../components/common/PageHeader";
import RatingSummary from "../components/testimonials/RatingSummary";
import TestimonialsGrid from "../components/testimonials/TestimonialsGrid";
import CallToAction from "../components/common/CallToAction";

const Testimonials = () => {
  usePageTitle(
    "Testimonials",
    "Read what Elite Construction's clients have to say about our work."
  );

  return (
    <div>
      <PageHeader
        title="Client Testimonials"
        subtitle="Hear directly from the clients we've built for."
      />
      <RatingSummary />
      <TestimonialsGrid />
      <CallToAction />
    </div>
  );
};

export default Testimonials;