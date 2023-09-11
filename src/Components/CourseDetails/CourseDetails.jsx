/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";
import Instructors from "../Instructors/Instructors";
import {
  Button,
  Center,
  Container,
  Grid,
  Group,
  Loader,
  Text,
} from "@mantine/core";
import DetailsHero from "../DetailsHero/DetailsHero";
import DetailsLists from "../DetailsLists/DetailsLists";
import StudentsFeedBack from "../StudentsFeedBack/StudentsFeedBack";

const CourseDetails = () => {
  const data = useLoaderData();
  const { courseId } = useParams();
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const [loading, setLoading] = useState(true);
  const [singleCourse, setSingleCourse] = useState(null);

  useEffect(() => {
    // Ensure data is an array before using .find()
    if (Array.isArray(data)) {
      const singleItem = data.find((item) => item.id.toString() === courseId);
      if (singleItem) {
        setSingleCourse(singleItem);
        setLoading(false);
      }
    } else {
      setLoading(false); // Set loading to false to prevent indefinite loading
    }
  }, [data, courseId]);

  if (loading) {
    return (
      <Group position="center" className=" my-3">
        <Loader className="text-center" />
      </Group>
    );
  }

  if (!singleCourse) {
    return (
      <Center className="flex flex-col mt-10 max-w-md mx-auto">
        <Text className="text-[18] text-red-400">
          Item not found ?? please go back to the previous page!
        </Text>
        <Button
          onClick={goBack}
          className="btn border-t-cyan-300 no-underline w-2/3 mt-5"
        >
          Back
        </Button>
      </Center>
    );
  }
  // const { course_name, description } = singleCourse;
  return (
    <Container className="my-8">
      <Grid className="">
        <Grid.Col xs={8}>
          <DetailsHero singleCourse={singleCourse} />
          <DetailsLists />
          <Instructors singleCourse={singleCourse} />
          <StudentsFeedBack singleCourse={singleCourse} />
        </Grid.Col>
        <Grid.Col xs={4}>
          <h1>right side</h1>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default CourseDetails;
