import React from "react";
import { NavLink } from "react-router-dom";

const NavContent = ["Home", "Skills", "Projects", "Contact"];
const MobileNavigation = () => {
  return (
    <div>
      <div className="flex flex-col w-full items-center border-3 border-b-gray-950">
        <ul className=" list-none laptop:gap-4 flex flex-col w-full items-center  tablet:hidden gap-4 ">
          {NavContent.map((element, index) => {
            return (
              <li key={index} className="w-full flex flex-col items-center">
                <NavLink
                  key={index}
                  className="no-underline w-full flex flex-col items-center"
                  to={`/${element}`}
                >
                  {({ isActive }) => {
                    return (
                      <span
                        className={
                          isActive
                            ? ` relative text-cyan-500 w-full flex flex-col items-center bg-[#1a243c]   text-2xl bg border-sky-700  hover:bg-slate-500 rounded-lg  `
                            : ` text-cyan-500  text-2xl w-full flex flex-col items-center hover:bg-slate-500 rounded-lg`
                        }
                      >
                        {element}
                      </span>
                    );
                  }}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default MobileNavigation;
