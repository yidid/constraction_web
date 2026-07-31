import { useState, useEffect } from "react";

/**
 * Custom hook that tracks whether the page has been scrolled past a given threshold.
 * Used by the Navbar to switch from transparent (over hero) to solid background.
 *
 * @param {number} threshold - scrollY value (in px) after which "scrolled" becomes true
 * @returns {boolean} isScrolled
 */
const useScrollPosition = (threshold = 50) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > threshold);
    };

    // Run once on mount in case the page loads already scrolled (e.g., refresh mid-page)
    handleScroll();

    window.addEventListener("scroll", handleScroll);

    // Cleanup: remove the listener when the component using this hook unmounts
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return isScrolled;
};

export default useScrollPosition;