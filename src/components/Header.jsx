import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

const Header = () => {
  const [isToggle, setIsToggle] = useState(false);
  const handleMenu = () => {
    setIsToggle(!isToggle);
  };
  return (
    <header className="bg-slate-800 text-white">
      <div className="flex justify-between py-5 px-10 items-center max-w-6xl mx-auto relative">
        <div className="logo">
          <span className="text-lg">
            <a href="/">Food App</a>
          </span>
        </div>
        {/* web navbar  */}
        <nav className="md:flex hidden">
          <ul className="flex justify-center items-center text-sm gap-10">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/my-order">My Order</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </ul>
        </nav>
        {/* mobile navbar  */}
        <nav className="md:hidden block">
          <ul
            className={`flex flex-col  items-center text-sm gap-10 fixed top-16 ${
              isToggle ? "right-0" : "-right-full"
            }  w-[80%] sm:w-[60%] bg-slate-800 py-10 h-screen transition-all duration-300 ease-in`}
          >
            <li onClick={handleMenu}>
              <Link to="/">Home</Link>
            </li>
            <li onClick={handleMenu}>
              <Link to="/login">Login</Link>
            </li>
            <li onClick={handleMenu}>
              <Link to="/my-order">My Order</Link>
            </li>
            <li onClick={handleMenu}>
              <Link to="/signup">Signup</Link>
            </li>
          </ul>
        </nav>
        <div className="md:hidden block">
          {isToggle ? (
            <IoClose
              size={20}
              className="cursor-pointer "
              onClick={handleMenu}
            />
          ) : (
            <HiMenuAlt3
              size={20}
              className="cursor-pointer"
              onClick={handleMenu}
            />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
