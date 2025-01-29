import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="absolute w-screen flex justify-center">
      <div className="fixed flex z-10  justify-center items-center bg-gradient-to-r from-gray-700 to-slate-700 h-[15%]  w-auto rounded-full p-[11px] mt-[11px] font-sans text-lg shadow-md">
        <Link
          to={"/"}
          className="Home p-4  md:p-6 lg:p-8 text-white  hover:text-green-100 hover:bg-gray-600 hover:rounded-full"
        >
          Home
        </Link>

        <Link
          to={"/Projects"}
          className="Project p-4  md:p-6 lg:p-8 text-white  hover:text-green-100 hover:bg-gray-600 hover:rounded-full"
        >
          Projects
        </Link>
        <Link
          to={"/Education"}
          className="Contact p-4  md:p-6 lg:p-8 text-white  hover:text-green-100 hover:bg-gray-600 hover:rounded-full"
        >
          Education
        </Link>
        <Link
          to={"/Contact"}
          className="Contact p-4  md:p-6 lg:p-8 text-white  hover:text-green-100 hover:bg-gray-600 hover:rounded-full"
        >
          Contacts
        </Link>
      </div>
    </div>
  );
};
export default Header;
