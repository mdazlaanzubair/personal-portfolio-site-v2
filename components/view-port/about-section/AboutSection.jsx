import React from "react";
import {
  H1,
  H3,
  LinkText,
  P1,
  P2,
  SolidButtonLink,
  TextHighlighter,
} from "../../common/TypoAndUtils";
import TechSphere from "@/components/common/TechSphere";
import { tech_sphere_logos } from "@/utils/img-exporter";

const AboutSection = () => {
  return (
    <div id="about-section" className="hero min-h-screen">
      <div className="hero-content pt-28 pb-20">
        <div className="max-w-full flex flex-col lg:flex-row justify-between px-0 md:px-10 lg:px-20 gap-20">
          <div>
            <TechSphere entries={tech_sphere_logos} />
          </div>
          <div className="max-w-md">
            <div className="mb-5">
              <H1>I&apos;m not just a techie;</H1>
            </div>
            <div className="mb-3">
              <P1>
                I understand your unique needs and translating them into
                intuitive and visually appealing solutions for you audience.
              </P1>
            </div>
            <div className="mb-3">
              <P2>
                My journey in this field began with a fascination for the power
                of{" "}
                <TextHighlighter>
                  design to communicate, engage, and solve problems
                </TextHighlighter>
                . Over the years, I&apos;ve honed my skills in various
                disciplines, including{" "}
                <TextHighlighter>UI/UX design</TextHighlighter> and{" "}
                <TextHighlighter>development</TextHighlighter>.
              </P2>
            </div>
            <div className="max-w-xl mx-auto flex flex-row justify-start items-center gap-3">
              <SolidButtonLink link="#contact-section" text="Credentials" />
              <LinkText link="#about-section" text="See my work" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
