import React, { useEffect, useState } from "react";
import { Button, Table, Checkbox, Modal } from "antd";
import { BppWarrper } from "./styleBpp";
import Model1 from "@/components/model/Model1";
import Model2 from "@/components/model/Model2";
import "./test.less";
export default function BppTable() {
  const [isShowAll, setIsShowAll] = useState(false);
  const [expandRowkeys, setExpendKeys] = useState([]);
  const [showModel, setShowModel] = useState(false);
  const [activeId, setActiveId] = useState("");
  const dataSource = [
    {
      key: "1",
      productName: "杭银理财XX1产品",

      children: [
        {
          key: "5",
          accountType: "托管户",
          accountName: "杭银理财有限公司",
          balance: "50000",
          lance: "500000",
          proposed: "2023/01/01",
          coreBalance: "2023/01/01",
          operation: "详情",
        },
      ],
    },
    {
      key: "2",
      productName: "杭银理财XX1产品",

      children: [
        {
          key: "6",
          accountType: "托管户",
          accountName: "杭银理财有限公司",
          balance: "50000",
          lance: "500000",
          availableBalance: "00000",
          proposed: "2023/01/01",
          coreBalance: "2023/01/01",
          operation: "详情",
        },
      ],
    },
  ];
  const columns = [
    {
      title: "产品名称",
      dataIndex: "productName",
      key: "productName",
      fixed: "left",
    },
    {
      title: "账户类型",
      dataIndex: "accountType",
      key: "accountType",
      sorter: {
        compare: (a, b) => a.english - b.english,
        multiple: 1,
      },
    },
    {
      title: "账户名称",
      dataIndex: "accountName",
      key: "accountName",
    },
    {
      title: "可取余额(元)",
      dataIndex: "availableBalance",
      key: "availableBalance",
      render: (text, record) => {
        return <span style={{ color: "red" }}>{text}</span>;
      },
    },
    {
      title: "可用余额(元)",
      dataIndex: "balance",
      key: "balance",
    },
    {
      title: "发生余额(元)",
      dataIndex: "lance",
      key: "lance",
    },
    {
      title: "拟起息日",
      dataIndex: "proposed",
      key: "proposed",
    },
    {
      title: "核心余额",
      dataIndex: "coreBalance",
      key: "coreBalance",
    },
    {
      title: "操作",
      dataIndex: "operation",
      key: "operation",
      fixed: "right",
      render: () => {
        return (
          <Button type="primary" onClick={showDetailModel}>
            详情
          </Button>
        );
      },
    },
  ];
  const showDetailModel = () => {
    setShowModel(true);
  };

  const onExpand = (value, record) => {
    console.log(value);
    console.log(record);
    setActiveId(record.key);
  };
  const onExpandedRowsChange = (rowKeys) => {
    console.log(rowKeys);
    setExpendKeys(rowKeys);
  };
  useEffect(() => {
    if (isShowAll) {
      let arr = [];
      dataSource.forEach((item) => {
        arr.push(item.key);
      });
      setExpendKeys(arr);
    } else {
      setExpendKeys([]);
    }
  }, [isShowAll]);
  return (
    <BppWarrper>
      <div className="flee">
        <div>
          <Button
            type="primary"
            className="btn"
            onClick={() => {
              setIsShowAll(!isShowAll);
            }}
          >
            {isShowAll ? "一键关闭" : "一键展开"}
          </Button>
          <Button className="btn">核心余额接入</Button>
          <Button>柜台余额接入</Button>
        </div>
        <div className="center">
          <Checkbox.Group>
            <Checkbox value="A">差额异项</Checkbox>
            <Checkbox value="B">可取赤字项</Checkbox>
            <Checkbox value="c">可用赤字项</Checkbox>
          </Checkbox.Group>
        </div>
        <div>图标</div>
      </div>
      <Table
        dataSource={dataSource}
        columns={columns}
        expandedRowKeys={expandRowkeys}
        onExpand={onExpand}
        onExpandedRowsChange={onExpandedRowsChange}
        pagination={{
          showSizeChanger: true,
          showQuickJumper: true,
        }}
        expandable={{
          // expandedRowRender: (record) => (
          //   <p style={{ margin: 0 }}>{record.description}</p>
          // ),
          expandIcon: ({ expanded, onExpand, record }) => (
            <span
              style={{ color: "red", float: "right" }}
              onClick={(e) => {
                onExpand(record, e);
              }}
            >
              收起
            </span>
          ),
        }}
        rowClassName={(record, index) =>
          record.key === activeId ? "active" : ""
        }
      />
      <Model1 showModel={showModel} setShowModel={setShowModel} />
      <Model2 />
    </BppWarrper>
  );
}
