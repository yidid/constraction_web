import React from "react";
import { Link } from "react-router-dom";
import usePageTitle from "../hooks/usePageTitle";

const NotFound = () => {
  usePageTitle("404 - Page Not Found");

  return (
    <div className="pt-20 min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-6xl font-bold text-primary">404</h1>
      <p className="text-xl font-semibold text-dark mt-4">
        Page Not Found
      </p>
      <p className="text-gray-500 mt-2 max-w-md">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="mt-6 bg-primary text-dark font-semibold px-6 py-3 rounded-md hover:bg-primary-light transition-colors duration-200"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;