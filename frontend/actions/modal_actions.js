export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const OPEN_MODAL_WITH_ITEM = 'OPEN_MODAL_WITH_ITEM';

export const openModal = modal => {
    return {
        type: OPEN_MODAL,
        modal
    };
};

    export const openModalWithItem = (modal, item) => {
    return {
        type: OPEN_MODAL_WITH_ITEM,
        modal,
        item
    };
};

export const closeModal = () => {
    return {
        type: CLOSE_MODAL
    };
};
