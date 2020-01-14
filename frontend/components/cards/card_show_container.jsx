import { connect } from 'react-redux';
import CardShow from './card_show';
import { fetchCard, destroyCard, updateCard } from '../../actions/card_actions';
import React from 'react';

const mapStateToProps = (state, ownProps) => ({
    // card: state.entities.cards[ownProps.match.params.cardId]
});

const mapDispatchToProps = dispatch => ({
    fetchCard: cardId => dispatch(fetchCard(cardId)),
    destroyCard: card => dispatch(destroyCard(card)),
    updateCard: card => dispatch(updateCard(card))
}
);

export default connect(mapStateToProps, mapDispatchToProps)(CardShow);