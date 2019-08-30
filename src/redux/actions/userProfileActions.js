import * as types from "./actionTypes";

export function addProfileUser(user) {
  return { type: types.ADD_USER_PROFILE, user: user };
}
