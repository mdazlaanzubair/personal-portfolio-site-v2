"use client";

import React from "react";
import ProjectImage from "./ProjectImage";
import ProjectContent from "./ProjectContent";

const ProjectCard = ({ project, count }) => {
  return (
    <div
      className={`w-full flex flex-col ${
        count === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
      } items-center`}
    >
      <ProjectImage
        bgImg={project?.bgImg}
        liveUrl={project?.urls?.live}
        projectImg={project?.projectImg}
        title={project?.title}
      />
      <ProjectContent
        title={project?.title}
        liveUrl={project?.urls?.live}
        sourceUrl={project?.urls?.source}
        desc={project?.desc}
        techs={project?.techs}
        count={count}
      />
    </div>
  );
};

export default ProjectCard;
