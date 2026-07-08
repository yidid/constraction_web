import React from "react";
import { Link, useLocation } from "react-router-dom";
import Container from "../ui/Container";

/**
 * Reusable banner shown at the top of every inner page (all pages except Home).
 * Displays the page title, an optional subtitle, and an auto-generated breadcrumb
 * based on the current route — so individual pages don't need to build this manually.
 *
 * @param {string} title - main heading shown in the banner (e.g., "Our Services")
 * @param {string} subtitle - short supporting line under the title
 */
const PageHeader = ({ title, subtitle }) => {
  const location = useLocation();

  // Converts a path like "/services" into a readable breadcrumb label "Services"
  const currentPageLabel = location.pathname
    .replace("/", "")
    .replace("-", " ");

  return (
    <section className="bg-dark pt-32 pb-16">
      <Container>
        <h1 className="text-3xl sm:text-4xl font-bold text-light capitalize">
          {title}
        </h1>
        {subtitle && (
          <p className="text-gray-400 mt-3 max-w-xl">{subtitle}</p>
        )}

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mt-5 text-sm">
          <Link to="/" className="text-gray-400 hover:text-primary transition-colors duration-200">
            Home
          </Link>
          <span className="text-gray-600">/</span>
          <span className="text-primary capitalize">{currentPageLabel}</span>
        </div>
      </Container>
    </section>
  );
};

export default PageHeader;