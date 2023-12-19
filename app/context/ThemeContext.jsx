"use client";

import { createContext, useEffect, useState } from "react";
import Loader from "../components/common/Loader";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // THEME STATE
  const [theme, setTheme] = useState("dark");

  // COMPONENT MOUNT STATE
  const [isMounted, setIsMounted] = useState(false);

  // PERFORMING SIDE EFFECT ON COMPONENT MOUNT
  useEffect(() => {
    // CHANGING COMPONENT MOUNT STATE
    setIsMounted(true);

    // THEME SETTING TO LOCAL STORAGE
    const storedTheme = localStorage.getItem("theme") || "light";

    // SETTING LOCAL STORAGE THEME IN LOCAL STATE
    setTheme(storedTheme);
  }, []);

  // SHOW LOADED UNTIL COMPONENT NOT MOUNT
  !isMounted && <Loader />;

  // FUNCTION TO TOGGLE BETWEEN THEMES BASED ON USER SELECTION
  const changeTheme = (theme) => {
    // SETTING USER SELECTED THEME IN LOCAL STATE
    setTheme(theme);

    // SETTING USER SELECTED THEME IN LOCAL STORAGE
    localStorage.setItem("theme", theme);
  };

  // RETURNING THEME CONTEXT PROVIDER
  return (
    <ThemeContext.Provider value={(theme, changeTheme)}>
      {children}
    </ThemeContext.Provider>
  );
};
