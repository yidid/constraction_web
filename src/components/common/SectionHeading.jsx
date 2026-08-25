import React from "react";

const SectionHeading = ({ eyebrow, heading, subtext, centered = false }) => {
  return (
    <div className={`max-w-2xl ${centered ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <span className="inline-flex items-center gap-3 text-primary dark:text-primary-light font-bold text-xs uppercase tracking-[0.18em] mb-4">
          <span className="w-8 h-px bg-primary" aria-hidden="true" />
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold text-dark dark:text-light leading-tight">
        {heading}
      </h2>
      {subtext && (
        <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg mt-4 leading-relaxed">
          {subtext}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;