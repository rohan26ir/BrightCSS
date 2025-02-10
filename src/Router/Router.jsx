import {
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout/MainLayout";
import Error from "../Shared/Error/Error";
import Home from "../Pages/Home/Home";
import Installation from "../Pages/Installation/Installation";
import ReactJS from "../Pages/Installation/React";
import Backend from "../Pages/Installation/Backend";
import Next from "../Pages/Installation/Next";
import Npm from "../Pages/Npm/Npm";
import GitHub from "../Pages/GitHub/GitHub";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/installation",
        children: [
          {
            path: "/installation",
            element: <Installation></Installation>
          },
          {
            path: "/installation/ReactJs",
            element: <ReactJS></ReactJS>
          },
          {
            path: "/installation/Backend",
            element: <Backend></Backend>
          },
          {
            path: "/installation/Next",
            element: <Next></Next>
          },
        ]
      },
      {
        path: '/GitHub-git',
        element: <GitHub></GitHub>
      },
      {
        path: '/npmList',
        element: <Npm></Npm>
      }
    ]
  },
]);

export default Router;