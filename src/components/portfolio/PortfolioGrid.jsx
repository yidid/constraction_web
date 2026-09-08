import React, { useState, useMemo, useEffect } from "react";
import Container from "../ui/Container";
import CategoryFilter from "./CategoryFilter";
import PortfolioCard from "./PortfolioCard";
import useProjects from "../../hooks/useProjects";
import LoadingState from "../common/LoadingState";

/**
 * Portfolio page's main section: category filter tabs + a responsive
 * grid of all matching projects. Filtering is handled entirely client-side
 * via useState, since the full project data set is small and already
 * loaded in memory — no need for URL query params at this scale.
 */
const PortfolioGrid = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const { projects, loading, error } = useProjects();
  const projectsPerPage = 6;

  // useMemo avoids recalculating the filtered list on every render unless
  // the category or underlying project data actually changes.
  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") return projects;
    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory, projects]);

  const pageCount = Math.ceil(filteredProjects.length / projectsPerPage);
  const paginatedProjects = filteredProjects.slice(
    (currentPage - 1) * projectsPerPage,
    currentPage * projectsPerPage
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory]);

  useEffect(() => {
    if (pageCount > 0 && currentPage > pageCount) {
      setCurrentPage(pageCount);
    }
  }, [currentPage, pageCount]);

  return (
    <section className="py-20 bg-light dark:bg-dark">
      <Container>
        <CategoryFilter
          activeCategory={activeCategory}
          onChange={setActiveCategory}
        />

        {loading ? (
          <LoadingState label="Loading projects..." />
        ) : error ? (
          <p role="alert" className="mt-16 text-center text-red-600">
            {error}
          </p>
        ) : filteredProjects.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {paginatedProjects.map((project) => (
              <PortfolioCard
                key={project.id}
                id={project.id}
                title={project.title}
                category={project.category}
                image2={project.image2}
                location={project.location}
                year={project.year}
              />
            ))}
            </div>

            {pageCount > 1 && (
              <nav
                aria-label="Portfolio pagination"
                className="flex flex-wrap items-center justify-center gap-2 mt-12"
              >
                <button
                  type="button"
                  onClick={() => setCurrentPage((page) => page - 1)}
                  disabled={currentPage === 1}
                  className="px-4 py-2 rounded-md bg-light-off dark:bg-dark-light text-dark dark:text-light font-semibold text-sm disabled:opacity-40 disabled:cursor-not-allowed hover:bg-primary hover:text-white transition-colors duration-200"
                >
                  Previous
                </button>

                {Array.from({ length: pageCount }, (_, index) => index + 1).map(
                  (page) => (
                    <button
                      key={page}
                      type="button"
                      onClick={() => setCurrentPage(page)}
                      aria-label={`Go to portfolio page ${page}`}
                      aria-current={currentPage === page ? "page" : undefined}
                      className={`w-10 h-10 rounded-md font-semibold text-sm transition-colors duration-200 ${
                        currentPage === page
                          ? "bg-primary text-white"
                          : "bg-light-off dark:bg-dark-light text-dark dark:text-light hover:bg-primary hover:text-white"
                      }`}
                    >
                      {page}
                    </button>
                  )
                )}

                <button
                  type="button"
                  onClick={() => setCurrentPage((page) => page + 1)}
                  disabled={currentPage === pageCount}
                  className="px-4 py-2 rounded-md bg-light-off dark:bg-dark-light text-dark dark:text-light font-semibold text-sm disabled:opacity-40 disabled:cursor-not-allowed hover:bg-primary hover:text-white transition-colors duration-200"
                >
                  Next
                </button>
              </nav>
            )}
          </>
        ) : (
          <p className="text-center text-gray-500 dark:text-gray-400 mt-16">
            No projects found in this category yet.
          </p>
        )}
      </Container>
    </section>
  );
};

export default PortfolioGrid;