import React from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { FaArrowLeft, FaMapMarkerAlt, FaCalendarAlt, FaLayerGroup } from "react-icons/fa";
import usePageTitle from "../hooks/usePageTitle";
import Container from "../components/ui/Container";
import ProjectGallery from "../components/portfolio/ProjectGallery";
import useProjects from "../hooks/useProjects";

/**
 * Dynamic route rendering full detail for a single project, based on the
 * :projectId URL param, including an interactive image gallery.
 * Falls back to a redirect to the 404 page for an unmatched project ID.
 */
const ProjectDetail = () => {
  const { projectId } = useParams();
  const { projects, loading } = useProjects();
  const project = projects.find((p) => p.id === projectId);

  usePageTitle(
    project ? project.title : "Project Not Found",
    project ? project.description : ""
  );

  if (loading) {
    return <div className="py-32 text-center">Loading project...</div>;
  }

  if (!project) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div>
      <section className="bg-navy dark:bg-dark pt-24 pb-16">
        <Container>
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-primary text-sm mb-6 transition-colors duration-200"
          >
            <FaArrowLeft size={12} /> Back to Portfolio
          </Link>

          <h1 className="text-3xl sm:text-4xl font-bold text-light">
            {project.title}
          </h1>
  <p className="text-gray-300 dark:text-gray-400 text-lg pt-5 leading-relaxed max-w-4xl mb-12">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-6 mt-5 text-gray-300 text-sm">
            <span className="flex items-center gap-2">
              <FaLayerGroup className="text-primary" />
              <span className="capitalize">{project.category}</span>
            </span>
            <span className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-primary" />
              {project.location}
            </span>
            <span className="flex items-center gap-2">
              <FaCalendarAlt className="text-primary" />
              {project.year}
            </span>
          </div>
        </Container>
      </section>

      <section className="py-10 bg-light dark:bg-dark">
        <Container>
        

          <h2 className="text-2xl font-bold text-dark dark:text-light mb-6">
            Project Gallery
          </h2>
          <ProjectGallery images={project.gallery} />
        </Container>
      </section>

    
    </div>
  );
};

export default ProjectDetail;