import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";

import "assets/css/index.less";
import App from "@/App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //   <Suspense fallback="loading"> </Suspense>
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
