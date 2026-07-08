import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Headless component (renders nothing) that scrolls the window to the top
 * whenever the route changes. React Router does not do this automatically,
 * so without this, navigating pages while scrolled down would preserve
 * the scroll position from the previous page — a jarring UX bug.
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;