import React, { } from "react";

const Banner = ({handleSearch}) => {

  const handleScroll  = () => {
    window.scroll(0,400)
  }


  return (
    <div>
      <div>
        <div
          className="hero w-full  lg:h-[400px]"
      
          style={{
            backgroundImage: "url('/banner.jpg')",
            backgroundSize: "100%",
            backgroundPosition: "15% 70%",
            backgroundRepeat: "no-repeat",
        
          }}
        >
          <div className="  w-11/12">
            <div className="hero-content w-11/12 text-[white]  text-start">
              <div className="w-full ">
                <div className="lg:text-start text-center ">
                  <h1 className="mb-5 text-2xl lg:text-5xl text-white lg:text-black font-bold lg:w-[600px]">
                        Ramadan Sale <br /> <span className="lg:text-[#fa0808] text-white">Up To 50% off</span>
                  </h1>
                  <p className="mb-5 text-[#89fa00ed] lg:text-[black] font-bold w-full lg:w-[400px]">
                  Explore our curated collection of belts, wallets, and desk accessories  crafted for style, built to last.
                  </p>
                  <button
                    className="btn btn-primary hover:text-white hover:bg-[#cf6868]
                      bg-white border-none rounded-lg text-black"
                      onClick={handleScroll}
                  >
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        <div className="w-11/12 mx-auto mb-5 mt-10 flex justify-center items-center">
           <input onChange={handleSearch} type="text" placeholder="Search Products" className="pl-5  border-1 border-gray-400 focus:outline-none rounded-2xl w-2/3 h-12" />
        </div>
    </div>
  );
};

export default Banner;


