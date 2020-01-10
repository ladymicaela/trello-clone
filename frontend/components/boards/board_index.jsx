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
            <div>
                <ul>
                    {
                        this.props.boards.map( board => 
                            <BoardIndexItem board={board} key={board.id}/>
                            )
                    }
                </ul>
            </div>
        )
    }


};

export default BoardIndex;