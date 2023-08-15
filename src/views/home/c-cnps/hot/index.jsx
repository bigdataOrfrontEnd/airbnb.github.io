import React, { memo, useEffect, useState } from "react";
import { HotWrapper } from "./style";
import TabButton from "@/components/tab";
import { Tabs } from "antd";
import SectionHeader from "@/components/section-header";
import Room from "@/components/room-item";

const Hot = memo((props) => {
  const { goodsInfo } = props;
  //dest_list 中的name
  const [name, setName] = useState("");
  const items = [];
  goodsInfo?.dest_address?.map((item, index) => {
    return items.push({
      key: index,
      label: item.name,
    });
  });
  const onChange = (key) => {
    setName(goodsInfo.dest_address[key].name);
  };
  useEffect(() => {
    const name = Object.keys(goodsInfo.dest_list ?? {})[0];
    setName(name);
  }, [goodsInfo.dest_list]);
  const tabClickHandle = (name) => {
    setName(name);
  };
  return (
    <HotWrapper>
      <SectionHeader title={goodsInfo.title} subTitle={goodsInfo.subtitle} />
      <div className="tab">
        <TabButton
          destAddress={goodsInfo.dest_address}
          tabClick={tabClickHandle}
        />
        <Tabs
          defaultActiveKey="1"
          tabBarGutter={30}
          items={items}
          onChange={onChange}
        />
      </div>
      <div className="inner">
        {goodsInfo?.dest_list?.[name]?.map((item, index) => {
          return <Room roomData={item} key={index} />;
        })}
      </div>
    </HotWrapper>
  );
});

export default Hot;
