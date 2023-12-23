"use client";

import { createContext, useEffect, useState } from "react";
import Loader from "../components/common/Loader";

export const DrawerContext = createContext();

export const DrawerProvider = ({ children }) => {
  // DRAWER STATE
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // RETURNING DRAWER CONTEXT PROVIDER
  return (
    <DrawerContext.Provider value={{ isDrawerOpen, setIsDrawerOpen }}>
      {children}
    </DrawerContext.Provider>
  );
};
