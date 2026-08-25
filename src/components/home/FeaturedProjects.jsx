import React from "react";
import Container from "../ui/Container";
import SectionHeading from "../common/SectionHeading";
import ProjectCard from "./ProjectCard";
import Button from "../ui/Button";
import useProjects from "../../hooks/useProjects";

/**
 * Home page section previewing a handful of featured projects.
 * Filters the shared projects.js data by `featured: true` and
 * shows only the first 3, with a "View All Projects" link to
 * the full Portfolio page (Step 10).
 */
const FeaturedProjects = () => {
  const { projects } = useProjects();
  const featuredProjects = projects.filter((project) => project.featured).slice(0, 3);

  return (
    <section className="py-20 bg-light-off dark:bg-dark">
      <Container>
        <SectionHeading
          eyebrow="Our Work"
          heading="Featured Projects"
          subtext="A glimpse into the residential, commercial, and renovation projects we've proudly delivered."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              category={project.category}
              image={project.image}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button to="/portfolio" variant="primary">
            View All Projects
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default FeaturedProjects;