import React from 'react';
import { withRouter } from 'react-router-dom';

class DestroyBoard extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.board
        this.destroyBoard = this.destroyBoard.bind(this)
    }


    destroyBoard() {
        this.props.destroyBoard(this.state.id)
            .then(this.props.closeModal)
            .then(() => this.props.history.push(`/boards`));
    }

    render() {
        return  (
            <div>
                <h1>Are you sure you wish to delete this board?</h1>
                <p>all lists and cards will be lost</p>
                <button onClick={this.destroyBoard}>
                    <i className="fas fa-trash-alt"></i>
                </button>
            </div>
        )
    }
};

export default withRouter(DestroyBoard);
