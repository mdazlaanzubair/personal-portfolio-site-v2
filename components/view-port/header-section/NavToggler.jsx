"use client";

import { DrawerContext } from "@/context/DrawerContext";
import React, { useContext } from "react";

const NavToggler = () => {
  const { isDrawerOpen, setIsDrawerOpen } = useContext(DrawerContext);

  return (
    <div
      className="group flex flex-col w-6 lg:hidden cursor-pointer"
      onClick={() => setIsDrawerOpen(!isDrawerOpen)}
    >
      <div
        className={`h-1 max-h-1 bg-blue-100 mb-1 ${
          isDrawerOpen ? "w-3" : "w-6"
        } self-end transition-all duration-300 ease-in-out`}
      ></div>
      <div
        className={`h-1 max-h-1 bg-blue-100 mb-1 ${
          isDrawerOpen ? "w-4" : "w-5"
        } self-end transition-all duration-300 ease-in-out`}
      ></div>
      <div
        className={`h-1 max-h-1 bg-blue-100 mb-1 ${
          isDrawerOpen ? "w-5" : "w-4"
        } self-end transition-all duration-300 ease-in-out`}
      ></div>
    </div>
  );
};

export default NavToggler;
