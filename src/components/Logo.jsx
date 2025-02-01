import React from "react";

const Logo = () => {
  return (
    <div className="absolute w-screen h-screen ">
      <div className="hidden sm:block fixed mt-10 text-white text-3xl font-extralight cursor-pointer z-10 ">
        Portfolio
      </div>
      <div className="sm:hidden fixed mt-10 text-white text-3xl font-extralight cursor-pointer z-10 ">
        Pf
      </div>
    </div>
  );
};

export default Logo;
