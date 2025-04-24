import React from "react";
import { Link } from "react-router";

const Product = ({products}) => {
    const { id,title,image,price } = products;
  return (
    <div className="">
      <div className="card bg-base-100 border-1 border-gray-300 my-0 lg:my-0 shadow-sm">
        <figure className="p-5">
          <img
            src={image}
            className="rounded-xl h-50 w-full"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <h2 className="card-title">{price} Tk</h2>
          <div className="card-actions">
           <Link to={`details/${id}`}>
           <button className="w-25 h-8 rounded-2xl border-none bg-[#0b5361] hover:bg-[#257282] text-white">View Details</button>
           </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
