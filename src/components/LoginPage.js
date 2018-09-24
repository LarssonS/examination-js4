import React from 'react';
import { connect } from 'react-redux';
import { startLogin, startOnLogin, startOnSubmit } from '../actions/auth';

export class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        
        this.showRegisterForm = this.showRegisterForm.bind(this);
        this.showLoginForm = this.showLoginForm.bind(this);

        this.state = {
            register: false,
            login: false
        };
    }
    startLogin = () => {
        this.props.startLogin();
    }
    showRegisterForm = () => {
        if (this.state.register === false) {
            this.setState(() => ({
                register: true,
                login: false
            }));
        } else {
            this.setState(() => ({
                register: false
            }));
        }
    }
    showLoginForm = () => {
        if (this.state.login === false) {
            this.setState(() => ({
                register: false,
                login: true
            }));
        } else {
            this.setState(() => ({
                login: false
            }));
        }
    }
    onRegister = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        startOnSubmit(email, password);
    }
    onLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        startOnLogin(email, password);
    }
    render() {
        return (
            <div>
                <div className="box-layout">
                    <div className="box-layout__box">
                        <h1 className="box-layout__title">MovieHub</h1>
                        <p>Tag line for app.</p>
                        <button onClick={this.showRegisterForm}>Register</button>
                        <button onClick={this.showLoginForm}>Login</button>
                        {this.state.register && <form onSubmit={this.onRegister}>
                            <div>
                                <input type="text" name="email" placeholder="Your email" />
                                <input type="password" name="password" placeholder="Your password" />
                            </div>
                            <input type="submit" value="Register" className="button" />
                        </form>}

                        {this.state.login && <form onSubmit={this.onLogin}>
                            <div>
                                <input type="text" name="email" placeholder="Your email" />
                                <input type="password" name="password" placeholder="Your password" />
                            </div>
                            <input type="submit" value="Login" className="button" />
                        </form>}
                        <button className="button" onClick={this.startLogin}>Login with Google</button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
