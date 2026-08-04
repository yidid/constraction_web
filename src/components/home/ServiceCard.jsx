import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

/**
 * Reusable card for a single service, used in the Home page services
 * preview grid. Displays an icon, title, short description, and a
 * "Learn more" link to the full Services page.
 *
 * Includes a hover "lift" animation (translate + shadow) per the
 * project's card animation requirement.
 */
const ServiceCard = ({ icon: Icon, title, shortDescription }) => {
  return (
    <div className="group bg-slate-100 dark:bg-dark-light rounded-lg p-8   transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-primary dark:bg-light group-hover:bg-primary-light transition-colors duration-300">
        <Icon className="text-white dark:text-primary group-hover:text-light text-2xl transition-colors duration-300" />
      </div>

      <h3 className="text-xl font-bold text-dark dark:text-light mt-6">{title}</h3>
      <p className="text-gray-500 dark:text-gray-300 mt-3 leading-relaxed">{shortDescription}</p>

      <Link
        to="/services"
        className="inline-flex items-center gap-2 text-primary dark:text-primary-light font-semibold text-sm mt-5 hover:gap-3 transition-all duration-200"
      >
        Learn More <FaArrowRight size={12} />
      </Link>
    </div>
  );
};

export default ServiceCard;