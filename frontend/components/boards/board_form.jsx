import React from 'react';
import { withRouter } from 'react-router-dom';


class BoardForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.board;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        this.props.action(this.state)
            .then(result => this.props.history.push(`/boards/${result.id}`))
            .then(this.props.closeModal);
    }
 
    onChange(field) {
        return (e) => {
            this.setState(
                {[field]: e.target.value}
            )
        }
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div className="create-board-form-container">
                <h1>{this.props.formType}</h1>
                <hr/>
                <br />
                <div className="errors-create-board">
                    {this.renderErrors()}
                </div>
                <div className="create-board-form">
                    <form onSubmit={this.handleSubmit}>
                        <label>Title:
                            <input className="form-board-title"
                                type="text" value={this.state.title} 
                                onChange={this.onChange('title')}
                            />
                        </label>
                        <input className="submit-new-board" type="submit" value={this.props.formType} />
                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter(BoardForm);