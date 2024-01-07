import React from "react";
import ContactCard from "./ContactCard";
import {
  H1,
  H3,
  LinkText,
  P1,
  P2,
  SolidButtonLink,
  TextHighlighter,
} from "@/components/common/TypoAndUtils";

const ContactSection = () => {
  return (
    <section id="contact-section" className="relative hero min-h-screen my-20">
      <div className="absolute w-[70rem] h-[50rem] bg-accent rounded-full left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 mix-blend-screen blur-3xl opacity-10"></div>
      <div className="hero-content">
        <div className="max-w-full flex flex-col lg:flex-row justify-center items-start px-0 md:px-10 lg:px-20 gap-20">
          <div className="max-w-3xl">
            <H1 className="my-5 text-center lg:text-left">
              Let&apos;s get in touch!
            </H1>
            <P2 className="my-3 text-center lg:text-left">
              Have a <TextHighlighter>question</TextHighlighter>,{" "}
              <TextHighlighter>project idea</TextHighlighter>, or just want to{" "}
              <TextHighlighter>say hello</TextHighlighter>?
            </P2>
            <P2 className="my-3 text-center lg:text-left">
              Just shoot me an <TextHighlighter>email</TextHighlighter> if you
              want to connect! You can also connect by scheduling a{" "}
              <TextHighlighter>video call</TextHighlighter> to discuss your{" "}
              <TextHighlighter>goals</TextHighlighter> and{" "}
              <TextHighlighter>ideas</TextHighlighter>.
            </P2>
            <div className="max-w-2xl flex justify-center items-center lg:justify-start gap-3">
              <SolidButtonLink link="#contact-section" text="Book a call" />
              <LinkText link="#about-section" text="Drop an email" />
            </div>
          </div>
          <div className="flex w-full justify-center items-center">
            <ContactCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
