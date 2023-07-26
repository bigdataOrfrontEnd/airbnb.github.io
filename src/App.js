import React from "react";
import { useRoutes } from "react-router-dom";
import AppHeader from "./components/app-header";

import routers from "./router/router";

export function App() {
  // 这个里面主要放路由
  return (
    <div className="app">
      <AppHeader />
      <div className="page">{useRoutes(routers)}</div>
      <div className="footer">footer</div>
    </div>
  );
}
