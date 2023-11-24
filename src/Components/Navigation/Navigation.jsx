import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
// import classes from './Navigation.module.css'
import Logo from "../../assets/logo2.png";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
// pt-[2rem] pl-[6.25rem] pr-[6.25rem] pb-[2rem]
function Navigation(props) {
  return (
    <div className="flex mobile:pt-0 mobile:pl-4 mobile:pr-4  laptop:pt-0  laptop:pl-24 laptop:pr-24 laptop:pb-0    justify-between w-full shadow-lg shadow-[#101010b1] ">
      <div className="flex items-center justify-center">
        <Link
          to="/home"
          className="text-slate-50 mobile:text-3xl laptop:text-4xl h-fit cursor-pointer "
        >
          SJ.
        </Link>
      </div>

      <div className="flex my-6">
        <ul className=" list-none laptop:gap-4 mobile:hidden   tablet:flex ">
          <li>
            <NavLink className="no-underline" to="/home">
              {({ isActive }) => {
                return (
                  <span
                    className={
                      isActive
                        ? ` relative text-cyan-500 pt-0 pb-1 px-4   text-2xl border-4  border-sky-700  hover:bg-slate-500 rounded-lg  `
                        : ` text-cyan-500 pt-0 pb-1 px-4 text-2xl hover:bg-slate-500 rounded-lg`
                    }
                  >
                    Home
                  </span>
                );
              }}
            </NavLink>
          </li>
          {/*<li>
            <NavLink className="no-underline" to="/about">
              {({ isActive }) => {
                return (
                  <span
                    className={
                      isActive
                        ? ` relative text-cyan-500 pt-0 pb-1 px-4   text-2xl border-4  border-sky-700  hover:bg-slate-500 rounded-lg  `
                        : ` text-cyan-500 pt-0 pb-1 px-4 text-2xl hover:bg-slate-500 rounded-lg`
                    }
                  >
                    About
                  </span>
                )
              }}
            </NavLink>
            </li>*/}
          <li>
            <NavLink className="no-underline" to="/skills">
              {({ isActive }) => {
                return (
                  <span
                    className={
                      isActive
                        ? ` relative text-cyan-500 pt-0 pb-1 px-4   text-2xl border-4  border-sky-700  hover:bg-slate-500 rounded-lg  `
                        : ` text-cyan-500 pt-0 pb-1 px-4 text-2xl hover:bg-slate-500 rounded-lg`
                    }
                  >
                    Skills
                  </span>
                );
              }}
            </NavLink>
          </li>
          <li>
            <NavLink className="no-underline" to="/projects">
              {({ isActive }) => {
                return (
                  <span
                    className={
                      isActive
                        ? ` relative text-cyan-500 pt-0 pb-1 px-4   text-2xl border-4  border-sky-700  hover:bg-slate-500 rounded-lg  `
                        : ` text-cyan-500 pt-0 pb-1 px-4 text-2xl hover:bg-slate-500 rounded-lg`
                    }
                  >
                    Projects
                  </span>
                );
              }}
            </NavLink>
          </li>
          <li>
            <NavLink className="no-underline" to="/contact">
              {({ isActive }) => {
                return (
                  <span
                    className={
                      isActive
                        ? ` relative text-cyan-500 pt-0 pb-1 px-4   text-2xl border-4  border-sky-700  hover:bg-slate-500 rounded-lg  `
                        : ` text-cyan-500 pt-0 pb-1 px-4 text-2xl hover:bg-slate-500 rounded-lg`
                    }
                  >
                    Contact
                  </span>
                );
              }}
            </NavLink>
          </li>
        </ul>
        <div
          onClick={props.showHandler}
          className="bg-[#272d3c9d] p-3 laptop:hidden rounded-lg "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className=" mobile:w-[1.5rem] "
            fill="white"
          >
            <title>menu</title>
            <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
