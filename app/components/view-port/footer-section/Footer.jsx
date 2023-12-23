import React from "react";
import ThemeToggler from "../../common/ThemeToggler";
import SocialMenu from "./SocialMenu";

const Footer = () => {
  return (
    <div className="navbar bg-opacity-9">
      <div className="hidden md:navbar-start">
        <SocialMenu />
      </div>
      <div className="navbar-start md:navbar-center">
        Crafted by
        <a className="btn btn-ghost">Muhammad Azlaan Zubair</a>
      </div>
      <div className="navbar-end">
        <ThemeToggler />
      </div>
    </div>
  );
};

export default Footer;
