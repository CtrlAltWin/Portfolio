import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to={"/"} className="absolute w-screen h-screen mt-[37px] cursor-pointer left-2">
      <div className="hidden sm:block fixed  text-white text-3xl font-extralight cursor-pointer z-10 ">
        Portfolio
      </div>
      <div className="sm:hidden w-10 h-10 text-center text-2xl p-[3px] fixed text-white font-extralight cursor-pointer z-10  rounded-full border">
        🚀
      </div>
    </Link>
  );
};

export default Logo;
