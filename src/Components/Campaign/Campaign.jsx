/* eslint-disable no-unused-vars */
import { Box, Button, Container, Image } from "@mantine/core";
import React from "react";
import educationShape from "../../assets/image/education-shape-06.png";
import education1 from "../../assets/image/education1.png";

const Campaign = () => {
  return (
    <Container className="my-10 container">
      <Image
        src={educationShape}
        width={150}
        className="mb-[-7rem] ml-[-5rem] lg:block hidden"
      />
      <Box className="grid lg:grid-cols-2 grid-cols-1 gap-3 mt-5">
        <div className="lg:ml-4">
          <Image src={education1} width={300} height={342} />
        </div>
        <div>
          <h2 className="text-4xl font-serif font-bold lg:leading-normal ">
            Transform Your Life <br /> Through Education
          </h2>
          <p className="text-[#575757] font-normal leading-7 text-base mt-5 font-serif text-justify">
            Helping employees gain skills and providing career development often
            take a back seat to business priorities but workplace.
          </p>
          <Button
            size="md"
            variant="gradient"
            gradient={{ from: "indigo", to: "cyan" }}
            className="mt-10"
          >
            Watch How To Start
          </Button>
        </div>
      </Box>
    </Container>
  );
};

export default Campaign;
