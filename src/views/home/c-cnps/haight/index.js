import SectionHeader from "@/components/section-header";
import React, { memo } from "react";
import { HiaghtPriceWrapper } from "./style";

const HiaghtPrice = memo((props) => {
  const { goodsInfo } = props;
  return (
    <HiaghtPriceWrapper>
      <SectionHeader title={goodsInfo.title} />
      {goodsInfo?.list?.map((item) => {
        return (
          <div className="item" key={item.id}>
            <img className="ImageDiv" src={item.picture_url} alt="" />

            <div>
              {item.verify_info.messages.map((item2) => (
                <span key={item2}>{item2}</span>
              ))}
            </div>
            <h1>{item.name}</h1>
            <div>{item.price_format}/晚</div>
            <div>
              {item.reviews_count}*{item?.bottom_info?.content}
            </div>
          </div>
        );
      })}
    </HiaghtPriceWrapper>
  );
});

export default HiaghtPrice;
