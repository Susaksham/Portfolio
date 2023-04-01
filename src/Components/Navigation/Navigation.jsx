import React, { useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
// import classes from './Navigation.module.css'
import { Outlet } from 'react-router-dom'
// pt-[2rem] pl-[6.25rem] pr-[6.25rem] pb-[2rem]
function Navigation() {
  return (
    <div className="flex pt-6 pl-24 pr-24 pb-6    justify-between w-full  shadow-lg shadow-slate-900 ">
      <h1 className="text-slate-50 text-3xl">Susaksham Jain</h1>
      <div className="links">
        <ul className="flex list-none gap-4">
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
                )
              }}
            </NavLink>
          </li>
          <li>
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
          </li>
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
                )
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
                )
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
                )
              }}
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navigation
