import React from "react";

const SocialMenu = () => {
  const social_links = ["Github", "LinkedIn", "Instagram", "Twitter"];

  return (
    <ul className="hidden menu menu-horizontal lg:flex rounded-box">
      {social_links?.map((link, index) => (
        <li key={index}>
          <a>{link}</a>
        </li>
      ))}
    </ul>
  );
};

export default SocialMenu;
