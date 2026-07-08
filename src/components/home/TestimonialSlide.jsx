import React from "react";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

/**
 * A single testimonial slide: avatar, name, role, star rating, and quote.
 * Rendered inside the sliding row in TestimonialsSection — each slide
 * takes up the full width of its container (w-full shrink-0).
 */
const TestimonialSlide = ({ name, role, avatar, rating, quote }) => {
  return (
    <div className="w-full shrink-0 px-4">
      <div className="max-w-2xl mx-auto bg-light rounded-lg shadow-lg p-10 text-center">
        <FaQuoteLeft className="text-primary text-3xl mx-auto mb-6" />

        <p className="text-dark text-lg leading-relaxed italic">"{quote}"</p>

        <div className="flex justify-center gap-1 mt-6">
          {Array.from({ length: 5 }).map((_, i) => (
            <FaStar
              key={i}
              className={i < rating ? "text-primary" : "text-gray-300"}
              size={16}
            />
          ))}
        </div>

        <div className="flex items-center justify-center gap-3 mt-6">
          <img
            src={avatar}
            alt={name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="text-left">
            <p className="font-bold text-dark">{name}</p>
            <p className="text-gray-500 text-sm">{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlide;