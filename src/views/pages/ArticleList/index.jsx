import React, { useEffect, useState } from "react";
import { getChannels, getArticles } from "@/services/modules/user";
import ArtForm from "./c-cnps/form";
import ArtList from "./c-cnps/List";

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
  const [option, setOption] = useState(null);
  const [artList, setArtList] = useState(null);

  useEffect(() => {
    getChannelList();
    getArtList();
  }, []);

  const onfinish = async (values) => {
    console.log(values);
    const { status, channel_id } = values;
    getArtList(status, channel_id);
  };

  //频道后端接口
  const getChannelList = async () => {
    const res = await getChannels();
    const data = res?.data.channels.map((item) => {
      return { lable: item.id, value: item.name };
    });
    setOption(data);
  };
  //List
  const getArtList = async (status, channel_id) => {
    const res = await getArticles({
      status,
      channel_id,
      page: 1,
      per_page: 10,
    });

    setArtList(res);
  };

  return (
    <div>
      <ArtForm options={options} onfinish={onfinish} option={option} />
      <ArtList artList={artList} />
    </div>
  );
}
