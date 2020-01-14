import { connect } from 'react-redux';
import { fetchCard, updateCard, fetchCards } from '../../actions/card_actions';
import EditCardForm from './edit_card_form';
import { withRouter } from 'react-router-dom';
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {

    return {
        // card: state.ui.modal.item,
        formType: 'Edit Card',
        errors: state.errors.cardErrors,
    }
};

const mapDispatchToProps = dispatch => ({
    fetchCard: cardId => dispatch(fetchCard(cardId)),
    action: card => dispatch(updateCard(card)),
    closeModal: () => dispatch(closeModal()),
    fetchCards: listId => dispatch(fetchCards(listId))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditCardForm));