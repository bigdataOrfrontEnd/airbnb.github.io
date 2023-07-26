import React from "react";
import { useRoutes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import routers from "./router/router";
import { incrementByAmount } from "@/store/modules/home";
export default function App() {
  const cout = useSelector((state) => state.home.value);
  const couteee = useSelector((state) => state.home.countt);
  const dispatch = useDispatch();

  return (
    <div>
      {useRoutes(routers)}
      {cout}
      {couteee}
      <button onClick={(e) => dispatch(incrementByAmount(1))}>+1</button>
    </div>
  );
}
