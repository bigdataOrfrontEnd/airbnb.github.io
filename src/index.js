import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "@/store/index";
import "assets/css/index.less";
import { App } from "@/App";

import { ThemeProvider } from "styled-components";
import theme from "./assets/theme";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  //   <Suspense fallback="loading"> </Suspense>
  <Provider store={store}>
    {/* 这个就是把我们写的主题给传递给组件了 */}
    <ThemeProvider theme={theme}>
      <BrowserRouter>{<App />}</BrowserRouter>
    </ThemeProvider>
  </Provider>
);
