import React from 'react';
import { Link } from 'react-router-dom';

import BoardIndexItem from './board_index_item';

class BoardIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchBoards();
    }

    render() {
        if (!this.props.boards) return null
        return (
            <div className="board-index">
                <div className="board-index-header">
                    <i className="fas fa-user"></i>
                    <h2>Personal Boards</h2>
                </div>
                <div className="board-index-container">

                        {
                            this.props.boards.map( board => 
                                <BoardIndexItem board={board} key={board.id}/>
                                )
                        }
                    <div className="create-board-index-item">
                        <a onClick={() => this.props.openModal('create-board')}>create new board<i className="fas fa-plus"></i></a>
                    </div>
                </div>
            </div>
        )
    }


};

export default BoardIndex;