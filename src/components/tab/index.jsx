import PropTypes from "prop-types";
import React, { memo, useState } from "react";
import { TabsWrapper } from "./style";

const TabButton = memo((props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { destAddress, tabClick } = props;
  const itemClickHandle = (index, item) => {
    setCurrentIndex(index);
    tabClick(item);
  };
  return (
    <TabsWrapper>
      {destAddress?.map((item, index) => {
        return (
          <div
            className={`itemm ${index === currentIndex ? "active" : " "}`}
            key={index}
            onClick={(e) => itemClickHandle(index, item.name)}
          >
            {item.name}
          </div>
        );
      })}
    </TabsWrapper>
  );
});

TabButton.propTypes = {
  destAddress: PropTypes.array,
};

export default TabButton;
