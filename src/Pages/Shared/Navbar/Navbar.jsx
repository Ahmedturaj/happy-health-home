import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import "./nav.css";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";
import { FaPlus } from "react-icons/fa";
const Navbar = () => {
  const { user, loading, logOut } = useContext(AuthContext);
  const handleLogout = (e) => {
    e.preventDefault();
    logOut();
  };
  const navOptions = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-cyan-500  rounded-none" : "text-white rounded-none"
          }
          to={"/"}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/medicines"}
          className={({ isActive }) =>
            isActive ? "text-cyan-500  rounded-none" : "text-white rounded-none"
          }
        >
          Medicine
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/about"}
          className={({ isActive }) =>
            isActive ? "text-cyan-500  rounded-none" : "text-white rounded-none"
          }
        >
          About
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar absolute z-10 container mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow gap-4"
          >
            {navOptions}
          </ul>
        </div>
        <a
          className="btn btn-ghost  text-cyan-500 md:text-2xl font_grey"
          style={{ textShadow: "3px 4px 6px", backgroundColor: "transparent" }}
        >
          <img
            src="../../../../public/istockphoto-471629610-612x612-removebg-preview.png"
            alt=""
            className="w-10"
          />
          Happy Health Home
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4">{navOptions}</ul>
      </div>
      <div className="navbar-end">
        {loading ? (
          <FaPlus className="text-cyan-500 animate-spin" />
        ) : (
          <div className="">
            {user ? (
              <div className="flex justify-center gap-3 items-center">
                <img
                  className="w-12 rounded-full"
                  title={user.displayName}
                  src={user.photoURL}
                  alt="User's Picture"
                />
                <button
                  onClick={handleLogout}
                  className="overflow-hidden button_hover rounded-e-3xl p-2 border-b text-cyan-500 cursor-pointer border-cyan-500 hover:border-l hover:border-t shadow-lg shadow-cyan-500"
                >
                  LogOut
                </button>
              </div>
            ) : (
              <Link
                to={"/logIn"}
                className="overflow-hidden button_hover rounded-e-3xl p-2 border-b text-cyan-500 cursor-pointer border-cyan-500 hover:border-l hover:border-t shadow-lg shadow-cyan-500"
                style={{ transition: "all 1s" }}
              >
                LogIn
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
