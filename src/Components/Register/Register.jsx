/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import {
  TextInput,
  PasswordInput,
  Checkbox,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
} from "@mantine/core";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleCreateUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);
    createUser(email, password)
      .then((result) => {
        const signUpUser = result.user;
        console.log(signUpUser);
        toast("User Create Successfully");
        navigate("/login");
      })
      .catch((error) => {
        console.log(error.message);
      });
    form.reset();
  };
  return (
    <Container size={420} my={40}>
      <Title
        align="center"
        sx={(theme) => ({
          fontFamily: `Greycliff CF, ${theme.fontFamily}`,
          fontWeight: 900,
        })}
      >
        Welcome back!
      </Title>
      <form onSubmit={handleCreateUser}>
        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <Text color="dark" size="md" align="left" my={5}>
            Create Account
          </Text>
          <TextInput
            label="Name"
            name="name"
            placeholder="Enter Your Name"
            required
            mt="md"
          />
          <TextInput
            label="Email"
            name="email"
            type="email"
            placeholder="you@mantine.dev"
            required
            mt="md"
          />
          <PasswordInput
            label="Password"
            placeholder="Your password"
            required
            mt="md"
            name="password"
          />
          <Group position="start" mt="lg">
            <Checkbox label="Term and Condition" />
          </Group>
          <Button type="submit" fullWidth mt="xl">
            Register
          </Button>
          <Text color="dimmed" size="sm" align="center" mt={5}>
            All Ready Have an account ?{" "}
            <Link to="/login" size="sm" component="button">
              Login
            </Link>
          </Text>
        </Paper>
      </form>
    </Container>
  );
};

export default Register;
