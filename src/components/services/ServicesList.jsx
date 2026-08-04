import React from "react";
import Container from "../ui/Container";
import ServiceCard from "../home/ServiceCard";
import services from "../../data/services";

/**
 * Full grid of all 6 services on the dedicated Services page.
 * Reuses the same ServiceCard component as the Home page preview —
 * same component, different page context.
 */
const ServicesList = () => {
  return (
    <section className="py-20 bg-light dark:bg-dark">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              id={service.id}
              icon={service.icon}
              title={service.title}
              shortDescription={service.shortDescription}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ServicesList;