/* eslint-disable no-unused-vars */
import { Container } from "@mantine/core";
import React from "react";
import { useLoaderData } from "react-router-dom";
import AllCourse from "../AllCourse/AllCourse";

const Course = () => {
  const course = useLoaderData();
  return (
    <Container className=" my-5">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        {course.map((item) => (
          <AllCourse item={item} key={item.id} />
        ))}
      </div>
    </Container>
  );
};

export default Course;
