import React from 'react';

class CardIndexItem extends React.Component {
    constructor(props) {
        super(props)
        this.openShow = this.openShow.bind(this)
    }

    openShow() {
        this.props.openModalWithItem('show-card', this.props.card)
            .then(this.props.history.push(`/boards/${this.props.boardId}/cards/${this.props.card.id}`))
    }

    render() {

        let description;
        let dueDate;

        if (this.props.card.description) {
            description = "fas fa-align-justify"
        }

        if (this.props.card.dueDate) {
            dueDate = "far fa-clock"
        }
        
        if (!this.props.card) return null

        return(
            <div className="card-index-item">
                <a onClick={() => this.props.openModalWithItem('show-card', this.props.card)}>{this.props.card.title}
                {/* <a onClick={this.openShow}>{this.props.card.title}</a> */}
                    <div className="card-alert-icons">
                        <i className={description}></i>
                        <i className={dueDate}></i>
                    </div>
                </a>
            </div>
        )
    }
};

export default CardIndexItem;