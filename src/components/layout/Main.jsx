import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import ProgressBar from "../progressbar/ProgressBar";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <ProgressBar></ProgressBar>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
