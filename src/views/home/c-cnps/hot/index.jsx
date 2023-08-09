import React, { memo } from "react";
import { HotWrapper } from "./style";
import TabButton from "@/components/tab";
import SectionHeader from "@/components/section-header";
const Hot = memo((props) => {
  const { goodsInfo } = props;
  return (
    <HotWrapper>
      <SectionHeader title={goodsInfo.title} subTitle={goodsInfo.subtitle} />
      <div className="tab">
        {}
        <TabButton />
      </div>
    </HotWrapper>
  );
});

export default Hot;
