import React from "react";
import usePageTitle from "../hooks/usePageTitle";
import PageHeader from "../components/common/PageHeader";
import OurStory from "../components/about/OurStory";
import MissionVision from "../components/about/MissionVision";
import CoreValues from "../components/about/CoreValues";

const About = () => {
  usePageTitle(
    "About NAF Construction and Trading",
    "Learn about NAF Construction and Trading, our project experience, construction capabilities, and commitment to quality workmanship in Ethiopia."
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
    
    </div>
  );
};

export default About;