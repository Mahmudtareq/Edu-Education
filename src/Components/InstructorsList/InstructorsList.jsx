/* eslint-disable no-unused-vars */
import { Box, Container } from "@mantine/core";
import React from "react";
import { useLoaderData } from "react-router-dom";
import HeaderImage from "../HeaderImage/HeaderImage";
import InstructorItem from "../InstructorItem/InstructorItem";

const InstructorsList = () => {
  const data = useLoaderData();
  return (
    <>
      <HeaderImage />
      <Container>
        <div className="grid lg:grid-cols-3 md:grid-cols-3 gap-4 mt-12">
          {data.map((instructor) => (
            <InstructorItem instructor={instructor} key={instructor.id} />
          ))}
        </div>
      </Container>
    </>
  );
};

export default InstructorsList;
