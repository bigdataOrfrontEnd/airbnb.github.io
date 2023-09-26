import React from "react";
import { Modal, Table, Tabs } from "antd";

export default function Model1(props) {
  const { showModel, setShowModel } = props;
  const hideModal = () => {
    setShowModel(false);
  };
  const onChange = (key) => {
    console.log(key);
  };
  return (
    <Modal
      open={showModel}
      onOk={hideModal}
      onCancel={hideModal}
      okText="确认"
      cancelText="取消"
      title="明细流水"
    >
      <Tabs
        defaultActiveKey="1"
        onChange={onChange}
        items={[
          {
            label: `交易明细`,
            key: "1",
            children: (
              <div>
                <div>导出</div>
                <Table />
              </div>
            ),
          },
          {
            label: `按指令汇总`,
            key: "2",
            children: <Table />,
          },
        ]}
      />
    </Modal>
  );
}
