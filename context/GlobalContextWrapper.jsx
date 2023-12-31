"use client";

import React, { useContext } from "react";
import { GlobalContext } from "./GlobalContext";

const GlobalContextWrapper = ({ children }) => {
  const { isDark } = useContext(GlobalContext);

  return <div data-theme={isDark ? "dark" : "light"}>{children}</div>;
};

export default GlobalContextWrapper;
