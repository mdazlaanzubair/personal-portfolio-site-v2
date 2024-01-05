import React from "react";
import { H1, P1 } from "../../common/TypoAndUtils";
import ProjectsGrid from "./ProjectsGrid";
import projectBgImg1 from "@/public/project-imgs/bg-1.jpg";
import projectBgImg2 from "@/public/project-imgs/bg-2.jpg";

const ProjectsSection = () => {
  return (
    <section id="project-section" className="relative hero min-h-screen">
      <img
        src={projectBgImg1.src}
        className="absolute w-[30rem] h-[30rem] rounded-full -right-[10rem] top-[0rem] mix-blend-screen blur-3xl opacity-20"
        alt="sphere"
      />
      <img
        src={projectBgImg1.src}
        className="absolute w-[30rem] h-[30rem] rounded-full -left-[10rem] bottom-[40rem] mix-blend-screen blur-3xl opacity-20"
        alt="sphere"
      />
      <img
        src={projectBgImg1.src}
        className="absolute w-[30rem] h-[30rem] rounded-full -right-[10rem] bottom-[0rem] mix-blend-screen blur-3xl opacity-20"
        alt="sphere"
      />
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
