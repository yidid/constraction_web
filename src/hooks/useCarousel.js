import { useState, useEffect, useCallback } from "react";

/**
 * Manages carousel/slider state: current slide index, next/prev navigation,
 * and optional auto-advance on a timer. Reusable for any future slider
 * (e.g., a future image gallery on the Portfolio page).
 *
 * @param {number} slideCount - total number of slides
 * @param {number} autoAdvanceMs - milliseconds between auto-advances (0 disables auto-advance)
 * @returns {{ currentIndex: number, goToSlide: function, goNext: function, goPrev: function }}
 */
const useCarousel = (slideCount, autoAdvanceMs = 6000) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slideCount);
  }, [slideCount]);

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slideCount) % slideCount);
  }, [slideCount]);

  const goToSlide = (index) => setCurrentIndex(index);

  useEffect(() => {
    if (!autoAdvanceMs) return;

    const interval = setInterval(goNext, autoAdvanceMs);

    // Cleanup: clear the timer when the component unmounts or dependencies change,
    // preventing memory leaks and duplicate intervals stacking up.
    return () => clearInterval(interval);
  }, [goNext, autoAdvanceMs]);

  return { currentIndex, goToSlide, goNext, goPrev };
};

export default useCarousel;