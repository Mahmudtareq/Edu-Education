/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Image, Paper, Rating, Stack, Text, Title } from "@mantine/core";
import React from "react";
import courseInstructors from "../../assets/image/course-instructors.png";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { GoVideo } from "react-icons/go";

const Instructors = ({ singleCourse }) => {
  const {
    rating,
    enrollments,
    author_name,
    course_category,
    author_company,
    author_description,
    total_videos,
  } = singleCourse;
  console.log(singleCourse);
  return (
    <Paper className="p-5 shadow-sm bg-slate-100/20">
      <Title order={3} className="font-sans text-2xl mb-4 text-slate-800">
        Instructors
      </Title>
      <div className="lg:flex items-center gap-4 ">
        <div className="lg:w-1/5 w-1/2 mb-2 ">
          <Image src={courseInstructors} className=" mb-0" />
        </div>
        <div className="lg:w-4/5 space-y-2">
          <Title order={4}>{author_name}</Title>
          <Text>{author_company}</Text>
          <span className="flex items-center gap-2 text-sm">
            <Rating defaultValue={rating} fractions={3} readOnly size="sm" />
            {rating} (54 reviews)
          </span>
          <div className="flex items-center flex-wrap lg:gap-5 gap-2 ">
            <Text className="flex shrink-0 items-center">
              <span className="me-2">
                <GoVideo className="mt-1 font-bold text-xl text-green-400" />
              </span>
              <span className="text-base font-sans">
                {total_videos} Courses
              </span>
            </Text>
            <Text className="flex shrink-0 items-center">
              <span className="me-2">
                <AiOutlineUsergroupAdd className="mt-1 font-bold text-xl text-green-400" />
              </span>
              <span className="text-base font-sans">
                {enrollments} Students
              </span>
            </Text>
          </div>
        </div>
      </div>
      <p className="text-justify font-sans text-slate-700 text-base my-3">
        Professionally, I come from the {course_category}. {author_description}{" "}
        I was trained by the best analytics mentors at {author_company}{" "}
        and since starting on Udemy I have passed on my knowledge to
        spread around the world
      </p>
    </Paper>
  );
};

export default Instructors;
