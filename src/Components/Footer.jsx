import React from "react";
import   Imagelogo from '../assets/logo.jpg'
import { NavLink } from "react-router";

const Footer = () => {
  return (
    <div>
      <div>
        <footer className="flex flex-col justify-center h-[235px] bg-black text-white rounded p-10">
        <div className="flex mb-5 justify-center items-center">
            <img src={Imagelogo} className='bg-white rounded-full w-20 h-20' alt="" />
   
        </div>
          <nav className="grid grid-flow-col gap-4  flex-col justify-center items-center ">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? " text-green-400  font-bold"
                  : ""
              }
              to={"/"}
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? " text-green-400  font-bold"
                  : ""
              }
              to={"/about"}
            >
             About Us
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? " text-green-400  font-bold"
                  : ""
              }
              to={"/contact"}
            >
           Contact Us
            </NavLink>
    
          </nav>
   
   
        </footer>
      </div>
    </div>
  );
};

export default Footer;
