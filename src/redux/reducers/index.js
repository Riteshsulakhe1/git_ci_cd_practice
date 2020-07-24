import { combineReducers } from "redux";
import signin from "../reducers/signin";

const rootReducer = combineReducers({
    signin,
});
export default rootReducer;
