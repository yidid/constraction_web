import React from "react";
import { Link } from "react-router-dom";

/**
 * Reusable button component used across the entire site (Hero, CTAs, forms, cards).
 * Renders as a React Router <Link> if a `to` prop is passed (internal navigation),
 * or a plain <button> if an `onClick` is passed (e.g., form submissions).
 *
 * @param {string} variant - "primary" (solid yellow), "outline" (bordered, transparent),
 *                           or "dark" (solid black/dark — used on yellow backgrounds)
 * @param {string} to - internal route path (renders as Link)
 * @param {function} onClick - click handler (renders as button)
 * @param {string} type - button type attribute (e.g., "submit"), only used when no `to` is given
 */
const Button = ({
  children,
  variant = "primary",
  to,
  onClick,
  type = "button",
  className = "",
}) => {
  const baseStyles =
    "inline-block px-7 py-3.5 rounded-md font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5";

  const variants = {
    primary:
      "bg-primary text-white hover:bg-primary-light shadow-md hover:shadow-lg",
    outline:
      "border-2 border-light text-light hover:bg-light hover:text-dark",
    dark:
      "bg-dark text-light hover:bg-dark-light shadow-md hover:shadow-lg",
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedStyles}>
      {children}
    </button>
  );
};

export default Button;