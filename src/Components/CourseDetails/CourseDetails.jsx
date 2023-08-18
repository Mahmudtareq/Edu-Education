/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Instructors from "../Instructors/Instructors";
import { Container, Grid } from "@mantine/core";

const CourseDetails = () => {
  const data = useLoaderData();
  const { courseId } = useParams();
  const [singleCourse, setSingleCourse] = useState(null);

  useEffect(() => {
    const singleItem = data.find((item) => item.id.toString() === courseId);
    if (singleItem) {
      setSingleCourse(singleItem);
    }
  }, [data, courseId]);
  if (!singleCourse) {
    return <div>Item not found</div>;
  }
  // const { course_name, description } = singleCourse;
  return (
    <Container className="my-8">
      <Grid className="">
        <Grid.Col xs={8}>
          <Instructors singleCourse={singleCourse} />
        </Grid.Col>
        <Grid.Col xs={4}>
          <h1>right side</h1>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default CourseDetails;
