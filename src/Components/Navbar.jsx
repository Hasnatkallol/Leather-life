import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div>
      <div className="navbar p-0 bg-base-100 shadow-sm">
        <div className="navbar-start">
          <h1>Leatherlife</h1>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "underline underline-offset-3 text-green-400  font-bold"
                  : ""
              }
              to={"/"}
            >
              <li className="text-2xl mr-5">Home</li>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "underline underline-offset-3 text-green-400  font-bold"
                  : ""
              }
              to={"/about"}
            >
              <li className="text-2xl mr-5">About Us</li>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "underline underline-offset-3 text-green-400  font-bold"
                  : ""
              }
              to={"/contact"}
            >
              <li className="text-2xl mr-5">Contact Us</li>
            </NavLink>
          </ul>
        </div>

        <div className="navbar-end">
          <h1>search</h1>
          <div className="dropdown mr-30">
            <div
              tabIndex={0}
              role="button"
              className="mr-2 btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-red-500 rounded-box z-1 mt-4 mr-8 w-52 p-2 shadow"
            >
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "underline underline-offset-3 text-green-400  font-bold"
                    : ""
                }
                to={"/"}
              >
                <li className="text-2xl mr-5">Home</li>
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "underline underline-offset-3 text-green-400  font-bold"
                    : ""
                }
                to={"/about"}
              >
                <li className="text-2xl mr-5">About Us</li>
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "underline underline-offset-3 text-green-400  font-bold"
                    : ""
                }
                to={"/contact"}
              >
                <li className="text-2xl mr-5">Contact Us</li>
              </NavLink>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
