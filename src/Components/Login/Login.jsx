/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
  Divider,
  Box,
} from "@mantine/core";
import {
  FacebookLoginButton,
  GoogleLoginButton,
} from "react-social-login-buttons";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {
  const { user, signInUser, signInWithGoogle } = useContext(AuthContext);
  console.log(user);
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signInUser(email, password)
      .then((result) => {
        const loginInUser = result.user;
        console.log(loginInUser);
        toast("User Login Successfully");
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
    form.reset();
  };
  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        const googleSignIn = result.user;
        console.log(googleSignIn);
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
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
      <form onSubmit={handleLogin}>
        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <Text color="dark" size="md" align="left" my={5}>
            Please Login
          </Text>
          <TextInput
            label="Email"
            name="email"
            placeholder="you@mantine.dev"
            required
          />
          <PasswordInput
            label="Password"
            placeholder="Your password"
            required
            mt="md"
            name="password"
          />
          <Group position="apart" mt="lg">
            <Checkbox label="Remember me" />
            <Anchor component="button" size="sm">
              Forgot password?
            </Anchor>
          </Group>
          <Button type="submit" fullWidth mt="xl">
            Sign in
          </Button>
          <Text color="dimmed" size="sm" align="center" mt={7}>
            Do not have an account yet?{" "}
            <Link to="/register" size="sm" component="button">
              Create account
            </Link>
          </Text>
          <Divider
            label="Or continue Social Media"
            labelPosition="center"
            my="lg"
          />
          <Box className="lg:flex items-center space-y-10 lg:space-y-0">
            <GoogleLoginButton onClick={handleGoogleLogin}>
              Google
            </GoogleLoginButton>
            <FacebookLoginButton>Facebook</FacebookLoginButton>
          </Box>
        </Paper>
      </form>
    </Container>
  );
};

export default Login;
