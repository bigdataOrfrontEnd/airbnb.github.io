import { getEntireRoomList } from "@/services/modules/entire";
import * as ActionTypes from "./constants";

export const changeCurrentPageAction = (currentPage) => {
  return { type: ActionTypes.CHANGE_CURRENT_PAGE, currentPage };
};
export const changeRoomListAction = (roomList) => ({
  type: ActionTypes.CHANGE_ROOM_LIST,
  roomList,
});
export const changeTotalCountAction = (totalCount) => ({
  type: ActionTypes.CHANGE_TOTAL_COUNT,
  totalCount,
});

//异步请求,让页面调用
export const fetchRoomListAction = (page = 0, newPage = 20) => {
  return async (dispatch, getState) => {
    // const currentPage = getState().entire.currentPage;

    const res = await getEntireRoomList(page * newPage);
    const roomList = res.list;
    const totalCount = res.totalCount;
    //派发到redux中
    dispatch(changeRoomListAction(roomList));
    dispatch(changeTotalCountAction(totalCount));
    dispatch(changeCurrentPageAction(page));
  };
};
