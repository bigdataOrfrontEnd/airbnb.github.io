import React from "react";
import { useRoutes } from "react-router-dom";
import { connect } from "react-redux";
import routers from "./router/router";
import { incrementByAmount } from "@/store/modules/home";
function App(props) {
  return (
    <div>
      {useRoutes(routers)}
      {props.num}
      <button
        onClick={(e) => {
          props.addNumber(1);
        }}
      >
        +1
      </button>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    num: state.home.value,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addNumber: (num) => dispatch(incrementByAmount(num)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
