import React from "react";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import ThemeToggler from "../common/ThemeToggler";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <ThemeToggler />
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-end">
        <MobileMenu />
        <DesktopMenu />
      </div>
    </div>
  );
};

export default Navbar;
