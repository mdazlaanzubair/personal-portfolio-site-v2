import React from "react";

import { services } from "@/utils/img-exporter";
import ServiceCard from "./ServiceCard";
import { H2, P2, TextHighlighter } from "@/components/common/TypoAndUtils";

const ServicesGrid = () => {
  return (
    <div className="group grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 justify-center gap-5 my-5">
      <div className="col-span-1 lg:col-span-2 text-start flex flex-col justify-center rounded-3xl shadow bg-accent bg-opacity-5 backdrop-blur-md">
        <div className="card card-compact m-5">
          <div className="card-body">
            <H2 className="my-3">My offerings will cater your needs.</H2>
            <P2>
              Whether you&apos;re a{" "}
              <TextHighlighter>business owner</TextHighlighter>,{" "}
              <TextHighlighter>entrepreneur</TextHighlighter>, or{" "}
              <TextHighlighter>individual</TextHighlighter> looking to{" "}
              <TextHighlighter>establish your online presence</TextHighlighter>,
              I have the expertise to deliver exceptional results.
            </P2>
          </div>
        </div>
      </div>

      {services?.map((service, index) => (
        <ServiceCard key={index} service={service} />
      ))}
    </div>
  );
};

export default ServicesGrid;
