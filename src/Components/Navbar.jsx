import React, { useContext } from "react";
import { NavLink } from "react-router";
import { FaCartArrowDown } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { CartContext } from "../Provider/Context";


const Navbar = () => {
const { searchText,setSearchText } = useContext(CartContext)


  
  return (
    <div>
      <div className="navbar p-0 bg-base-100 my-2 w-full lg:w-11/12 mx-auto">
        <div className="navbar-start">
          <img src="/logo.jpg" alt="" className="rounded-full w-10 h-10 lg:w-15 lg:h-15 ml-2" />
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
        {/* Mid */}
        <input value={searchText} onChange={e=> setSearchText(e.target.value)} type="text" placeholder="Search Products" className="pl-2 lg:hidden border-1 border-gray-400 focus:outline-none rounded-2xl
           w-25 text-xs h-8" />

        <div className="navbar-end">
          
          <div className="flex items-center gap-2">
          {/* <input type="text" placeholder="Search Products" className="pl-5 hidden lg:block border-1 border-gray-400 focus:outline-none rounded-2xl
           w-40 h-8" /> */}
          <FaCartArrowDown className="" size={25}/>
          <FaHeart className="mr-1" size={25} />
          </div>
      
          <div className="dropdown ">
            <div
              tabIndex={0}
              role="button"
              className="mr-2 btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 14 24"
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
              className="menu menu-sm dropdown-content bg-[gray] lg:bg-none rounded-box z-1 mt-8 right-0 w-52 p-2 shadow"
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
