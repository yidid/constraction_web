import React from "react";
import usePageTitle from "../hooks/usePageTitle";
import PageHeader from "../components/common/PageHeader";
import OurStory from "../components/about/OurStory";
import MissionVision from "../components/about/MissionVision";
import CoreValues from "../components/about/CoreValues";
import CallToAction from "../components/common/CallToAction";

const About = () => {
  usePageTitle(
    "About Us",
    "Learn about Elite Construction's history, mission, and commitment to quality craftsmanship."
  );

  return (
    <div>
      <PageHeader
        title="About Us"
        subtitle="Building trust through quality craftsmanship since day one."
      />
      <OurStory />
      <MissionVision />
      <CoreValues />
      <CallToAction />
    </div>
  );
};

export default About;