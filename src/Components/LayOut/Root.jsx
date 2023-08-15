// eslint-disable-next-line no-unused-vars
import React from "react";
import TopBar from "../Topbar/TopBar";
import Nav from "../Nav/Nav";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <TopBar />
      <Nav />
      <Outlet />
    </>
  );
};

export default Root;
