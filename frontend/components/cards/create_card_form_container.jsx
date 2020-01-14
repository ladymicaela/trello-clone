import React from 'react';
import { connect } from 'react-redux';
import { createCard, fetchCards } from '../../actions/card_actions';
import CardForm from './card_form';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = state => ({
    card: {
        title: ""
    },
    formType: "Create Card",
    errors: state.errors.cardErrors,
    list: state.ui.modal.item
});

const mapDispatchToProps = dispatch => ({
    action: card => dispatch(createCard(card)),
    fetchCards: listId => dispatch(fetchCards(listId)),
    closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(CardForm);