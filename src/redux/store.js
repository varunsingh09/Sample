import { combineReducers, createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk";

// import rootReducer from "./reducers";

// const middleware = [thunk];

const initialState = {};
const middleware = [];
const rootReducer = combineReducers({

});
export default createStore(rootReducer, initialState, applyMiddleware(...middleware));