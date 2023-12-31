"use client";

import React, { useState } from "react";
import Link from "next/link";

const MobileMenu = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const nav_links = [
    {
      title: "Home",
      url: "#hero-section",
    },
    {
      title: "About",
      url: "#about-section",
    },
    {
      title: "Services",
      url: "#services-section",
    },
    {
      title: "Portfolio",
      url: "#project-section",
    },
    // {
    //   title: "Testimonial",
    //   url: "#testimonial-section",
    // },
    {
      title: "Process",
      url: "#process-section",
    },
    {
      title: "Contact",
      url: "#contact-section",
    },
  ];

  return (
    <div
      className={`dropdown dropdown-end ${
        isNavOpen ? "dropdown-open" : ""
      } lg:hidden`}
    >
      <NavToggler isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      <ul
        className={`dropdown-content z-50 menu p-2 shadow bg-base-100 rounded-box ${
          isNavOpen ? "w-52 h-auto" : "hidden"
        } transition-all ease-in-out duration-300`}
      >
        {nav_links?.map((link, index) => (
          <li key={index} tabIndex={0} onClick={() => setIsNavOpen(!isNavOpen)}>
            <Link href={link?.url}>{link?.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileMenu;

const NavToggler = ({ isNavOpen, setIsNavOpen }) => {
  return (
    <div
      className="group flex flex-col w-6 lg:hidden cursor-pointer"
      onClick={() => setIsNavOpen(!isNavOpen)}
    >
      <div
        className={`h-1 max-h-1 bg-primary mb-1 ${
          isNavOpen ? "w-3" : "w-6"
        } self-end transition-all duration-300 ease-in-out`}
      ></div>
      <div
        className={`h-1 max-h-1 bg-primary mb-1 ${
          isNavOpen ? "w-4" : "w-5"
        } self-end transition-all duration-300 ease-in-out`}
      ></div>
      <div
        className={`h-1 max-h-1 bg-primary mb-1 ${
          isNavOpen ? "w-5" : "w-4"
        } self-end transition-all duration-300 ease-in-out`}
      ></div>
    </div>
  );
};
