import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrello } from '@fortawesome/free-brands-svg-icons'


class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            email: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.action(user).then(this.props.closeModal);
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
            <div className="signup-form-container">
                <form onSubmit={this.handleSubmit} className="signup-form-box">
                    <div className="login-form-box-header">
                        <FontAwesomeIcon icon={faTrello} className="logo-alt" />
                        <h3>R2DToDo</h3>
                    </div>
                    <hr/>
                    <br/>
                    <div className="errors-signup">
                        {this.renderErrors()}
                    </div>
                    <div className="signup-form">
                        <br />
                            <input type="text"
                                value={this.state.username}
                                placeholder="username"
                                onChange={this.update('username')}
                                className="signup-username"
                            />
                        <br />
                            <input type="email"
                                value={this.state.email}
                                placeholder="email"
                                onChange={this.update('email')}
                                className="signup-email"
                            />
                        <br />
                            <input type="password"
                                value={this.state.password}
                                placeholder="password"
                                onChange={this.update('password')}
                                className="signup-password"
                            />
                        <br />
                        <input className="signup-submit" type="submit" value={this.props.formType} />
                    </div>
                </form>
            </div>
        );
    }
}

export default SessionForm;