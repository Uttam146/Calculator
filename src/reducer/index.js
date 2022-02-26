import changethenumber from "./add&subtract";
import multNumber from "./multi&div";
import {combineReducers} from "redux";

const rootReducer = combineReducers({
    changethenumber,
    multNumber
});

export default rootReducer;