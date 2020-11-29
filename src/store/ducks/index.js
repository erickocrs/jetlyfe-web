import { combineReducers } from "redux";

import userReducer from "./user";
import videoReducer from "./video";
import modalManagerReducer from "./modalManager";

export const reducers = combineReducers({
    userReducer,
    videoReducer,
    modalManagerReducer,
});
