import React from 'react';
import { connect } from 'react-redux';
import { createCard} from '../../actions/card_actions';
import CardForm from './card_form';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = state => ({
    card: {
        title: ""
    },
    formType: "Create Card",
    errors: state.errors.cardErrors
});

const mapDispatchToProps = dispatch => ({
    action: card => dispatch(createCard(card)),
    otherForm: (
        <button onClick={() => dispatch(openModal('create-card'))}>
            Create Card
        </button>
    ),
    closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(CardForm);