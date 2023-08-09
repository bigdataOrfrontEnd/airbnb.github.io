import React, { memo } from "react";
import { NavLink } from "react-router-dom";
const Content = memo((props) => {
  const { item } = props;
  return (
    <div className="conater">
      <h2>
        <NavLink>{item.name}</NavLink>
      </h2>
      {item.list.map((item, index) => {
        return (
          <p key={index}>
            <NavLink>{item}</NavLink>
          </p>
        );
      })}
    </div>
  );
});

export default Content;
