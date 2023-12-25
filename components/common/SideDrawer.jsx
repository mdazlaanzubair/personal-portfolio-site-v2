"use client";

import React, { useContext } from "react";
import { DrawerContext } from "@/context/DrawerContext";

const SideDrawer = () => {
  const nav_links = [
    "Home",
    "About",
    "Service",
    "Project",
    "Testimonial",
    "Process",
  ];

  const social_links = ["F", "G", "T", "I", "L"];

  const { isDrawerOpen, setIsDrawerOpen } = useContext(DrawerContext);

  return (
    isDrawerOpen && (
      <div
        className="flex lg:hidden absolute top-0 left-0 right-0 bottom-0 z-50 bg-black/60 p-0 cursor-pointer"
        onClick={() => setIsDrawerOpen(!isDrawerOpen)}
      >
        <div className="flex flex-col w-2/3 md:w-1/3 min-h-full justify-between m-0 bg-red-500">
          <ul className="menu menu-vertical w-full rounded-box">
            <li>
              <a className="btn btn-ghost text-xl">Logo</a>
            </li>
            {nav_links?.map((link, index) => (
              <li key={index}>
                <a>{link}</a>
              </li>
            ))}
            <li>
              <a className="active">Let&apos;s Talk</a>
            </li>
          </ul>
          <div className="flex flex-col w-full rounded-box">
            <h2 className="menu-title mb-0 text-center">I&apos;m social</h2>
            <ul className="menu menu-horizontal w-full rounded-box pt-0">
              {social_links?.map((link, index) => (
                <li key={index}>
                  <a>{link}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  );
};

export default SideDrawer;
