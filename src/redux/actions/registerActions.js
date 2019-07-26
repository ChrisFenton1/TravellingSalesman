import * as types from "./actionTypes";

export function addUser(user) {
  return { type: types.ADD_USER, user: user };
}
