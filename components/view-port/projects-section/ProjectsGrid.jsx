import React from "react";

import { projects } from "@/utils/img-exporter";
import ProjectCard from "./ProjectCard";

const ProjectsGrid = () => {
  return (
    <div className="grid grid-cols-1 justify-center gap-10 my-10 xl:my-20">
      {projects?.map((project, index) => (
        <ProjectCard key={index} project={project} count={index} />
      ))}
    </div>
  );
};

export default ProjectsGrid;
