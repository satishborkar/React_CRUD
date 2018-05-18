import * as actionTypes from "../actions/types";
import initialState from "./initialState";

const userReducer = (state = initialState.user, action) => {
  switch (action.type) {
    case actionTypes.GET_USER:
      return action.payload;
    default:
      return state;
  }
};

export default userReducer;
