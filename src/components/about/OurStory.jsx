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
              subtext="NAF Construction was founded in 2005 by a small team of engineers who believed construction should be defined by craftsmanship and honesty, not just square footage. What started as a two-person residential outfit has grown into a full-service construction company serving both residential and commercial clients across Ethiopia."
            />
            <p className="text-gray-500 dark:text-gray-300 mt-3 leading-relaxed">
              Today, our team of 45+ professionals spans architecture,
              project management, interior design, and skilled trades
              but our founding principle remains unchanged: build every
              project as if it were our own home.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default OurStory;