import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
export default function Echart() {
  //   const echarRef = useRef();
  const option = {
    // 提示框信息配置项
    tooltip: {
      trigger: "axis",
      extraCssText: "transform: rotate(90deg)", //横屏展示需要将提示框也旋转90°，使显示正常
    },
    xAxis: {
      type: "value", //数据
      position: "top", //x 轴的位置【top bottom】
      nameRotate: -90, //坐标轴名字旋转，角度值。
      axisLabel: {
        //坐标轴刻度标签的相关设置。
        rotate: 90, //刻度标签旋转的角度，
      },
      scale: true, //是否是脱离 0 值比例
    },

    yAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      inverse: "true", //是否是反向坐标轴。
      axisLabel: {
        rotate: -90,
      },
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: "line",
        smooth: true, //是否平滑曲线显示
      },
    ],
  };

  useEffect(() => {
    const ref = document.querySelector("#main");
    const myChart = echarts.init(ref);
    myChart.setOption(option);
  });
  //   ref={echarRef}
  return <div id="main" style={{ width: "400px", height: "600px" }}></div>;
}
