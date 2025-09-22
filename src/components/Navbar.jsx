import React from "react";

const Navbar = ({availableBalance}) => {
  return (
    <div className="navbar justify-between mx-auto max-w-[1600px] mt-3 mb-3">
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
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <a className="">
          <img src="/src/assets/logo.png" alt="" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex gap-[20px]">
        <ul className="menu menu-horizontal px-1 text-[#131313b3] text-[16px] gap-[20px]">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a href="">Fixture</a>
          </li>
          <li>
            <a>Teams</a>
          </li>
          <li>
            <a>Schedules</a>
          </li>
        </ul>
        <div className="shadow-sm rounded-[10px] px-[20px] py-[14px] border-gray-300 border-1">
          <p className="text-black flex items-center gap-1">
            <span>{availableBalance}</span> Coin
            <img src="/src/assets/dollar.png" alt="" className="w-4 h-4" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
