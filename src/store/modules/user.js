import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getChannels } from "@/services/modules/user";
export const fetchChannelDataAction = createAsyncThunk(
  "fetchdata",
  async (payload, { dispatch }) => {
    getChannels().then((res) => {
      dispatch(channelAction(res));
    });
  }
);
export const channerlSilice = createSlice({
  name: "channer",
  initialState: {
    chanell: {},
  },
  reducers: {
    channelAction(state, { payload }) {
      state.chanell = payload;
    },
  },
});
export const { channelAction } = channerlSilice.actions;
export default channerlSilice.reducer;
