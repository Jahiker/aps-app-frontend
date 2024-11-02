import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import { ViewerPage } from "../pages/ViewerPage";

const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Root = lazy(() => import("../layout/root"));

const Login = lazy(() => import("../pages/Login"));
const Register = lazy(() => import("../pages/Register"));


export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<h1>Loading...</h1>}>
        <Root />
      </Suspense>
    ),
    errorElement: <h1>Error</h1>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/viewer",
        element: <ViewerPage />,
      },
    ],
  },
  {
    path: "/about",
    element: <About />,
  },
]);
