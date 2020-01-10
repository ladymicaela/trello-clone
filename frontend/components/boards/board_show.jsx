import React from 'react';

class BoardShow extends React.Component {
    constructor(props) {
        super(props)
    }


    componentDidMount() {
        this.props.fetchBoard(this.props.match.params.boardId)
    }

    render() {

        if (!this.props.board) return null
        if (!this.props.members) return null

        return (
            <div>
                <h1>{this.props.board.title}</h1>
                <ul>
                    {
                        this.props.members.map( member => 
                            <li key={member.id}>{member.username}</li>
                        )
                    }
                </ul>
                <button onClick={ () => this.props.destroyBoard(this.props.board.id)}>
                    <i className="fas fa-trash-alt"></i>
                </button>
            </div>
        )
    }


};

export default BoardShow;