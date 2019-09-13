import * as types from "../actions/actionTypes";

export default function userProfileReducer(state = [], action) {
  switch (action.type) {
    case types.ADD_USER_PROFILE:
      return [...state, { ...action.user }];
    case types.UPDATE_USER_PROFILE:
      return [...state, { ...action.user }];
    case types.REMOVE_USER_PROFILE:
      return state.filter(({ id }) => id !== action.userId);
    default:
      return state;
  }
}
