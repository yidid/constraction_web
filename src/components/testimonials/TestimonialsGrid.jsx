import React from "react";
import Container from "../ui/Container";
import TestimonialCard from "./TestimonialCard";
import testimonials from "../../data/testimonials";

/**
 * Responsive grid displaying every client testimonial, letting visitors
 * browse all feedback at their own pace (unlike the Home page carousel,
 * which spotlights one at a time in a compact space).
 */
const TestimonialsGrid = () => {
  return (
    <section className="py-20 bg-light">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TestimonialsGrid;