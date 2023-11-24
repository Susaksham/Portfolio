import React, { useEffect, useState } from "react";
import ProjectItems from "./ProjectItems";
import Footer from "../Footer/Footer";
function Projects() {
  const [repo, setRepo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const repoGetter = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          "https://api.github.com/users/susaksham/repos"
        );
        const data = await response.json();
        setRepo(data);
        setIsLoading(false);
        console.log(data);
      } catch (err) {
        setIsLoading(false);

        console.log(err);
      }
    };
    repoGetter();
  }, []);
  return (
    <div className=" w-full overflow-hidden flex flex-col items-center ">
      <div>
        <ProjectItems></ProjectItems>
      </div>
    </div>
  );
}

export default Projects;
