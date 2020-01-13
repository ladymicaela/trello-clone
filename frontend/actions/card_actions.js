import * as CardAPIUtil from '../util/card_api_util';

export const RECEIVE_CARDS = 'RECEIVE_CARDS';
export const RECEIVE_CARD = 'RECEIVE_CARD';
export const REMOVE_CARD = 'REMOVE_CARD';
export const RECEIVE_CARD_ERRORS = 'RECEIVE_CARD_ERRORS';
export const CLEAR_CARD_ERRORS = 'CLEAR_CARD_ERRORS';

const receiveCards = ({cards, boards, lists, members}) => ({
    type: RECEIVE_CARDS,
    cards,
    boards,
    lists,
    members
});

const receiveCard = card => ({
    type: RECEIVE_CARD,
    card
});

const removeCard = cardId => ({
    type: REMOVE_CARD,
    cardId
});

const receiveCardErrors = errors => ({
    type: RECEIVE_CARD_ERRORS,
    errors
});

const clearCardErrors = () => ({
    type: CLEAR_CARD_ERRORS
});

export const fetchCards = (cardId) => dispatch => (
    CardAPIUtil.fetchCards(cardId)
        .then(payload => dispatch(receiveCards(payload)))
);

export const fetchCard = cardId => dispatch => (
    CardAPIUtil.fetchCard(cardId)
        .then(card => dispatch(receiveCard(card)))
);

export const createCard = card => dispatch => (
    CardAPIUtil.createCard(card)
        .then(card => {
            dispatch(receiveCard(card));
            dispatch(clearCardErrors());
        },
            errors => dispatch(receiveCardErrors(errors.responseJSON))
        )
);

export const updateCard = card => dispatch => (
    CardAPIUtil.updateCard(card)
        .then(card => dispatch(receiveCard(card)))
);

export const destroyCard = cardId => dispatch => (
    CardAPIUtil.destroyCard(cardId)
        .then(() => dispatch(removeCard(cardId)))
);