//创建store,使用RTK统一组合

import { configure } from "@testing-library/react";
import homeReducer from "./modules/home";

const store = configure({
  reducer: {
    home: homeReducer,
  },
});
export default store;
