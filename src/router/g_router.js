import React from "react";
import { Navigate } from "react-router-dom";
import Home from "@/views/pages/home";
import Login from "@/views/pages/login";
import Sign from "@/views/pages/sign";
import AllData from "@/views/pages/AllData";
import ArticleList from "@/views/pages/ArticleList";
const routers = [
  {
    path: "/vue",
    element: <Navigate to="/vue/home/allData" />,
  },
  {
    path: "/vue/home",
    element: <Home />,
    //子路由
    children: [
      { path: "allData", element: <AllData /> },
      { path: "article", element: <ArticleList /> },
      { path: "sign", element: <Sign /> },
    ],
  },
  {
    path: "/vue/login",
    element: <Login />,
  },
];
export default routers;
