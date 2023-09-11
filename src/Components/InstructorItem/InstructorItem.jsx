/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import {
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  Title,
  Divider,
  Paper,
  Box,
  Rating,
} from "@mantine/core";
import {
  BiLogoFacebookCircle,
  BiLogoTwitter,
  BiLogoLinkedinSquare,
  BiGitRepoForked,
  BiSolidStar,
} from "react-icons/bi";
import { PiMonitorPlayFill } from "react-icons/pi";
import { Link } from "react-router-dom";

const InstructorItem = ({ instructor }) => {
  console.log(instructor);
  const { image, name, specialty, rating, total_courses, course_name } =
    instructor;
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Group position="center">
        <Image src={image} height={120} width={120} alt="instructor" />
      </Group>

      <Group position="center" mt="xs" mb="xs">
        <Title order={4} weight={700}>
          {name}
        </Title>
      </Group>
      <Group position="center" mt="xs" mb="sm">
        <Title order={5} weight={400} className="text-gray-400">
          {course_name}
        </Title>
      </Group>
      <Group spacing="xs" position="center" mt="xs" mb="sm">
        <Button variant="outline" size="xs">
          <BiLogoFacebookCircle />
        </Button>
        <Button variant="outline" size="xs">
          <BiLogoTwitter />
        </Button>
        <Button variant="outline" size="xs">
          <BiLogoLinkedinSquare />
        </Button>
        <Button variant="outline" size="xs">
          <BiGitRepoForked />
        </Button>
      </Group>
      <Divider my="md" className="w-full" />
      <Group position="apart" className="">
        <Paper className="flex items-center space-x-1 text-[14px] text-gray-500">
          <Rating defaultValue={2} count={1} />
          <span>{rating}</span>
          <span>(54K+)</span>
        </Paper>
        <Paper className="flex items-center space-x-1 text-[14px] text-gray-500">
          <PiMonitorPlayFill className="text-[18px] text-blue-300-400 " />
          <span>{total_courses}</span>
          <Link to="/course" className="no-underline">
            {" "}
            Courses
          </Link>
        </Paper>
      </Group>
    </Card>
  );
};

export default InstructorItem;
