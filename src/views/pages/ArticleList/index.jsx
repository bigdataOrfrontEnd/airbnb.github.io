import React, { useEffect, useState } from "react";
import { getArticles } from "@/services/modules/user";
import ArtForm from "./c-cnps/form";
import ArtList from "./c-cnps/List";
import { useDispatch, useSelector } from "react-redux";
import { fetchChannelDataAction } from "@/store/modules/user";

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
  const [artList, setArtList] = useState(null);
  const dispatch = useDispatch();
  const { channel } = useSelector((state) => ({
    channel: state.channerl.chanell,
  }));
  useEffect(() => {
    dispatch(fetchChannelDataAction());
    getArtList();
  }, [dispatch]);

  const onfinish = async (values) => {
    const { status, channel_id } = values;
    getArtList(status, channel_id);
  };

  //List
  const getArtList = async (status, channel_id) => {
    const res = await getArticles({
      status,
      channel_id,
      page: 1,
      per_page: 10,
    });
    const A = (status) => {
      return options.map((item) => {
        if (item.value && item.value == status) {
          return item.label;
        }
      });
    };
    const dataSource = res?.data?.results.map(
      (
        {
          title,
          pubdate,
          read_count,
          like_count,
          comment_count,
          status,
          cover,
        },
        index
      ) => {
        return {
          key: index,
          cover: cover.images[0],
          title,
          status: A(status),
          pubdate,
          read_count,
          comment_count,
          action: "5",
          like_count,
        };
      }
    );

    setArtList(dataSource);
  };

  return (
    <div>
      <ArtForm
        options={options}
        onfinish={onfinish}
        option={channel?.data?.channels?.map((itme) => ({
          value: itme.id,
          label: itme.name,
        }))}
      />
      <ArtList artList={artList} />
    </div>
  );
}
