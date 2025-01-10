import {
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout/MainLayout";
import Error from "../Shared/Error/Error";
import Home from "../Pages/Home/Home";
import ProjectCreate from "../Pages/ProjectCreate/ProjectCreate";

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
        path: '/project-create',
        element: <ProjectCreate></ProjectCreate>
      }
    ]
  },
]);

export default Router;