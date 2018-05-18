import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers";
import initialState from "../reducers/initialState";

// const cEnhancers =
//         typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//             ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
//                 // Extensions
//             })
//             : compose;

//     const enhancers = cEnhancers(applyMiddleware(thunk));

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

export default store;
