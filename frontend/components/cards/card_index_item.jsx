import React from 'react';

class CardIndexItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.card
    }

    render() {
        
        if (!this.props.card) return null

        return(
            <div>
                <a onClick={() => this.props.openModalWithItem('edit-card', this.state)}>{this.state.title}</a>
            </div>
        )
    }
};

export default CardIndexItem;