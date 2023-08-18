/* eslint-disable no-unused-vars */
import React from "react";
import HeroBanner from "../HeroBanner/HeroBanner";
import TopCategories from "../TopCategories/TopCategories";
import Campaign from "../Campaign/Campaign";
import StudentsChoice from "../StudentsChoice/StudentsChoice";

const Home = () => {
  return (
    <>
      <HeroBanner />
      <TopCategories />
      <StudentsChoice />
      <Campaign />
    </>
  );
};

export default Home;
