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
  const [option, setOption] = useState(options[0].value);
  const [allFilt, setAllFilt] = useState({
    status: 0,
    channel_id: "html",
    begin_pubdate: null,
    end_pubdate: null,
    page: 1,
    per_page: 10,
  });
  useEffect(() => {
    getChannelList();
    getArticlesList();
  }, []);

  const onChange = ({ target: { value } }) => {
    setOption(value);
    setAllFilt({ ...allFilt, status: value });
  };
  const channelChang = (value) => {
    console.log(value);
    setAllFilt({ ...allFilt, channel_id: value });
  };
  const onfinish = () => {
    console.log(allFilt);
  };
  // const getChannel = () => {
  //   getChannelList();
  // };
  //频道后端接口
  const getChannelList = async () => {
    const res = await getChannels();
    const data = res.data.channels.map((item) => {
      return { lable: item.id, value: item.name };
    });
    setList(data);
  };
  //获取文章列表
  const getArticlesList = async () => {
    const res = await getArticles({});
    console.log(res);
  };
  // 修改key,如果使用这个就会让useEffect告警
  // const own = (arr) => {
  //   return arr.map((item) => {
  //     return { lable: item.id, value: item.name };
  //   });
  // };
  return (
    <div>
      <Form onFinish={onfinish}>
        <Form.Item label="状态">
          <Radio.Group
            options={options}
            onChange={onChange}
            value={option}
          ></Radio.Group>
        </Form.Item>
        <Form.Item label="频道">
          <Select
            style={{ width: 120 }}
            options={list}
            placeholder="请选择"
            onChange={channelChang}
          />
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
