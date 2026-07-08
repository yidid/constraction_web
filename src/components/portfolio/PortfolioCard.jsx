import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

/**
 * Project card for the Portfolio grid — visually similar to Home's
 * ProjectCard (image zoom + hover overlay), but links to the project's
 * own detail page and also shows year/location for extra context.
 */
const PortfolioCard = ({ id, title, category, image, location, year }) => {
  return (
    <Link
      to={`/portfolio/${id}`}
      className="group relative rounded-lg overflow-hidden shadow-lg block h-80"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/30 to-transparent flex flex-col justify-end p-6">
        <span className="text-primary text-xs font-bold uppercase tracking-wider mb-1 capitalize">
          {category} &middot; {year}
        </span>
        <h3 className="text-light text-xl font-bold">{title}</h3>
        <p className="text-gray-300 text-sm mt-1">{location}</p>

        <div className="flex items-center gap-2 text-light text-sm font-semibold mt-3 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          View Details <FaArrowRight size={12} />
        </div>
      </div>
    </Link>
  );
};

export default PortfolioCard;