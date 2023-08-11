import PropTypes from "prop-types";
import React, { memo } from "react";
import { TabsWrapper } from "./style";

const TabButton = memo((props) => {
  const { destAddress } = props;
  console.log(destAddress);
  return <TabsWrapper>TabButton</TabsWrapper>;
});

TabButton.propTypes = {
  destAddress: PropTypes.array,
};

export default TabButton;
