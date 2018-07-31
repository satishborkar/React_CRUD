import { combineReducers } from "redux";

import userReducer from "./userReducer";
import usersReducer from "./usersReducer";
import errReducer from "./errReducer";
import userLoginReducer from "./userLoginReducer";

const rootReducer = combineReducers({
  users: usersReducer,
  user: userReducer,
  error: errReducer,
  userStatus: userLoginReducer
});

export default rootReducer;
