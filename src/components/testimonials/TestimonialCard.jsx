import React from "react";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

/**
 * Grid-friendly testimonial card — shares the same visual language as
 * TestimonialSlide (avatar, stars, quote) but sized for a standard CSS
 * grid cell rather than a horizontally-sliding carousel row.
 */
const TestimonialCard = ({ name, role, avatar, rating, quote }) => {
  return (
    <div className="bg-light rounded-lg shadow-md p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
      <FaQuoteLeft className="text-primary text-2xl mb-4" />

      <p className="text-gray-600 leading-relaxed">"{quote}"</p>

      <div className="flex gap-1 mt-5">
        {Array.from({ length: 5 }).map((_, i) => (
          <FaStar
            key={i}
            className={i < rating ? "text-primary" : "text-gray-300"}
            size={14}
          />
        ))}
      </div>

      <div className="flex items-center gap-3 mt-5 pt-5 border-t border-gray-100">
        <img
          src={avatar}
          alt={name}
          className="w-11 h-11 rounded-full object-cover"
        />
        <div>
          <p className="font-bold text-dark text-sm">{name}</p>
          <p className="text-gray-500 text-xs mt-0.5">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;