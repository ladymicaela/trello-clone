import { RECEIVE_BOARD_ERRORS, CLEAR_BOARD_ERRORS } from '../actions/board_actions';
import { CLOSE_MODAL } from '../actions/modal_actions';

const boardsErrorReducer = ( state = [], action ) => {
    Object.freeze(state);
    
    switch (action.type) {
        case RECEIVE_BOARD_ERRORS:
            return action.errors;
        case CLEAR_BOARD_ERRORS:
            return [];
        case CLOSE_MODAL:
            return [];
        default:
            return state;
    }
};

export default boardsErrorReducer;