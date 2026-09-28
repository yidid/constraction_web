import React from "react";
import usePageTitle from "../hooks/usePageTitle";
import PageHeader from "../components/common/PageHeader";
import PortfolioGrid from "../components/portfolio/PortfolioGrid";

const Portfolio = () => {
  usePageTitle(
    "Construction Projects in Ethiopia",
    "View NAF Construction projects across Ethiopia, including residential, commercial, renovation, institutional, and infrastructure work."
  );

  return (
    <div>
      <PageHeader
        title="Our Portfolio"
        subtitle="A showcase of projects we're proud to have built."
      />
      <PortfolioGrid />
     
    </div>
  );
};

export default Portfolio;