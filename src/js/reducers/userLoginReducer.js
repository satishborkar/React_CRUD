import * as actionTypes from "../actions/types";
import initialState from "./initialState";

// const userLoginReducer = (state = initialState.isLogged, action) => {
//     if (action.type === actionTypes.LOGOUT) {
//         state.isLogged = false;
//     } else if (action.type === actionTypes.LOGIN) {
//         state.isLogged = true;
//     }
//     return state;
// };

const userLoginReducer = (state = initialState.userStatus, action) => {
    switch (action.type) {
        case actionTypes.LOGOUT:
            console.log("LogOut");
            return [...state, state.login = false]
            break;
        case actionTypes.LOGIN:
            return [...state, state.login = true]
    }
    return state;
};

export default userLoginReducer;