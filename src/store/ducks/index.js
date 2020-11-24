import { combineReducers } from "redux";

import videoReducer from "./video";
import modalManagerReducer from "./modalManager";

export const reducers = combineReducers({
    videoReducer,
    modalManagerReducer,
});
