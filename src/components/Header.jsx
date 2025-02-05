import { motion } from "motion/react";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [Drag, setDrag] = useState(false);
  return (
    <motion.div
      className="absolute w-screen flex justify-center z-10"
      drag
      animate={{
        scale: Drag ? 0.9 : 1,
        opacity: Drag ? 0.8 : 1,
      }}
      dragConstraints={{
        left: -5,
        right: 5,
        top: -5,
        bottom: 5,
      }}
      onDragStart={() => {
        setDrag(true);
      }}
      onDragEnd={() => {
        setDrag(false);
      }}
    >
      <div className="fixed text-sm top-2 h-[90px] sm:h-[110px] flex z-10  justify-center items-center bg-gradient-to-r from-gray-700 to-slate-700 rounded-full p-[11px] mt-[11px] font-mono sm:text-md shadow-md">
        <Link
          to={"/"}
          className="Home p-2  sm:p-4  text-white  hover:text-green-100 hover:bg-gray-600 hover:rounded-xl"
        >
          Home
        </Link>

        <Link
          to={"/Projects"}
          className="Project p-2  sm:p-4  text-white  hover:text-green-100 hover:bg-gray-600 hover:rounded-xl"
        >
          Projects
        </Link>
        <Link
          to={"/Education"}
          className="Contact p-2  sm:p-4  text-white  hover:text-green-100 hover:bg-gray-600 hover:rounded-xl"
        >
          Education
        </Link>
        <Link
          to={"/Contact"}
          className="Contact p-2  sm:p-4  text-white  hover:text-green-100 hover:bg-gray-600 hover:rounded-xl"
        >
          Contacts
        </Link>
      </div>
    </motion.div>
  );
};
export default Header;
