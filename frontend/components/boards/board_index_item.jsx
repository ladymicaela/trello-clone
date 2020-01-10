import React from 'react';
import { Link } from 'react-router-dom';

const BoardIndexItem = props => {
    return (
        <div className="board-index-item">
            <Link to={`/boards/${props.board.id}`}>{props.board.title}</Link>
        </div>
    )
};

export default BoardIndexItem;