import React from "react";

import { SiderWrapper } from "./style";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";

export default function Sider(props) {
  const { router, items } = props;
  const navigator = useNavigate();
  const onClick = (e) => {
    navigator(e.key);
    router(e);
  };
  return (
    <SiderWrapper>
      <Menu onClick={onClick} mode="inline" items={items} />
    </SiderWrapper>
  );
}
