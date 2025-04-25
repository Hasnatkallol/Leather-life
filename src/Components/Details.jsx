import React from "react";
import { Link, useLoaderData, useParams } from "react-router";

const Details = () => {
  const products = useLoaderData();

  const { id } = useParams();

  const singleProduct = products.find((product) => product.id === parseInt(id));
  const { title, image, description, price } = singleProduct;

  return (
    <div className="w-11/12 mx-auto my-10 ">
      <Link to={"/"}>
        {" "}
        <button className="w-25 h-8 block lg:hidden rounded-2xl border-none bg-[#0b5361] hover:bg-[#257282] text-white">
          Back
        </button>{" "}
      </Link>
      <div className="flex justify-center items-center w-11/12 mx-auto">
        <img src={image} className="w-11/12 md:w-auto mb-8 mx-auto" alt="" />
      </div>
      <div className="flex lg:hidden justify-between mb-5 ">
            <button className="w-25 h-10 rounded-2xl border-none bg-[#0b5361] hover:bg-[#257282] text-white">
              Add To Cart{" "}
            </button>
            <button className="w-35 h-10 rounded-2xl border-none bg-[#0b5361] hover:bg-[#257282] text-white">
              Add To Favorites
            </button>
          </div> 
      {/* <Link to={"/"}>
        {" "}
        <button className="w-25 h-8 hidden lg:block rounded-2xl border-none bg-[#0b5361] hover:bg-[#257282] text-white">
          Back
        </button>{" "}
      </Link> */}

      <div className="flex justify-between">
        <h1 className="lg:text-6xl text-3xl font-bold lg:font-thin mb-8">{title}</h1>
        <div className="space-x-2">
          <div className="lg:flex hidden gap-10">
            <button className="w-25 h-12 rounded-2xl border-none bg-[#0b5361] hover:bg-[#257282] text-white">
              Add To Cart{" "}
            </button>
            <button className="w-25 h-12 rounded-2xl border-none bg-[#0b5361] hover:bg-[#257282] text-white">
              Add To Favorites
            </button>
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <h2 className="font-bold text-4xl">Details: </h2>
        <p>
          <span className="font-bold text-2xl">Title: </span>{" "}
          <span className="font-medium text-xl">{title}</span>
        </p>
        <p>
          <span className="font-bold text-2xl">Price:</span>{" "}
          <span className="font-medium text-xl"> {price}</span>
        </p>
        <p>
          <span className="font-bold text-2xl">{description}</span>
        </p>
      </div>
      <Link to={"/"}>
        {" "}
        <button className="w-25 h-8 hidden mt-2 lg:block rounded-2xl border-none bg-[#0b5361] hover:bg-[#257282] text-white">
          Back
        </button>{" "}
      </Link>
    </div>

   
  );
};

export default Details;
