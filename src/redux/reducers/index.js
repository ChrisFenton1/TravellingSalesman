import { combineReducers } from "redux";
import courses from "./courseReducer";
import addresses from "./addressReducer";
import register from "./registerReducer";

const rootReducer = combineReducers({
  addresses,
  courses,
  register
});

export default rootReducer;
