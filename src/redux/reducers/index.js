import { combineReducers } from "redux";
import courses from "./courseReducer";
import addresses from "./addressReducer";
import register from "./registerReducer";
import user from "./userProfileReducer";

const rootReducer = combineReducers({
  addresses,
  courses,
  register,
  user
});

export default rootReducer;
