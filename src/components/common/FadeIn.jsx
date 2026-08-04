import React from "react";
import useOnScreen from "../../hooks/useOnScreen";

/**
 * Generic wrapper that fades and slides its children into view once they
 * scroll into the viewport, using the useOnScreen hook (IntersectionObserver-based).
 * Applied at the page-composition level around whole sections, rather than
 * inside individual section components — keeping animation choreography
 * separate from section content.
 *
 * @param {number} delay - optional stagger delay in milliseconds
 */
const FadeIn = ({ children, delay = 0 }) => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.15 });

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: isVisible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  );
};

export default FadeIn;