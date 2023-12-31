"use client";

import Lottie from "lottie-react";
import React from "react";

const Animator = ({ animation, className }) => {
  return (
    <div className={className}>
      <Lottie animationData={animation} loop={true} />
    </div>
  );
};

export default Animator;
