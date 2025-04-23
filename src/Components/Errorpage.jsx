import React from "react";
import { Link } from "react-router";
import Navbar from "../Components/Navbar";

const Errorpage = () => {
  return (
    <div>
        <Navbar></Navbar>
      <div className="w-11/12 mx-auto  mt-40 ">
        <div className="flex flex-col justify-center items-center">
          <div>
            <img src={"/error.jpg"} className="w-[300px] h-[300px] rounded-2xl " alt="" />
          </div>
          <h1 className="font-bold text-red-600 text-4xl py-5">
            404 - Page Not Found
          </h1>
          <p className="font-medium text-xl">
            Opps! The page you are looking for doesn't exist
          </p>
          <Link to={'/'}> <button className="bg-green-700 hover:bg-green-800 text-white font-bold px-4 py-2 my-5 rounded-2xl">Back To Hoome</button> </Link>
        </div>
      </div>
    </div>
  );
};

export default Errorpage;
