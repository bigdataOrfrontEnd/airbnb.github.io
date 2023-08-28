import React, { useLayoutEffect, useRef, useState } from "react";
import { Table, Button } from "antd";
import { DemoWrapper } from "./style";
import Models from "./Models";

export default function Demo() {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]); //table表格复选框勾选的值
  const [isModalOpen, setIsModalOpen] = useState(false); //mode框的开关
  const [selectData, setSelectData] = useState([]); //存放勾选的数据
  const ws = useRef(null);
  const [message, setMessage] = useState("");
  useLayoutEffect(() => {
    ws.current = new WebSocket("ws://localhost:3002");
    ws.current.onopen = function () {
      console.log("链接成功");
      ws.current.send(1111);
    };
    ws.current.onmessage = function (event) {
      console.log("接收到服务端消息" + event.data);
      setMessage(event.data);
    };
  }, [ws]);
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
    setSelectedRowKeys([]);
    setIsModalOpen(z);
  };
  const dd = (dd) => {
    const d = data;
    const Data = d.filter((v) => {
      return selectedRowKeys.indexOf(v.key) > -1;
    });
    Data.forEach((item) => {
      item.age = dd[item.name];
    });
    console.log("11", Data);
  };
  return (
    <DemoWrapper>
      <Table columns={columns} dataSource={data} rowSelection={rowSelection} />
      <Button onClick={showModal}>出来弹框</Button>
      <Models isModalOpen={isModalOpen} z={z} selectData={selectData} dd={dd} />
      <div>{message}</div>
    </DemoWrapper>
  );
}
