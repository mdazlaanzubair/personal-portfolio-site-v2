"use client";

import React, { useContext, useEffect, useState } from "react";
import { P1, P3, TextHighlighter } from "@/components/common/TypoAndUtils";
import { GlobalContext } from "@/context/GlobalContext";

const ServiceCard = ({ service }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dynamicGradient, setDynamicGradient] = useState(null);
  const [isMouseOnCard, setIsMouseOnCard] = useState(false);
  const { isDark } = useContext(GlobalContext);

  const handleMouseMove = (e) => {
    const cardRect = e.currentTarget.getBoundingClientRect();

    setPosition({
      x: e.clientX - cardRect.left,
      y: e.clientY - cardRect.top,
    });
  };

  // DYNAMICALLY SETTING GRADIENT BASED ON THEME
  useEffect(() => {
    if (isDark) {
      setDynamicGradient({
        background: `radial-gradient(circle at ${position.x}px ${position.y}px, rgba(255, 255, 255, .1) 7%, transparent, transparent )`,
      });
    } else {
      setDynamicGradient({
        background: `radial-gradient(circle at ${position.x}px ${position.y}px, rgba(0, 0, 0, .1) 7%, transparent,  transparent )`,
      });
    }
  }, [position, isDark]);

  return (
    <div
      className="relative col-span-1 text-start rounded-3xl bg-accent bg-opacity-5 backdrop-blur-md shadow transition-all ease-in-out duration-300"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsMouseOnCard(true)}
      onMouseLeave={() => setIsMouseOnCard(false)}
    >
      <div
        className={`absolute top-0 bottom-0 left-0 right-0 rounded-3xl ${
          isMouseOnCard ? "opacity-100" : "opacity-0"
        } transition-all ease-in-out duration-700`}
        style={dynamicGradient}
      />
      <div className="card card-compact m-5">
        <div className="card-body relative">
          <figure className="w-16 h-16 bg-accent rounded-xl text-center mb-5">
            <img
              src={service?.icon}
              className="w-7 h-7 mx-auto"
              alt="service-icon"
            />
          </figure>
          <P1>
            <span className="text-primary">{service?.title}</span>
          </P1>
          <P3>
            {service?.descriptionParts?.map((content, index) =>
              content.highlight ? (
                <TextHighlighter key={index}>{content.text}</TextHighlighter>
              ) : (
                <span key={index}>{content.text}</span>
              )
            )}
          </P3>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
