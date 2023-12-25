import React from "react";

import { services } from "@/utils/img-exporter";
import ServiceCard from "./ProjectCard";
import {
  H2,
  H1,
  P3,
  P2,
  P1,
  TextHighlighter,
} from "@/components/common/TypoAndUtils";

const ProjectsGrid = () => {
  return (
    <div className="group grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 justify-center gap-10 my-10 xl:my-20">
      <div className="col-span-2 text-start flex flex-col justify-center rounded-3xl bg-gradient-to-br from-primary/5 via-secondary/5 to-base-100/5 bg-opacity-10 backdrop-blur-md">
        <div className="card card-compact m-5">
          <div className="card-body">
            <H2>My offerings will cater your needs.</H2>
            <div className="mt-5">
              <P2>
                Whether you&apos;re a{" "}
                <TextHighlighter>business owner</TextHighlighter>,{" "}
                <TextHighlighter>entrepreneur</TextHighlighter>, or{" "}
                <TextHighlighter>individual</TextHighlighter> looking to{" "}
                <TextHighlighter>
                  establish your online presence
                </TextHighlighter>
                , I have the expertise to deliver exceptional results.
              </P2>
            </div>
          </div>
        </div>
      </div>

      {services?.map((service, index) => (
        <ServiceCard key={index} service={service} />
      ))}
    </div>
  );
};

export default ProjectsGrid;
