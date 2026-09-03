import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import Container from "../ui/Container";
import SectionHeading from "../common/SectionHeading";
import Button from "../ui/Button";
import introFeatures from "../../data/features";

/**
 * Company Introduction section: image + narrative text side-by-side.
 * Introduces who NAF Construction is and reinforces trust via a
 * short feature checklist, before the visitor scrolls further.
 */
const CompanyIntro = () => {
  return (
    <section className="py-20 bg-light dark:bg-dark">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image column */}
          <div className="relative">
            <img
              src="assets/images/other/const2.jpg"
              alt="Construction workers reviewing blueprints on site"
              className="rounded-lg shadow-xl w-full h-[420px] object-cover"
            />

            {/* Accent badge overlapping the image corner */}
           
          </div>

          {/* Text column */}
          <div>
            <SectionHeading
              eyebrow="Who We Are"
              heading="Ethiopia's Trusted Construction Partner"
              subtext="Since 2010, NAF Construction has been transforming blueprints into landmarks. From residential homes to large-scale commercial developments, our team combines technical expertise with genuine care for every client's vision."
            />

            <ul className="mt-8 space-y-4">
              {introFeatures.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <FaCheckCircle className="text-primary text-lg shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>

            <Button to="/about" variant="primary" className="mt-9">
              More About Us
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CompanyIntro;