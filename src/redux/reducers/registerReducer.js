import * as types from "../actions/actionTypes";

export default function registerReducer(state = [], action) {
  switch (action.type) {
    case types.ADD_USER:
      return [...state, { ...action.user }];
    default:
      return state;
  }
}
