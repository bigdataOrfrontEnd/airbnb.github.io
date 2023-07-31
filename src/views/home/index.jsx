import React, { memo, useEffect } from "react";
import Banner from "./c-cnps/banner";
import { HomeWrapper } from "./style";

import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { fetchHomeDataAction } from "@/store/modules/home";
import HiaghtPrice from "./c-cnps/haight";
const Home = memo(() => {
  const dispatch = useDispatch();
  // 从redux中获取数据
  const { goodPriceInfo } = useSelector(
    (state) => ({
      goodPriceInfo: state.home.goodPriceInfo,
    }),
    shallowEqual
  );
  // 派发异步的事件,发送网络请求
  useEffect(() => {
    dispatch(fetchHomeDataAction());
  }, [dispatch]);
  return (
    <HomeWrapper>
      <Banner />
      <div className="page">
        <HiaghtPrice goodsInfo={goodPriceInfo} />
      </div>
    </HomeWrapper>
  );
});

export default Home;
