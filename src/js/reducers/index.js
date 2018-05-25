import { combineReducers } from "redux";

import userReducer from "./userReducer";
import usersReducer from "./usersReducer";
import errReducer from "./errReducer";

const rootReducer = combineReducers({
  users: usersReducer,
  user: userReducer,
  error: errReducer
});

export default rootReducer;
