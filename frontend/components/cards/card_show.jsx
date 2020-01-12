import React from 'react';

class CardShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.card
    }

    componentDidMount() {
        this.props.fetchCard(this.props.match.params.cardId)
    }

    render() {
        if (!this.props.card) return null

        return (
            <div>
                <h1>{this.state.title}</h1>
                <span>{this.state.due_date}</span>
                <p>{this.state.description}</p>
            </div>
        )
    }
};

export default CardShow;