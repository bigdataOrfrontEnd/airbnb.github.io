import PropTypes from "prop-types";
import React, { memo, useState } from "react";
import { TabsWrapper } from "./style";
import { Checkbox } from "antd";
const TabButton = memo((props) => {
  const str = "pyhton";
  const [angyType, setAnyType] = useState(str.split(","));
  const anylysisiOpiton = [
    {
      label: "java",
      value: "java",
    },
    {
      label: "mapp",
      value: "mapper",
    },
    {
      label: "python",
      value: "pyhton",
    },
  ];
  const onChange = (checkedValues) => {
    setAnyType(checkedValues);
    console.log("checked = ", checkedValues);
  };
  const { destAddress } = props;
  console.log(destAddress);
  return (
    <TabsWrapper>
      <Checkbox.Group
        options={anylysisiOpiton}
        defaultValue={angyType}
        onChange={onChange}
      />
    </TabsWrapper>
  );
});

TabButton.propTypes = {
  destAddress: PropTypes.array,
};

export default TabButton;
