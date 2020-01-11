import { combineReducers } from "redux";
import sessionErrorsReducer from "./session_errors_reducer";
import boardsErrorReducer from "./boards_errors_reducer";
import listsErrorsReducer from "./lists_errors_reducer";

const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    boardErrors: boardsErrorReducer,
    listErrors: listsErrorsReducer
});

export default errorsReducer;