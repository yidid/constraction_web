import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import usePageTitle from "../hooks/usePageTitle";

const NotFound = () => {
  usePageTitle("404 - Page Not Found");

  return (
    <main className="flex min-h-[calc(100vh-5rem)] items-center justify-center px-5 py-16 text-center sm:px-8">
      <div className="max-w-lg">
        <p className="font-mono text-8xl font-bold leading-none text-primary dark:text-primary-light dsm:text-9xl">404</p>
        <h1 className="mt-6 text-3xl font-bold text-dark dark:text-light sm:text-4xl">
          Page not found
        </h1>
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          The page you are looking for does not exist or has moved.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-3 rounded-md bg-primary px-5 py-3 font-semibold text-light transition-colors duration-200 hover:bg-primary-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 dark:focus-visible:ring-offset-dark"
        >
          <FaHome size={14} />
          Back to home
        </Link>
      </div>
    </main>
  );
};

export default NotFound;