import React from "react";

const DesktopMenu = () => {
  return (
    <div className="hidden sm:flex">
      <ul className="menu menu-horizontal rounded-box">
        <li>
          <a>Item 1</a>
        </li>
        <li>
          <a>Item 2</a>
        </li>
        <li>
          <a>Item 3</a>
        </li>
      </ul>
    </div>
  );
};

export default DesktopMenu;
