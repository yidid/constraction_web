import { useState, useEffect, useRef } from "react";

/**
 * Detects when a referenced DOM element enters the viewport, using the
 * IntersectionObserver API (more performant than manual scroll-position math).
 * Returns a ref to attach to the target element, and a boolean for whether
 * it's currently visible on screen.
 *
 * Reused by: StatsSection (Step 7f) now, and every scroll-fade-in animation
 * across the site in Step 15.
 *
 * @param {object} options - IntersectionObserver options (e.g., threshold)
 * @returns {[React.RefObject, boolean]} [ref, isVisible]
 */
const useOnScreen = (options = { threshold: 0.3 }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        // Once visible, stop observing — we don't need to re-trigger the animation
        // if the user scrolls away and back (standard UX expectation for count-ups).
        observer.unobserve(currentRef);
      }
    }, options);

    observer.observe(currentRef);

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [ref, isVisible];
};

export default useOnScreen;