"use client";

import React, { useContext, useEffect } from "react";
import { ThemeContext } from "./ThemeContext";

const ThemeWrapper = ({ children }) => {
  const { isDark } = useContext(ThemeContext);

  return <div data-theme={isDark ? "dark" : "light"}>{children}</div>;
};

export default ThemeWrapper;
