import React from "react";

const SectionHeading = ({ eyebrow, heading, subtext, centered = false }) => {
  return (
    <div className={`max-w-2xl ${centered ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <span className="inline-block text-primary-light font-semibold text-sm uppercase tracking-wider mb-3">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold text-dark dark:text-light leading-tight">
        {heading}
      </h2>
      {subtext && (
        <p className="text-gray-500 dark:text-gray-300 mt-4 leading-relaxed">
          {subtext}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;