import React, { useState } from "react";
import { Button, Table, Checkbox } from "antd";
import { BppWarrper } from "./styleBpp";
const dataSource = [
  {
    key: "1",
    productName: "杭银理财XX1产品",
    availableBalance: "50000",
    balance: "50000",
    lance: "500000",
    proposed: "2023/01/01",
    coreBalance: "2023/01/01",
    operation: "详情",
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
    availableBalance: "50000",
    balance: "50000",
    lance: "500000",
    proposed: "2023/01/01",
    coreBalance: "2023/01/01",
    operation: "详情",
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
];
const columns = [
  {
    title: "产品名称",
    dataIndex: "productName",
    key: "productName",
  },
  {
    title: "账户类型",
    dataIndex: "accountType",
    key: "accountType",
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
  },
];
export function Bpp() {
  return (
    <BppWarrper>
      <div className="flee">
        <div>
          <Button type="primary" className="btn">
            一键展开
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
        pagination={{
          showSizeChanger: true,
          showQuickJumper: true,
        }}
      />
    </BppWarrper>
  );
}
