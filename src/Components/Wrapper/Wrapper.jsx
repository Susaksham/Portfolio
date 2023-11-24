import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MobileNavigation from "../Navigation/MobileNavigation";

function Wrapper() {
  const [show, setShow] = useState(false);

  const showHandler = () => {
    setShow((state) => {
      return !state;
    });
  };
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/home");
  }, []);
  return (
    <div className="w-full  bg-[#1a202c] flex justify-start flex-col flex-1 min-h-screen  ">
      <Navigation showHandler={showHandler}></Navigation>
      <div className="w-full flex flex-col justify-start items-center  flex-1">
        <div className="w-full flex-1 ">
          {show && <MobileNavigation></MobileNavigation>}
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
}

export default Wrapper;
