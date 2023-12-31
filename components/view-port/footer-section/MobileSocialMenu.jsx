"use client";

import React, { useState } from "react";
import Link from "next/link";

const MobileSocialMenu = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const social_links = [
    {
      title: "Github",
      url: "https://github.com/mdazlaanzubair",
    },
    {
      title: "LinkedIn",
      url: "https://www.linkedin.com/in/mdazlaanzubair/",
    },
    {
      title: "Instagram",
      url: "https://www.instagram.com/mdazlaanzubair/",
    },
    {
      title: "Twitter",
      url: "https://twitter.com/mdazlaanzubair",
    },
    {
      title: "WhatsApp",
      url: "https://wa.me/923113046692?text=Hi%20Azlaan!%20Hope%20you%27re%20doin%27%20well.%20I%20just%20want%20to%20discuss%20a%20project%20with%20you.%20Please%20contact.",
    },
  ];

  return (
    <div
      className={`dropdown dropdown-top ${
        isNavOpen ? "dropdown-open" : ""
      } lg:hidden`}
    >
      <NavToggler isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      <ul
        tabIndex={0}
        className={`dropdown-content z-50 menu p-2 shadow bg-base-100 rounded-box ${
          isNavOpen ? "w-52 h-auto" : "hidden"
        } transition-all ease-in-out duration-300`}
      >
        {social_links?.map((link, index) => (
          <li key={index} tabIndex={0} onClick={() => setIsNavOpen(!isNavOpen)}>
            <Link href={link?.url} target="_blank">
              {link?.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileSocialMenu;

// TOGGLER
const NavToggler = ({ isNavOpen, setIsNavOpen }) => {
  return (
    <label
      tabIndex={0}
      className="btn btn-circle btn-ghost hover:bg-transparent swap swap-rotate"
    >
      <input type="checkbox" onChange={() => setIsNavOpen(!isNavOpen)} />
      {/* NAV OPEN */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="swap-off w-4 h-4 text-primary"
      >
        <path
          fillRule="evenodd"
          d="M15.75 4.5a3 3 0 1 1 .825 2.066l-8.421 4.679a3.002 3.002 0 0 1 0 1.51l8.421 4.679a3 3 0 1 1-.729 1.31l-8.421-4.678a3 3 0 1 1 0-4.132l8.421-4.679a3 3 0 0 1-.096-.755Z"
          clipRule="evenodd"
        />
      </svg>

      {/* NAV CLOSE */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="swap-on w-4 h-4 text-primary"
      >
        <path
          fillRule="evenodd"
          d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
          clipRule="evenodd"
        />
      </svg>
    </label>
  );
};
