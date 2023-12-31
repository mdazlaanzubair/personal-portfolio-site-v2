"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { SolidButtonLink } from "../../common/TypoAndUtils";

const NavMenu = () => {
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

  // STATE TO HOLD ACTIVE LINK
  const [activeLink, setActiveLink] = useState("Home");

  return (
    <div className="hidden lg:flex flex-row justify-between items-center gap-3">
      <div className="flex flex-row justify-between items-center gap-0">
        {nav_links?.map((link, index) => (
          <Link
            key={index}
            href={link?.url}
            onClick={() => setActiveLink(link?.title)}
            className={`px-4 py-2 border-b-2 font-satoshi-medium text-sm ${
              link?.title == activeLink
                ? "text-accent border-accent bg-accent bg-opacity-5"
                : "text-secondary bg-transparent border-transparent hover:text-primary hover:border-primary hover:bg-primary hover:bg-opacity-5"
            } transition-all ease-in-out duration-300`}
          >
            {link?.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavMenu;
