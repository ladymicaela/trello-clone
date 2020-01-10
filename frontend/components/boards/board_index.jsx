import React from 'react';

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
                <h2>Personal Boards</h2>
                <div className="board-index-container">

                        {
                            this.props.boards.map( board => 
                                <BoardIndexItem board={board} key={board.id}/>
                                )
                        }

                </div>
            </div>
        )
    }


};

export default BoardIndex;