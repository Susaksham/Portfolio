import React from "react";
import ExpressIcon from "../../assets/icons/express_icon.jsx";
import JavascriptIcon from "../../assets/icons/JavascriptIcon.jsx";
import ReactIcon from "../../assets/icons/ReactIcon.jsx";
import MongoDb from "../../assets/icons/mongoDb.png";
import Tailwindicon from "../../assets/icons/tailwindicon.jsx";
import MySqlIcon from "../../assets/icons/MySqlIcon";
import FirebaseIcon from "../../assets/icons/firebaseIcon";
import GitIcon from "../../assets/icons/GitIcon.jsx";
import NextIcon from "../../assets/icons/Next_Icon.jsx";
import Footer from "../Footer/Footer.jsx";
function Skills() {
  return (
    <div className="flex flex-col w-full  laptop:px-24">
      <div className=" w-full flex flex-col items-center justify-center gap-8 mb-10">
        <div className="text-center flex flex-col justify-center items-center gap-5 pt-10">
          <div>
            <h1 className=" mobile:text-3xl laptop:text-5xl font-bold flex ">
              <div className="  text-blue-400">S</div>
              <div className="  text-blue-400">k</div>
              <div className="  text-blue-300">i</div>
              <div className="  text-blue-300">l</div>
              <div className="  text-blue-200">l</div>
              <div className=" text-blue-200">s</div>
            </h1>
          </div>
          <span className=" text-slate-50 laptop:text-2xl mobile:text-lg">
            Some of the skills I’ve been practicing <br /> and mastering through
            time.
          </span>
        </div>

        <div className="flex items-center laptop:gap-10 mobile:gap-3 py-4 mobile:w-100% mobile:px-8 mobile:flex-wrap laptop:w-2/3 mobile:w-full justify-center">
          <div className="laptop:p-5 mobile:p-3 bg-zinc-500 rounded-lg">
            <JavascriptIcon></JavascriptIcon>
          </div>
          <div className="laptop:p-5 mobile:p-3 bg-zinc-500 rounded-lg">
            <ReactIcon></ReactIcon>
          </div>
          <div className="laptop:p-5 mobile:p-3 bg-zinc-500 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="3.8rem"
              height="3.8rem"
              fill="#68a063"
            >
              <title>nodejs</title>
              <path d="M12,1.85C11.73,1.85 11.45,1.92 11.22,2.05L3.78,6.35C3.3,6.63 3,7.15 3,7.71V16.29C3,16.85 3.3,17.37 3.78,17.65L5.73,18.77C6.68,19.23 7,19.24 7.44,19.24C8.84,19.24 9.65,18.39 9.65,16.91V8.44C9.65,8.32 9.55,8.22 9.43,8.22H8.5C8.37,8.22 8.27,8.32 8.27,8.44V16.91C8.27,17.57 7.59,18.22 6.5,17.67L4.45,16.5C4.38,16.45 4.34,16.37 4.34,16.29V7.71C4.34,7.62 4.38,7.54 4.45,7.5L11.89,3.21C11.95,3.17 12.05,3.17 12.11,3.21L19.55,7.5C19.62,7.54 19.66,7.62 19.66,7.71V16.29C19.66,16.37 19.62,16.45 19.55,16.5L12.11,20.79C12.05,20.83 11.95,20.83 11.88,20.79L10,19.65C9.92,19.62 9.84,19.61 9.79,19.64C9.26,19.94 9.16,20 8.67,20.15C8.55,20.19 8.36,20.26 8.74,20.47L11.22,21.94C11.46,22.08 11.72,22.15 12,22.15C12.28,22.15 12.54,22.08 12.78,21.94L20.22,17.65C20.7,17.37 21,16.85 21,16.29V7.71C21,7.15 20.7,6.63 20.22,6.35L12.78,2.05C12.55,1.92 12.28,1.85 12,1.85M14,8C11.88,8 10.61,8.89 10.61,10.39C10.61,12 11.87,12.47 13.91,12.67C16.34,12.91 16.53,13.27 16.53,13.75C16.53,14.58 15.86,14.93 14.3,14.93C12.32,14.93 11.9,14.44 11.75,13.46C11.73,13.36 11.64,13.28 11.53,13.28H10.57C10.45,13.28 10.36,13.37 10.36,13.5C10.36,14.74 11.04,16.24 14.3,16.24C16.65,16.24 18,15.31 18,13.69C18,12.08 16.92,11.66 14.63,11.35C12.32,11.05 12.09,10.89 12.09,10.35C12.09,9.9 12.29,9.3 14,9.3C15.5,9.3 16.09,9.63 16.32,10.66C16.34,10.76 16.43,10.83 16.53,10.83H17.5C17.55,10.83 17.61,10.81 17.65,10.76C17.69,10.72 17.72,10.66 17.7,10.6C17.56,8.82 16.38,8 14,8Z" />
            </svg>
          </div>
          <div className="laptop:p-5 mobile:p-3 bg-zinc-500 rounded-lg">
            <ExpressIcon></ExpressIcon>
          </div>
          <div className='className=" laptop:p-5 mobile:p-3 bg-zinc-500 rounded-lg'>
            <img className="w-[3.8rem] h-[3.8rem]]" src={MongoDb}></img>
          </div>
          <div className='className=" laptop:p-5 mobile:p-3 bg-zinc-500 rounded-lg'>
            <Tailwindicon></Tailwindicon>
          </div>
          <div className='className=" laptop:p-5 mobile:p-3 bg-zinc-500 rounded-lg'>
            <MySqlIcon></MySqlIcon>
          </div>
          <div className='className=" laptop:p-5 mobile:p-3 bg-zinc-500 rounded-lg'>
            <FirebaseIcon></FirebaseIcon>
          </div>
          <div className='className=" laptop:p-5 mobile:p-3 bg-zinc-500 rounded-lg'>
            <GitIcon></GitIcon>
          </div>
          <div className='className=" laptop:p-5 mobile:p-3 bg-zinc-500 rounded-lg'>
            <NextIcon></NextIcon>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Skills;
