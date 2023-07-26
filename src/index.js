import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "@/store/index";
import "assets/css/index.less";
import App from "@/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //   <Suspense fallback="loading"> </Suspense>
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
