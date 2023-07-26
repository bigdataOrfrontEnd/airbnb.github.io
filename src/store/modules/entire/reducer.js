import { Addnumber } from "./constants";
const initiate = {
  couter: 1,
};
function reducer(state = initiate, action) {
  switch (action.type) {
    case Addnumber:
      return { ...state, couter: state.couter + action.couter };
    default:
      return state;
  }
}
export default reducer;
