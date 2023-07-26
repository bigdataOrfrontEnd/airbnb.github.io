import React, { useEffect, useState } from "react";
import hyRequest from "@/services";
function Home() {
  const [highScore, setHighScore] = useState({});
  useEffect(() => {
    hyRequest.get({ url: "/home/highscore" }).then((res) => {
      setHighScore(res);
    });
  }, []);
  return (
    <div>
      {/* {highScore.list.map((item) => {
        return <li key={item.id}>{item.name}</li>;
      })} */}
      {/* {highScore.list && (
        <ul>
          {highScore.list.map((item) => {
            return <li key={item.id}>{item.name}</li>;
          })}
        </ul>
      )} */}
      {highScore?.list?.map((item) => {
        return <li key={item.id}>{item.name}</li>;
      })}
    </div>
  );
}

export default Home;
