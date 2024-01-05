import React from "react";
import {
  H1,
  H3,
  LinkText,
  P1,
  SolidButtonLink,
  TextHighlighter,
} from "../../common/TypoAndUtils";

const HeroSection = () => {
  return (
    <section id="hero-section" className="relative hero min-h-screen">
      <div className="absolute w-[70rem] h-[70rem] bg-accent rounded-full left-1/2 -translate-x-1/2 -top-[40rem] mix-blend-screen blur-3xl opacity-10"></div>
      <div className="hero-content">
        <div className="max-w-full px-0 md:px-10 lg:px-20 gap-20">
          <H1 className="max-w-lg my-5 mx-auto text-center">
            Hi! I&apos;m Azlaan
          </H1>
          <H3 className="max-w-xl my-3 mx-auto text-center">
            I offer User-Centric Solutions with Pixel-Powered Innovation
          </H3>
          <P1 className="max-w-2xl my-3 mx-auto text-center">
            I&apos;m a <TextHighlighter>software engineer</TextHighlighter>,
            specialized in building &amp; designing{" "}
            <TextHighlighter>things for web</TextHighlighter>. My aim is to help
            people establish{" "}
            <TextHighlighter>their online presence</TextHighlighter>.
          </P1>
          <div className="max-w-2xl flex justify-center items-center gap-3">
            <SolidButtonLink link="#contact-section" text="Hire me!" />
            <LinkText link="#about-section" text="Explore more" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
