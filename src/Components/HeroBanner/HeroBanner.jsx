/* eslint-disable no-unused-vars */
import React from "react";
import heroBanner from "../../assets/image/hero-banner-1.jpg";
import slider from "../../assets/image/slider-shape-6.png";
import shape2 from "../../assets/image/shape-04.png";
import {
  Avatar,
  Button,
  Card,
  Center,
  Container,
  Grid,
  Image,
  Paper,
  Text,
} from "@mantine/core";

const HeroBanner = () => {
  return (
    <div
      className=" bg-center bg-cover "
      style={{
        backgroundImage: `url(${heroBanner})`,
        height: "auto",
      }}
    >
      <Container>
        <Grid>
          <Grid.Col xs={6}>
            <h3 className="text-blue-800 relative font-semibold transition-opacity z-2 mt-24">
              Discover your journey
            </h3>
            <h2 className="text-4xl font-sans font-extrabold ">
              Discover <span className="text-blue-700"> 4500+</span> Courses
              from top Instructors Around the World
            </h2>
            <p className="text-lg mb-11 font-normal font-sans">
              Take your learning organization to the next level. to the next
              level. Who will share their knowledge to people around the world.
            </p>
            <Button
              size="md"
              variant="gradient"
              gradient={{ from: "indigo", to: "cyan" }}
            >
              View All Courses
            </Button>
          </Grid.Col>
          <Grid.Col xs={6}>
            <div
              className="lg:mt-[100px] w-[200px] h-[250px] relative"
              style={{
                backgroundImage: `url(${slider})`,
                height: "220px",
              }}
            >
              <Paper shadow="xl" p="md" className="rounded-md">
                <Center className="mb-5">
                  <Image
                    width={70}
                    height={70}
                    src={shape2}
                    alt="it's me"
                    className="shadow-md  rounded-full"
                  />
                </Center>
                <Text>Top Rated Instructors</Text>
              </Paper>
            </div>
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
};

export default HeroBanner;
