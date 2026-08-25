import React, { useState, useMemo } from "react";
import Container from "../ui/Container";
import CategoryFilter from "./CategoryFilter";
import PortfolioCard from "./PortfolioCard";
import useProjects from "../../hooks/useProjects";

/**
 * Portfolio page's main section: category filter tabs + a responsive
 * grid of all matching projects. Filtering is handled entirely client-side
 * via useState, since the full project data set is small and already
 * loaded in memory — no need for URL query params at this scale.
 */
const PortfolioGrid = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const { projects, loading, error } = useProjects();

  // useMemo avoids recalculating the filtered list on every render unless
  // the category or underlying project data actually changes.
  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") return projects;
    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory, projects]);

  return (
    <section className="py-20 bg-light">
      <Container>
        <CategoryFilter
          activeCategory={activeCategory}
          onChange={setActiveCategory}
        />

        {loading ? (
          <p className="mt-16 text-center text-gray-500">Loading projects...</p>
        ) : error ? (
          <p role="alert" className="mt-16 text-center text-red-600">
            {error}
          </p>
        ) : filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {filteredProjects.map((project) => (
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
        ) : (
          <p className="text-center text-gray-500 mt-16">
            No projects found in this category yet.
          </p>
        )}
      </Container>
    </section>
  );
};

export default PortfolioGrid;