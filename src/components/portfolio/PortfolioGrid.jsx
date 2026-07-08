import React, { useState, useMemo } from "react";
import Container from "../ui/Container";
import CategoryFilter from "./CategoryFilter";
import PortfolioCard from "./PortfolioCard";
import projects from "../../data/projects";

/**
 * Portfolio page's main section: category filter tabs + a responsive
 * grid of all matching projects. Filtering is handled entirely client-side
 * via useState, since the full project data set is small and already
 * loaded in memory — no need for URL query params at this scale.
 */
const PortfolioGrid = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  // useMemo avoids recalculating the filtered list on every render unless
  // the category or underlying project data actually changes.
  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") return projects;
    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="py-20 bg-light">
      <Container>
        <CategoryFilter
          activeCategory={activeCategory}
          onChange={setActiveCategory}
        />

        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {filteredProjects.map((project) => (
              <PortfolioCard
                key={project.id}
                id={project.id}
                title={project.title}
                category={project.category}
                image={project.image}
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