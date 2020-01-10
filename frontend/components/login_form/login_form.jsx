import React from 'react';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrello } from '@fortawesome/free-brands-svg-icons'

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.loginDemo = this.loginDemo.bind(this);
        this.submitDemo = this.submitDemo.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.action(user)
            .then(this.props.closeModal)
            .then(() => this.props.history.push('/boards'));
    }

    loginDemo(e) {
        let demoUser = {
            email: "DinDjarin@mandalorian.com",
            password: "password"
        }
        this.setState(demoUser);
        
        e.preventDefault();
        
        let emailInput = document.getElementById('email-input');
        let passwordInput = document.getElementById('password-input');
        
        setTimeout(this.submitDemo.bind(this), 3500, demoUser);
        
        emailInput.classList.add('typewriter');
        passwordInput.classList.add('typewriter');
    }

    submitDemo(demoUser) {
        this.props.action(demoUser)
            .then(this.props.closeModal)
            .then(() => this.props.history.push('/boards'));
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
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    <div className="login-form-box-header">
                        <FontAwesomeIcon icon={faTrello} className="logo-alt" />
                        <h3>R2DToDo</h3>
                    </div>
                    <hr />
                    <br />
                    <div className="errors-login">
                        {this.renderErrors()}
                    </div>
                    <div className="login-form">
                        <br />
                            <input type="text"
                                value={this.state.email}
                                placeholder="email"
                                onChange={this.update('email')}
                                className="login-email"
                                id="email-input"
                            />
                        <br />
                            <input type="password"
                                value={this.state.password}
                                placeholder="password"
                                onChange={this.update('password')}
                                className="login-password"
                                id="password-input"
                            />
                            <br />
                            <div>
                                <input className="login-submit" type="submit" value={this.props.formType} />
                                <input className="demo-login" onClick={this.loginDemo} type="submit" value="demo"/>
                            </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(LoginForm);