/* eslint-disable no-unused-vars */
import { ActionIcon, Group, Header, Text } from "@mantine/core";
import React from "react";
import { PiTwitterLogoLight } from "react-icons/pi";
import { FaFacebookF, FaMailBulk } from "react-icons/fa";
import { AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import { MdWifiCalling } from "react-icons/md";
import { GoLocation } from "react-icons/go";

const TopBar = () => {
  return (
    <Header className="hidden sm:flex items-center flex-wrap justify-between px-8 py-2 ">
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2 hover:text-blue-800 cursor-pointer ">
          <MdWifiCalling size="1.1rem" className="text-blue-700" />
          <span className="fw-[600] text-[14px]">01759539770</span>
        </div>
        <div className="flex items-center gap-2 hover:text-blue-800 cursor-pointer">
          <FaMailBulk size="1.1rem" className="text-blue-700" />
          <span className="fw-[600] text-[14px]">mail@gmail.com</span>
        </div>
        <div className="flex items-center gap-2 hover:text-blue-800 cursor-pointer">
          <GoLocation size="1.1rem" className="text-blue-700" />
          <span className="fw-[600] text-[14px]">Mirpur,dhaka</span>
        </div>
      </div>
      <Group>
        <ActionIcon size="lg">
          <FaFacebookF size="1.3rem" stroke={1.5} />
        </ActionIcon>
        <ActionIcon size="lg">
          <PiTwitterLogoLight size="1.3rem" stroke={1.5} />
        </ActionIcon>
        <ActionIcon size="lg">
          <AiFillLinkedin size="1.3rem" stroke={1.5} />
        </ActionIcon>
        <ActionIcon size="lg">
          <AiFillInstagram size="1.3rem" stroke={1.5} />
        </ActionIcon>
      </Group>
    </Header>
  );
};

export default TopBar;
