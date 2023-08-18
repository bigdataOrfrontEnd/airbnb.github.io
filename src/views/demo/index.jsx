import React, { useState } from "react";
import { Table, Button } from "antd";
import { DemoWrapper } from "./style";
import Models from "./Models";

export default function Demo() {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]); //table表格复选框勾选的值
  const [isModalOpen, setIsModalOpen] = useState(false); //mode框的开关
  const [selectData, setSelectData] = useState([]); //存放勾选的数据

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
    },
  ];
  const data = [
    {
      key: "1",
      name: "John Brown",
      age: "xml,dkle,httl",
      address: "New York No. 1 Lake Park",
    },
    {
      key: "2",
      name: "Jim Green",
      age: "python,yml,httl",
      address: "London No. 1 Lake Park",
    },
    {
      key: "3",
      name: "Joe Black",
      age: "python,yml,xml",
      address: "Sydney No. 1 Lake Park",
    },
    {
      key: "4",
      name: "Disabled User",
      age: "python",
      address: "Sydney No. 1 Lake Park",
    },
  ];
  //table选择框的
  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const showModal = () => {
    setIsModalOpen(true);

    const Data = data.filter((v) => {
      return selectedRowKeys.indexOf(v.key) > -1;
    });
    Data.forEach((item) => {
      item.age = item.age.split(",");
    });

    setSelectData(Data);
  };
  const z = (z) => {
    console.log("z", z);
    setIsModalOpen(z);
  };
  const dd = (dd) => {
    console.log("dd", dd);
  };
  return (
    <DemoWrapper>
      <Table columns={columns} dataSource={data} rowSelection={rowSelection} />
      <Button onClick={showModal}>出来弹框</Button>
      <Models isModalOpen={isModalOpen} z={z} selectData={selectData} dd={dd} />
    </DemoWrapper>
  );
}
