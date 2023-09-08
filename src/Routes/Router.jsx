import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import Root from "../Components/LayOut/Root";
import Contact from "../Components/Contact/Contact";
import Course from "../Components/Course/Course";
import CourseDetails from "../Components/CourseDetails/CourseDetails";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "course",
        element: <Course />,
        loader: () => fetch("course.json"),
      },
      {
        path: "courses/:courseId",
        element: <CourseDetails />,
        loader: () => fetch("course.json"),
      },
    ],
  },
]);
export default router;
