/* eslint-disable no-unused-vars */
import { Button, Checkbox, Container, Grid, Image } from "@mantine/core";
import React from "react";
import student from "../../assets/image/student.png";
import bgShape1 from "../../assets/image/education-shape-06.png";
import bgShape2 from "../../assets/image/slider-shape-6.png";

const StudentsChoice = () => {
  return (
    <Container className="my-10">
      <div className="grid lg:grid-cols-2 gap-5">
        <div className="">
          <h2 className="lg:text-3xl text-2xl font-serif font-bold lg:leading-normal text-start ">
            Why Students Choose Us for Gain Their Knowledge
          </h2>
          <p className="font-sans font-normal text-slate-400 text-justify text-lg my-6">
            Helping employees gain skills and providing career development often
            take a back seat to business priorities but workplace better right
            now. Seventy percent of workers think that.
          </p>
          <div className="space-y-5">
            <Checkbox
              label="Free for physically handcraft"
              color="gray"
              radius="md"
              size="md"
              checked
              classNames={{ label: "text-slate-400 font-sans text-base" }}
            />
            <Checkbox
              label="Easy to enroll courses"
              color="gray"
              radius="md"
              size="md"
              checked
              classNames={{ label: "text-slate-400 font-sans text-base" }}
            />
            <Checkbox
              label="Course certificate for particular course"
              color="gray"
              radius="md"
              size="md"
              checked
              classNames={{ label: "text-slate-400 font-sans text-base" }}
            />
          </div>
          <Button
            size="md"
            variant="gradient"
            gradient={{ from: "indigo", to: "cyan" }}
            className="mt-10"
          >
            More About Us
          </Button>
        </div>
        <div className="image-content lg:mt-[7rem]">
          <Grid className="gap-4">
            <Grid.Col xs={3}>
              <div className="w-[120px] h-[120px] bg-blue-600  hidden lg:block rounded-md animate-bounce skew-y-6 shadow-md ml-[300px] mt-[-50px] "></div>
              <div className="w-[120px] hidden lg:block  h-[160px] bg-yellow-300 shadow-md rounded-md"></div>
            </Grid.Col>
            <Grid.Col xs={8}>
              <Image src={student} className="w-full h-ful opacity-90" />
              <Image
                src={bgShape1}
                width={150}
                height={150}
                className="mt-[-110px] opacity-30"
              />
            </Grid.Col>
          </Grid>
        </div>
      </div>
    </Container>
  );
};

export default StudentsChoice;
