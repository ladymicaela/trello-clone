import { combineReducers } from "redux";
import sessionErrorsReducer from "./session_errors_reducer";
import boardsErrorReducer from "./boards_errors_reducer";

const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    boardErrors: boardsErrorReducer
});

export default errorsReducer;