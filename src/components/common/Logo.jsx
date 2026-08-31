import React from "react";
import { Link } from "react-router-dom";
import logoImg from "../../assets/images/logo.jpg"; // <-- Make sure to match the path to your logo image file

/**
 * Shared brand logo used in both the Navbar and Footer.
 * Accepts a `light` prop to switch text color depending on background
 * (e.g., white text on a dark Footer, dark text on a light Navbar).
 */
const Logo = ({ light = false }) => {
  return (
    <Link to="/" className="flex items-center gap-3 shrink-0">
      {/* Brand Logo Image */}
      <img
        src={logoImg}
        alt="NAF Construction Logo"
       className="h-10 w-10 rounded-full object-contain bg-white p-1"
      />

      {/* Brand Text */}
      <span
        className={`text-xl font-bold tracking-tight ${
          light ? "text-light" : "text-dark"
        }`}
      >
        NAF <span className="text-primary-light">Construction & Trading</span>
      </span>
    </Link>
  );
};

export default Logo;