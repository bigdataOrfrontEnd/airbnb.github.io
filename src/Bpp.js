import { Select } from "antd";
import React, { useState } from "react";

export default function Bpp() {
  const debounceFetcherl = () => {};
  const [serviceId, setServiceId] = useState([]);
  const [Idoptions, setIdoptions] = useState([
    // { label: "1", value: "1" },
    // { label: "2", value: "2" },
    // { label: "3", value: "3" },
    // { label: "4", value: "4" },
  ]);
  const changeServivel = (value) => {
    setServiceId(value);
  };
  return (
    <div>
      <Select
        style={{ width: 130 }}
        labelInValue
        mode="multiple"
        placeholder="请选择服务单元"
        onSearch={debounceFetcherl}
        value={serviceId}
        onChange={changeServivel}
        options={Idoptions}
        showSearch={true}
        maxTagCount="responsive"
      />
    </div>
  );
}
