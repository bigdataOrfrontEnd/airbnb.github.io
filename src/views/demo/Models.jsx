import React, { useEffect, useState } from "react";
import { Modal, Checkbox } from "antd";

export default function Models(props) {
  const { isModalOpen, z, selectData, dd } = props;

  console.log(selectData);
  const handleOk = () => {
    z(false);
  };
  const handleCancel = () => {
    z(false);
  };
  const options = [
    {
      label: "python",
      value: "python",
    },
    {
      label: "yml",
      value: "yml",
    },
    {
      label: "xml",
      value: "xml",
    },
    {
      label: "dkle",
      value: "dkle",
    },
    {
      label: "httl",
      value: "httl",
    },
  ];
  const formData = {};
  //第一个问题,没法传递给父节点,如果使用useState如何去赋值
  //第二个问题,老婆说的深拷贝什么的是不是更简单一些如何去做
  const onChange = (checkedValues, name) => {
    formData[name] = checkedValues;

    dd(formData);
  };

  useEffect(() => {});
  return (
    <Modal
      title="可修改的"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      {selectData.map((item) => {
        return (
          <div key={item.key}>
            <h2>{item.name}</h2>
            <Checkbox.Group
              options={options}
              defaultValue={item.age}
              onChange={(e) => onChange(e, item.name)}
              name={item.name}
            />
          </div>
        );
      })}
    </Modal>
  );
}
