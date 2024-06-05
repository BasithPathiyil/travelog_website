import React, { useState } from "react";
import MenuIcon from "./svgIcons/MenuIcon";
import { NavLink } from "react-router-dom";
import HeaderMenu from "./HeaderMenu";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="p-4 mx-1 md:mx-4 lg:mx-8">
      <div className="container mx-auto flex items-center justify-between">
        <div className="hidden md:flex lg:hidden">
          <button>
            <MenuIcon />
          </button>
        </div>
        <div className="flex items-center">
          <div className="md:hidden">
            <img src="images/logo.png" alt="logo" />
          </div>

          <div className="hidden md:flex flex-grow justify-center">
            <img src="images/logo.png" alt="logo" />
          </div>
        </div>

        <div className="hidden lg:flex flex-grow justify-center space-x-4 ">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "font-bold text-black" : "text-black/50"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/discover"
            className={({ isActive }) =>
              isActive ? "font-bold text-black" : "text-black/50"
            }
          >
            Discover
          </NavLink>
          <NavLink
            to="/spacialdeals"
            className={({ isActive }) =>
              isActive ? "font-bold text-black" : "text-black/50"
            }
          >
            Special Deals
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "font-bold text-black" : "text-black/50"
            }
          >
            Contact
          </NavLink>
        </div>

        <div className="hidden md:flex space-x-4 ">
          <a href="#" className="custom-button-no-border">
            Login
          </a>
          <a href="#" className="custom-button-color">
            Sign Up
          </a>
        </div>
        <div className="md:hidden flex">
          <button>
            <MenuIcon />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
