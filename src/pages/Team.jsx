import React from "react";
import usePageTitle from "../hooks/usePageTitle";
import PageHeader from "../components/common/PageHeader";
import TeamSection from "../components/team/TeamSection";

const Team = () => {
  usePageTitle(
    "Our Team",
    "Meet the engineers, architects, and project professionals behind NAF Construction and Trading in Ethiopia."
  );

  return (
    <div>
      <PageHeader
        title="Meet Our Team"
        subtitle="The experienced professionals behind every successful project."
      />
      <TeamSection />
     
    </div>
  );
};

export default Team;