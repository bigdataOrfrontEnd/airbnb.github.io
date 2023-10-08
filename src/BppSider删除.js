import React, { useState } from "react";
import { Layout } from "antd";
const { Sider, Content } = Layout;
export default function Bpp() {
  const [collapsed, setCollapsed] = useState(true);
  const [isShow, setIsShow] = useState(true);
  return (
    <Layout>
      <Content>Content</Content>
      <div>
        <button
          onClick={() => {
            setIsShow(!isShow);
          }}
        >
          显示
        </button>
      </div>
      <Sider
      // onCollapse={(value) => setCollapsed(value)}
      >
        <div style={{ display: isShow ? "block" : "none" }}>
          <div style={{ color: "white" }}>111</div>
          <div style={{ color: "white" }}>222</div>
          <div style={{ color: "white" }}>333</div>
        </div>
      </Sider>
    </Layout>
  );
}
