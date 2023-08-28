import React from "react";
import { useRoutes } from "react-router-dom";
import routers from "./router/g_router";

export function Bpp() {
  //拿到路由表
  const Router = useRoutes(routers);

  return <div>{Router}</div>;
}
