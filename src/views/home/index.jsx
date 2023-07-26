import React, { useEffect } from "react";
import hyRequest from "@/services";
function Home() {
  useEffect(() => {
    hyRequest.get({ url: "/home/highscore" }).then((res) => {
      console.log(res);
    });
  }, []);
  return <div>Home</div>;
}

export default Home;
