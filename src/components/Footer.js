import React, { useState } from "react";
import FacebookIcon from "./svgIcons/FacebookIcon";
import TwitterIcon from "./svgIcons/TwitterIcon";
import InstagramIcon from "./svgIcons/InstagramIcon";
import DropdownIcon from "./svgIcons/DropdownIcon";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const [active, setActive] = useState(0);
  return (
    <div className="py-0 px-0 md:py-8 md:px-16 ml-0 md:ml:80  m-y12 flex flex-col lg:flex-row text-center md:text-left">
      <div className="text-center lg:text-left p-16 lg:w-1/2">
        <div className="flex justify-center lg:justify-normal">
          <img
            src="images/logo.png"
            alt="Placeholder"
            className="w-auto h-auto mb-4"
          />
        </div>

        <p className="mb-4">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC.
        </p>
        <div className="flex justify-center lg:justify-start gap-4">
          <FacebookIcon />
          <TwitterIcon />
          <InstagramIcon />
        </div>
      </div>
      <div className="text-center lg:text-left p-6 md:p-12 lg:w-1/2">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="mb-4">
            <div className="flex justify-between mb-4">
              <h3 className="font-bold">Company</h3>
              <button
                className="block md:hidden"
                onClick={() => setActive(active === 1 ? 0 : 1)}
              >
                <DropdownIcon />
              </button>
            </div>
            <div
              className={`${active === 1 ? "" : "hidden "} md:block text-left`}
            >
              <NavLink>About</NavLink>
              <br />
              <NavLink>Career</NavLink> <br />
              <NavLink>Mobile</NavLink>
            </div>
          </div>
          <div className="mb-4">
            <div className="flex justify-between mb-4">
              <h3 className="font-bold">Contact</h3>
              <button
                className="block md:hidden"
                onClick={() => setActive(active === 2 ? 0 : 2)}
              >
                <DropdownIcon />
              </button>
            </div>
            <div
              className={`${active === 2 ? "" : "hidden "} md:block text-left`}
            >
              <NavLink>Why Travlog?</NavLink> <br />
              <NavLink>Partner With Us</NavLink> <br />
              <NavLink>FAQ's</NavLink> <br />
              <NavLink>Blog</NavLink> <br />
            </div>
          </div>
          <div className="mb-4">
            <div className="flex justify-between mb-4">
              <h3 className="font-bold">Meet Us</h3>
              <button
                className="block md:hidden"
                onClick={() => setActive(active === 3 ? 0 : 3)}
              >
                <DropdownIcon />
              </button>
            </div>
            <div
              className={`${active === 3 ? "" : "hidden "} md:block text-left`}
            >
              <p>+00 92 123456789</p>
              <p>info@travlog.com</p>
              <p>205. R Street,New York BD23200</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
