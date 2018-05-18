import * as actionTypes from "../actions/types";
import initialState from "./initialState";

const usersReducer = (state = initialState.users, action) => {
  switch (action.type) {
    case actionTypes.GET_USERS:
      return action.payload.reverse();
    case actionTypes.ADD_USER:
      return [action.payload, ...state];
    case actionTypes.UPDATE_USER:
      return [
        Object.assign({}, action.payload),
        ...state.filter(user => user.id != action.payload.id)
      ];
    case actionTypes.DELETE_USER:
      return [...state.filter(user => user.id != action.payload)];
    default:
      return state;
  }
};

export default usersReducer;
