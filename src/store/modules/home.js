import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getHightGoodProceData, getHomeHighScoreData } from "@/services";
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
  }
);
export const counterSlice = createSlice({
  name: "home", //用来进行切片的
  initialState: {
    goodPriceInfo: {}, //返回来的是对象
    highScoreInfo: {}, //高评分房源
  },
  reducers: {
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload;
    },
    changeHighScoreInfoAction(state, { payload }) {
      state.highScoreInfo = payload;
    },
  },
  extraReducers: {
    // [fetchHomeDataAction.fulfilled](state, { payload }) {
    //   console.log(payload);
    //   state.goodPriceInfo = payload;
    // },
  },
});

export const { changeGoodPriceInfoAction, changeHighScoreInfoAction } =
  counterSlice.actions;

export default counterSlice.reducer;
