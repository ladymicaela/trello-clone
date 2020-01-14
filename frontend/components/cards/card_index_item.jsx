import React from 'react';

class CardIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }



    render() {
        
        if (!this.props.card) return null

        return(
            <div className="card-index-item">
                <a onClick={() => this.props.openModalWithItem('show-card', this.props.card)}>{this.props.card.title}</a>
            </div>
        )
    }
};

export default CardIndexItem;