import { combineReducers } from "redux";

import userReducer from "./userReducer";
import usersReducer from "./usersReducer";

const rootReducer = combineReducers({
  users: usersReducer,
  user: userReducer
});

export default rootReducer;
