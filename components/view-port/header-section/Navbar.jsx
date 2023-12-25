import React from "react";
import NavMenu from "./NavMenu";
import NavToggler from "./NavToggler";

const Navbar = () => {
  return (
    <div className="navbar bg-opacity-9">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl">
          <div class="w-16 lg:w-16 mx-auto text-center relative">
            <div class="container">
              <svg
                id="Logo"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-10 -10 200 200"
                width="100%"
                height="100%"
                style={{ transform: "none" }}
              >
                <polygon
                  data-name="First Line"
                  className="path-lines"
                  points="130.59 70.38 123.23 82.78 114.78 97.04 106.57 82.78 99.04 69.71 91.3 56.28 83.47 69.48 75.59 82.78 42.26 139 34.3 152.42 2 152.42 26.34 111.36 43.29 82.78 67.55 41.85 75.38 28.66 91.18 2 107.1 29.63 114.84 43.05 130.59 70.38"
                  style={{ strokeDasharray: 476, strokeDashoffset: 476 }}
                />
                <polygon
                  data-name="Second Line"
                  className="path-lines"
                  points="106.96 109.9 81.95 152.09 65.74 179.42 50 152.09 91.21 82.58 106.96 109.9"
                  style={{ strokeDasharray: 225, strokeDashoffset: 225 }}
                />
                <polygon
                  data-name="Third Line"
                  className="path-lines"
                  points="155.25 113.2 139.46 139.85 132 152.42 98 152.42 114.87 123.98 122.7 110.78 138.5 84.13 155.25 113.2"
                  style={{ strokeDasharray: 193, strokeDashoffset: 193 }}
                />
                <polygon
                  data-name="Forth Line"
                  className="path-lines"
                  points="177.85 152.42 146.86 152.42 162.58 125.91 177.85 152.42"
                  style={{ strokeDasharray: 93, strokeDashoffset: 93 }}
                />
              </svg>
            </div>
          </div>
        </a>
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
