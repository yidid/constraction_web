import React from "react";
import { Link } from "react-router-dom";
import { FaHardHat } from "react-icons/fa";

/**
 * Shared brand logo used in both the Navbar and Footer.
 * Accepts a `light` prop to switch text color depending on background
 * (e.g., white text on the dark Footer, dark text on a solid Navbar).
 */
const Logo = ({ light = false }) => {
  return (
    <Link to="/" className="flex items-center gap-2 shrink-0">
      <FaHardHat className="text-primary text-2xl" />
      <span
        className={`text-xl font-bold tracking-tight ${
          light ? "text-light" : "text-dark"
        }`}
      >
        NAF <span className="text-primary">Construction</span>
      </span>
    </Link>
  );
};

export default Logo;