import React from 'react';
import CardForm from './card_form';

class EditCardForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.card
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.fetchCard(this.props.card.id)
    }

    handleSubmit() {
      this.props.action(this.state)
            .then(this.props.closeModal)
            .then( () => this.props.fetchCards(this.props.card.listId))
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
                <div className="errors-create-card">
                    {this.renderErrors()}
                </div>
                <div className="create-card-form">
                    <form onSubmit={this.handleSubmit}>
                        <label><span>*</span>Title:
                                <input className="form-card-title"
                                type="text" value={this.state.title}
                                onChange={this.onChange('title')}
                            />
                        </label>
                        <label>Description:
                                <textarea className="form-card-description"
                                rows="4" cols="30"
                                value={this.state.description}
                                onChange={this.onChange('description')}
                            />
                        </label>
                        <label>Due Date:
                                <input className="form-card-date"
                                type="date" value={this.state.dueDate}
                                onChange={this.onChange('due_date')}
                            />
                        </label>
                        <span>fields marked with * are required</span>
                        <input className="submit-new-card" type="submit" value={this.props.formType} />
                    </form>
                </div>
            </div>
        )
    }

};

export default EditCardForm;