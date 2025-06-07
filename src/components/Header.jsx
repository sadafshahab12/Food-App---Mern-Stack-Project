import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isToggle, setIsToggle] = useState(false);
  const location = useLocation();
  const handleMenu = () => {
    setIsToggle(!isToggle);
  };

  const isActive = (path) => {
    return location.pathname === path
      ? "relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-orange-400 after:transition-all after:duration-300"
      : "relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-orange-400 after:transition-all after:duration-300 hover:after:w-full";
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
        <nav className="md:flex hidden text-sm justify-center items-center gap-10 ">
          <div className="space-x-10">
            <Link to="/" className={`${isActive("/")}`}>
              Home
            </Link>
            {localStorage.getItem("authToken") ? (
              <Link to="/my-order" className={`${isActive("/my-order")}`}>
                My Order
              </Link>
            ) : (
              ""
            )}
          </div>
          <div className="flex justify-center items-center gap-2">
            <Link
              to="/login"
              className="bg-orange-300 py-1 px-4 text-black rounded-md"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="border border-orange-300 py-1 px-4 text-orange-300 rounded-md"
            >
              Signup
            </Link>
          </div>
        </nav>
        {/* mobile navbar  */}
        <nav className="md:hidden block">
          <div
            className={`flex flex-col  items-center text-sm gap-10 fixed top-16 ${
              isToggle ? "right-0" : "-right-full"
            }  w-[80%] sm:w-[60%] bg-slate-800 py-10 h-screen transition-all duration-300 ease-in`}
          >
            <Link to="/" onClick={handleMenu}>
              Home
            </Link>
            <Link to="/login" onClick={handleMenu}>
              Login
            </Link>
            <Link to="/my-order" onClick={handleMenu}>
              My Order
            </Link>
            <Link to="/signup" onClick={handleMenu}>
              Signup
            </Link>
          </div>
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
