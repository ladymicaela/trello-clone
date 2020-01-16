import React from 'react';
import { withRouter } from 'react-router-dom';
import ListIndexContainer from '../lists/list_index_container';


class BoardShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.board
        this.destroyBoard = this.destroyBoard.bind(this)
    }

    componentDidMount() {
        this.props.fetchBoard(this.props.match.params.boardId)
    }

    destroyBoard() {
        this.props.destroyBoard(this.state.id)
            .then(() => this.props.history.push(`/boards`));
    }

    render() {

        let icons = [
            "fab fa-rebel",
            "fab fa-empire"
        ]

        if (!this.props.board) return null
        if (!this.props.members) return null

        return (
            <div className="board-show">

                <div className="board-show-header">
                    <h1>{this.props.board.title}</h1>
                        <ul className="board-member-list">
                            {
                                this.props.members.map( (member,idx) => 
                                    <li className="board-member-list-item" 
                                        key={member.id}>
                                        <i className={icons[idx % 2]}></i>
                                        <span className="member-name">{member.username}</span>
                                    </li>
                                )
                            }
                        </ul>
                    <button onClick={this.destroyBoard}>
                        <i className="fas fa-trash-alt"></i>
                    </button>
                    {/* <a onClick={() => this.props.openModalWithItem('destroy-board', this.state)}><i className="fas fa-trash-alt"></i></a> */}
                </div>        
                <div>
                    <ListIndexContainer boardId={this.props.board.id}/>
                </div>
                
            </div>
        )
    }


};

export default withRouter(BoardShow);