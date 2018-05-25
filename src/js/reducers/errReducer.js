import initialState from "./initialState";
import * as actionType from "../actions/types";

const errReducer = (state = initialState.error, action) => {
  switch (action.type) {
    case actionType.DISPLAY_ERR:
      return action.payload;
    default:
      return state;
  }
};

export default errReducer;