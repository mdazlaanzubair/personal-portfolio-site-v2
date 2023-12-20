"use client";

import { createContext, useEffect, useState } from "react";
import Loader from "../components/common/Loader";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // THEME STATE
  const [isDark, setIsDark] = useState(true);

  // COMPONENT MOUNT STATE
  const [isMounted, setIsMounted] = useState(false);

  // PERFORMING SIDE EFFECT ON COMPONENT MOUNT
  useEffect(() => {
    // CHANGING COMPONENT MOUNT STATE
    setIsMounted(true);

    // THEME SETTING TO LOCAL STORAGE
    const storedThemeChoice = localStorage.getItem("isDark");

    // SETTING LOCAL STORAGE THEME IN LOCAL STATE
    setIsDark(storedThemeChoice === "false" ? false : true);
    // if (storedThemeChoice) {
    //   if (storedThemeChoice === "false") {
    //     setIsDark(false);
    //   } else {
    //     setIsDark(true);
    //   }
    // } else {
    //   setIsDark(true);
    // }
  }, []);

  // SHOW LOADED UNTIL COMPONENT NOT MOUNT
  !isMounted && <Loader />;

  // FUNCTION TO TOGGLE BETWEEN LIGHT AND DARK MODE BASED ON USER SELECTION
  const changeTheme = () => {
    // SETTING UPDATED CHOICE IN LOCAL STATE
    setIsDark(!isDark);

    // SETTING UPDATED CHOICE IN LOCAL STORAGE
    localStorage.setItem("isDark", !isDark);
  };

  // RETURNING THEME CONTEXT PROVIDER
  return (
    <ThemeContext.Provider value={{ isDark, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
