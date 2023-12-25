"use client";

import React, { useState } from "react";
import { P1, P3, TextHighlighter } from "@/components/common/TypoAndUtils";

const ServiceCard = ({ service, index }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMouseOnCard, setIsMouseOnCard] = useState(false);

  const handleMouseMove = (e) => {
    const cardRect = e.currentTarget.getBoundingClientRect();
    
    setPosition({
      x: e.clientX - cardRect.left,
      y: e.clientY - cardRect.top,
    });
  };

  return (
    <div
      key={index}
      className="group relative col-span-1 text-start rounded-3xl bg-gradient-to-br from-primary/5 via-secondary/5 to-base-100/5 bg-opacity-10 backdrop-blur-md"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsMouseOnCard(true)}
      onMouseLeave={() => setIsMouseOnCard(false)}
    >
      <div
        className={`absolute top-0 bottom-0 left-0 right-0 rounded-3xl ${
          isMouseOnCard ? "opacity-100" : "opacity-0"
        } transition-all ease-in-out duration-700`}
        style={{
          background: `radial-gradient(circle at ${position.x}px ${position.y}px, rgba(105, 25, 255, .1) 7%, transparent,transparent )`,
        }}
      />
      <div className="card card-compact m-10">
        <div className="card-body relative">
          <figure className="w-16 h-16 bg-accent shadow-glow rounded-xl text-center mb-5">
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
