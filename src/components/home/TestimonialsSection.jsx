import React from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import Container from "../ui/Container";
import SectionHeading from "../common/SectionHeading";
import TestimonialSlide from "./TestimonialSlide";
import useCarousel from "../../hooks/useCarousel";
import useTestimonials from "../../hooks/useTestimonials";

/**
 * Home page Testimonials carousel. Slides auto-advance every 6 seconds,
 * with manual prev/next buttons and dot indicators for direct navigation.
 * The sliding animation uses a CSS transform on the row (GPU-accelerated)
 * rather than conditionally rendering slides, for a smooth transition.
 */
const TestimonialsSection = () => {
  const { testimonials } = useTestimonials();
  const { currentIndex, goToSlide, goNext, goPrev } = useCarousel(
    testimonials.length,
    6000
  );

  return (
    <section className="py-20 bg-light-off dark:bg-dark">
      <Container>
        <SectionHeading
          eyebrow="Client Feedback"
          heading="What Our Clients Say"
          subtext="Real feedback from real clients we've had the privilege of building for."
          centered
        />

        <div className="relative mt-14">
          {/* Sliding row: width = 100% * number of slides, shifted via translateX */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <TestimonialSlide key={testimonial.id} {...testimonial} />
              ))}
            </div>
          </div>

          {/* Prev/Next arrow controls */}
          <button
            onClick={goPrev}
            aria-label="Previous testimonial"
            className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-11 h-11 items-center justify-center rounded-full bg-dark text-light hover:bg-primary hover:text-dark transition-colors duration-200"
          >
            <HiChevronLeft size={22} />
          </button>
          <button
            onClick={goNext}
            aria-label="Next testimonial"
            className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-11 h-11 items-center justify-center rounded-full bg-dark text-light hover:bg-primary hover:text-dark transition-colors duration-200"
          >
            <HiChevronRight size={22} />
          </button>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.id}
                onClick={() => goToSlide(index)}
                aria-label={`Go to testimonial ${index + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-primary"
                    : "w-2.5 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TestimonialsSection;