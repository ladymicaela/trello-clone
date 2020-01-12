import React from 'react';

class ListForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.list;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        this.props.action(this.state)
            .then(this.props.closeModal)
            // .then(this.props.fetchLists);
    }

    onChange(field) {
        return (e) => {
            this.setState(
                {[field]: e.target.value}
            )
        }
    }

    renderErrors() {
        if (!this.props.errors) return null
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
            <div className="create-list-form-container">
                <h1>{this.props.formType}</h1>
                <hr />
                <br />
                <div className="errors-create-list">
                    {this.renderErrors()}
                </div>
                <div className="create-list-form">
                    <form onSubmit={this.handleSubmit}>
                        <label>Title:
                            <input className="form-list-title"
                                type="text" value={this.state.title}
                                onChange={this.onChange('title')}
                            />
                        </label>
                        <input className="submit-new-list" type="submit" value={this.props.formType} />
                    </form>
                </div>
            </div>
        )
    }


};

export default ListForm;