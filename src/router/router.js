import React from "react";
import { Navigate } from "react-router-dom";
const Detail = React.lazy(() => import("@/views/detail"));
const Entire = React.lazy(() => import("@/views/entire"));
const Home = React.lazy(() => import("@/views/home"));
const NotFund = React.lazy(() => import("@/views/notFound"));
const routers = [
  {
    path: "/",
    element: <Navigate to="/home" />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/detail",
    element: <Detail />,
  },
  {
    path: "/entire",
    element: <Entire />,
  },
  {
    path: "*",
    element: <NotFund />,
  },
];
export default routers;
