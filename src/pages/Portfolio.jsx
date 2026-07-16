import React from "react";
import usePageTitle from "../hooks/usePageTitle";
import PageHeader from "../components/common/PageHeader";
import PortfolioGrid from "../components/portfolio/PortfolioGrid";
import CallToAction from "../components/common/CallToAction";

const Portfolio = () => {
  usePageTitle(
    "Portfolio",
    "Browse Elite Construction's portfolio of completed residential and commercial projects."
  );

  return (
    <div>
      <PageHeader
        title="Our Portfolio"
        subtitle="A showcase of projects we're proud to have built."
      />
      <PortfolioGrid />
      <CallToAction />
    </div>
  );
};

export default Portfolio;