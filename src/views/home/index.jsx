import React, { memo, useEffect } from "react";
import Banner from "./c-cnps/banner";
import { HomeWrapper } from "./style";
import { getHightGoodProceData } from "@/services";
const Home = memo(() => {
  useEffect(() => {
    getHightGoodProceData().then((res) => {
      console.log(res);
    });
  }, []);
  return (
    <HomeWrapper>
      <Banner />
    </HomeWrapper>
  );
});

export default Home;
