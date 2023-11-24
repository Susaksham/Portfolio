import React from "react";
import ProjectItem from "./ProjectItem";
import BuyBest from "../../assets/BuyBest.png";
import PinIt from "../../assets/PinIt.png";
import AuthSecure2 from "../../assets/AuthSecure2.png";
import Footer from "../Footer/Footer";
const projectName = [
  {
    id: 1,
    link1: "",
    link2: "https://github.com/Susaksham/AuthSecure",
    url: AuthSecure2,
    description:
      "It is an Authentication app using using JSON web token. Whenever a user register for the very first time, it receives the successfully registered email on the user email.",
    techStack: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Redux",
      "Redux Toolkit",
      "Tailwind Css",
    ],
  },
  {
    id: 2,
    link1: "https://e-commerce-website-chi.vercel.app/",
    link2: "https://github.com/Susaksham/E-commerce-website",
    url: BuyBest,
    description:
      "It is an e-commerce website that includes features such as product listings, shopping carts, searching and sorting.",
    techStack: ["React.js", "Redux ", "Redux Toolkit", "Firebase", "API"],
  },
  {
    id: 3,
    link1: "https://pin-it.vercel.app/",
    link2: "https://github.com/Susaksham/PinIT",
    url: PinIt,
    description:
      "Pinit allows users to record their ideas and notes. The user will find it simpler to add, edit, and delete the note. ",
    techStack: ["React.js", "Redux ", "Redux Toolkit"],
  },
];
const ProjectItems = () => {
  return (
    <>
      <div className="flex flex-col items-center gap-8 mt-8">
        <div className="flex flex-col items-center gap-6">
          <h1 className=" mobile:text-3xl laptop:text-5xl font-bold flex ">
            <div className="  text-blue-400">P</div>
            <div className="  text-blue-400">r</div>
            <div className="  text-blue-300">o</div>
            <div className="  text-blue-300">j</div>
            <div className="  text-blue-200">e</div>
            <div className=" text-blue-200">c</div>
            <div className="  text-blue-100"> t</div>
            <div className=" text-blue-100">s</div>
          </h1>
          <p className=" text-slate-50 laptop:text-2xl mobile:text-lg">
            {" "}
            These are some of my projects.
          </p>
        </div>
        <div className=" laptop:gap-10 overflow-hidden h-fit mobile:flex-col flex  laptop:flex-row laptop:flex-wrap laptop:items-stretch ">
          {projectName.map((element) => {
            return (
              <ProjectItem
                key={element.id}
                link1={element.link1}
                link2={element.link2}
                url={element.url}
                description={element.description}
                techStack={element.techStack}
              ></ProjectItem>
            );
          })}
        </div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default ProjectItems;
