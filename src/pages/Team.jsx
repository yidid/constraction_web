import React from "react";
import usePageTitle from "../hooks/usePageTitle";
import PageHeader from "../components/common/PageHeader";
import TeamSection from "../components/team/TeamSection";
import CallToAction from "../components/common/CallToAction";

const Team = () => {
  usePageTitle(
    "Our Team",
    "Meet the experienced engineers, architects, and project managers behind Elite Construction."
  );

  return (
    <div>
      <PageHeader
        title="Meet Our Team"
        subtitle="The experienced professionals behind every successful project."
      />
      <TeamSection />
      <CallToAction />
    </div>
  );
};

export default Team;