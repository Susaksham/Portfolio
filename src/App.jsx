import { useEffect, useState } from "react";
import "./App.css";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Navigation from "./Components/Navigation/Navigation";
import Wrapper from "./Components/Wrapper/Wrapper";
import Projects from "./Components/Projects/Projects";
import About from "./Components/About/About";
import Contacts from "./Components/Contacts/Contacts";
import Skills from "./Components/Skills/Skills";
import logoVideo from "./assets/Red White Creative Name Letter Company Logo .mp4";
import secondLogoAnimation from "./assets/SecondLogoAnimaton.mp4";
import partyLogo from "./assets/PartyLogo.mp4";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Wrapper></Wrapper>,
    children: [
      {
        path: "home",
        element: <Home></Home>,
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "skills",
        element: <Skills></Skills>,
      },
      {
        path: "projects",
        element: <Projects></Projects>,
      },
      {
        path: "contact",
        element: <Contacts></Contacts>,
      },
    ],
  },
]);
function App() {
  const [showLogo, setShowLogo] = useState(false);
  const logoLoader = async (clear) => {
    return new Promise((res, rej) => {
      clear = setTimeout(() => {
        setShowLogo(true);
      }, 1);
    });
  };
  useEffect(() => {
    let clear;
    logoLoader(clear);

    return () => {
      clearInterval(clear);
    };
  }, []);

  return (
    <>
      {!showLogo && (
        <div className="w-full min-h-screen flex flex-col text-slate-50 bg-black ">
          {" "}
          Loading...
        </div>
      )}
      {showLogo && (
        <div className="w-full min-h-screen flex flex-col">
          <RouterProvider router={router}></RouterProvider>
        </div>
      )}
    </>
  );
}

export default App;
