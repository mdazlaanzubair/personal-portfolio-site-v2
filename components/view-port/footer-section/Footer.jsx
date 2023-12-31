import React from "react";
import ThemeToggler from "../../common/ThemeToggler";
import SocialMenu from "./SocialMenu";

const Footer = () => {
  return (
    <div className="fixed bottom-0 navbar w-100 z-50 px-3 sm:px-5 md:px-7 lg:px-10 bg-base-100 bg-opacity-75 backdrop-blur-sm">
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
