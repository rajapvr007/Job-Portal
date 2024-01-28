import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="h-20 w-full flex items-center justify-between p-5 ">
        <div className="text-2xl text-white lg:ml-24">
          Job<span className="text-3xl">Search</span>
          <div>
            {/* <img src={"/logooo.png"} alt="" /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
