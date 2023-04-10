import React from "react";
import Tech from "./Tech";
const TechStack = (props) => {
  return (
    <div>
      <div className="flex gap-3 flex-wrap">
        {props.techStack.map((tech) => {
          return <Tech id={tech} tech={tech}></Tech>;
        })}
      </div>
    </div>
  );
};

export default TechStack;
