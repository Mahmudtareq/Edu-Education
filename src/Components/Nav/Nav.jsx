/* eslint-disable no-unused-vars */
import {
  Anchor,
  Burger,
  Button,
  Group,
  Header,
  Image,
  Loader,
  Paper,
  Transition,
  createStyles,
  rem,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const links = [
  {
    link: "/contact",
    label: "Contact",
  },
  {
    link: "course",
    label: "Course",
  },
  {
    link: "learn",
    label: "Learn",
  },
  {
    link: "community",
    label: "Community",
  },
];
import logo from "../../assets/image/logo.png";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";

const HEADER_HEIGHT = rem(60);
const useStyles = createStyles((theme) => ({
  root: {
    position: "relative",
    zIndex: 1,
  },

  dropdown: {
    position: "absolute",
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: "hidden",

    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
    paddingRight: "2%",
    paddingLeft: "2%",
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },

    [theme.fn.smallerThan("sm")]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },

  linkActive: {
    "&, &:hover": {
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
        .color,
    },
  },
}));
const Nav = () => {
  const { user, logOut, loading } = useContext(AuthContext);
  const [opened, { toggle, close }] = useDisclosure(false);
  const navigate = useNavigate();
  const { classes, cx } = useStyles();
  // const items = links.map((item) => (
  //   <Link
  //     className="block line-height-1 rounded theme-font-size-sm font-semibold text-theme-color"
  //     to={item.link}
  //     key={item.label}
  //   >
  //     {item.label}
  //   </Link>
  // ));

  const items = links.map((link) => (
    <Link
      key={link.label}
      to={link.link}
      className={classes.link}
      // onClick={(event) => {
      //   event.preventDefault();
      //   setActive(link.link);
      //   close();
      // }}
    >
      {link.label}
    </Link>
  ));
  if (loading) {
    <Loader />;
  }
  const handleLogOut = () => {
    logOut()
      .then((result) => {
        toast("Logout Successfully");
        navigate("/login");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <Header height={HEADER_HEIGHT} className={classes.root}>
      <div className={classes.header}>
        <Link to="/">
          <Image src={logo} width={120} height={25} />
        </Link>
        <Group spacing={5} className={classes.links}>
          {items}
        </Group>
        <Burger
          opened={opened}
          onClick={toggle}
          className={classes.burger}
          size="sm"
        />
        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              {items}
            </Paper>
          )}
        </Transition>
        <Group>
          {user ? (
            <Button color="pink" onClick={handleLogOut}>
              Sign Out
            </Button>
          ) : (
            <Button>
              <Link to="/login" className="no-underline text-white">
                Login
              </Link>
            </Button>
          )}
        </Group>
        {/* <Button>
          <Link to="/login" className="no-underline text-white">
            Login
          </Link>
        </Button> */}
      </div>
    </Header>
  );
};

export default Nav;
