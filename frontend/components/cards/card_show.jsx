import React from 'react';

class CardShow extends React.Component {
    constructor(props) {
        super(props)
        this.destroyCard = this.destroyCard.bind(this)
    }

    componentDidMount() {
        this.props.fetchCard(this.props.card.id)
    }

    destroyCard() {
        this.props.destroyCard(this.props.card.id)
            .then(this.props.closeModal)
            .then(() => this.props.fetchCards(this.props.card.listId));
    }

    render() {
        if (!this.props.card) return null

        return (
            <div className="card-show-container">
                <div className="card-show-box">
                    <h1>{this.props.card.title}</h1>
                    <hr/>
                    <div className="card-show-content">
                        <span><i className="far fa-clock"></i>{this.props.card.dueDate}</span>
                        <p><i className="fas fa-align-justify"></i>{this.props.card.description}</p>
                    </div>
                </div>
                <div className="card-show-buttons">
                    <a onClick={() => this.props.openModalWithItem('edit-card', this.props.card)}><i className="fas fa-pencil-alt"></i></a>
                    <button onClick={this.destroyCard} className="delete-card">
                        <i className="fas fa-trash-alt"></i>
                    </button>
                </div>
            </div>
        )
    }
};

export default CardShow;