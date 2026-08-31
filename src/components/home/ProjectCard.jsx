import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

/**
 * Reusable project card with a hover-reveal overlay effect:
 * the image zooms slightly and a dark overlay slides up on hover,
 * revealing the category and a "View Project" link.
 * Used in the Home page Featured Projects section and the Portfolio page.
 */
const ProjectCard = ({ id, title, category, image2 }) => {
  return (
    <Link
      to={`/portfolio/${id}`}
      className="group relative block aspect-[4/3] overflow-hidden rounded-card bg-dark shadow-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-light focus-visible:ring-offset-2"
    >
      <img
        src={image2}
        alt={title}
        loading="lazy"
        className="h-full w-full object-cover transition duration-500 ease-out group-hover:scale-105"
      />

      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-dark/95 via-dark/25 to-transparent p-6">
        <span className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-primary-light">
          {category}
        </span>
        <h3 className="text-xl font-bold text-light">{title}</h3>
        <span className="mt-2 flex items-center gap-2 text-sm font-semibold text-light opacity-0 -translate-y-2 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          View Project <FaArrowRight aria-hidden="true" size={12} />
        </span>
      </div>
    </Link>
  );
};

export default ProjectCard;