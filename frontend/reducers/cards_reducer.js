import { RECEIVE_CARDS, RECEIVE_CARD, REMOVE_CARD } from '../actions/card_actions';
import { RECEIVE_BOARD } from '../actions/board_actions';
import { RECEIVE_LISTS } from '../actions/list_actions';

const cardsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_CARDS:
            return Object.assign({},action.cards)
            // return action.cards
        case RECEIVE_CARD:
            nextState[action.card.id] = action.card
            // return action.card.cards
            return nextState;
        case REMOVE_CARD:
            delete nextState[action.cardId];
            return nextState
        // case RECEIVE_BOARD:
        //     return action.board.cards
        // case RECEIVE_LISTS:
        //     return action.lists.cards
        default:
            return state;
    }
};

export default cardsReducer;