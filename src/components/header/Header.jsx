import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="border-b shadow-md">
      <div className="p-6 mx-auto flex justify-between items-center">
        <div className="flex justify-start items-center gap-5 w-3/4">
          <span className="px-3 text-2xl md:text-3xl text-gray-700 font-semibold logo tracking-wider whitespace-nowrap">
            <span>F</span>ilm<span>F</span>lick
          </span>
          <div className="bg-white hidden sm:flex justify-center items-center gap-2 px-3 py-1 w-full border rounded-md">
            <i className="fas fa-search text-gray-700"></i>
            <input
              type="text"
              className="px-4 py-1 w-full bg-transparent focus:outline-none text-gray-800"
              placeholder="Search Movies..."
            />
          </div>
        </div>
        <div className="flex items-center sm:gap-8 text-sm">
          <select className="p-1 hidden sm:block rounded-md bg-transparent">
            <option value="">Kochi</option>
            <option value="">Kochi</option>
          </select>
          <Link className="links hidden sm:block py-1 px-3 rounded-md whitespace-nowrap">All Movies</Link>
          <Link className="links hidden sm:block py-1 px-3 rounded-md whitespace-nowrap">Sign in</Link>
          <i className="fas fa-bars text-2xl text-gray-700 cursor-pointer sm:hidden" onClick={toggleMenu}></i>
        </div>
      </div>
      <div className={`menu flex flex-col gap-3 items-center sm:hidden ${isMenuOpen ? "open" : ""}`}>
        <Link to="/" className="py-2 px-4 rounded-md">All Movies</Link>
        <Link to="/about" className="py-2 px-4 rounded-md">Sign in</Link>
        <Link to="/contact" className="py-2 px-4 rounded-md">Contact</Link>
        <select className="py-2  rounded-md bg-transparent">
            <option value="">Kochi</option>
            <option value="">Kochi</option>
          </select>
      </div>
    </header>
  );
};

export default Header;
