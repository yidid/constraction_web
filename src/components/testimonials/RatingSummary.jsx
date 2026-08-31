import React from "react";
import { FaStar } from "react-icons/fa";
import Container from "../ui/Container";
import calculateAverageRating from "../../utils/calculateAverageRating";
import useTestimonials from "../../hooks/useTestimonials";

/**
 * Trust-building summary banner shown at the top of the Testimonials page:
 * average star rating (calculated dynamically) and total review count.
 */
const RatingSummary = () => {
  const { testimonials } = useTestimonials();
  const averageRating = calculateAverageRating(testimonials);

  return (
    <section className="py-14 bg-light-off">
      <Container>
        <div className="flex flex-col items-center text-center">
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <FaStar
                key={i}
                className={
                  i < Math.round(averageRating)
                    ? "text-primary"
                    : "text-gray-300"
                }
                size={22}
              />
            ))}
          </div>
          <p className="text-3xl font-bold text-dark mt-4">
            {averageRating} out of 5
          </p>
          <p className="text-gray-500 mt-1">
            Based on {testimonials.length}+ verified client reviews
          </p>
        </div>
      </Container>
    </section>
  );
};

export default RatingSummary;