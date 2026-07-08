import React from "react";
import Container from "../ui/Container";
import SectionHeading from "../common/SectionHeading";
import IconFeatureCard from "../common/IconFeatureCard";
import companyValues from "../../data/companyValues";

/**
 * About page section presenting the company's 4 core values using the
 * shared IconFeatureCard component in a responsive grid.
 */
const CoreValues = () => {
  return (
    <section className="py-20 bg-light">
      <Container>
        <SectionHeading
          eyebrow="What Drives Us"
          heading="Our Core Values"
          subtext="The principles that guide every decision, on every project, at every stage."
          centered
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
          {companyValues.map((value) => (
            <IconFeatureCard
              key={value.id}
              icon={value.icon}
              title={value.title}
              description={value.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CoreValues;