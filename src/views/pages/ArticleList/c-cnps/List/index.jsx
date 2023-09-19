import React from "react";
import { Table, Space } from "antd";
import { ArtListWarrapper } from "./style";

const columns = [
  {
    title: "封面",
    dataIndex: "cover",

    render: (_, { cover }) => {
      return (
        <div className="imgd">
          <img src={cover} alt="" />
        </div>
      );
    },
  },
  {
    title: "标题",
    dataIndex: "title",
  },
  {
    title: "状态",
    dataIndex: "status",
  },
  {
    title: "发布时间",
    dataIndex: "pubdate",
  },
  {
    title: "阅读数",
    dataIndex: "read_count",
  },
  {
    title: "评论数",
    dataIndex: "comment_count",
  },
  {
    title: "点赞数",
    dataIndex: "like_count",
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
  // const dataSource = artList?.data?.results.map(
  //   (
  //     { title, pubdate, read_count, like_count, comment_count, status, ...res },
  //     index
  //   ) => {
  //     return {
  //       key: index,
  //       cover: res.cover.images[0],
  //       title,
  //       status: status,
  //       pubdate,
  //       read_count,
  //       comment_count,
  //       action: "5",
  //       like_count,
  //     };
  //   }
  // );
  return (
    <ArtListWarrapper>
      <p className="title">
        根据筛选条件共查询到{artList?.data?.total_count}条结果
      </p>

      <Table dataSource={artList} columns={columns} pagination={true} />
    </ArtListWarrapper>
  );
}
