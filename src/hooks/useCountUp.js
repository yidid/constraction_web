import { useState, useEffect, useRef } from "react";

/**
 * Animates a number counting up from 0 to a target value over a given duration,
 * using requestAnimationFrame for smooth, consistent timing (rather than setInterval,
 * which produces jittery results).
 *
 * @param {number} target - the final number to count up to
 * @param {boolean} start - whether the animation should begin (controlled by useOnScreen)
 * @param {number} duration - animation duration in milliseconds
 * @returns {number} the current animated count value
 */
const useCountUp = (target, start, duration = 2000) => {
  const [count, setCount] = useState(0);
  const frameRef = useRef();

  useEffect(() => {
    if (!start) return;

    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      setCount(Math.floor(progress * target));

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      } else {
        setCount(target); // ensure it lands exactly on the target, avoiding rounding gaps
      }
    };

    frameRef.current = requestAnimationFrame(animate);

    // Cleanup: cancel the animation frame if the component unmounts mid-animation
    return () => cancelAnimationFrame(frameRef.current);
  }, [start, target, duration]);

  return count;
};

export default useCountUp;