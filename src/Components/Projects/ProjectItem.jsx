import React, { useState } from "react";
import Github from "../../assets/icons/Github";
import classes from "./ProjectItem.module.css";
// import LinkIcon from '../../assets/icons/LinkIcon'
import LinkIcon from "../../assets/icons/icons8-link-50.png";
import TechStack from "./TechStack";
const ProjectItem = (props) => {
  const [showTech, setShowTech] = useState(false);
  const showHandler = () => {
    setShowTech((state) => {
      return !state;
    });
  };
  return (
    <div className="p-5 relative h-auto ">
      <div className=" bg-black laptop:w-96 rounded-lg laptop:h-full overflow-hidden mobile:w-60 mobile:h-fit">
        <div id={classes.imageSectionId} className={classes.imageSection}>
          <div id={classes.shadow}></div>
          <div
            id={classes.iconsHover}
            className="flex gap-2 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-[1000] rounded-full  opacity-0 "
          >
            {props.link1 && (
              <a target="_blank" href={`${props.link1}`}>
                <div className="rounded-full bg-slate-100 p-3">
                  <img className="w-[1.6rem]" src={LinkIcon}></img>
                </div>
              </a>
            )}
            {props.link2 && (
              <a target="_blank" href={`${props.link2}`}>
                <div className="rounded-full bg-slate-800  p-3">
                  <Github></Github>
                </div>
              </a>
            )}
          </div>

          <img
            className="rounder-lg desktop:h-3/4 desktop:w-full object-cover z-0"
            src={props.url}
          ></img>
        </div>
        <div className="laptop:p-7 flex flex-col gap-3 mobile:p-3">
          <button
            onClick={showHandler}
            className=" text-slate-50 border-2 laptop:p-2 mobile:p-1 w-fit  border-white rounded-lg"
          >
            {showTech ? "Hide ⬆️" : "Show TechStack ⬇️"}
          </button>
          {showTech && (
            <div>
              <TechStack techStack={props.techStack}></TechStack>
            </div>
          )}

          <p className="text-slate-50 selection:bg-[#222b3c]">
            {" "}
            {props.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
