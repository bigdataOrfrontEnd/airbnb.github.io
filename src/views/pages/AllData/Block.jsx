import { Button } from "antd";
import React from "react";

export default function Block() {
  const handleDragStart = (e) => {
    // 向拖拽数据中添加项目
    e.dataTransfer.setData("text", e.target.dataset.index);
    console.log(e.target.dataset.index);
  };
  return (
    <div onDragStart={handleDragStart}>
      <Button draggable data-index="Rectangle">
        拖拽的A元素
      </Button>
    </div>
  );
}
