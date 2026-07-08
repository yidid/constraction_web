import React from "react";
import portfolioCategories from "../../data/portfolioCategories";

/**
 * Row of pill-style filter buttons for the Portfolio page.
 * The active category is highlighted; clicking a button updates
 * the parent's filter state via the `onChange` callback.
 */
const CategoryFilter = ({ activeCategory, onChange }) => {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {portfolioCategories.map((category) => {
        const isActive = category.value === activeCategory;
        return (
          <button
            key={category.value}
            onClick={() => onChange(category.value)}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-colors duration-200 ${
              isActive
                ? "bg-primary text-dark"
                : "bg-light-off text-dark hover:bg-gray-200"
            }`}
          >
            {category.label}
          </button>
        );
      })}
    </div>
  );
};

export default CategoryFilter;