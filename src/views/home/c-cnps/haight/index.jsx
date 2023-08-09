import Room from "@/components/room-item";
import SectionHeader from "@/components/section-header";
import React, { memo } from "react";
import { HiaghtPriceWrapper } from "./style";

const HiaghtPrice = memo((props) => {
  const { goodsInfo } = props;
  return (
    <HiaghtPriceWrapper>
      <SectionHeader title={goodsInfo.title} />
      <div className="inner">
        {goodsInfo?.list?.map((item, index) => {
          return <Room item={item} key={index} />;
        })}
      </div>
    </HiaghtPriceWrapper>
  );
});

export default HiaghtPrice;
