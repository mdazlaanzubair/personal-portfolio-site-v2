import React from "react";
import { H1, P1, TextHighlighter } from "../../common/TypoAndUtils";
import { services } from "@/utils/img-exporter";
import ServiceCard from "./ServiceCard";

const ServicesSection = () => {
  return (
    <div id="services-section" className="hero min-h-screen">
      <div className="hero-content flex-col text-center pt-20">
        <div className="max-w-full">
          <H1>I Offer Solutions that makes Difference</H1>
        </div>
        <div className="max-w-3xl mx-auto">
          <P1>
            I'm an expert in creating{" "}
            <TextHighlighter>user-centered</TextHighlighter>,{" "}
            <TextHighlighter>visually appealing</TextHighlighter>, and{" "}
            <TextHighlighter>functional web applications</TextHighlighter> that
            align with <TextHighlighter>your brand identity</TextHighlighter>{" "}
            and <TextHighlighter>drive business objectives</TextHighlighter>.
          </P1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 justify-center gap-10 my-10 xl:my-20">
          {services?.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
