import React from "react";
import { FaArrowRight } from "react-icons/fa";

/**
 * Reusable project card with a hover-reveal overlay effect:
 * the image zooms slightly and a dark overlay slides up on hover,
 * revealing the category and a "View Project" link.
 * Used in the Home page Featured Projects section and the Portfolio page.
 */
const ProjectCard = ({ title, category, image }) => {
  return (
    <div className="group relative rounded-lg overflow-hidden shadow-lg cursor-pointer h-80">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* Overlay: mostly transparent by default, darkens and reveals content on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent flex flex-col justify-end p-6">
        <span className="text-primary text-xs font-bold uppercase tracking-wider mb-1 capitalize">
          {category}
        </span>
        <h3 className="text-light text-xl font-bold">{title}</h3>

        {/* "View Project" link: hidden by default, fades/slides in on hover */}
        <div className="flex items-center gap-2 text-light text-sm font-semibold mt-2 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          View Project <FaArrowRight size={12} />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;