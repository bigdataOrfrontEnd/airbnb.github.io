import React from "react";
import { useSelector } from "react-redux";
import { Pagination } from "antd";
export default function EntireRooms() {
  const { roomList } = useSelector((state) => ({
    roomList: state.entire.roomList,
  }));
  console.log(roomList);
  return (
    <div>
      <Pagination
        total={85}
        showSizeChanger={false}
        showTotal={(total) => `Total ${total} items`}
      />
    </div>
  );
}
