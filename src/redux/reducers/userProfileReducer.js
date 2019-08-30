import * as types from "../actions/actionTypes";

export default function userProfileReducer(state = [], action) {
  switch (action.type) {
    case types.ADD_USER_PROFILE:
      return [...state, { ...action.user }];
    default:
      return state;
  }
}
