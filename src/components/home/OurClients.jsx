import React from "react";
import Container from "../ui/Container";
import SectionHeading from "../common/SectionHeading";
import clients from "../../data/clients";

/**
 * Home page trust section showing client/partner logos in a responsive
 * grid. Logos render in grayscale by default and switch to full color
 * on hover — keeps the row visually uniform at rest while still
 * signaling these are distinct, real brands.
 */
const OurClients = () => {
  return (
    <section className="py-16 bg-light dark:bg-dark border-y border-gray-100 dark:border-gray-800">
      <Container>
        <SectionHeading
          eyebrow="Trusted By"
          heading="Companies We've Worked With"
          centered
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 items-center mt-12">
          {clients.map((client) => (
            <div
              key={client.id}
              className="flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <img
                src={client.logo}
                alt={client.name}
                loading="lazy"
                className="max-h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default OurClients;