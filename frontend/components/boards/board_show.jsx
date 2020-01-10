import React from 'react';

class BoardShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchBoard(this.props.match.params.boardId)
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
                        <button onClick={ () => this.props.destroyBoard(this.state)}>
                            <i className="fas fa-trash-alt"></i>
                        </button>
                </div>
                {/* render list index component */}
            </div>
        )
    }


};

export default BoardShow;