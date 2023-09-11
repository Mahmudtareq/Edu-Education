/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Card, Image, Button, Text, Rating } from "@mantine/core";
import { Link } from "react-router-dom";
import { BiSolidUser } from "react-icons/bi";

const AllCourse = ({ item }) => {
  const { image, course_name, author_name, rating, price, total_videos, id } =
    item || "";
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section className="hover:transition duration-700 hover:ease-in-out cursor-pointer">
        <Image src={image} height={160} alt="Norway" />
      </Card.Section>
      <div className="flex items-center justify-between my-3">
        <Text className="font-sans text-sm font-medium text-slate-500">
          Lessons :{total_videos}
        </Text>
        <Text className="font-sans text-sm font-medium text-red-800">
          ${price}
        </Text>
      </div>
      <Text className="font-serif text-base font-semibold p-0 m-0">
        {course_name}
      </Text>
      <Text className="my-2 font-sans text-sm flex items-center font-medium text-slate-400">
        <BiSolidUser className="text-xl me-2 ms-0" /> {author_name}
      </Text>
      <Text className="my-2 flex items-center">
        <Rating value={rating} fractions={2} readOnly />{" "}
        <span className="ms-2 text-blue-800 text-[14px]">(20)</span>
      </Text>

      <Link to={`/courses/${id}`} className="no-underline">
        <Button variant="light" color="blue" fullWidth mt="md" radius="md">
          Show Details
        </Button>
      </Link>
    </Card>
  );
};

export default AllCourse;
