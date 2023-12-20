import React from "react";
import { RightOutlined } from "@ant-design/icons";
import "./test.less";
function Bpp() {
  const tabs = ["待处理", "待处理", "待处理", "待处理", "待处理", "待处理"];
  return (
    <>
      <div className="taskBpp">
        <div className="title">任务看板</div>
        <div className="content">
          {tabs.map((item) => {
            return (
              <div className="item">
                <div className="name">{item}</div>
                <div className="detail">
                  <span className="num">9</span> &nbsp;
                  <span className="rightIcon">
                    <RightOutlined />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
        <div className="it">
          <div className="">
            <div>今日交易总额(元)</div>
            <div>999999</div>
          </div>
          <div className="">
            <div>指令执行完成率 92%</div>
            <div>指令执行完成率 92%</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Bpp;
