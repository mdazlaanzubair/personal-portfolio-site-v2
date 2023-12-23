"use client";

import { DrawerContext } from "@/app/context/DrawerContext";
import React, { useContext } from "react";

const NavToggler = () => {
  const { isDrawerOpen, setIsDrawerOpen } = useContext(DrawerContext);

  return (
    <div
      className="group flex flex-col w-[2.5rem] lg:hidden cursor-pointer"
      onClick={() => setIsDrawerOpen(!isDrawerOpen)}
    >
      <div
        className={`h-1 max-h-1 bg-blue-100 mb-1 ${
          isDrawerOpen ? "w-2/6" : "w-5/6"
        } self-end transition-all duration-300 ease-in-out`}
      ></div>
      <div
        className={`h-1 max-h-1 bg-blue-100 mb-1 ${
          isDrawerOpen ? "w-3/6" : "w-4/6"
        } self-end transition-all duration-300 ease-in-out`}
      ></div>
      <div
        className={` h-1 max-h-1 bg-blue-100 mb-1 ${
          isDrawerOpen ? "w-5/6" : "w-3/6"
        } self-end transition-all duration-300 ease-in-out`}
      ></div>
    </div>
  );
};

export default NavToggler;
