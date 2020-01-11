import { RECEIVE_LIST_ERRORS, CLEAR_LIST_ERRORS } from '../actions/list_actions';
import { CLOSE_MODAL } from '../actions/modal_actions';


const listsErrorReducer = ( state = [], action ) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_LIST_ERRORS:
            return action.errors;
        case CLEAR_LIST_ERRORS:
            return [];
        case CLOSE_MODAL:
            return [];
        default:
            return state;
    }
};

export default listsErrorReducer;