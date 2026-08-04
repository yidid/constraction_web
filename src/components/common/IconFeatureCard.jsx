import React from "react";

/**
 * Reusable "icon box + title + description" card pattern, extracted from
 * the inline JSX originally written for WhyChooseUs (Home page). Used
 * anywhere this presentation pattern repeats — e.g., About page Core Values.
 */
const IconFeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-light-off dark:bg-dark-light rounded-lg p-8 text-center hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
      <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-primary dark:bg-white mx-auto">
        <Icon className="text-white  dark:text-primary-light text-2xl" />
      </div>
      <h3 className="text-lg font-bold text-dark dark:text-light mt-5">{title}</h3>
      <p className="text-gray-500 dark:text-gray-400 mt-2 leading-relaxed text-sm">
        {description}
      </p>
    </div>
  );
};

export default IconFeatureCard;