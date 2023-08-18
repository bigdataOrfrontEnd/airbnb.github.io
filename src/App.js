import React, { useEffect, useState } from "react";
import { useRoutes, useLocation } from "react-router-dom";
import { Bpp } from "./Bpp";
import Footer from "./components/app-footer";
import AppHeader from "./components/app-header";
import routers from "./router/router";

export function App() {
  const location = useLocation();
  const Routers = useRoutes(routers);
  const [show, setShow] = useState(true);
  useEffect(() => {
    if (location.pathname === "/test") {
      setShow(false);
    }
  }, [location]);
  // 这个里面主要放路由
  return (
    <>
      {show ? (
        <div>
          <AppHeader />
          <div className="page">{Routers}</div>
          <Footer />
        </div>
      ) : (
        <Bpp />
      )}
    </>
  );
}
