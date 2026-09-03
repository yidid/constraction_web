import React from "react";
import usePageTitle from "../hooks/usePageTitle";
import PageHeader from "../components/common/PageHeader";
import RatingSummary from "../components/testimonials/RatingSummary";
import TestimonialsGrid from "../components/testimonials/TestimonialsGrid";

const Testimonials = () => {
  usePageTitle(
    "Testimonials",
    "Read what NAF Construction's clients have to say about our work."
  );

  return (
    <div>
      <PageHeader
        title="Client Testimonials"
        subtitle="Hear directly from the clients we've built for."
      />
      <RatingSummary />
      <TestimonialsGrid />
   
    </div>
  );
};

export default Testimonials;