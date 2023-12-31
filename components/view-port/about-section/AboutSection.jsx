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
import Animator from "@/components/common/Animator";
import techie from "@/public/animation/techie.json";

const AboutSection = () => {
  const bgRadialGradient = {
    background: `radial-gradient(circle at 50% 50%, rgba(105, 25, 255, .1) 15%, transparent, transparent )`,
  };

  return (
    <section id="about-section" className="hero min-h-screen">
      <div className="hero-content">
        <div className="max-w-full flex flex-col lg:flex-row-reverse px-0 md:px-10 lg:px-20 gap-20">
          <div className="relative hidden md:flex">
            {/* <TechSphere entries={tech_sphere_logos} /> */}
            <div
              className="absolute top-0 left-0 right-0 bottom-0 animate-pulse"
              style={bgRadialGradient}
            ></div>
            <Animator animation={techie} className="w-2/3 mx-auto" />
          </div>
          <div className="w-full text-center lg:max-w-md lg:text-start">
            <H1 className="my-5">I&apos;m not just a techie;</H1>
            <P1 className="my-3">
              I understand your unique needs and translating them into intuitive
              and visually appealing solutions for you audience.
            </P1>
            <P2 className="my-3">
              My journey in this field began with a fascination for the power of{" "}
              <TextHighlighter>
                design to communicate, engage, and solve problems
              </TextHighlighter>
              . Over the years, I&apos;ve honed my skills in various
              disciplines, including{" "}
              <TextHighlighter>UI/UX design</TextHighlighter> and{" "}
              <TextHighlighter>development</TextHighlighter>.
            </P2>
            <div className="max-w-2xl flex justify-center lg:justify-start items-center gap-3">
              <SolidButtonLink link="#credentials" text="Credentials" />
              <LinkText link="#project-section" text="See my work" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
