import { RECEIVE_CARD_ERRORS, CLEAR_CARD_ERRORS } from '../actions/card_actions';
import { CLOSE_MODAL } from '../actions/modal_actions';


const cardsErrorReducer = (state = [], action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_CARD_ERRORS:
            return action.errors;
        case CLEAR_CARD_ERRORS:
            return [];
        case CLOSE_MODAL:
            return [];
        default:
            return state;
    }
};

export default cardsErrorReducer;