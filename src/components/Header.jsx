import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="bg-gray-400 shadow-md">
      <div className="flex justify-between items-center max-w-6x1 mx-auto p-3 ">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-black-200">Sharad</span>
            <span className="text-red-500">Estate</span>
          </h1>
        </Link>
        <form className="bg-slate-100 p-3 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none w-24 sm:w-64"
          />
          <FaSearch className="text-slate-600" />
        </form>
        <ul className="flex gap-4">
          <Link to="/">
            
            <li className="hidden sm:inline hover:underline font-semibold">Home</li>
          </Link>
          <Link to="/about">
            
            <li className="hidden sm:inline hover:underline font-semibold">About</li>
          </Link>
          <Link to="/sign-in">
           
            <li className="hidden sm:inline hover:underline font-semibold">Sign in</li>
          </Link>
        </ul>
      </div>
    </header>
  );
};
export default Header;
