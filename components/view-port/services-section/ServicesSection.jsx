import React from "react";
import { H1, P1, TextHighlighter } from "../../common/TypoAndUtils";
import ServicesGrid from "./ServicesGrid";

const ServicesSection = () => {
  return (
    <div id="services-section" className="hero min-h-screen">
      <div className="hero-content flex-col text-center pt-28 pb-20">
        <div className="max-w-3xl">
          <H1>I Offer Solutions that makes Difference</H1>
        </div>
        <div className="max-w-3xl mx-auto">
          <P1>
            I&apos;m an expert in creating{" "}
            <TextHighlighter>user-centered</TextHighlighter>,{" "}
            <TextHighlighter>visually appealing</TextHighlighter>, and{" "}
            <TextHighlighter>functional web applications</TextHighlighter> that
            align with <TextHighlighter>your brand identity</TextHighlighter>{" "}
            and <TextHighlighter>drive business objectives</TextHighlighter>.
          </P1>
        </div>

        <ServicesGrid />
      </div>
    </div>
  );
};

export default ServicesSection;
