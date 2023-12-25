import React from "react";
import NavMenu from "./NavMenu";
import NavToggler from "./NavToggler";

const Navbar = () => {
  return (
    <div className="navbar bg-opacity-9">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl">Logo</a>
      </div>
      <div className="navbar-center"></div>
      <div className="navbar-end">
        <NavToggler />
        <NavMenu />
      </div>
    </div>
  );
};

export default Navbar;
