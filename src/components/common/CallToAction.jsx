import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import Container from "../ui/Container";
import Button from "../ui/Button";

/**
 * High-contrast Call To Action banner placed after the visitor has already
 * seen services, projects, stats, and testimonials — a second, well-timed
 * conversion point using a bold solid-yellow background to stand out
 * visually from every other section on the page.
 */
const CallToAction = () => {
  return (
    <section className="bg-primary py-16">
      <Container>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-dark leading-tight">
              Ready to Start Your Next Project?
            </h2>
            <p className="text-dark/80 mt-3 max-w-lg">
              Get a free, no-obligation consultation and quote from our team
              of construction experts today.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-5 shrink-0">
            <Button to="/contact" variant="dark">
              Get a Free Quote
            </Button>
             <a
            
              href="tel:+251900000000"
              className="flex items-center gap-2 text-dark font-semibold hover:opacity-70 transition-opacity duration-200"
            >
              <FaPhoneAlt />
              +251 900 000 000
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CallToAction;