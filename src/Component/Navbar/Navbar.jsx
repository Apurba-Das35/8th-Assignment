import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../pic/logo.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      {/* Left Side */}
      <div className="navbar-start ml-[100px]">
        <div className="text-xl flex items-center">
          <img className="logo-img w-8 h-8" src={logo} alt="Logo" />
          <span className="text-[16px] font-semibold pl-2 gradient-text">HERO.IO</span>
        </div>
      </div>

      {/* Center Links */}
      <div className="navbar-center">
        <ul className="menu menu-horizontal font-semibold gap-4">
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? "active-link" : "inactive-link"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/apps"
              className={({ isActive }) =>
                isActive ? "active-link" : "inactive-link"
              }
            >
              Apps
            </NavLink>
          </li>
          <li>
            <a href="#">Installation</a>
          </li>
        </ul>
      </div>

      {/* Right Side */}
      <div className="navbar-end mr-[100px]">
        <a className="btn gradient-back">Contribute</a>
      </div>
    </div>
  );
};

export default Navbar;