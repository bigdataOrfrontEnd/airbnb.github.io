//创建store,使用RTK统一组合

import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./modules/home";
console.log(homeReducer);
export const store = configureStore({
  reducer: {
    home: homeReducer,
  },
});
export default store;
