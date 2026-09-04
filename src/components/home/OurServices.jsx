import React from "react";
import Container from "../ui/Container";
import SectionHeading from "../common/SectionHeading";
import ServiceCard from "./ServiceCard";
import services from "../../data/services";

/**
 * Home page section previewing all 6 company services in a responsive grid.
 * Pulls from the shared services.js data file so content stays consistent
 * with the full Services page and the Footer.
 */
const OurServices = () => {
  return (
    <section className="pb-20 bg-light dark:bg-dark">
      <Container>
        <SectionHeading
          eyebrow="What We Do"
          heading="Our Services"
          subtext="From ground-up construction to detailed interior finishes, we offer a full range of services to bring your project to life."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              shortDescription={service.shortDescription}
              fullDescription={service.fullDescription}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default OurServices;