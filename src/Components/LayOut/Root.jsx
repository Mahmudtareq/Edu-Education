// eslint-disable-next-line no-unused-vars
import React from "react";
import TopBar from "../Topbar/TopBar";
import Nav from "../Nav/Nav";
import { Outlet, useNavigation } from "react-router-dom";
import LoaderBtn from "../LoaderBtn/LoaderBtn";
import { Toaster } from "react-hot-toast";

const Root = () => {
  const navigation = useNavigation();
  return (
    <>
      <TopBar />
      <Toaster />
      <Nav />
      <div className="text-center">
        {navigation.state === "loading" ? <LoaderBtn /> : ""}
      </div>
      <Outlet />
    </>
  );
};

export default Root;
