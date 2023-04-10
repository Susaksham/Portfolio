import React from "react";
import ProfileImage from "../../assets/IMG_20220621_155027_315.png";
import Typewriter from "typewriter-effect";
import classes from "./HomePage.module.css";
function HomePage() {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("../../assets/Resume/SusakshamResume.pdf").then((response) => {
      response.blob().then((blob) => {
        console.log(blob);
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "../../assets/Resume/SusakshamResume.pdf";
        alink.click();
      });
    });
  };
  return (
    //
    <div className="py-4 min-w-fit h-full flex justify-center items-center ">
      <div className=" min-h-fit  py-4 px-4 flex gap-36 ">
        <div className="flex-1 flex flex-col gap-5">
          <div>
            <h1 className=" text-5xl font-bold flex ">
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
            <h2 className=" text-slate-400 text-3xl">I'm a </h2>
            <p>
              <div id={classes.text} className="bg-slate-300 text-xl">
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
            </p>
          </div>
          <div>
            <p className="text-slate-400 text-lg">
              I code{" "}
              <span className="bg-[#2d3c4c] text-[#4291bb]"> beautifully </span>{" "}
              simple things and I <br /> love what I do but It's being
              frustrating <br /> sometimes but result's adrenaline hits
              different.
            </p>
          </div>
        </div>
        <div className="">
          <div className="flex flex-col  justify-between  bg-[#171923] py-8 px-8 h-[25rem] rounded-lg">
            <div className="flex flex-col items-center ">
              <div className="w-[8rem] rounded-full overflow-hidden">
                <img src={ProfileImage} alt="not visible"></img>
              </div>
              <span className="text-lg text-slate-100 mt-1">
                Susaksham Jain
              </span>
              <span className="text-lg text-slate-400">
                Software Engineer Student
              </span>
            </div>
            <div>
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
    </div>
  );
}

export default HomePage;
