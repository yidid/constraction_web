import React from "react";

/**
 * Generic layout primitive: centers content and applies consistent
 * horizontal padding/max-width across the entire site. Used inside
 * nearly every section so spacing stays uniform without repeating
 * the same className string everywhere.
 */
const Container = ({ children, className = "" }) => {
  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
};

export default Container;