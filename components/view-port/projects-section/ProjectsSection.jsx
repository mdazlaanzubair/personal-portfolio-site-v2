import React from "react";
import { H1, P1 } from "../../common/TypoAndUtils";
import ProjectsGrid from "./ProjectsGrid";
import ServicesGrid from "../services-section/ServicesGrid";
import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  return (
    <section id="project-section" className="hero min-h-screen">
      <div className="hero-content py-20">
        <div className="max-w-full flex flex-col justify-center items-center px-0 md:px-10 lg:px-20">
          <div className="max-w-3xl">
            <H1 className="max-w-full my-3 mx-auto text-center">
              Let&apos;s Sneak a Peak at my Work
            </H1>
            <P1 className="max-w-2xl my-3 mx-auto text-center">
              I&apos;d like to share some of my work with you.
            </P1>
          </div>

          <ProjectsGrid />
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
