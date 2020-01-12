import { combineReducers } from "redux";
import sessionErrorsReducer from "./session_errors_reducer";
import boardsErrorReducer from "./boards_errors_reducer";
import listsErrorReducer from "./lists_errors_reducer";
import cardsErrorReducer from "./cards_errors_reducer";

const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    boardErrors: boardsErrorReducer,
    listErrors: listsErrorReducer,
    cardErrors: cardsErrorReducer
});

export default errorsReducer;