import { OPEN_MODAL, OPEN_MODAL_WITH_ITEM, CLOSE_MODAL } from '../actions/modal_actions';

const modalReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state)
    switch (action.type) {
        case OPEN_MODAL:
            nextState["modal"] = action.modal;
            return nextState;
        case OPEN_MODAL_WITH_ITEM:
            // let nextState = {}
            // nextState["modal"] = action.modal;
            // nextState["item"] = action.openModalItem;
            // return nextState;
            nextState["modal"] = action.modal;
            nextState["item"] = action.item;
            return nextState;
        case CLOSE_MODAL:
            return null;
        default:
            return state;
    }
}

export default modalReducer;