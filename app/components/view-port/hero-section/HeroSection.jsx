import React from "react";
import {
  H1,
  H2,
  H3,
  LinkText,
  P1,
  P2,
  SolidButtonLink,
  TextHighlighter,
} from "../../common/TypoAndUtils";

const HeroSection = () => {
  return (
    <div id="hero-section" className="hero min-h-screen">
      <div className="hero-content flex-col text-center">
        <div className="max-w-full">
          <H1>Hi! I&apos;m Azlaan</H1>
        </div>
        <div className="max-w-xl">
          <H3>I offer User-Centric Solutions with Pixel-Powered Innovation</H3>
        </div>
        <div className="max-w-xl mx-auto">
          <P1>
            I&apos;m a <TextHighlighter>software engineer</TextHighlighter>,
            specialized in building &amp; designing{" "}
            <TextHighlighter>things for web</TextHighlighter>. My aim is to help
            people establish{" "}
            <TextHighlighter>their online presence</TextHighlighter>.
          </P1>
        </div>
        <div className="max-w-xl mx-auto flex flex-row justify-center items-center gap-3">
          <SolidButtonLink link="#contact-section" text="Hire me!" />
          <LinkText link="#about-section" text="Explore more" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
