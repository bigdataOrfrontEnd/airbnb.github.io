import React, { useEffect, useState } from "react";
import { getChannels, getArticles } from "@/services/modules/user";
import { Select, Radio, Form, Button, TimePicker } from "antd";
const options = [
  {
    label: "全部",
    value: "",
  },
  {
    label: "草稿",
    value: "0",
  },
  {
    label: "待审核",
    value: "1",
  },
  {
    label: "审核通过",
    value: "2",
  },
  {
    label: "审核失败",
    value: "3",
  },
];
export default function ArticleList() {
  const [list, setList] = useState(null);

  useEffect(() => {
    getChannelList();
    getArticles();
  }, []);

  const onfinish = async (values) => {
    console.log(values);
    const res = await getArticles(values);
  };

  //频道后端接口
  const getChannelList = async () => {
    const res = await getChannels();
    const data = res?.data.channels.map((item) => {
      return { lable: item.id, value: item.name };
    });
    setList(data);
  };

  return (
    <div>
      <Form onFinish={onfinish} name="form">
        <Form.Item label="状态" name="option">
          <Radio.Group options={options}></Radio.Group>
        </Form.Item>
        <Form.Item label="频道" name="channel_id">
          <Select style={{ width: 120 }} options={list} placeholder="请选择" />
        </Form.Item>
        <Form.Item label="日期">
          {/* todo日期组件弹出不好看 */}
          <TimePicker.RangePicker placeholder />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 1, span: 15 }}>
          <Button type="primary" htmlType="submit">
            筛选
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
