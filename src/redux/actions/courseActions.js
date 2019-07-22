import * as types from "./actionTypes";

export function createCourse(course) {
  return { type: types.CREAT_COURSE, course: course };
}
