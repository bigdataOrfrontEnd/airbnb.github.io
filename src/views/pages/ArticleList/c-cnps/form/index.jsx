import React from "react";
import { Select, Radio, Form, Button, TimePicker } from "antd";

export default function ArtForm(props) {
  const { options, onfinish, option } = props;

  return (
    <Form onFinish={onfinish} name="form" initialValues={{ status: "" }}>
      <Form.Item label="状态" name="status">
        <Radio.Group options={options}></Radio.Group>
      </Form.Item>
      <Form.Item label="频道" name="channel_id">
        <Select style={{ width: 120 }} options={option} placeholder="请选择" />
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
  );
}
