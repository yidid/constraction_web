import React from "react";
import Container from "../ui/Container";
import SectionHeading from "../common/SectionHeading";
import whyChooseUs from "../../data/whyChooseUs";

/**
 * Home page section highlighting 4 key differentiators, paired with an image.
 * Layout mirrors CompanyIntro's two-column pattern but flips the image to the
 * right on desktop (via lg:order-2) to create visual rhythm across the page.
 */
const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-light dark:bg-dark">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Text column */}
          <div className="lg:order-1">
            <SectionHeading
              eyebrow="Why Choose Us"
              heading="Built On Trust, Delivered With Precision"
              subtext="We combine technical expertise with genuine accountability, so every client walks away with a project that exceeds expectations."
            />

            <div className="mt-10 space-y-8">
              {whyChooseUs.map((reason, index) => {
                const Icon = reason.icon;
                return (
                  <div key={reason.id} className="flex gap-5">
                    <div className="shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-primary dark:bg-light">
                      <Icon className="text-white dark:text-primary group-hover:text-light text-xl transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-dark dark:text-light">
                        {reason.title}
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400 mt-1.5 leading-relaxed">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Image column */}
          <div className="lg:order-2">
            <img
              src="https://tse4.mm.bing.net/th/id/OIP.-kuVLs6hH6Ss0zWwbw3nvQHaE8?cb=thfc1falcon4&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="Construction site manager overseeing project progress"
              className="rounded-lg shadow-xl w-full h-[520px] object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WhyChooseUs;