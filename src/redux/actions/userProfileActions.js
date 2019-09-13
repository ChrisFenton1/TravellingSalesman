import * as types from "./actionTypes";

export function addProfileUser(user) {
  return { type: types.ADD_USER_PROFILE, user: user };
}

export function editProfileUser(user) {
  return { type: types.EDIT_USER_PROFILE, user: user };
}

export function removeProfileUser(userId) {
  return { type: types.REMOVE_USER_PROFILE, userId: userId };
}

export function updateProfileUser(user) {
  return { type: types.UPDATE_USER_PROFILE, user: user };
}
