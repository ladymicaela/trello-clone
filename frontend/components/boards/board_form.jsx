import React from 'react';

class BoardFrom extends React.Component {
    constructor(props) {
        super(props)
        this.state=this.props.board;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        this.props.action(this.state)
            .then(this.props.closeModal)
    }

    onChange(field) {
        return (e) => {
            this.setState(
                {[field]: e.target.value}
            )
        }
    }

    render() {
        return (
            <div className="create-board-form-container">
                <h1>{this.props.formType}</h1>
                <hr/>
                <div className="create-board-form">
                    <form onSubmit={this.handleSubmit}>
                        <label>Title:
                            <input className="form-board-title" type="text" value={this.state.title} onChange={this.onChange('title')} />
                        </label>
                        <input className="submit-new-board" type="submit" value={this.props.formType} />
                    </form>
                </div>
            </div>
        )
    }
}

export default BoardFrom;