import React from "react";

const HeaderMenu = ({ position }) => {
  return (
    <div
      className={`origin-top-${position} absolute ${position}-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100`}
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="menu-button"
      tabIndex="-1"
    >
      <div className="py-1" role="none">
        <a
          href="#"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          role="menuitem"
          tabIndex="-1"
          id="menu-item-0"
        >
          Item 1
        </a>
        <a
          href="#"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          role="menuitem"
          tabIndex="-1"
          id="menu-item-1"
        >
          Item 2
        </a>
        <a
          href="#"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          role="menuitem"
          tabIndex="-1"
          id="menu-item-2"
        >
          Item 3
        </a>
      </div>
    </div>
  );
};

export default HeaderMenu;
