import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Wrapper() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/home");
  }, []);
  return (
    <div className="w-full  bg-[#1a202c] flex justify-start flex-col flex-1 min-h-full ">
      <Navigation></Navigation>
      <div className="w-full flex flex-col justify-start items-center flex-1 min-h-full  ">
        <div className="max-w-fit">
          <Outlet></Outlet>
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
}

export default Wrapper;
