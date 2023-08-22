import React, { useState } from "react";
import { EntireFilterWrapper } from "./style";
export default function EntireFilter(props) {
  const { FiltType } = props;
  const [currentIndex, setCurrentIndex] = useState([]);
  //点击事件,点击一个放到数组里面,如果数组里面有了,再点击一次就删除了
  function hadclick(item) {
    const newcurrent = [...currentIndex];
    if (newcurrent.includes(item)) {
      const indexItem = newcurrent.findIndex((name) => name === item);
      newcurrent.splice(indexItem, 1);
    } else {
      newcurrent.push(item);
    }
    setCurrentIndex(newcurrent);
  }
  return (
    <EntireFilterWrapper>
      {FiltType &&
        FiltType.map((item, index) => {
          return (
            <div
              key={index}
              className={`btn${currentIndex.includes(item) ? " active" : ""}`}
              onClick={(e) => {
                hadclick(item);
              }}
            >
              {item}
            </div>
          );
        })}
    </EntireFilterWrapper>
  );
}
