import React from "react";
import useCountUp from "../../hooks/useCountUp";

/**
 * A single animated statistic (e.g., "18+ Years of Experience").
 * The count-up only starts once `startCounting` becomes true — controlled
 * by the parent StatsSection via useOnScreen, so all 4 numbers animate
 * together the moment the section scrolls into view.
 */
const StatItem = ({ value, suffix, label, startCounting }) => {
  const count = useCountUp(value, startCounting, 2000);

  return (
    <div className="text-center">
      <p className="text-4xl sm:text-5xl font-bold text-primary-light">
        {count}
        {suffix}
      </p>
      <p className="text-gray-300 mt-2 text-sm sm:text-base">{label}</p>
    </div>
  );
};

export default StatItem;