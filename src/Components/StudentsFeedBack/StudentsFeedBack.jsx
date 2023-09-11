/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Group, Paper, Rating, Slider, Text, Title } from "@mantine/core";
import React from "react";

const StudentsFeedBack = ({ singleCourse }) => {
  const { rating } = singleCourse;
  return (
    <Paper className="p-5 shadow-sm bg-slate-100/20 my-10">
      <Title order={3} className="font-sans text-2xl mb-4 text-slate-800">
        Student Feedback
      </Title>
      <div className="lg:flex gap-8 space-y-7 lg:space-y-0">
        <Paper className=" shadow-md p-4 text-center max-h-[180px]">
          <Title className="text-[50px] text-center text-yellow-400">
            {rating}
          </Title>
          <Group position="center">
            <Rating value={3.5} fractions={2} readOnly className="mb-2" />
          </Group>

          <Text className="text-blue-500">5785 Rating</Text>
        </Paper>
        <Paper className=" w-full p-2 space-y-7">
          <div className="flex items-center gap-4">
            <Rating value={rating} fractions={2} readOnly />{" "}
            <Slider
              labelAlwaysOn
              className="w-full"
              defaultValue={90}
              color="indigo"
              size="sm"
            />
            {/* <span className="text-[12px] text-gray-400">95%</span> */}
          </div>
          <div className="flex items-center gap-4">
            <Rating value={4.5} fractions={2} readOnly />{" "}
            <Slider
              labelAlwaysOn
              className="w-full"
              defaultValue={70}
              color="indigo"
              size="sm"
            />
            {/* <span className="text-[12px] text-gray-400">70%</span> */}
          </div>
          <div className="flex items-center gap-4">
            <Rating value={4} fractions={2} readOnly />{" "}
            <Slider
              labelAlwaysOn
              className="w-full"
              defaultValue={65}
              color="indigo"
              size="sm"
            />
            {/* <span className="text-[12px] text-gray-400">65%</span> */}
          </div>
          <div className="flex items-center gap-4">
            <Rating value={3.9} fractions={2} readOnly />{" "}
            <Slider
              labelAlwaysOn
              className="w-full"
              defaultValue={60}
              color="indigo"
              size="sm"
            />
            {/* <span className="text-[12px] text-gray-400">60%</span> */}
          </div>
          <div className="flex items-center gap-4">
            <Rating value={3.5} fractions={2} readOnly />{" "}
            <Slider
              labelAlwaysOn
              className="w-full"
              defaultValue={50}
              color="indigo"
              size="sm"
            />{" "}
            {/* <span className="text-[12px] text-gray-400">50%</span> */}
          </div>
        </Paper>
      </div>
    </Paper>
  );
};

export default StudentsFeedBack;
