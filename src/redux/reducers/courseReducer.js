import * as types from "../actions/actionTypes";

export default function courseReducer(state = [], action) {
  switch (action.type) {
    case types.CREAT_COURSE:
      return [...state, { ...action.course }];
    // case types.ADD_ADDRESS:
    //   return [...state, { ...action.address }];
    default:
      return state;
  }
}
