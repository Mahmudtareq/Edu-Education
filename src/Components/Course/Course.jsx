/* eslint-disable no-unused-vars */
import { Container, Grid } from "@mantine/core";
import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import AllCourse from "../AllCourse/AllCourse";

const Course = () => {
  const course = useLoaderData();

  console.log(course);
  return (
    <Container className=" my-5">
      <Grid>
        <Grid.Col xs={2}>
      
        </Grid.Col>
        <Grid.Col xs={10}>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
            {course.map((item) => (
              <AllCourse item={item} key={item.id} />
            ))}
          </div>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default Course;
