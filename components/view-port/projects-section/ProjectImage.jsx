import Link from "next/link";
import React from "react";

const ProjectImage = ({ bgImg, projectImg, liveUrl, title }) => {
  return (
    <div
      className="w-full lg:w-2/4 rounded-3xl"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "fixed",
      }}
    >
      <div className="mockup-browser m-5 lg:m-10 bg-base-100">
        <div className="mockup-browser-toolbar">
          <div className="input border border-accent text-accent">
            <Link href={liveUrl} target="_blank">
              {liveUrl}
            </Link>
          </div>
        </div>
        <div className="flex justify-center p-0 h-auto">
          <img
            src={projectImg}
            className="w-max m-0 h-auto"
            alt={`project-${title}-background`}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectImage;
