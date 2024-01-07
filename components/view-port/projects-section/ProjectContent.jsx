import {
  LinkText,
  P1,
  P3,
  SolidButtonLink,
  TextHighlighter,
} from "@/components/common/TypoAndUtils";
import Link from "next/link";
import React from "react";

const ProjectContent = ({ techs, desc, sourceUrl, liveUrl, title, count }) => {
  return (
    <div
      className={`w-full lg:w-2/4 h-3/4 ${
        count === 1
          ? "-translate-y-4 lg:-translate-y-0 lg:translate-x-4 from-base-100 to-transparent"
          : "-translate-y-4 lg:-translate-y-0 lg:-translate-x-4 from-transparent to-base-100"
      } rounded-3xl shadow-md bg-gradient-to-r backdrop-blur-sm`}
    >
      <div className="card card-compact m-5">
        <div className="card-body relative">
          <div className="flex flex-wrap items-center mt-3 gap-3">
            {techs?.map((tech, index) => (
              <Link
                key={index}
                className="group"
                href={`http://google.com/search?q=${tech}`}
                target="_blank"
              >
                <div className="span border border-accent font-satoshi-medium text-accent rounded-full py-1 px-3 text-xs group-hover:bg-accent group-hover:text-base-100 transition-all ease-in-out duration-300">
                  {tech}
                </div>
              </Link>
            ))}
          </div>
          <P1 className="mt-3">
            <span className="text-primary">{title}</span>
          </P1>
          <P3 className="mb-3">
            {desc?.map((content, index) =>
              content.highlight ? (
                <TextHighlighter key={index}>{content.text}</TextHighlighter>
              ) : (
                <span key={index}>{content.text}</span>
              )
            )}
          </P3>

          <div className="flex items-center mt-3 gap-3">
            <SolidButtonLink link={liveUrl} text="Live View" />
            <LinkText link={sourceUrl} text="Source Code" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectContent;
