import { combineReducers } from "redux";
import courses from "./courseReducer";
import addresses from "./addressReducer";

const rootReducer = combineReducers({
  addresses,
  courses
});

export default rootReducer;
