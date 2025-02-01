import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="absolute w-screen flex justify-center">
      <div className="fixed text-sm top-2 h-[90px] sm:h-[110px] flex z-10  justify-center items-center bg-gradient-to-r from-gray-700 to-slate-700 rounded-full p-[11px] mt-[11px] font-extralight sm:text-md shadow-md">
        <Link
          to={"/"}
          className="Home p-2  sm:p-4  text-white  hover:text-green-100 hover:bg-gray-600 hover:rounded-full"
        >
          Home
        </Link>

        <Link
          to={"/Projects"}
          className="Project p-2  sm:p-4  text-white  hover:text-green-100 hover:bg-gray-600 hover:rounded-full"
        >
          Projects
        </Link>
        <Link
          to={"/Education"}
          className="Contact p-2  sm:p-4  text-white  hover:text-green-100 hover:bg-gray-600 hover:rounded-full"
        >
          Education
        </Link>
        <Link
          to={"/Contact"}
          className="Contact p-2  sm:p-4  text-white  hover:text-green-100 hover:bg-gray-600 hover:rounded-full"
        >
          Contacts
        </Link>
      </div>
    </div>
  );
};
export default Header;
