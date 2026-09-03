import React from "react";
import usePageTitle from "../hooks/usePageTitle";
import PageHeader from "../components/common/PageHeader";
import ServicesList from "../components/services/ServicesList";

const Services = () => {
  usePageTitle(
    "Services",
    "Explore NAF Construction's residential, commercial, renovation, interior design, architecture, and project management services."
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