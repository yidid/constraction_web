import React from "react";
import Container from "../ui/Container";
import SectionHeading from "../common/SectionHeading";
import useProjects from "../../hooks/useProjects";


const OurClients = () => {
  const { projects } = useProjects();
  const projectsWithImages = projects.filter((project) => project.image);
  const privateClientProjects = projects.filter(
    (project) => project.client === "Private Client"
  );
  const orderedProjects = [...projectsWithImages, ...privateClientProjects];
  const marqueeList = [...orderedProjects, ...orderedProjects, ...orderedProjects];

  return (
    <section className="py-16 bg-white border-y border-gray-100 overflow-hidden select-none">
      <Container>
        <SectionHeading
          eyebrow="Trusted By"
          heading="Companies We've Worked With"
          centered
        />
      </Container>

      {/* Marquee with smooth side fade masks */}
      <div className="relative mt-12 w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <div className="flex w-max gap-16 animate-[marqueeLeft_35s_linear_infinite] hover:[animation-play-state:paused]">
          {marqueeList.map((project, index) => (
            <div
              key={`${project.id}-${index}`}
          
              className="flex items-center justify-center h-40 w-64 px-3 shrink-0 bg-transparent active:bg-transparent focus:bg-transparent"
            >
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title || "Client Logo"}
                  loading="lazy"
                  className="h-full w-full max-h-32 max-w-full object-contain pointer-events-none"
                />
              ) : null}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marqueeLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
      `}</style>
    </section>
  );
};

export default OurClients;