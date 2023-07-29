import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getHightGoodProceData } from "@/services";
//封装接口请求的action,在home问调用,fetchdata名字,可以在调式工具看到
export const fetchHomeDataAction = createAsyncThunk("fetchdata", async () => {
  const res = await getHightGoodProceData();
  return res;
});
export const counterSlice = createSlice({
  name: "home", //用来进行切片的
  initialState: {
    goodPriceInfo: {}, //返回来的是对象
  },
  reducers: {
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload;
    },
  },
  extraReducers: {
    [fetchHomeDataAction.fulfilled](state, { payload }) {
      console.log(payload);
      state.goodPriceInfo = payload;
    },
  },
});

export const { changeGoodPriceInfoActionn } = counterSlice.actions;

export default counterSlice.reducer;
