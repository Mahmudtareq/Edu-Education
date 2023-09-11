/* eslint-disable no-unused-vars */
import {
  BackgroundImage,
  Box,
  Center,
  Checkbox,
  Container,
  Grid,
  Paper,
  Text,
  Title,
} from "@mantine/core";
import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import AllCourse from "../AllCourse/AllCourse";
import HeaderImage from "../HeaderImage/HeaderImage";

const Course = () => {
  const course = useLoaderData();

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [uniqueCategories, setUniqueCategories] = useState([]);
  const [categoryCounts, setCategoryCounts] = useState({});
  const [filteredCourses, setFilteredCourses] = useState([]);
  useEffect(() => {
    // find categories data
    const categories = course.map((item) => item.course_category);
    setUniqueCategories([...new Set(categories)]);

    // Calculate category counts
    const counts = {};
    categories.forEach((category) => {
      counts[category] = (counts[category] || 0) + 1;
    });
    setCategoryCounts(counts);
  }, [course]);

  const handleCategoryChange = (event) => {
    const { value } = event.target;

    setSelectedCategories((prevSelectedCategories) => {
      if (prevSelectedCategories.includes(value)) {
        return prevSelectedCategories.filter((category) => category !== value);
      } else {
        return [...prevSelectedCategories, value];
      }
    });
  };
  useEffect(() => {
    // Filter the courses based on selected categories
    if (selectedCategories.length === 0) {
      // No categories selected, show all courses
      setFilteredCourses(course);
    } else {
      // Filter courses based on selected categories
      const filtered = course.filter((item) =>
        selectedCategories.includes(item.course_category)
      );
      setFilteredCourses(filtered);
    }
  }, [selectedCategories, course]);

  return (
    <Box>
      <HeaderImage />
      <Container className="mt-20 mb-8">
        <Grid>
          <Grid.Col xs={3}>
            <Paper className=" shadow-md rounded p-2 mb-3">
              <Title order={5} className="mb-2 font-sans">
                Categories
              </Title>
              <div className="p-3">
                {uniqueCategories.map((category) => (
                  <Checkbox
                    key={category}
                    label={`${category} (${categoryCounts[category] || 0})`}
                    value={category}
                    checked={selectedCategories.includes(category)}
                    onChange={handleCategoryChange}
                    className="mb-2"
                  />
                ))}
              </div>
            </Paper>
          </Grid.Col>
          <Grid.Col xs={9}>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
              {filteredCourses.map((item) => (
                <AllCourse item={item} key={item.id} />
              ))}
            </div>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
};

export default Course;
