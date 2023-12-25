import React from "react";
import { H1, P1 } from "../../common/TypoAndUtils";
import ProjectsGrid from "./ProjectsGrid";

const ProjectsSection = () => {
  return (
    <div id="project-section" className="hero min-h-screen">
      <div className="hero-content flex-col text-center pt-28 pb-20">
        <div className="max-w-3xl">
          <H1>Let&apos;s Sneak a Peak at my Work</H1>
        </div>
        <div className="max-w-3xl mx-auto">
          <P1>I&apos;d like to share some of my work with you.</P1>
        </div>

        <ProjectsGrid />
      </div>
    </div>
  );
};

export default ProjectsSection;
