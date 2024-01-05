import React from "react";
import { H1, P1, P2, TextHighlighter } from "../../common/TypoAndUtils";
import ServicesGrid from "./ServicesGrid";

const ServicesSection = () => {
  return (
    <section id="services-section" className="relative hero min-h-screen">
      <div className="absolute w-[70rem] h-[70rem] bg-accent rounded-full left-1/2 -translate-x-1/2 -top-[40rem] mix-blend-screen blur-3xl opacity-10"></div>
      <div className="hero-content py-20">
        <div className="max-w-full flex flex-col justify-center items-center px-0 md:px-10 lg:px-20">
          <div className="max-w-3xl">
            <H1 className="max-w-full my-3 mx-auto text-center">
              I offer solutions that makes difference
            </H1>
            <P1 className="max-w-2xl my-3 mx-auto text-center">
              I&apos;m an expert in creating{" "}
              <TextHighlighter>user-centered</TextHighlighter>,{" "}
              <TextHighlighter>visually appealing</TextHighlighter>, and{" "}
              <TextHighlighter>functional web applications</TextHighlighter>{" "}
              that align with{" "}
              <TextHighlighter>your brand identity</TextHighlighter> and{" "}
              <TextHighlighter>drive business objectives</TextHighlighter>.
            </P1>
          </div>

          <ServicesGrid />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
