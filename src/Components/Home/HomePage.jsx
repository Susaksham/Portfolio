import React, { useEffect, useRef, useState } from "react";
import ProfileImage from "../../assets/IMG_20220621_155027_315.png";

import classes from "./HomePage.module.css";
{
  /* components */
}
import TextContent from "../TextContent/TextContent";
import Footer from "../Footer/Footer";
import TypeWriterItem from "../TypeWriter/TypeWriterItem";
function HomePage() {
  // const [textShow, setTextShow] = useState(false);
  const countChange = useRef(0);

  const onButtonClick = () => {
    // using Java Script method to get PDF file
    const url = "http://localhost:5173/Resume/SusakshamResume.pdf";
    const fileName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };
  // console.log("textShow" + textShow);
  // console.log("count value ", countChange.current);
  // const textHandler = () => {
  //   if (!textShow) {
  //     setTextShow(true);
  //   }
  // };

  return (
    <div className="laptop:py-4 min-w-fit h-full flex justify-center items-center mobile:mb-10 ">
      <div className="flex flex-col   laptop:px-24">
        <div className=" min-h-fit  py-4 px-4 flex laptop:gap-8  laptop:flex-row mobile:flex-col-reverse ">
          <div className="flex-1 flex flex-col gap-5 ">
            <div className="mobile:flex mobile:items-center mobile:justify-center laptop:block">
              <h1 className=" laptop:text-5xl font-bold flex mobile:text-3xl  ">
                <div className="  text-slate-50">H</div>
                <div className="  text-slate-100">e</div>
                <div className="  text-slate-100">y</div>

                <div className="  text-slate-200">,</div>
                <pre className="   text-slate-300"> </pre>
                <div className="  text-slate-300">I</div>
                <div className="  text-slate-300">'m</div>
                <pre className="  text-slate-300"> </pre>
                <div className="  text-blue-400">S</div>
                <div className="  text-blue-400">u</div>
                <div className="  text-blue-300">s</div>
                <div className="  text-blue-300">a</div>
                <div className="  text-blue-200">k</div>
                <div className=" text-blue-200">s</div>
                <div className="  text-blue-100"> h</div>
                <div className=" text-blue-100">a</div>
                <div className=" text-blue-50">m</div>
              </h1>
            </div>
            <div className="mt-3">
              <h2 className=" text-slate-400 laptop:text-3xl mobile:text-xl mobile:text-center laptop:text-left mobile:hidden laptop:block">
                I'm a{" "}
              </h2>
              <div className=" laptop:inline  mobile:flex mobile:items-center mobile:justify-center">
                <div
                  id={classes.text}
                  className="bg-slate-300 laptop:text-xl mobile:text-lg"
                >
                  <TypeWriterItem></TypeWriterItem>
                </div>
              </div>
            </div>
            <div>
              <p className="text-slate-400 text-lg mobile:text-center laptop:text-left">
                I code{" "}
                <span className="bg-[#2d3c4c] text-[#4291bb]">
                  {" "}
                  beautifully{" "}
                </span>{" "}
                simple things and I <br /> love what I do but It's being
                frustrating <br /> sometimes but result's adrenaline hits
                different.
              </p>
            </div>
          </div>
          <div className="">
            <div className="flex flex-col  justify-between laptop:bg-[#171923] py-8 px-12 laptop:h-[20rem] rounded-lg">
              <div className="flex flex-col items-center ">
                <div className="w-[8rem] rounded-full overflow-hidden">
                  <img src={ProfileImage} alt="not visible"></img>
                </div>
                <span className="text-lg text-slate-100 mt-1 mobile:hidden laptop:inline-block">
                  Susaksham Jain
                </span>
                <span className="text-lg text-slate-400 laptop:inline-block mobile:hidden">
                  Software Engineer Student
                </span>
              </div>
              <div className="laptop:inline-block mobile:hidden">
                <button
                  type="file"
                  onClick={onButtonClick}
                  className=" w-full bg-slate-500 py-2 rounded-lg text-slate-50"
                >
                  Resume
                </button>
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default HomePage;
/*<div className="laptop:py-4 min-w-fit h-full flex justify-center items-center mobile:mb-10 ">
      <div className=" min-h-fit  py-4 px-4 flex laptop:gap-36  laptop:flex-row mobile:flex-col-reverse ">
        <div className="flex-1 flex flex-col gap-5">
          <div className="mobile:flex mobile:items-center mobile:justify-center laptop:block">
            <h1 className=" laptop:text-5xl font-bold flex mobile:text-3xl  ">
              <div className="  text-slate-50">H</div>
              <div className="  text-slate-100">e</div>
              <div className="  text-slate-100">y</div>

              <div className="  text-slate-200">,</div>
              <pre className="   text-slate-300"> </pre>
              <div className="  text-slate-300">I</div>
              <div className="  text-slate-300">'m</div>
              <pre className="  text-slate-300"> </pre>
              <div className="  text-blue-400">S</div>
              <div className="  text-blue-400">u</div>
              <div className="  text-blue-300">s</div>
              <div className="  text-blue-300">a</div>
              <div className="  text-blue-200">k</div>
              <div className=" text-blue-200">s</div>
              <div className="  text-blue-100"> h</div>
              <div className=" text-blue-100">a</div>
              <div className=" text-blue-50">m</div>
            </h1>
          </div>
          <div className="mt-3">
            <h2 className=" text-slate-400 laptop:text-3xl mobile:text-xl mobile:text-center laptop:text-left mobile:hidden laptop:block">
              I'm a{" "}
            </h2>
            <div className=" laptop:inline  mobile:flex mobile:items-center mobile:justify-center">
              <div
                id={classes.text}
                className="bg-slate-300 laptop:text-xl mobile:text-lg"
              >
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("")
                      .callFunction(() => {})
                      .pauseFor(2500)
                      .deleteAll()
                      .callFunction(() => {})
                      .start();
                  }}
                  options={{
                    strings: ["Web Developer, Designer and Learner"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
            </div>
          </div>
          <div>
            <p className="text-slate-400 text-lg mobile:text-center laptop:text-left">
              I code{" "}
              <span className="bg-[#2d3c4c] text-[#4291bb]"> beautifully </span>{" "}
              simple things and I <br /> love what I do but It's being
              frustrating <br /> sometimes but result's adrenaline hits
              different.
            </p>
          </div>
        </div>
        <div className="">
          <div className="flex flex-col  justify-between laptop:bg-[#171923] py-8 px-8 laptop:h-[25rem] rounded-lg">
            <div className="flex flex-col items-center ">
              <div className="w-[8rem] rounded-full overflow-hidden">
                <img src={ProfileImage} alt="not visible"></img>
              </div>
              <span className="text-lg text-slate-100 mt-1 mobile:hidden laptop:inline-block">
                Susaksham Jain
              </span>
              <span className="text-lg text-slate-400 laptop:inline-block mobile:hidden">
                Software Engineer Student
              </span>
            </div>
            <div className="laptop:inline-block mobile:hidden">
              <button
                type="file"
                onClick={onButtonClick}
                className=" w-full bg-slate-500 py-2 rounded-lg text-slate-50"
              >
                Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </div> */

/* */
