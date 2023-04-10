import React from "react";

const Tech = (props) => {
  return (
    <div className="px-2 rounded-lg bg-slate-600 text-white w-fit">
      {props.tech}
    </div>
  );
};

export default Tech;
