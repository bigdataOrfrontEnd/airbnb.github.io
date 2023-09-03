import React from "react";
import { Table, Tag, Space } from "antd";
import { ArtListWarrapper } from "./style";
const dataSource = [];

const columns = [
  {
    title: "封面",
    dataIndex: "cover",
    key: "cover",
  },
  {
    title: "标题",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "状态",
    dataIndex: "status",
    key: "status",
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "loser") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "发布时间",
    dataIndex: "pubdate",
    key: "pubdate",
  },
  {
    title: "阅读数",
    dataIndex: "read_count",
    key: "read_count",
  },
  {
    title: "评论数",
    dataIndex: "comment_count",
    key: "comment_count",
  },
  {
    title: "点赞数",
    dataIndex: "like_count",
    key: "like_count",
  },
  {
    title: "操作",
    key: "action",
    render: (_, record) => <Space size="middle"></Space>,
  },
];
export default function ArtList(props) {
  const { artList } = props;
  console.log(artList);
  return (
    <ArtListWarrapper>
      <p className="title">
        根据筛选条件共查询到{artList?.data?.total_count}条结果
      </p>
      <Table dataSource={dataSource} columns={columns} pagination={true} />
    </ArtListWarrapper>
  );
}
