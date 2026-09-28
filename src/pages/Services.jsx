import React from "react";
import usePageTitle from "../hooks/usePageTitle";
import PageHeader from "../components/common/PageHeader";
import ServicesList from "../components/services/ServicesList";

const Services = () => {
  usePageTitle(
    "Construction Services in Ethiopia",
    "Explore NAF Construction services including residential and commercial building, renovation, finishing works, structural work, road construction, and landscaping."
  );

  return (
    <div>
      <PageHeader
        title="Our Services"
        subtitle="Comprehensive construction solutions tailored to your vision."
      />
      <ServicesList />
    
    </div>
  );
};

export default Services;