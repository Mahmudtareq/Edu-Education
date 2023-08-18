/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Card, Image, Text, Badge, Button, Group, Avatar } from "@mantine/core";
import { Link } from "react-router-dom";

const AllCourse = ({ item }) => {
  const {
    image,
    course_name,
    description,
    course_category,
    author_name,
    duration,
    rating,
    price,
    enrollments,
    level,
    id,
  } = item || "";
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section component="a" href="https://mantine.dev/">
        <Image src={image} height={160} alt="Norway" />
      </Card.Section>
      <div className="flex items-center justify-between">
        <p className="font-sans text-base font-medium text-blue-600">
          {course_category}
        </p>
        <p className="font-sans text-sm font-medium text-slate-500">
          Duration: {duration}
        </p>
      </div>
      <div className="">
        <h2 className=" my-0 font-serif text-base font-semibold text-start">
          {course_name}
        </h2>
      </div>
      <div className="flex items-center justify-between">
        <p className="font-sans text-sm font-medium text-yellow-600">
          Enrollments: {enrollments}
        </p>
        <p className="font-sans text-sm font-medium text-slate-500">
          Level: {level}
        </p>
      </div>
      <Text size="sm" color="dimmed">
        {description}
      </Text>
      <div className="flex items-center justify-between">
        <p className="font-sans text-sm font-medium text-slate-400">
          Author: {author_name}
        </p>
        <p className="font-sans text-sm text-red-600 rounded-sm p-1 font-medium ">
          Rating: {rating}*
        </p>
      </div>
      <Link to={`/courses/${id}`} className="no-underline">
        <Button variant="light" color="blue" fullWidth mt="md" radius="md">
          Show Details
        </Button>
      </Link>
    </Card>
  );
};

export default AllCourse;
