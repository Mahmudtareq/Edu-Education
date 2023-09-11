/* eslint-disable no-unused-vars */
import { BackgroundImage, Text, Title } from "@mantine/core";
import React from "react";
import courseSlider from "../../assets/image/course-slider.png";

const HeaderImage = () => {
  return (
    <BackgroundImage
      src={courseSlider}
      className="w-full lg:h-[300px] h-[250px]  bg-cover bg-no-repeat bg-center"
    >
      <div className="py-20 px-16 text-black ">
        <Title className="text-[40px] text-fuchsia-500">Courses</Title>
        <Text>Home</Text>
      </div>
    </BackgroundImage>
  );
};

export default HeaderImage;
