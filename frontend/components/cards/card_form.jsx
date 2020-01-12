import React from 'react';

class CardForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.card
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit() {
        this.props.action(this.state)
            .then(this.props.closeModal)
    }

    onChange(field) {
        return (e) => {
            this.setState(
                { [field]: e.target.value }
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
            <div className="create-card-form-container">
                <h1>{this.props.formType}</h1>
                <hr />
                <br />
                <div className="errors-create-card">
                    {this.renderErrors()}
                </div>
                <div className="create-card-form">
                    <form onSubmit={this.handleSubmit}>
                        <label>Title:
                            <input className="form-card-title"
                                type="text" value={this.state.title}
                                onChange={this.onChange('title')}
                            />
                        </label>
                        <input className="submit-new-card" type="submit" value={this.props.formType} />
                    </form>
                </div>
            </div>
        )
    }
};

export default CardForm;