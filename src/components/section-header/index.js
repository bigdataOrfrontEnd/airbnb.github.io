import PropTypes from "prop-types";
import React, { memo } from "react";
import { HeaderWrapper } from "./style";

const SectionHeader = memo((props) => {
  const { title, subTitle } = props;
  return (
    <HeaderWrapper>
      <div className="title">{title}</div>
      {subTitle && <h2 className="subtitle">{subTitle}</h2>}
    </HeaderWrapper>
  );
});

//对传递过来的数据进行类型校验
SectionHeader.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
};

export default SectionHeader;
