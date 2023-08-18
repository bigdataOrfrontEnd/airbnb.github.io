import { getEntireRoomList } from "@/services/modules/entire";
import React, { useEffect } from "react";

function Entire() {
  useEffect(() => {
    getEntireRoomList(0).then((res) => {
      console.log(res);
    }, []);
  });
  return <div>Entire</div>;
}

export default Entire;
