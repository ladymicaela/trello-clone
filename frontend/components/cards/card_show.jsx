import React from 'react';

class CardShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchCard(this.props.card.id)
    }

    render() {
        if (!this.props.card) return null

        return (
            <div>
                <h1>{this.props.card.title}</h1>
                <span>{this.props.card.dueDate}</span>
                <p>{this.props.card.description}</p>
            </div>
        )
    }
};

export default CardShow;