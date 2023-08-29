import React, { useState } from "react";
import { useLocation } from "react-router";
import Breadcrum from "./c-cnps/breadcrumb";
import { HomeWarrper } from "./style";
import Sider from "./c-cnps/Sider";
import Header from "./c-cnps/Header";
import Content from "./c-cnps/Content";
export default function Home() {
  // 左侧导航
  const items = [
    {
      key: "/vue/home/allData",
      label: "数据概览",
    },
    {
      key: "/vue/home/article",
      label: "内容管理",
    },
    {
      key: "/vue/home/sign",
      label: "发布文章",
    },
  ];
  const location = useLocation();
  const [breadcrumb, setBreadcrumb] = useState(location.pathname);

  const router = (router) => {
    setBreadcrumb(router.key);
  };

  return (
    <HomeWarrper>
      <Sider router={router} items={items} />
      <div className="right">
        <Header />
        <Breadcrum breadcrumb={breadcrumb} />
        <Content />
      </div>
    </HomeWarrper>
  );
}
