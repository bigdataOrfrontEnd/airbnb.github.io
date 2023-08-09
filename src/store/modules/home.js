import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getHightGoodProceData,
  getHomeHighScoreData,
  getHomeDiscountData,
} from "@/services";
//封装接口请求的action,在home问调用,fetchdata名字,可以在调式工具看到
export const fetchHomeDataAction = createAsyncThunk(
  "fetchdata",
  async (payload, { dispatch }) => {
    getHightGoodProceData().then((res) => {
      dispatch(changeGoodPriceInfoAction(res));
    });
    getHomeHighScoreData().then((res) => {
      dispatch(changeHighScoreInfoAction(res));
    });
    getHomeDiscountData().then((res) =>
      dispatch(changeDiscountInfoAction(res))
    );
  }
);
export const counterSlice = createSlice({
  name: "home", //用来进行切片的
  initialState: {
    goodPriceInfo: {}, //返回来的是对象
    highScoreInfo: {}, //高评分房源
    discountInfo: {},
  },
  reducers: {
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload;
    },
    changeHighScoreInfoAction(state, { payload }) {
      state.highScoreInfo = payload;
    },
    changeDiscountInfoAction(state, { payload }) {
      state.discountInfo = payload;
    },
  },
  extraReducers: {
    // [fetchHomeDataAction.fulfilled](state, { payload }) {
    //   console.log(payload);
    //   state.goodPriceInfo = payload;
    // },
  },
});

export const {
  changeGoodPriceInfoAction,
  changeHighScoreInfoAction,
  changeDiscountInfoAction,
} = counterSlice.actions;

export default counterSlice.reducer;
