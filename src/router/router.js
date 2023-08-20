import React from "react";
import { Navigate } from "react-router-dom";
import Demo from "@/views/demo/yyy";
// import { store } from "@/store";
const Detail = React.lazy(() => import("@/views/detail"));
const Entire = React.lazy(() => import("@/views/entire"));
const Home = React.lazy(() => import("@/views/home"));
const NotFund = React.lazy(() => import("@/views/notFound"));

// store.subscribe(() => {
//   console.log(store.getState());
// });
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
    path: "/demo",
    element: <Demo />,
  },
  {
    path: "*",
    element: <NotFund />,
  },
];

export default routers;
