import React from "react";

const LoadingState = ({ label = "Loading..." }) => {
  return (
    <div
      className="flex flex-col items-center justify-center gap-3 py-20 text-center text-gray-500 dark:text-gray-400"
      role="status"
      aria-live="polite"
    >
      <span className="h-10 w-10 animate-spin rounded-full border-4 border-primary/20 border-t-primary" />
      <span className="text-sm font-medium">{label}</span>
    </div>
  );
};

export default LoadingState;
