import { combineReducers } from "redux";

import userReducer from "./user";
import videoReducer from "./video";
import modalManagerReducer from "./modalManager";
import toastReducer from "./toast";
import searchReducer from "./search";

export const reducers = combineReducers({
    userReducer,
    videoReducer,
    modalManagerReducer,
    toastReducer,
    searchReducer
});
