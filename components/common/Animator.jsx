"use client"

import Lottie from "lottie-react";
import React from "react";

const Animator = ({animation}) => {
  return <Lottie animationData={animation} loop={true} />;
};

export default Animator;
