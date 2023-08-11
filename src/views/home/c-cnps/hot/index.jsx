import React, { memo } from "react";
import { HotWrapper } from "./style";
import TabButton from "@/components/tab";
import SectionHeader from "@/components/section-header";
import Room from "@/components/room-item";

const Hot = memo((props) => {
  const { goodsInfo } = props;
  return (
    <HotWrapper>
      <SectionHeader title={goodsInfo.title} subTitle={goodsInfo.subtitle} />
      <div className="tab">
        <TabButton destAddress={goodsInfo.dest_address} />
      </div>
      <div className="inner">
        {goodsInfo?.dest_list?.["佛山"].map((item, index) => {
          return <Room roomData={item} key={index} />;
        })}
      </div>
    </HotWrapper>
  );
});

export default Hot;
