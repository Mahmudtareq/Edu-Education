/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {
  Avatar,
  Divider,
  Image,
  Paper,
  Rating,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import courseInstructors from "../../assets/image/course-instructors.png";
import { useEffect, useState } from "react";
const DetailsHero = ({ singleCourse }) => {
  const { course_name, rating, author_name, enrollments } = singleCourse;
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const today = new Date();
    const day = today.getDate();
    const month = today.toLocaleString("default", { month: "long" });
    const year = today.getFullYear();

    setCurrentDate(`${day} ${month} ${year}`);
  }, []);
  return (
    <Paper className="bg-white shadow-md p-5 mb-5">
      <Title order={4}>Course Name : {course_name}</Title>
      <span className="flex items-center gap-2 text-sm my-4">
        <Rating defaultValue={rating} fractions={3} readOnly size="sm" />
        {rating} (50 reviews)
      </span>
      <Divider my="sm" className="pb-1 " />
      <div className="flex items-center justify-between flex-wrap my-3">
        <div className="flex items-center gap-4 lg:w-2/4 ">
          <Avatar
            className="rounded-full"
            src={courseInstructors}
            alt="it's me"
          />
          <div className="flex flex-col">
            <Text className="text-sm font-serif text-stone-500">
              Created by
            </Text>
            <Title order={6}>{author_name}</Title>
          </div>
        </div>
        <div className="lg:w-1/4">
          <div className="flex flex-col">
            <Text className="text-sm font-serif text-stone-500">
              Total Enrolled
            </Text>
            <Title order={6}>{enrollments}</Title>
          </div>
        </div>
        <div className="lg:w-1/4 mt-2 lg:mt-0">
          <div className="flex flex-col">
            <Text className="text-sm font-serif text-stone-500">
              Last Update
            </Text>
            <Title order={6}>{currentDate}</Title>
          </div>
        </div>
      </div>
      <Divider my="sm" className="pt-1" />
      <div>
        <Title order={4} className="text-start mt-7">
          Description
        </Title>
        <p className="text-justify font-sans text-slate-700 text-base my-3">
          This course has been designed by two professional Data Scientists so
          that we can share our knowledge and help you learn complex theory,
          algorithms, and coding libraries in a simple way. We will walk you
          step-by-step into the World of Machine Learning. With every tutorial,
          you will develop new skills and improve your understanding of this
          challenging yet lucrative sub-field of Data Science.
        </p>
      </div>
    </Paper>
  );
};

export default DetailsHero;
