import React from "react";
import { Select } from "antd";
export default function Selectdemo() {
  const handleChange = (value) => {
    console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
  };
  const proData = [
    {
      value: "jack",
      label: "Jack (100)",
    },
    {
      value: "lucy",
      label: "Lucy (101)",
    },
  ];
  return (
    <div>
      <Select
        placeholder="请选择产品组"
        style={{
          width: 120,
        }}
        onChange={handleChange}
        options={proData}
      />
    </div>
  );
}
