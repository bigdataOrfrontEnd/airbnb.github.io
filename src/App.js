import React from "react";
import { useRoutes } from "react-router-dom";
import routers from "./router/router";
export default function App() {
  return <div>{useRoutes(routers)}</div>;
}
