import { RECEIVE_CARDS, RECEIVE_CARD, REMOVE_CARD } from '../actions/card_actions';
import { RECEIVE_BOARD } from '../actions/board_actions';

const cardsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_CARDS:
            return action.cards
        case RECEIVE_CARD:
            return action.card.cards
        case REMOVE_CARD:
            delete nextState[action.cardId];
            return nextState
        case RECEIVE_BOARD:
            return action.board.cards
        default:
            return state;
    }
};

export default cardsReducer;