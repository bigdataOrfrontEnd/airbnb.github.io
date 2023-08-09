import React, { memo, useEffect } from "react";
import Banner from "./c-cnps/banner";
import { HomeWrapper } from "./style";
import Hot from "./c-cnps/hot";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { fetchHomeDataAction } from "@/store/modules/home";
import HiaghtPrice from "./c-cnps/haight";
const Home = memo(() => {
  const dispatch = useDispatch();
  // 从redux中获取数据
  const { goodPriceInfo, highScoreInfo, discountInfo } = useSelector(
    (state) => ({
      goodPriceInfo: state.home.goodPriceInfo,
      highScoreInfo: state.home.highScoreInfo,
      discountInfo: state.home.discountInfo,
    }),
    shallowEqual
  );
  // 派发异步的事件,发送网络请求
  useEffect(() => {
    dispatch(fetchHomeDataAction());
  }, [dispatch]);
  console.log(discountInfo);
  return (
    <HomeWrapper>
      <Banner />

      <div className="page">
        <HiaghtPrice goodsInfo={goodPriceInfo} />
        <HiaghtPrice goodsInfo={highScoreInfo} />
        <Hot goodsInfo={discountInfo} />
      </div>
    </HomeWrapper>
  );
});

export default Home;
