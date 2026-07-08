import React from "react";

/**
 * Reusable section header used across nearly every Home page section
 * (and inner pages later). Consists of a small yellow eyebrow label,
 * a bold heading, and an optional supporting subtext.
 *
 * @param {string} eyebrow - small uppercase label above the heading (e.g., "Who We Are")
 * @param {string} heading - main section heading
 * @param {string} subtext - optional supporting paragraph below the heading
 * @param {boolean} centered - centers the text block (used for sections like Services, Testimonials)
 */
const SectionHeading = ({ eyebrow, heading, subtext, centered = false }) => {
  return (
    <div className={`max-w-2xl ${centered ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold text-dark leading-tight">
        {heading}
      </h2>
      {subtext && (
        <p className="text-gray-500 mt-4 leading-relaxed">{subtext}</p>
      )}
    </div>
  );
};

export default SectionHeading;