import React, { useEffect, useMemo, useState } from "react";
import moment from "moment";
export default function Demo() {
  console.log(new Date());
  let resolt = 0;
  const [time, setTime] = useState(moment().format("YYYY-MM-DD HH:mm:ss"));
  const mm = useMemo(() => {
    console.log("hellow");
    return resolt;
  }, [resolt]);

  useEffect(() => {
    setTimeout(() => {
      setTime(moment().format("YYYY-MM-DD HH:mm:ss"));
    }, 1000);
  }, [time]);

  return (
    <div>
      {time}
      <div>{mm}</div>
    </div>
  );
}
