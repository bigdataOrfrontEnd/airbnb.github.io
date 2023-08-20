import * as ActionTypes from "./constants";
const initiate = {
  currentPage: 0, //当前页面
  roomList: [], //房间列表
  totalCount: 0, //总页数
};
function reducer(state = initiate, action) {
  switch (action.type) {
    case ActionTypes.CHANGE_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };
    case ActionTypes.CHANGE_ROOM_LIST:
      return { ...state, roomList: action.roomList };
    case ActionTypes.CHANGE_TOTAL_COUNT:
      return { ...state, totalCount: action.totalCount };
    default:
      return state;
  }
}
export default reducer;
