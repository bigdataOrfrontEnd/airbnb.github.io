import React, { memo, useEffect, useRef, useState } from "react";
import { ViewWrapper } from "./style";
/**
 * 步骤:
 * 1. 首先分析页面元素布局
 * 2. 编写样式
 */

const ScrollView = memo((props) => {
  const scrllRef = useRef(null);
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    console.log(scrllRef.current.clientWidth, scrllRef.current.scrollWidth);
  });
  const style = {
    left: scroll,
  };
  const handClick = (btn) => {
    if (btn) {
      setScroll(scroll + 100);
    } else {
      setScroll(scroll - 100);
    }
  };
  return (
    <ViewWrapper>
      <button onClick={(e) => handClick(1)}>左边的按钮</button>
      <button onClick={(e) => handClick()}>右边的按钮</button>
      {/* scroll-content这个是容器,{props.children} */}

      {/* 滚动区域 */}
      <div className="scroll" style={style} ref={scrllRef}>
        <div className="item">
          <div className="only">1</div>
          <div className="only">2</div>
          <div className="only">3</div>
          <div className="only">4</div>
          <div className="only">5</div>
          <div className="only">6</div>
          <div className="only">7</div>
          <div className="only"> 8</div>
          <div className="only">9</div>
          <div className="only">10</div>
        </div>
      </div>
    </ViewWrapper>
  );
});

export default ScrollView;
