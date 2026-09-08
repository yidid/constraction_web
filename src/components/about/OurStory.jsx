import React from "react";
import Container from "../ui/Container";
import SectionHeading from "../common/SectionHeading";

/**
 * About page section narrating the company's history and background.
 * Uses the same image + text two-column pattern established in
 * CompanyIntro (Home page), for visual consistency across the site.
 */
const OurStory = () => {
  return (
    <section className="py-20 bg-light dark:bg-dark">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <img
            src="assets/images/other/unnamed.jpg"
            alt="NAF Construction founding team on an early project site"
            className="rounded-lgshadow-xl w-full h-[440px] object-cover"
          />

          <div>
            <SectionHeading
              eyebrow="Our Story"
              heading="Nearly Two Decades of Building Excellence"
              subtext="Established in 2010, NAF Construction and Trading began as a modest venture with a distinct purpose: to elevate Ethiopian construction through exceptional craftsmanship and integrity. Grounded in international quality standards, what started as a focused initiative has evolved into a trusted, full-service firm."
            />
            <p className="text-gray-600 text-base sm:text-lg  dark:text-gray-300 mt-3 leading-relaxed">
            Our success stems from a culture of shared purpose. Our engineers, project managers, and trade specialists work seamlessly across every phase, translating complex architectural designs into enduring structures. As our footprint expands, our commitment remains absolute: executing every project with precision, collective pride, and uncompromising standards.   
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default OurStory;