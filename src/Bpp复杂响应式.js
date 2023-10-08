import React, { useEffect, useState } from "react";
import BppTable from "./BppTable";
import _ from "lodash";
import { Responsive, WidthProvider } from "react-grid-layout";
import { BppWarrper } from "./styleBpp";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { Layout } from "antd";
const ResponsiveReactGridLayout = WidthProvider(Responsive);
export default function Bpp() {
  const [layouts, setLayouts] = useState({ lg: [] });
  useEffect(() => {
    setLayouts({ lg: generateLayout(["se"]) });
  }, []);
  //页面渲染使用的方法
  //TODO:不使用lodash怎么去实现
  const generateDom = () => {
    return layouts.lg.map((l, i) => (
      <div key={i} className={l.static ? "static" : ""}>
        <div className="item"></div>
        {l.static ? "" : <BppTable />}
      </div>
    ));
  };
  const { Content, Sider } = Layout;
  return (
    <BppWarrper>
      <Layout>
        <Content>
          <ResponsiveReactGridLayout layouts={layouts}>
            {generateDom()}
          </ResponsiveReactGridLayout>
        </Content>
        <Sider>
          <div className="menu">menu</div>
        </Sider>
      </Layout>
    </BppWarrper>
  );
  //产生布局参数
  function generateLayout(resizeHandles) {
    return _.map(_.range(0, 25), function (i) {
      const y = Math.ceil(Math.random() * 4) + 1;
      return {
        x: Math.round(Math.random() * 5) * 2,
        y: Math.floor(i / 6) * y,
        w: 2,
        h: y,
        i: i.toString(),
        static: Math.random() < 0.05,
        resizeHandles,
      };
    });
  }
}
